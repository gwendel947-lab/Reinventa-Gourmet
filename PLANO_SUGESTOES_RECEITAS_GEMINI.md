# Plano: sugestões de receitas por inventário com Gemini

## 1. Objetivo e experiência

Implementar na página `/tool` duas opções usando o mesmo inventário e preferências:

- **Buscar receitas:** opção padrão, consultando receitas do banco e ordenando pela compatibilidade.
- **Criar com IA:** ação explícita do usuário, gerando uma receita com Gemini.

Por padrão, usar apenas os ingredientes selecionados. O usuário poderá ativar **“Permitir ingredientes faltantes”**, que deverão aparecer identificados no resultado.

Manter a identidade visual atual. A primeira versão exigirá login, gerará somente texto e não chamará a IA automaticamente quando a busca estiver vazia.

## 2. Implementação em etapas

### Etapa 1 — Preparar inventário e preferências

- Trocar a lista de nomes por itens estruturados com ID, nome, quantidade e unidade.
- Adicionar autocomplete de ingredientes e edição de quantidade/unidade, aproveitando o cadastro e atualização já existentes no backend.
- Separar seleção para a refeição de exclusão do inventário.
- Usar campos separados de ingrediente, quantidade e unidade também no cadastro e edição de receitas.
- Carregar dieta e restrições no login e em `/users/me`; persistir alterações pelo `PUT /users/me`.
- Corrigir o fluxo de autenticação: entrar na conta deve carregar o inventário antes de permitir buscar ou gerar receitas.

**Dados existentes:** preparar uma revisão dos ingredientes cadastrados como frases, por exemplo “3 fatias de queijo”. Não converter nem unir registros automaticamente quando houver ambiguidade.

Para filtros alimentares, acrescentar ao catálogo informações revisadas sobre compatibilidade com as dietas e restrições já oferecidas. Ingredientes sem classificação terão estado “não verificado”; receitas que dependam deles não serão apresentadas como compatíveis com uma restrição ativa.

### Etapa 2 — Busca por compatibilidade

Criar `POST /receitas/sugestoes`, autenticado, recebendo:

- IDs dos ingredientes selecionados;
- tempo máximo opcional;
- número de porções;
- opção de permitir faltantes.

O backend consultará o inventário e as preferências do usuário autenticado. A busca considerará receitas públicas e receitas privadas do próprio usuário.

**Regras:**

- Aplicar dieta, restrições e tempo máximo antes da ordenação.
- Calcular compatibilidade pela proporção dos ingredientes obrigatórios presentes.
- Ordenar por maior compatibilidade, menos ingredientes faltantes e menor tempo de preparo.
- Desconsiderar ingredientes opcionais na pontuação.
- Retornar até dez receitas, com pontuação, ingredientes presentes, faltantes e situação das quantidades.
- Ajustar quantidades proporcionalmente às porções solicitadas.

Comparar quantidades na mesma unidade e permitir conversões simples entre `kg/g` e `l/ml`. Não presumir equivalência entre massa, volume e unidades. No modo “apenas disponíveis”, excluir resultados com quantidade insuficiente ou impossível de confirmar; no modo flexível, indicar a necessidade de complemento ou conferência.

### Etapa 3 — Integração com Gemini

Criar `POST /receitas/gerar`, autenticado, com os mesmos filtros da busca.

- Integrar o SDK `@google/genai` somente no backend.
- Usar `gemini-2.5-flash-lite` como modelo inicial configurável, listado com entrada e saída gratuitas na documentação consultada. Reconfirmar disponibilidade ao ativar o projeto. [Preços oficiais](https://ai.google.dev/gemini-api/docs/pricing)
- Solicitar uma receita em português por chamada, em JSON estruturado: título, ingredientes, quantidades, unidades, passos, tempo e porções. [Saída estruturada](https://ai.google.dev/gemini-api/docs/structured-output)
- Enviar apenas ingredientes, quantidades e preferências necessárias; não enviar nome, e-mail, token ou identificação da conta.
- Tratar nomes de ingredientes como dados e validar a resposta no servidor antes de exibi-la.
- Conferir ingredientes, restrições e quantidades usando as mesmas regras da busca. A declaração do modelo não será suficiente para marcar uma receita como compatível.
- No modo flexível, permitir até três ingredientes adicionais do catálogo classificado; no modo restrito, rejeitar ingredientes adicionais.
- Não pressupor que sal, óleo ou outros itens básicos estejam disponíveis.
- Se não houver uma combinação válida, retornar um estado explicativo, sem inventar resultado.

**Controle de uso:**

- Uma geração simultânea por usuário.
- Intervalo inicial de 30 segundos entre novas gerações.
- Limite inicial de cinco chamadas por usuário por dia, registrado no banco.
- Reutilizar por 15 minutos uma resposta válida para a mesma combinação de usuário, inventário, filtros e modelo.
- Timeout de 30 segundos, sem repetição automática.
- Tratar cota excedida, indisponibilidade, bloqueio e resposta inválida separadamente.
- Se o Gemini falhar, manter a busca no banco disponível e oferecer um botão para utilizá-la.

Esses limites são controles da plataforma, não a cota garantida pelo Google. Os limites reais variam por projeto e modelo e devem ser consultados no AI Studio. [Limites oficiais](https://ai.google.dev/gemini-api/docs/rate-limits)

### Etapa 4 — Resultados e persistência

- Separar `RecipeTool` em componentes de inventário, filtros, resultados e autenticação, com serviços próprios para as chamadas.
- Reaproveitar o modal de detalhes e padronizar os tipos de receita usados pela ferramenta, comunidade e perfil.
- Exibir origem da receita, tempo, porções e ingredientes disponíveis/faltantes.
- Identificar resultados gerados como “Criada com IA”.
- Implementar estados de carregamento, inventário vazio, nenhum resultado, erro e limite de uso.
- Usar layout empilhado no celular; restringir o painel fixo de inventário às telas maiores.
- Invalidar resultados quando inventário ou filtros mudarem.

Receitas geradas serão rascunhos até o usuário clicar em **Salvar receita**. O servidor armazenará o rascunho validado por 24 horas e permitirá salvá-lo por ID, de forma idempotente, como receita privada com `geradaPorIA=true`.

Favoritos terão persistência no banco com relação única entre usuário e receita. Favoritos locais com IDs válidos poderão ser importados; receitas simuladas com IDs artificiais não serão importadas automaticamente. Publicação continuará sendo uma ação separada.

## 3. Interfaces e alterações no banco

| Interface | Finalidade |
|---|---|
| `POST /receitas/sugestoes` | Buscar e ordenar receitas compatíveis |
| `POST /receitas/gerar` | Gerar e devolver um rascunho validado |
| `POST /receitas/geracoes/:id/salvar` | Salvar o rascunho como receita privada |
| `GET /users/me` e resposta de login | Incluir perfil alimentar |
| `PUT /users/me` | Persistir dieta e restrições |
| `GET /favoritos` | Listar favoritos da conta |
| `PUT /favoritos/:receitaId` | Favoritar sem duplicação |
| `DELETE /favoritos/:receitaId` | Remover favorito |

Registrar as rotas específicas de receitas antes da rota `/:id`.

Criar migrations para classificação alimentar dos ingredientes, favoritos e registro de gerações/uso. Reaproveitar inventário, perfil alimentar e o campo `geradaPorIA` existentes. A identidade e a propriedade dos dados serão determinadas pelo token, não por um `usuarioId` enviado pelo frontend.

## 4. Configurações a fazer depois

**Estas configurações serão necessárias na implementação e ativação; nenhuma chave precisa ser criada agora.**

1. Criar ou selecionar um projeto no Google AI Studio, confirmar que está no **Free Tier** e criar uma chave da Gemini API. [Configuração da chave](https://ai.google.dev/gemini-api/docs/api-key)
2. Manter o projeto sem migração para um plano pago. Não implementar troca automática para modelos ou serviços pagos.
3. Configurar no backend:

   ```dotenv
   GEMINI_ENABLED=false
   GEMINI_API_KEY=
   GEMINI_MODEL=gemini-2.5-flash-lite
   GEMINI_TIMEOUT_MS=30000
   AI_USER_DAILY_LIMIT=5
   AI_COOLDOWN_SECONDS=30
   AI_CACHE_TTL_SECONDS=900
   ```

4. Preencher a chave somente no ambiente do servidor; documentar as variáveis em `.env.example` sem valores secretos. Nunca usar prefixo `VITE_` para a chave.
5. Configurar `DATABASE_URL`, um `JWT_SECRET` próprio e a origem permitida pelo CORS.
6. Substituir a URL fixa do frontend por `VITE_API_BASE_URL`, apontando para a API de cada ambiente.
7. Executar as migrations, gerar o cliente Prisma e carregar um catálogo inicial revisado de ingredientes e receitas para demonstração.
8. Conferir as cotas efetivas do modelo no AI Studio e ajustar os limites internos antes de habilitar `GEMINI_ENABLED=true`.
9. Informar no fluxo de geração que ingredientes e preferências serão enviados ao Google. O tier gratuito prevê uso de conteúdo para melhoria dos produtos; evitar dados pessoais e textos clínicos livres. [Condições indicadas na tabela de preços](https://ai.google.dev/gemini-api/docs/pricing)

Sem configuração válida, a aplicação deve continuar funcionando com busca no banco e apresentar a geração como indisponível.

## 5. Validação e entrega

**Testes automatizados:**

- Ranking com compatibilidade total, parcial, ingredientes opcionais e nenhum resultado.
- Restrições alimentares, classificação desconhecida e receitas privadas de outra conta.
- Ajuste de porções, quantidade insuficiente e unidades incompatíveis.
- Gemini simulado: sucesso, JSON inválido, ingrediente indevido, timeout e erro de cota.
- Limite diário, chamadas simultâneas, cache e invalidação quando o inventário muda.
- Salvamento idempotente de rascunhos e favoritos persistentes.

**Validação manual:**

- Criar conta, cadastrar inventário, selecionar ingredientes e buscar receitas.
- Alterar preferências e verificar sua persistência após novo login.
- Gerar uma receita real com Gemini, salvar e abri-la no perfil.
- Verificar o comportamento sem chave e com IA desativada.
- Conferir a interface em celular e desktop e executar o build do frontend.

Entregar em ordem: **dados e preferências → busca no banco → Gemini → salvamento e acabamento**. Registrar duração, modelo, consumo informado pelo provedor e erros das chamadas, sem registrar chave ou conteúdo completo enviado.

Premissas da primeira versão: uso inicial de pequeno porte, uma instância do backend, sem geração de imagens, busca na web, conversão nutricional ou baixa automática do inventário.
