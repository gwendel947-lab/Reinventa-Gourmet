# 📊 Relatório de Análise do Projeto

## 1. 🏗️ Identificação e visão geral

- **Nome do projeto:** Reinventa Gourmet / TCC - Reinventa
- **Objetivo identificado:** transformar ingredientes disponíveis em casa em sugestões de receitas, com proposta de uso de Inteligência Artificial.
- **Problema que o sistema pretende resolver:** desperdício e dificuldade de decidir receitas a partir de ingredientes disponíveis, especialmente itens esquecidos na geladeira.
- **Funcionalidades do MVP descritas:**
  - cadastro/login de usuário;
  - perfil alimentar e restrições;
  - inventário de ingredientes;
  - geração de receitas;
  - salvamento de receitas;
  - comunidade/feed de postagens;
  - compartilhamento de receitas.
- **Tecnologias principais:**
  - Node.js
  - Express
  - Prisma ORM
  - MySQL/MariaDB
  - React
  - Vite
  - Tailwind CSS
- **Linguagens utilizadas:**
  - JavaScript
  - TypeScript/TSX
  - SQL
  - CSS

### Evidências consultadas

- `frontend/README.md` — identifica o projeto como "TCC - Reinventa" e referencia design no Figma.
- `frontend/src/app/components/LandingPage.tsx` — apresenta o nome "REINVENTA GOURMET" e descreve a proposta de transformar ingredientes em receitas com IA.
- `backend/package.json` — backend Node.js com Express, Prisma, bcrypt, cors, dotenv e jsonwebtoken.
- `backend/prisma/schema.prisma` — modelagem de usuários, perfil alimentar, ingredientes, inventário, receitas e postagens.
- `frontend/package.json` — frontend React com Vite, Tailwind CSS, React Router e bibliotecas de UI.
- `frontend/src/app/routes.tsx` — rotas de tela para início, ferramenta, comunidade e perfil.

## 2. 📂 Organização do repositório

```text
Reinventa-Gourmet/
├── backend/
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── prisma.config.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │       ├── 20260528152010_init/
│   │       ├── 20260618152245_init/
│   │       └── migration_lock.toml
│   └── src/
│       ├── app.js
│       ├── server.js
│       ├── config/
│       │   └── prisma.js
│       ├── controllers/
│       │   └── user.controller.js
│       └── middlewares/
│           └── auth.middleware.js
├── frontend/
│   ├── README.md
│   ├── package.json
│   ├── vite.config.ts
│   ├── postcss.config.mjs
│   ├── index.html
│   ├── guidelines/
│   └── src/
│       ├── main.tsx
│       ├── styles/
│       ├── imports/
│       └── app/
│           ├── App.tsx
│           ├── routes.tsx
│           ├── contexts/
│           └── components/
└── PROMPT_ANALISE_REPOSITORIO_AV2_PIS.md
```

### Responsabilidade das pastas

- `backend` — aplicação Node.js/Express, configuração do Prisma e modelagem/migrations do banco.
- `backend/src` — arquivos de inicialização, configuração, controller e middleware.
- `backend/prisma` — schema Prisma e migrations SQL.
- `frontend` — aplicação React/Vite.
- `frontend/src/app` — rotas, contexto de autenticação e componentes principais da interface.
- `frontend/src/styles` — arquivos CSS e importação do Tailwind.
- `frontend/src/app/components/ui` — componentes de UI reutilizáveis.

### Análise da organização

- Separação entre frontend e backend: **adequada**, pois há pastas distintas para cada camada.
- Nomes de pastas e arquivos: **parcialmente adequados**. A estrutura geral é clara, mas o backend referencia `userRoutes` sem arquivo de rotas correspondente identificado.
- Arquivos de configuração: há `package.json`, `.gitignore`, `prisma.config.ts`, `schema.prisma`, `vite.config.ts` e `postcss.config.mjs`. O `.env` existe no backend, mas seu conteúdo não foi exposto.
- Organização mínima do projeto: **parcialmente atendida**. A divisão base existe, mas o backend está incompleto no encadeamento de rotas e o frontend não possui configuração de cliente HTTP ou API.

## 3. 📘 README e documentação inicial

**Localização:** `frontend/README.md`

| Item esperado | Situação | Evidência |
|---|---|---|
| Nome do projeto | Parcial | `frontend/README.md` informa "TCC - Reinventa"; `frontend/src/app/components/LandingPage.tsx` informa "REINVENTA GOURMET". |
| Problema que o sistema resolve | Parcial | `frontend/src/app/components/LandingPage.tsx` menciona ingredientes esquecidos e receitas com IA; o README não detalha o problema. |
| Objetivo do projeto | Parcial | `frontend/src/app/components/LandingPage.tsx` descreve transformar ingredientes em receitas; o README não apresenta objetivo formal. |
| Funcionalidades do MVP | Não atende | Não há lista de MVP no README. |
| Tecnologias utilizadas | Parcial | Dependências em `frontend/package.json` e `backend/package.json`; o README não documenta a stack. |
| Instruções para execução local | Parcial | `frontend/README.md` contém `npm i` e `npm run dev`, apenas para o frontend. |
| Divisão entre frontend, backend e banco | Não atende | Não há documentação explicando as camadas. |

### Histórico de commits e participação

- Histórico disponível para análise: **Sim**
- Participação dos integrantes identificável: **Parcial**
- Evidências: `git log --oneline --decorate --all --max-count=20` mostra commits como `Primeiro commit`, `enviando backend`, `atualiza dependências e implementa registro de usuário`, `reconfigurando banco de dadoss` e merges. O log consultado não foi suficiente para atribuir tarefas individuais com segurança.

> Não foi atribuída autoria individual, pois a análise disponível não comprova divisão de tarefas por integrante.

### Professor como colaborador

**Situação:** NÃO VERIFICÁVEL PELO REPOSITÓRIO

## 4. ⚙️ Backend

- **Localização:** `backend`
- **Linguagem:** JavaScript
- **Framework principal:** Express
- **Arquivo de inicialização:** `backend/src/server.js`
- **Servidor configurado:** Parcial

### Estrutura identificada

- `backend/src/server.js` — importa a aplicação, conecta o Prisma e inicia o servidor na porta configurada.
- `backend/src/app.js` — cria a aplicação Express, configura parsing de JSON/urlencoded, CORS e rota raiz.
- `backend/src/config/prisma.js` — cria Prisma Client com adapter MariaDB usando variáveis de ambiente.
- `backend/src/controllers/user.controller.js` — contém funções `register` e `login`.
- `backend/src/middlewares/auth.middleware.js` — middleware mínimo que apenas chama `next()`.

### Organização interna

- Rotas: **não identificadas como arquivo próprio**. `backend/src/app.js` usa `app.use("/users", userRoutes)`, mas nenhum arquivo `userRoutes` ou pasta `routes` foi identificado.
- Controllers: **parcial**, com `user.controller.js`.
- Services: **não identificado**.
- Middlewares: **parcial**, com `auth.middleware.js` sem validação real.
- Configuração do banco: **identificada** em `backend/src/config/prisma.js` e `backend/prisma.config.ts`.
- Validações: **parciais**, apenas validação de campos obrigatórios no registro.
- Tratamento de erros: **parcial**, com `try/catch` no registro e handler 404 em `app.js`.

### Funcionalidades implementadas

- Resposta raiz da API — Evidência: `backend/src/app.js`, rota `GET /` retorna JSON com mensagem de API funcionando.
- Cadastro de usuário em controller — Evidência: `backend/src/controllers/user.controller.js`, função `register` valida nome/e-mail/senha, consulta usuário existente e tenta criar novo usuário com senha criptografada.
- Login não implementado — Evidência: `backend/src/controllers/user.controller.js`, função `login` retorna mensagem informando implementação futura.

### Fluxo das requisições

```text
requisição → rota → controller/função → Prisma → banco de dados → resposta JSON
```

O fluxo não está completo. `backend/src/app.js` tenta registrar `userRoutes`, mas esse identificador não é importado nem há arquivo de rotas identificado. A rota raiz retorna JSON sem Prisma. O controller `register` contém chamadas Prisma, mas não foi comprovado que está conectado a uma rota funcional. Além disso, o controller usa `prisma.user`, enquanto o model atual no schema é `Usuario`, o que indica possível incompatibilidade com o Prisma Client gerado.

## 5. 🗄️ Banco de dados e Prisma ORM

- **Tipo de banco:** MySQL/MariaDB
- **ORM:** Prisma
- **Configuração principal:** `backend/prisma.config.ts` e `backend/src/config/prisma.js`
- **Schema Prisma:** `backend/prisma/schema.prisma`
- **Migrations:** Sim
- **Localização das migrations:** `backend/prisma/migrations`

### Models ou entidades identificadas

- `Usuario` — usuário do sistema; campos principais: `id`, `nome`, `email`, `senha`, `nivelHabilidade`, datas de criação/atualização.
- `PerfilAlimentar` — preferências alimentares do usuário; campos principais: `usuarioId`, `tipoDieta`.
- `RestricaoAlimentar` — restrições alimentares associadas a perfil.
- `Ingrediente` — ingrediente normalizado; campos principais: `nome`, `categoria`.
- `Inventario` — ingredientes disponíveis por usuário; campos principais: `usuarioId`, `ingredienteId`, `quantidade`, `unidade`.
- `Receita` — receitas criadas/salvas; campos principais: `usuarioId`, `titulo`, `modoPreparo`, `tempoEstimado`, `porcoes`, `publica`, `geradaPorIA`.
- `ReceitaIngrediente` — relação N:N entre receitas e ingredientes.
- `Postagem` — postagens da comunidade associadas a usuário e opcionalmente receita.

### Modelagem

| Elemento | Situação | Evidência |
|---|---|---|
| Models principais definidos | Atende | `backend/prisma/schema.prisma` |
| Chaves primárias | Atende | `backend/prisma/schema.prisma` |
| Chaves estrangeiras e relações | Atende | `backend/prisma/schema.prisma` e `backend/prisma/migrations/20260618152245_init/migration.sql` |
| Campos coerentes com o domínio | Atende | `backend/prisma/schema.prisma` |
| Prisma Client utilizado no backend | Parcial | `backend/src/config/prisma.js` e `backend/src/controllers/user.controller.js` |
| Operação real de banco em rota/controller | Parcial | `backend/src/controllers/user.controller.js`; operação existe no controller, mas rota funcional não foi identificada. |

### Operações Prisma encontradas

- `findMany`, `findUnique` ou equivalente: `findUnique` em `backend/src/controllers/user.controller.js`.
- `create`: `backend/src/controllers/user.controller.js`.
- `update`: NÃO IDENTIFICADO.
- `delete`: NÃO IDENTIFICADO.
- Outras operações: `$connect` e `$disconnect` em `backend/src/server.js`.

### Banco no servidor de produção

A existência de `.env`, `.env.example`, `prisma.config.ts`, adapter MariaDB e migrations indica preparação para conexão e criação do banco, mas não comprova execução em servidor de produção. O conteúdo de `.env` não foi exposto.

**Situação:** PARCIALMENTE EVIDENCIADO

## 6. 🌐 Rotas da API e arquivo do Insomnia

### Rotas encontradas no backend

| Método | Endpoint | Arquivo | Operação realizada | Usa Prisma |
|---|---|---|---|---|
| GET | `/` | `backend/src/app.js` | Retorna mensagem JSON de status da API | Não |
| Não comprovado | `/users` | `backend/src/app.js` | Referencia `userRoutes`, mas o arquivo/objeto de rotas não foi identificado | Não comprovado |

### Adequação das rotas

- Uso adequado dos métodos HTTP: **parcial**, pois apenas `GET /` está comprovada.
- Organização por funcionalidade: **não atende**, pois não há pasta/arquivo de rotas identificado.
- Clareza dos nomes: **parcial**, `/users` seria claro, mas não está comprovado como rota funcional.
- Existência de parâmetros: **NÃO IDENTIFICADO**.
- Recebimento de JSON: `backend/src/app.js` usa `express.json()`.
- Respostas em JSON: rota raiz e handler 404 retornam JSON; controller de usuário também retorna JSON.
- Relação com funcionalidades essenciais do MVP: **parcial**, pois há intenção de cadastro, mas sem rota comprovada e sem endpoints para inventário, receitas ou comunidade.

### Arquivo exportado do Insomnia

- **Arquivo encontrado:** NÃO IDENTIFICADO
- **Formato:** NÃO IDENTIFICADO
- **Rotas organizadas por funcionalidade:** Não
- **Nomes claros nas requisições:** Não
- **Exemplos de corpo JSON:** Não
- **Parâmetros e variáveis configurados:** Não
- **Compatibilidade com as rotas do backend:** Não

Não foi identificado arquivo exportado do Insomnia com requisições do projeto.

## 7. 🎨 Frontend

- **Localização:** `frontend`
- **Framework:** React
- **Linguagem:** TypeScript/TSX, com configuração JavaScript/TypeScript via Vite
- **Ferramenta de criação/build:** Vite
- **Tailwind CSS:** Configurado
- **Roteamento:** `react-router`

### Arquivos principais

- `frontend/src/main.tsx` — ponto de entrada React.
- `frontend/src/app/App.tsx` — renderiza `RouterProvider`.
- `frontend/src/app/routes.tsx` — configura layout e rotas.
- `frontend/src/app/contexts/AuthContext.tsx` — estado de usuário em `localStorage`.
- `frontend/src/styles/tailwind.css` — importa Tailwind CSS.
- `frontend/vite.config.ts` — configura plugins React e Tailwind.

### Páginas e componentes

- `LandingPage` — página inicial e apresentação da proposta.
- `RecipeTool` — inventário local, modal de login/cadastro simulado e geração de receitas mockadas.
- `CommunityFeed` — feed com postagens mockadas e criação local de post.
- `Profile` — perfil local com receitas mockadas/salvas no contexto.
- `Navbar` — navegação entre páginas.
- `components/ui` — componentes reutilizáveis de interface.

### Análise do desenvolvimento inicial

| Elemento | Situação | Evidência |
|---|---|---|
| Projeto React iniciado | Atende | `frontend/src/main.tsx`, `frontend/src/app/App.tsx`, `frontend/package.json` |
| Uso de JavaScript | Parcial | O projeto usa principalmente TypeScript/TSX; a orientação de JavaScript não é seguida literalmente. |
| Tailwind configurado ou utilizado | Atende | `frontend/vite.config.ts`, `frontend/src/styles/tailwind.css`, classes Tailwind nos componentes |
| Telas principais iniciadas | Atende | `LandingPage`, `RecipeTool`, `CommunityFeed`, `Profile` |
| Componentes organizados | Atende | `frontend/src/app/components` e `frontend/src/app/components/ui` |
| Navegação entre páginas | Atende | `frontend/src/app/routes.tsx` e `Navbar.tsx` |
| Tela conectada ou preparada para API | Não atende | Não foram identificadas chamadas `fetch`, `axios` ou cliente HTTP para backend. |

O uso de TypeScript foi registrado como divergência em relação à orientação de JavaScript, sem atribuição de bônus.

## 8. 🔗 Conexão entre frontend e backend

- **Tipo de comunicação:** NÃO IDENTIFICADO
- **Cliente HTTP:** NÃO IDENTIFICADO
- **Arquivo de configuração da API:** NÃO IDENTIFICADO
- **URL base:** NÃO IDENTIFICADO
- **Variáveis de ambiente:** `.env` no backend e `.env.example` no backend; nenhuma variável de frontend identificada.
- **CORS no backend:** Parcial. `backend/src/app.js` chama `app.use(cors())`, mas não importa `cors`, o que impede comprovar funcionamento pelo código atual.
- **Proxy no frontend:** Ausente

### Endpoints consumidos pelo frontend

| Endpoint | Método | Componente ou página | Finalidade | Compatível com o backend |
|---|---|---|---|---|
| NÃO IDENTIFICADO | NÃO IDENTIFICADO | NÃO IDENTIFICADO | NÃO IDENTIFICADO | Não |

### Fluxos comprovados

- `RecipeTool` adiciona ingredientes em estado local e gera receitas a partir de `mockRecipes`.
- `RecipeTool` simula login/cadastro e salva usuário no contexto/localStorage.
- `CommunityFeed` cria postagens em estado local.
- `Profile` exibe e edita informações do usuário no contexto/localStorage.

Não foi comprovado fluxo de tela chamando rota do backend.

### Estado da integração

**Não atende:** não há comunicação identificável entre frontend e backend. As telas funcionam com estado local, mocks e `localStorage`, sem consumo de endpoints.

## 9. ✅ O que já está implementado

### Backend

- Estrutura inicial de servidor Express em `backend/src/server.js` e `backend/src/app.js`.
- Configuração do Prisma Client com adapter MariaDB em `backend/src/config/prisma.js`.
- Controller inicial de usuário com função de registro em `backend/src/controllers/user.controller.js`.
- Rota raiz `GET /` em `backend/src/app.js`.
- Handler 404 em `backend/src/app.js`.

### Banco de dados

- Schema Prisma com entidades coerentes com o domínio do MVP.
- Migrations SQL com tabelas, chaves primárias, índices únicos e chaves estrangeiras.
- Configuração de datasource Prisma para MySQL em `backend/prisma/schema.prisma`.

### Frontend

- Aplicação React/Vite iniciada.
- Tailwind CSS configurado e utilizado nos componentes.
- Navegação entre início, ferramenta, comunidade e perfil.
- Telas visuais para proposta do produto, geração de receitas, feed de comunidade e perfil.
- Estado local de autenticação/perfil via `AuthContext` e `localStorage`.

### Integração

- Não foi identificada integração real entre frontend e backend.

## 10. 🚧 O que está incompleto ou em desenvolvimento

- Rotas de usuário não comprovadas
  - **Evidência:** `backend/src/app.js`
  - **Estado observado:** `app.use("/users", userRoutes)` referencia `userRoutes`, mas não há importação nem arquivo de rotas identificado.

- Backend com erro estrutural aparente em `app.js`
  - **Evidência:** `backend/src/app.js`
  - **Estado observado:** usa `cors()` sem importação visível no arquivo.

- Controller de usuário possivelmente incompatível com schema atual
  - **Evidência:** `backend/src/controllers/user.controller.js` e `backend/prisma/schema.prisma`
  - **Estado observado:** controller usa `prisma.user`, enquanto o schema atual define `model Usuario`.

- Login não implementado
  - **Evidência:** `backend/src/controllers/user.controller.js`
  - **Estado observado:** função `login` retorna mensagem de implementação futura.

- Funcionalidades de inventário, receitas e comunidade sem endpoints
  - **Evidência:** `backend/src` e `backend/prisma/schema.prisma`
  - **Estado observado:** models existem no banco, mas não há controllers/rotas correspondentes.

- Frontend sem consumo de API
  - **Evidência:** `frontend/src/app/components/RecipeTool.tsx`, `CommunityFeed.tsx`, `Profile.tsx`, `AuthContext.tsx`
  - **Estado observado:** dados mockados e estado local substituem chamadas ao backend.

- Arquivo Insomnia ausente
  - **Evidência:** listagem de arquivos do repositório
  - **Estado observado:** não foi identificado arquivo exportado do Insomnia.

- README insuficiente para o projeto completo
  - **Evidência:** `frontend/README.md`
  - **Estado observado:** contém apenas referência ao bundle Figma e instruções genéricas para rodar o frontend.

## 11. 📦 Dependências principais

### Backend

| Dependência | Versão | Finalidade identificada |
|---|---:|---|
| `express` | `^5.1.0` | Servidor HTTP/API |
| `@prisma/client` | `^7.8.0` | Cliente ORM |
| `@prisma/adapter-mariadb` | `^7.8.0` | Adapter MariaDB para Prisma |
| `bcrypt` | `^6.0.0` | Criptografia de senha no cadastro |
| `cors` | `^2.8.5` | CORS para API |
| `dotenv` | `^16.6.1` | Variáveis de ambiente |
| `jsonwebtoken` | `^9.0.2` | Preparação para autenticação por token |
| `nodemon` | `^3.1.0` | Desenvolvimento com recarregamento |
| `prisma` | `^7.8.0` | CLI/configuração Prisma |

### Frontend

| Dependência | Versão | Finalidade identificada |
|---|---:|---|
| `react` | `18.3.1` | Framework de UI |
| `react-dom` | `18.3.1` | Renderização React no DOM |
| `vite` | `6.3.5` | Build/dev server |
| `@vitejs/plugin-react` | `4.7.0` | Plugin React para Vite |
| `tailwindcss` | `4.1.12` | Estilização utilitária |
| `@tailwindcss/vite` | `4.1.12` | Integração Tailwind/Vite |
| `react-router` | `7.13.0` | Roteamento do frontend |
| `lucide-react` | `0.487.0` | Ícones |
| `motion` | `12.23.24` | Animações |
| `sonner` | `2.0.3` | Toasts |
| `react-responsive-masonry` | `2.7.1` | Layout masonry no feed |
| `clsx` | `2.1.1` | Composição de classes CSS |
| `@radix-ui/*` | versões diversas | Componentes base de UI |

## 12. 🧭 Arquitetura e padrões identificados

- **Arquitetura predominante:** separação simples frontend/backend, com tendência a camadas no backend.
- **Separação de responsabilidades:** parcial. O frontend está organizado por componentes, rotas e contexto. O backend separa configuração e controller, mas rotas e services não estão completos.
- **Padrões identificados:** SPA React com rotas declarativas; backend Express com app/server separados; Prisma como camada de acesso a banco; estado de autenticação local via Context API.
- **Consistência entre os módulos:** parcial. O banco possui modelagem ampla para o domínio, o frontend implementa telas relacionadas ao MVP, mas a ligação entre backend, banco e frontend ainda não está consolidada.

# 13. 📝 Avaliação conforme os critérios da AV2

## Regras de pontuação

A pontuação abaixo considera apenas evidências verificáveis no repositório. Itens dependentes de apresentação, GitHub remoto, professor como colaborador, banco em produção ou demonstração externa foram marcados como não verificáveis quando aplicável.

## Quadro avaliativo

| Critério | Valor máximo | Nota atribuída | Evidências e justificativa |
|---|---:|---:|---|
| Organização do repositório, README e professor como colaborador | 1,5 | 0,7 | Há separação `backend`/`frontend` e arquivos de configuração, mas o README está apenas em `frontend/README.md` e é insuficiente para objetivo, MVP, stack completa e execução do backend. Professor como colaborador: NÃO VERIFICÁVEL PELO REPOSITÓRIO. |
| Banco de dados criado e coerente com o MVP | 2,0 | 1,7 | `backend/prisma/schema.prisma` e migrations modelam usuários, perfis, ingredientes, inventário, receitas e postagens com relações coerentes. Criação em servidor de produção não é comprovável pelo repositório. |
| Arquivo exportado do Insomnia com as rotas organizadas | 1,5 | 0,0 | Arquivo exportado do Insomnia não identificado. |
| Backend iniciado com integração ao banco usando Prisma ORM | 2,0 | 0,8 | Express e Prisma estão configurados, e há controller com `findUnique`/`create`, mas rotas não foram identificadas, `app.js` referencia imports ausentes e há possível incompatibilidade `prisma.user` versus `model Usuario`. |
| Frontend iniciado em React, JavaScript e Tailwind | 1,5 | 1,1 | React/Vite/Tailwind estão configurados e há telas principais. O projeto usa principalmente TypeScript/TSX, e não JavaScript puro. |
| Conexão inicial entre frontend e backend | 1,0 | 0,0 | Não há `fetch`, `axios`, cliente HTTP, URL base, proxy ou consumo de endpoints. |
| Clareza na apresentação e divisão de tarefas do grupo | 0,5 | A DEFINIR | Histórico de commits existe, mas a divisão de tarefas e clareza de apresentação são NÃO VERIFICÁVEIS PELO REPOSITÓRIO. |
| **Total verificável no repositório** | **10,0** | **4,3** | Soma dos critérios comprováveis diretamente; o item de apresentação fica a definir por verificação externa. |

### Observação sobre o total

- **Pontuação obtida nos itens verificáveis:** 4,3
- **Pontos dependentes de apresentação ou verificação externa:** 0,5
- **Nota máxima que pode ser confirmada apenas pelo repositório:** 9,5

Não foi transformado automaticamente o item de apresentação/divisão de tarefas em zero; a decisão final depende da apresentação ou verificação externa pelo professor.

## 14. 📌 Síntese por critério

### 14.1 Organização do repositório e README — máximo 1,5

- **Situação:** Parcial
- **Evidências:** `backend`, `frontend`, `frontend/README.md`, `backend/package.json`, `frontend/package.json`
- **Aspectos comprovados:** separação entre frontend e backend; arquivos básicos de configuração; estrutura inicial de aplicação.
- **Aspectos ausentes:** README completo na raiz; documentação do MVP; instruções completas para backend/banco; explicação de camadas.
- **Aspectos não verificáveis:** professor como colaborador.
- **Nota sugerida:** 0,7/1,5

### 14.2 Banco de dados e coerência com o MVP — máximo 2,0

- **Situação:** Atende parcialmente
- **Evidências:** `backend/prisma/schema.prisma`, `backend/prisma/migrations/20260618152245_init/migration.sql`
- **Models/tabelas principais:** usuários, perfis alimentares, restrições, ingredientes, inventário, receitas, relação receita-ingrediente e postagens.
- **Coerência com o MVP:** alta coerência com proposta de receitas por ingredientes, perfis e comunidade.
- **Criação no servidor de produção:** Não verificável pelo repositório.
- **Nota sugerida:** 1,7/2,0

### 14.3 Insomnia e organização das rotas — máximo 1,5

- **Situação:** Não atende
- **Evidências:** listagem de arquivos do repositório
- **Organização das requisições:** NÃO IDENTIFICADO
- **Compatibilidade com o backend:** NÃO IDENTIFICADO
- **Nota sugerida:** 0,0/1,5

### 14.4 Backend com Prisma ORM — máximo 2,0

- **Situação:** Parcial
- **Evidências:** `backend/src/server.js`, `backend/src/app.js`, `backend/src/config/prisma.js`, `backend/src/controllers/user.controller.js`, `backend/prisma/schema.prisma`
- **Servidor Node.js/Express:** iniciado, mas `app.js` contém referências não resolvidas no arquivo.
- **Prisma configurado:** sim, com schema, migrations e client configurado.
- **Operação no banco:** parcial, presente em controller, mas sem rota comprovada e com possível incompatibilidade de nome do model.
- **Resposta em JSON:** sim na rota raiz, 404 e controller.
- **Nota sugerida:** 0,8/2,0

### 14.5 Frontend com React, JavaScript e Tailwind — máximo 1,5

- **Situação:** Parcial/Atende em boa parte
- **Evidências:** `frontend/package.json`, `frontend/src/main.tsx`, `frontend/src/app/routes.tsx`, `frontend/vite.config.ts`, `frontend/src/styles/tailwind.css`
- **React iniciado:** sim.
- **JavaScript:** parcial, pois a aplicação usa TypeScript/TSX.
- **Tailwind:** configurado e usado.
- **Telas e componentes:** início, ferramenta de receitas, comunidade, perfil e navbar.
- **Nota sugerida:** 1,1/1,5

### 14.6 Conexão frontend-backend — máximo 1,0

- **Situação:** Não atende
- **Evidências:** `frontend/src/app/components/RecipeTool.tsx`, `CommunityFeed.tsx`, `Profile.tsx`, `AuthContext.tsx`
- **Fluxo identificado:** somente estado local, mocks e `localStorage`.
- **Compatibilidade das rotas e dados:** não comprovada, pois endpoints não são consumidos.
- **Nota sugerida:** 0,0/1,0

### 14.7 Apresentação e divisão de tarefas — máximo 0,5

- **Situação:** Não verificável
- **Evidências no repositório:** histórico de commits disponível, mas sem documentação clara de divisão de tarefas.
- **O que precisa ser verificado na apresentação:** participação de cada integrante, demonstração das partes implementadas e explicação das decisões do grupo.
- **Nota sugerida:** A DEFINIR/0,5

## 15. 🔍 Pontos para verificação durante a apresentação

- Verificar se a API backend inicia apesar das referências a `cors` e `userRoutes` em `backend/src/app.js`.
- Verificar se existe arquivo de rotas de usuário fora da árvore analisada ou se a rota `/users` foi demonstrada de outra forma.
- Verificar se o controller de cadastro funciona com o schema Prisma atual, especialmente o uso de `prisma.user` diante do model `Usuario`.
- Verificar se as migrations foram aplicadas em banco local ou servidor.
- Verificar se o banco de produção foi criado e se as variáveis de ambiente estão configuradas corretamente, sem expor credenciais.
- Verificar se há arquivo Insomnia exportado em outro local não presente no repositório.
- Verificar se o frontend consome alguma API durante a demonstração ou se permanece usando apenas mocks/localStorage.
- Verificar como o grupo pretende relacionar as telas de inventário, receitas e comunidade com os models Prisma já criados.
- Verificar a divisão de tarefas entre integrantes, já que o repositório não comprova isso de forma suficiente.

## 16. 📋 Conclusão

O projeto possui uma estrutura inicial reconhecível, com separação entre frontend e backend, modelagem Prisma relativamente completa e frontend visualmente avançado para a proposta do Reinventa Gourmet. O banco está bem representado no schema e nas migrations, com entidades coerentes com o MVP de receitas por ingredientes, perfil alimentar e comunidade.

As partes comprovadamente mais desenvolvidas são a interface React/Vite/Tailwind e a modelagem do banco. O backend está iniciado e contém configuração Prisma, mas o fluxo de API não está completo no repositório: faltam rotas identificáveis, há referências não resolvidas em `app.js` e o controller de usuário aparenta divergência com o model Prisma atual.

O arquivo Insomnia não foi encontrado. Também não foi identificada conexão real entre frontend e backend; as telas usam dados mockados, estado local e `localStorage`. A criação do banco em servidor de produção, professor como colaborador e divisão de tarefas do grupo dependem de verificação externa.

Com base apenas nas evidências disponíveis no repositório, a nota sugerida nos itens verificáveis é **4,3/10,0**, com **0,5 ponto dependente de apresentação ou verificação externa**.
