# Plano de reorganização moderna do frontend

## Resumo

Reorganizar o frontend incrementalmente em uma arquitetura orientada a domínio, preservando o visual, as rotas, os mocks e o comportamento atual. Também será preparada uma camada Axios tipada para futura integração com o backend, sem ativar chamadas reais nesta etapa.

Estrutura-alvo:

```text
src/
├── app/
│   ├── layouts/
│   ├── providers/
│   ├── App.tsx
│   └── router.tsx
├── pages/
│   ├── home/
│   ├── community/
│   ├── profile/
│   └── recipe-generator/
├── widgets/
│   └── navbar/
├── features/
│   ├── auth/
│   ├── create-post/
│   ├── edit-profile/
│   ├── manage-ingredients/
│   ├── generate-recipe/
│   └── save-recipe/
├── entities/
│   ├── user/
│   ├── recipe/
│   ├── post/
│   └── ingredient/
├── shared/
│   ├── api/
│   ├── config/
│   ├── hooks/
│   ├── lib/
│   ├── ui/
│   ├── assets/
│   └── styles/
└── main.tsx
```

## Organização

- Manter `app` somente para inicialização, providers, roteamento e layouts.
- Transformar as quatro telas atuais em páginas de composição.
- Mover `Navbar` para `widgets`.
- Separar formulário, regra de negócio, estado e apresentação dentro de cada feature.
- Centralizar os tipos `User`, `Recipe`, `Post` e `Ingredient` em `entities`.
- Colocar mocks em `model/mocks.ts` junto ao domínio consumidor.
- Dividir autenticação em provider, hook, tipos e adaptador de persistência.
- Proteger a leitura do `localStorage` contra dados inválidos.
- Adotar dependências unidirecionais: `app → pages → widgets/features → entities → shared`.
- Expor cada módulo por um `index.ts`, sem acessar arquivos internos de outras features.
- Aplicar carregamento lazy às páginas.

## Preparação do Axios

Organizar a integração futura da seguinte forma:

```text
shared/api/
├── http-client.ts
├── api-error.ts
├── endpoints.ts
└── types.ts

features/auth/api/
├── auth.service.ts
└── auth.dto.ts

entities/ingredient/api/
├── ingredient.service.ts
└── ingredient.dto.ts

entities/inventory/api/
├── inventory.service.ts
└── inventory.dto.ts

entities/recipe/api/
├── recipe.service.ts
└── recipe.dto.ts
```

- Reaproveitar a dependência Axios já instalada.
- Substituir a URL fixa atual por `VITE_API_URL`, documentada em `.env.example`:

```env
VITE_API_URL=http://localhost:3000
```

- Criar uma única instância Axios com `baseURL`, `Content-Type` e timeout.
- Adicionar interceptor de requisição preparado para enviar `Authorization: Bearer <token>` quando existir sessão autenticada.
- Adicionar interceptor de resposta que normalize erros de rede e respostas HTTP em um tipo `ApiError`.
- Não exibir toast nem redirecionar dentro dos interceptors; essas decisões permanecerão nas features.
- Centralizar os caminhos do backend:
  - `POST /users/register`
  - `POST /users/login`
  - `/ingredientes`
  - `/inventario`
  - `/receitas`
- Criar DTOs que representem o contrato em português retornado pelo backend.
- Criar funções adaptadoras entre DTOs e modelos internos do frontend.
- Tipar parâmetros, corpo e retorno de cada service.
- Preparar funções como `register`, `login`, `listIngredients`, `listInventory`, `createRecipe` e `listRecipes`.
- Manter os services desacoplados do React e sem uso direto nesta etapa.
- Não instalar TanStack Query até as chamadas reais serem ativadas.
- Manter temporariamente uma exportação de compatibilidade para imports existentes de `services/api.ts`; removê-la após a migração completa.

## Qualidade e limpeza

- Adicionar TypeScript estrito, ESLint flat config e Prettier.
- Criar scripts `typecheck`, `lint`, `format`, `build` e `check`.
- Configurar aliases no TypeScript e Vite.
- Usar React Hook Form e Zod nos formulários de autenticação e perfil.
- Remover componentes genéricos de UI sem consumidores e dependências exclusivas deles.
- Mover apenas primitives reutilizadas para `shared/ui`.
- Remover assets, imports e dependências sem uso.
- Ignorar `dist`, caches e arquivos `.env`; manter `.env.example` versionado.

## Ordem de execução

1. Adicionar configurações de TypeScript, lint, formatação, aliases e ambiente.
2. Criar `shared/api`, incluindo instância Axios, erros, endpoints e contratos.
3. Criar `shared`, `entities`, layout e providers.
4. Migrar Home e Navbar.
5. Migrar Comunidade.
6. Migrar Perfil e autenticação.
7. Migrar o Gerador de Receitas.
8. Remover estrutura, UI, assets e dependências sem uso.
9. Ativar lazy loading e executar a validação final.

Cada etapa deve terminar com o frontend compilando e com as rotas `/`, `/tool`, `/community` e `/profile` funcionais.

## Validação e critérios de aceite

- Executar `npm run typecheck`, `npm run lint` e `npm run build`.
- Não adicionar suíte automatizada de testes nesta entrega.
- Validar manualmente navegação, autenticação simulada, logout, edição de perfil, criação de postagem, geração e salvamento de receita.
- Verificar que a instância Axios utiliza `VITE_API_URL`.
- Validar isoladamente a criação de headers e normalização de erros sem realizar requisições reais.
- Confirmar que nenhuma página contém mocks, contratos HTTP ou regras extensas.
- Confirmar que nenhuma feature importa diretamente arquivos internos de outra feature.
- Confirmar que não existem componentes ou dependências sem consumidores.

## Premissas

- A API real não será conectada nesta reorganização.
- Os mocks continuarão como fonte temporária de dados.
- O visual e os fluxos atuais serão preservados.
- O token ainda não será persistido até a autenticação real ser ativada.
- `dist` é um artefato gerado e deixará de ser versionado.
- Alterações locais preexistentes serão preservadas.
