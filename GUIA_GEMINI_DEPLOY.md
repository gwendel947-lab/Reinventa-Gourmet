# Ativar receitas com Gemini — Render, MySQL e Apache

O código está preparado para geração de texto, validação de estoque, cache, limites persistentes e salvamento privado. A ativação depende de chave, cotas e infraestrutura. Nenhuma migration ou chamada real ao Gemini é executada pelos testes padrão.

## 1. Google AI Studio

1. Crie ou selecione um projeto em https://aistudio.google.com/ e gere uma chave (https://ai.google.dev/gemini-api/docs/api-key).
2. Confirme que o projeto permanece no plano gratuito. Não configure upgrade automático nem associe faturamento para esta entrega.
3. Confira um modelo de geração de texto com saída estruturada disponível gratuitamente para seu projeto: https://ai.google.dev/gemini-api/docs/pricing e https://ai.google.dev/gemini-api/docs/structured-output. `gemini-2.5-flash-lite` no exemplo é uma sugestão histórica, não uma garantia de disponibilidade.
4. Consulte as cotas reais em https://ai.google.dev/gemini-api/docs/rate-limits. Defina limites globais inferiores às cotas exibidas, reservando margem para testes e outros consumidores do mesmo projeto. Limites de tokens também podem causar 429 mesmo sem atingir o número de chamadas.
5. Guarde a chave exclusivamente nas variáveis secretas da API no Render. Não envie ao chat nem coloque em variáveis `VITE_`.

## 2. MySQL e catálogo

Use um banco acessível a partir do Render. Libere somente os endereços necessários conforme sua hospedagem e use credenciais próprias da aplicação. Antes das migrations, faça backup do banco existente.

Configure `DATABASE_URL=mysql://USUARIO:SENHA@HOST:3306/BANCO` com caracteres especiais da senha codificados na URL. Para o servidor, use `DATABASE_SSL=true` quando o provedor exigir TLS. Se houver CA particular, disponibilize o certificado como arquivo secreto e configure `DATABASE_SSL_CA_FILE` com seu caminho. Não desative a verificação do certificado.

A configuração TLS da conexão de migrations do Prisma é separada: acrescente à `DATABASE_URL` as opções TLS exigidas pelo serviço e suportadas pelo conector MySQL do Prisma (por exemplo, certificado raiz). As opções `DATABASE_SSL*` são usadas pelo adapter do servidor, não pelo CLI.

Na pasta `backend`, com o ambiente do banco de destino configurado:

```sh
npm ci --include=dev
npm run db:generate
npm run db:deploy
npm run catalog:seed
```

A migration incremental adiciona a expiração das reservas, o índice de uso e a linha de controle global. Não recria o banco. Não use `prisma migrate reset` em produção.

O arquivo `backend/data/catalogo-inicial.json` é uma base para revisão. Por padrão os ingredientes são `NAO_VERIFICADO`; já funcionam para “Come de tudo” sem restrições. Para outras preferências, revise os ingredientes antes de classificá-los:

- `classificacaoStatus`: `VERIFICADO` somente depois da revisão.
- `dietasPermitidas`: enums separados por vírgula, como `ONIVORO,VEGETARIANO,VEGANO,PESCATARIANO`.
- `restricoes`: restrições incompatíveis separadas por vírgula (`sem gluten`, `sem lactose`). `null` significa desconhecido; string vazia significa revisado sem essas incompatibilidades.
- Classificação deve considerar a identidade concreta do produto; não alegar ausência de contaminação cruzada a partir de um nome genérico.

O seed apenas cria nomes ausentes e nunca altera registros existentes. Para revisar registros já presentes, o responsável pelo catálogo deverá atualizá-los explicitamente no banco. A primeira versão reconhece apenas Sem Glúten e Sem Lactose; outras restrições produzem mensagem explicativa. Não é uma certificação para alergias.

## 3. API no Render

Crie um Web Service Node com diretório raiz `backend` e versão Node 22.12 ou superior compatível com o lockfile.

- Build: `npm ci --include=dev && npm run db:generate`
- Pre-deploy: `npm run db:deploy`
- Start: `npm start`
- Health check: `/health`

Se seu plano não oferecer comando pre-deploy, execute a migration em um ambiente confiável antes de liberar a versão, ou use como start `npm run db:deploy && npm start`. O servidor só começa a aceitar conexões depois de conectar ao MySQL. Render fornece `PORT`.

Configure:

```dotenv
NODE_ENV=production
DATABASE_URL=mysql://USUARIO:SENHA@HOST:3306/BANCO
DATABASE_SSL=true
JWT_SECRET=SEGREDO_ALEATORIO_FORTE
CORS_ORIGINS=https://SEU-DOMINIO-APACHE
GEMINI_ENABLED=false
GEMINI_API_KEY=CHAVE_SECRETA
GEMINI_MODEL=MODELO_CONFIRMADO_NO_AI_STUDIO
GEMINI_TIMEOUT_MS=30000
AI_USER_DAILY_LIMIT=5
AI_COOLDOWN_SECONDS=30
AI_CACHE_TTL_SECONDS=900
AI_DRAFT_TTL_SECONDS=86400
AI_GLOBAL_MINUTE_LIMIT=PREENCHER_COM_INTEIRO_POSITIVO
AI_GLOBAL_DAILY_LIMIT=PREENCHER_COM_INTEIRO_POSITIVO
```

Os dois limites globais são obrigatórios para habilitar a IA. Os valores acima não são cotas prometidas pelo Google. `CORS_ORIGINS` aceita origens completas separadas por vírgula, sem barra final; inclua `www` apenas se usado. Não coloque a chave Gemini no frontend.

Os limites diários usam janela móvel de 24 horas, independente de fuso. Uma reserva consumirá tentativa mesmo se o processo cair; chamadas que falham também contam. Reservas ativas expiram após timeout mais 30 segundos. Cache é consultado antes dos limites e é privado por usuário. Não há repetição automática de chamadas.

## 4. Frontend no Apache

Na pasta `frontend`, configure `.env.production` local (não publique esse arquivo):

```dotenv
VITE_API_BASE_URL=https://SUA-API.onrender.com
```

Execute `npm ci` e `npm run build`. Publique o **conteúdo** de `frontend/dist` na pasta pública `tecti/2026/gpec11` do Apache. Inclua o arquivo oculto `.htaccess`, copiado de `frontend/public/.htaccess` pelo build. Ele requer `mod_rewrite` e permissão `AllowOverride FileInfo` para abrir diretamente `/tecti/2026/gpec11/tool`.

O Vite usa `base: "/tecti/2026/gpec11/"`, o roteador usa esse mesmo caminho e o Apache tem `RewriteBase` correspondente. Localmente, abra também `http://localhost:5173/tecti/2026/gpec11/`. O CORS continua recebendo apenas a origem (protocolo + domínio + porta), sem o caminho da subpasta.

## 5. Ativação e teste de aceite

1. Verifique login, inventário, busca no banco e `/health` com a IA ainda desativada.
2. Confira as migrations e o catálogo. Para demonstrar sem classificação alimentar, use “Come de tudo” e restrições vazias.
3. Confira modelo/cotas e altere `GEMINI_ENABLED=true` no Render; redeploy se necessário.
4. Entre na aplicação pelo domínio Apache. Adicione estoque suficiente (incluindo água, sal ou óleo se desejar usá-los), selecione ingredientes e gere uma receita.
5. Verifique ingredientes, quantidades, porções e passos. Salve e confirme que a receita aparece privada no perfil; dois cliques não podem criar duplicatas.
6. Altere os filtros ou estoque durante uma chamada: o resultado anterior não deve aparecer. Teste também “Permitir ingredientes faltantes”.
7. Teste em celular e desktop. Sem chave ou com IA desativada, a busca no banco deve continuar disponível.

Para desativar: `GEMINI_ENABLED=false`. Não é preciso reverter a migration. Monitore `receita_geracoes`: status, modelo, `consumo`, duração e código de erro; as falhas não guardam prompt nem chave. Rascunhos expirados não podem ser salvos; o registro permanece para auditoria. Uma receita já salva continua acessível após a expiração do rascunho.

## Contratos e testes

`POST /receitas/gerar` exige autenticação e recebe:

```json
{"ingredientIds":[1,2],"servings":2,"maxTime":30,"allowMissing":false,"preferencias":{"tipoDieta":"Come de tudo","restricoes":[]}}
```

`maxTime` e `preferencias` são opcionais. Sem preferências, usa o perfil salvo. Resposta: `geracao: { id, receita, reutilizada, expiraEm }`. Cada ingrediente inclui `situacao` (`disponivel`, `faltante`, `unidade_incompativel`) e estoque disponível. Quantidades correspondem ao total de porções, não a cada porção.

`GET /receitas/geracao/status` informa `disponivel`, `podeGerar` e, quando necessário, `code`, `message`, `retryAfterSeconds`. Durante cooldown o cache ainda pode ser reutilizado. `POST /receitas/geracoes/:id/salvar` retorna 201 na criação e 200 em repetição. Erros têm `code`, `message` e espera quando aplicável.

Execute `npm --prefix backend test` e `npm --prefix frontend run build`. Os testes padrão usam provedor e persistência simulados, incluindo concorrência com transações serializadas. Eles não comprovam a disponibilidade do banco ou do Gemini de produção.

Para a integração real com MySQL, use um banco dedicado cujo nome termine em `_test`, aplique as migrations nele e configure `TEST_DATABASE_URL` antes de `npm --prefix backend test`. Esse teste cria e remove somente suas próprias fixtures; não use um banco de produção. Sem essa variável, o teste de MySQL é pulado. A geração real depende da configuração manual acima e não faz parte dos testes automáticos para não consumir cota.
