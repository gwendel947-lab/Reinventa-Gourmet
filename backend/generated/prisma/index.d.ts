
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model PerfilAlimentar
 * 
 */
export type PerfilAlimentar = $Result.DefaultSelection<Prisma.$PerfilAlimentarPayload>
/**
 * Model RestricaoAlimentar
 * 
 */
export type RestricaoAlimentar = $Result.DefaultSelection<Prisma.$RestricaoAlimentarPayload>
/**
 * Model Ingrediente
 * 
 */
export type Ingrediente = $Result.DefaultSelection<Prisma.$IngredientePayload>
/**
 * Model Inventario
 * 
 */
export type Inventario = $Result.DefaultSelection<Prisma.$InventarioPayload>
/**
 * Model Receita
 * 
 */
export type Receita = $Result.DefaultSelection<Prisma.$ReceitaPayload>
/**
 * Model Favorito
 * 
 */
export type Favorito = $Result.DefaultSelection<Prisma.$FavoritoPayload>
/**
 * Model ReceitaGeracao
 * 
 */
export type ReceitaGeracao = $Result.DefaultSelection<Prisma.$ReceitaGeracaoPayload>
/**
 * Model IaControle
 *
 */
export type IaControle = $Result.DefaultSelection<Prisma.$IaControlePayload>
/**
 * Model ReceitaIngrediente
 * 
 */
export type ReceitaIngrediente = $Result.DefaultSelection<Prisma.$ReceitaIngredientePayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model Postagem
 * 
 */
export type Postagem = $Result.DefaultSelection<Prisma.$PostagemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NivelHabilidade: {
  INICIANTE: 'INICIANTE',
  INTERMEDIARIO: 'INTERMEDIARIO',
  AVANCADO: 'AVANCADO'
};

export type NivelHabilidade = (typeof NivelHabilidade)[keyof typeof NivelHabilidade]


export const TipoDieta: {
  ONIVORO: 'ONIVORO',
  VEGETARIANO: 'VEGETARIANO',
  VEGANO: 'VEGANO',
  PESCATARIANO: 'PESCATARIANO',
  CETOGENICO: 'CETOGENICO',
  OUTRO: 'OUTRO'
};

export type TipoDieta = (typeof TipoDieta)[keyof typeof TipoDieta]

}

export type NivelHabilidade = $Enums.NivelHabilidade

export const NivelHabilidade: typeof $Enums.NivelHabilidade

export type TipoDieta = $Enums.TipoDieta

export const TipoDieta: typeof $Enums.TipoDieta

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perfilAlimentar`: Exposes CRUD operations for the **PerfilAlimentar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PerfilAlimentars
    * const perfilAlimentars = await prisma.perfilAlimentar.findMany()
    * ```
    */
  get perfilAlimentar(): Prisma.PerfilAlimentarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restricaoAlimentar`: Exposes CRUD operations for the **RestricaoAlimentar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestricaoAlimentars
    * const restricaoAlimentars = await prisma.restricaoAlimentar.findMany()
    * ```
    */
  get restricaoAlimentar(): Prisma.RestricaoAlimentarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingrediente`: Exposes CRUD operations for the **Ingrediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredientes
    * const ingredientes = await prisma.ingrediente.findMany()
    * ```
    */
  get ingrediente(): Prisma.IngredienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventario`: Exposes CRUD operations for the **Inventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventarios
    * const inventarios = await prisma.inventario.findMany()
    * ```
    */
  get inventario(): Prisma.InventarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receita`: Exposes CRUD operations for the **Receita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receitas
    * const receitas = await prisma.receita.findMany()
    * ```
    */
  get receita(): Prisma.ReceitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **Favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.FavoritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receitaGeracao`: Exposes CRUD operations for the **ReceitaGeracao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceitaGeracaos
    * const receitaGeracaos = await prisma.receitaGeracao.findMany()
    * ```
    */
  get receitaGeracao(): Prisma.ReceitaGeracaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iaControle`: Exposes CRUD operations for the **IaControle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IaControles
    * const iaControles = await prisma.iaControle.findMany()
    * ```
    */
  get iaControle(): Prisma.IaControleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receitaIngrediente`: Exposes CRUD operations for the **ReceitaIngrediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceitaIngredientes
    * const receitaIngredientes = await prisma.receitaIngrediente.findMany()
    * ```
    */
  get receitaIngrediente(): Prisma.ReceitaIngredienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postagem`: Exposes CRUD operations for the **Postagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Postagems
    * const postagems = await prisma.postagem.findMany()
    * ```
    */
  get postagem(): Prisma.PostagemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    PerfilAlimentar: 'PerfilAlimentar',
    RestricaoAlimentar: 'RestricaoAlimentar',
    Ingrediente: 'Ingrediente',
    Inventario: 'Inventario',
    Receita: 'Receita',
    Favorito: 'Favorito',
    ReceitaGeracao: 'ReceitaGeracao',
    IaControle: 'IaControle',
    ReceitaIngrediente: 'ReceitaIngrediente',
    Comentario: 'Comentario',
    Postagem: 'Postagem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "perfilAlimentar" | "restricaoAlimentar" | "ingrediente" | "inventario" | "receita" | "favorito" | "receitaGeracao" | "iaControle" | "receitaIngrediente" | "comentario" | "postagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      PerfilAlimentar: {
        payload: Prisma.$PerfilAlimentarPayload<ExtArgs>
        fields: Prisma.PerfilAlimentarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerfilAlimentarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilAlimentarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilAlimentarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilAlimentarPayload>
          }
          findFirst: {
            args: Prisma.PerfilAlimentarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilAlimentarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilAlimentarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilAlimentarPayload>
          }
          findMany: {
            args: Prisma.PerfilAlimentarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilAlimentarPayload>[]
          }
          create: {
            args: Prisma.PerfilAlimentarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilAlimentarPayload>
          }
          createMany: {
            args: Prisma.PerfilAlimentarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PerfilAlimentarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilAlimentarPayload>
          }
          update: {
            args: Prisma.PerfilAlimentarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilAlimentarPayload>
          }
          deleteMany: {
            args: Prisma.PerfilAlimentarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerfilAlimentarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PerfilAlimentarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilAlimentarPayload>
          }
          aggregate: {
            args: Prisma.PerfilAlimentarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfilAlimentar>
          }
          groupBy: {
            args: Prisma.PerfilAlimentarGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilAlimentarGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerfilAlimentarCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilAlimentarCountAggregateOutputType> | number
          }
        }
      }
      RestricaoAlimentar: {
        payload: Prisma.$RestricaoAlimentarPayload<ExtArgs>
        fields: Prisma.RestricaoAlimentarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestricaoAlimentarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestricaoAlimentarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestricaoAlimentarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestricaoAlimentarPayload>
          }
          findFirst: {
            args: Prisma.RestricaoAlimentarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestricaoAlimentarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestricaoAlimentarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestricaoAlimentarPayload>
          }
          findMany: {
            args: Prisma.RestricaoAlimentarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestricaoAlimentarPayload>[]
          }
          create: {
            args: Prisma.RestricaoAlimentarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestricaoAlimentarPayload>
          }
          createMany: {
            args: Prisma.RestricaoAlimentarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RestricaoAlimentarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestricaoAlimentarPayload>
          }
          update: {
            args: Prisma.RestricaoAlimentarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestricaoAlimentarPayload>
          }
          deleteMany: {
            args: Prisma.RestricaoAlimentarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestricaoAlimentarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestricaoAlimentarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestricaoAlimentarPayload>
          }
          aggregate: {
            args: Prisma.RestricaoAlimentarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestricaoAlimentar>
          }
          groupBy: {
            args: Prisma.RestricaoAlimentarGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestricaoAlimentarGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestricaoAlimentarCountArgs<ExtArgs>
            result: $Utils.Optional<RestricaoAlimentarCountAggregateOutputType> | number
          }
        }
      }
      Ingrediente: {
        payload: Prisma.$IngredientePayload<ExtArgs>
        fields: Prisma.IngredienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          findFirst: {
            args: Prisma.IngredienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          findMany: {
            args: Prisma.IngredienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>[]
          }
          create: {
            args: Prisma.IngredienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          createMany: {
            args: Prisma.IngredienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IngredienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          update: {
            args: Prisma.IngredienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          deleteMany: {
            args: Prisma.IngredienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IngredienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          aggregate: {
            args: Prisma.IngredienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngrediente>
          }
          groupBy: {
            args: Prisma.IngredienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredienteCountArgs<ExtArgs>
            result: $Utils.Optional<IngredienteCountAggregateOutputType> | number
          }
        }
      }
      Inventario: {
        payload: Prisma.$InventarioPayload<ExtArgs>
        fields: Prisma.InventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findFirst: {
            args: Prisma.InventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findMany: {
            args: Prisma.InventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>[]
          }
          create: {
            args: Prisma.InventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          createMany: {
            args: Prisma.InventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          update: {
            args: Prisma.InventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          deleteMany: {
            args: Prisma.InventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          aggregate: {
            args: Prisma.InventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventario>
          }
          groupBy: {
            args: Prisma.InventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventarioCountArgs<ExtArgs>
            result: $Utils.Optional<InventarioCountAggregateOutputType> | number
          }
        }
      }
      Receita: {
        payload: Prisma.$ReceitaPayload<ExtArgs>
        fields: Prisma.ReceitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          findFirst: {
            args: Prisma.ReceitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          findMany: {
            args: Prisma.ReceitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          create: {
            args: Prisma.ReceitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          createMany: {
            args: Prisma.ReceitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReceitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          update: {
            args: Prisma.ReceitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReceitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          aggregate: {
            args: Prisma.ReceitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceita>
          }
          groupBy: {
            args: Prisma.ReceitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaCountAggregateOutputType> | number
          }
        }
      }
      Favorito: {
        payload: Prisma.$FavoritoPayload<ExtArgs>
        fields: Prisma.FavoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findFirst: {
            args: Prisma.FavoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findMany: {
            args: Prisma.FavoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          create: {
            args: Prisma.FavoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          createMany: {
            args: Prisma.FavoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          update: {
            args: Prisma.FavoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          deleteMany: {
            args: Prisma.FavoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.FavoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      ReceitaGeracao: {
        payload: Prisma.$ReceitaGeracaoPayload<ExtArgs>
        fields: Prisma.ReceitaGeracaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaGeracaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaGeracaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaGeracaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaGeracaoPayload>
          }
          findFirst: {
            args: Prisma.ReceitaGeracaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaGeracaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaGeracaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaGeracaoPayload>
          }
          findMany: {
            args: Prisma.ReceitaGeracaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaGeracaoPayload>[]
          }
          create: {
            args: Prisma.ReceitaGeracaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaGeracaoPayload>
          }
          createMany: {
            args: Prisma.ReceitaGeracaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReceitaGeracaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaGeracaoPayload>
          }
          update: {
            args: Prisma.ReceitaGeracaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaGeracaoPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaGeracaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaGeracaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReceitaGeracaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaGeracaoPayload>
          }
          aggregate: {
            args: Prisma.ReceitaGeracaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceitaGeracao>
          }
          groupBy: {
            args: Prisma.ReceitaGeracaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaGeracaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaGeracaoCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaGeracaoCountAggregateOutputType> | number
          }
        }
      }
      IaControle: {
        payload: Prisma.$IaControlePayload<ExtArgs>
        fields: Prisma.IaControleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IaControleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IaControlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IaControleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IaControlePayload>
          }
          findFirst: {
            args: Prisma.IaControleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IaControlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IaControleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IaControlePayload>
          }
          findMany: {
            args: Prisma.IaControleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IaControlePayload>[]
          }
          create: {
            args: Prisma.IaControleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IaControlePayload>
          }
          createMany: {
            args: Prisma.IaControleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IaControleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IaControlePayload>
          }
          update: {
            args: Prisma.IaControleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IaControlePayload>
          }
          deleteMany: {
            args: Prisma.IaControleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IaControleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IaControleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IaControlePayload>
          }
          aggregate: {
            args: Prisma.IaControleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIaControle>
          }
          groupBy: {
            args: Prisma.IaControleGroupByArgs<ExtArgs>
            result: $Utils.Optional<IaControleGroupByOutputType>[]
          }
          count: {
            args: Prisma.IaControleCountArgs<ExtArgs>
            result: $Utils.Optional<IaControleCountAggregateOutputType> | number
          }
        }
      }
      ReceitaIngrediente: {
        payload: Prisma.$ReceitaIngredientePayload<ExtArgs>
        fields: Prisma.ReceitaIngredienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaIngredienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaIngredientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaIngredienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaIngredientePayload>
          }
          findFirst: {
            args: Prisma.ReceitaIngredienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaIngredientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaIngredienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaIngredientePayload>
          }
          findMany: {
            args: Prisma.ReceitaIngredienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaIngredientePayload>[]
          }
          create: {
            args: Prisma.ReceitaIngredienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaIngredientePayload>
          }
          createMany: {
            args: Prisma.ReceitaIngredienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReceitaIngredienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaIngredientePayload>
          }
          update: {
            args: Prisma.ReceitaIngredienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaIngredientePayload>
          }
          deleteMany: {
            args: Prisma.ReceitaIngredienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaIngredienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReceitaIngredienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaIngredientePayload>
          }
          aggregate: {
            args: Prisma.ReceitaIngredienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceitaIngrediente>
          }
          groupBy: {
            args: Prisma.ReceitaIngredienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaIngredienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaIngredienteCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaIngredienteCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      Postagem: {
        payload: Prisma.$PostagemPayload<ExtArgs>
        fields: Prisma.PostagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostagemPayload>
          }
          findFirst: {
            args: Prisma.PostagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostagemPayload>
          }
          findMany: {
            args: Prisma.PostagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostagemPayload>[]
          }
          create: {
            args: Prisma.PostagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostagemPayload>
          }
          createMany: {
            args: Prisma.PostagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostagemPayload>
          }
          update: {
            args: Prisma.PostagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostagemPayload>
          }
          deleteMany: {
            args: Prisma.PostagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostagemPayload>
          }
          aggregate: {
            args: Prisma.PostagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostagem>
          }
          groupBy: {
            args: Prisma.PostagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostagemCountArgs<ExtArgs>
            result: $Utils.Optional<PostagemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    perfilAlimentar?: PerfilAlimentarOmit
    restricaoAlimentar?: RestricaoAlimentarOmit
    ingrediente?: IngredienteOmit
    inventario?: InventarioOmit
    receita?: ReceitaOmit
    favorito?: FavoritoOmit
    receitaGeracao?: ReceitaGeracaoOmit
    iaControle?: IaControleOmit
    receitaIngrediente?: ReceitaIngredienteOmit
    comentario?: ComentarioOmit
    postagem?: PostagemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    inventario: number
    receitas: number
    postagens: number
    comentarios: number
    favoritos: number
    geracoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario?: boolean | UsuarioCountOutputTypeCountInventarioArgs
    receitas?: boolean | UsuarioCountOutputTypeCountReceitasArgs
    postagens?: boolean | UsuarioCountOutputTypeCountPostagensArgs
    comentarios?: boolean | UsuarioCountOutputTypeCountComentariosArgs
    favoritos?: boolean | UsuarioCountOutputTypeCountFavoritosArgs
    geracoes?: boolean | UsuarioCountOutputTypeCountGeracoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountInventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPostagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostagemWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountGeracoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaGeracaoWhereInput
  }


  /**
   * Count Type PerfilAlimentarCountOutputType
   */

  export type PerfilAlimentarCountOutputType = {
    restricoes: number
  }

  export type PerfilAlimentarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restricoes?: boolean | PerfilAlimentarCountOutputTypeCountRestricoesArgs
  }

  // Custom InputTypes
  /**
   * PerfilAlimentarCountOutputType without action
   */
  export type PerfilAlimentarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentarCountOutputType
     */
    select?: PerfilAlimentarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerfilAlimentarCountOutputType without action
   */
  export type PerfilAlimentarCountOutputTypeCountRestricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestricaoAlimentarWhereInput
  }


  /**
   * Count Type IngredienteCountOutputType
   */

  export type IngredienteCountOutputType = {
    inventarios: number
    receitaIngredientes: number
  }

  export type IngredienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventarios?: boolean | IngredienteCountOutputTypeCountInventariosArgs
    receitaIngredientes?: boolean | IngredienteCountOutputTypeCountReceitaIngredientesArgs
  }

  // Custom InputTypes
  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredienteCountOutputType
     */
    select?: IngredienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeCountInventariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
  }

  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeCountReceitaIngredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaIngredienteWhereInput
  }


  /**
   * Count Type ReceitaCountOutputType
   */

  export type ReceitaCountOutputType = {
    ingredientes: number
    postagens: number
    comentarios: number
    favoritos: number
  }

  export type ReceitaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | ReceitaCountOutputTypeCountIngredientesArgs
    postagens?: boolean | ReceitaCountOutputTypeCountPostagensArgs
    comentarios?: boolean | ReceitaCountOutputTypeCountComentariosArgs
    favoritos?: boolean | ReceitaCountOutputTypeCountFavoritosArgs
  }

  // Custom InputTypes
  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaCountOutputType
     */
    select?: ReceitaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountIngredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaIngredienteWhereInput
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountPostagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostagemWhereInput
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }


  /**
   * Count Type ComentarioCountOutputType
   */

  export type ComentarioCountOutputType = {
    respostas: number
  }

  export type ComentarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | ComentarioCountOutputTypeCountRespostasArgs
  }

  // Custom InputTypes
  /**
   * ComentarioCountOutputType without action
   */
  export type ComentarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioCountOutputType
     */
    select?: ComentarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComentarioCountOutputType without action
   */
  export type ComentarioCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    avatar: string | null
    nivelHabilidade: $Enums.NivelHabilidade | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    avatar: string | null
    nivelHabilidade: $Enums.NivelHabilidade | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    avatar: number
    nivelHabilidade: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    avatar?: true
    nivelHabilidade?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    avatar?: true
    nivelHabilidade?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    avatar?: true
    nivelHabilidade?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    avatar: string | null
    nivelHabilidade: $Enums.NivelHabilidade
    criadoEm: Date
    atualizadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    avatar?: boolean
    nivelHabilidade?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    perfil?: boolean | Usuario$perfilArgs<ExtArgs>
    inventario?: boolean | Usuario$inventarioArgs<ExtArgs>
    receitas?: boolean | Usuario$receitasArgs<ExtArgs>
    postagens?: boolean | Usuario$postagensArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    favoritos?: boolean | Usuario$favoritosArgs<ExtArgs>
    geracoes?: boolean | Usuario$geracoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    avatar?: boolean
    nivelHabilidade?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "avatar" | "nivelHabilidade" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | Usuario$perfilArgs<ExtArgs>
    inventario?: boolean | Usuario$inventarioArgs<ExtArgs>
    receitas?: boolean | Usuario$receitasArgs<ExtArgs>
    postagens?: boolean | Usuario$postagensArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    favoritos?: boolean | Usuario$favoritosArgs<ExtArgs>
    geracoes?: boolean | Usuario$geracoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      perfil: Prisma.$PerfilAlimentarPayload<ExtArgs> | null
      inventario: Prisma.$InventarioPayload<ExtArgs>[]
      receitas: Prisma.$ReceitaPayload<ExtArgs>[]
      postagens: Prisma.$PostagemPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      geracoes: Prisma.$ReceitaGeracaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      avatar: string | null
      nivelHabilidade: $Enums.NivelHabilidade
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends Usuario$perfilArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$perfilArgs<ExtArgs>>): Prisma__PerfilAlimentarClient<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inventario<T extends Usuario$inventarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$inventarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receitas<T extends Usuario$receitasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$receitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postagens<T extends Usuario$postagensArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$postagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Usuario$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Usuario$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    geracoes<T extends Usuario$geracoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$geracoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaGeracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly avatar: FieldRef<"Usuario", 'String'>
    readonly nivelHabilidade: FieldRef<"Usuario", 'NivelHabilidade'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.perfil
   */
  export type Usuario$perfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
    where?: PerfilAlimentarWhereInput
  }

  /**
   * Usuario.inventario
   */
  export type Usuario$inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    cursor?: InventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Usuario.receitas
   */
  export type Usuario$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    where?: ReceitaWhereInput
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    cursor?: ReceitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Usuario.postagens
   */
  export type Usuario$postagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    where?: PostagemWhereInput
    orderBy?: PostagemOrderByWithRelationInput | PostagemOrderByWithRelationInput[]
    cursor?: PostagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostagemScalarFieldEnum | PostagemScalarFieldEnum[]
  }

  /**
   * Usuario.comentarios
   */
  export type Usuario$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Usuario.favoritos
   */
  export type Usuario$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Usuario.geracoes
   */
  export type Usuario$geracoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
    where?: ReceitaGeracaoWhereInput
    orderBy?: ReceitaGeracaoOrderByWithRelationInput | ReceitaGeracaoOrderByWithRelationInput[]
    cursor?: ReceitaGeracaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaGeracaoScalarFieldEnum | ReceitaGeracaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model PerfilAlimentar
   */

  export type AggregatePerfilAlimentar = {
    _count: PerfilAlimentarCountAggregateOutputType | null
    _avg: PerfilAlimentarAvgAggregateOutputType | null
    _sum: PerfilAlimentarSumAggregateOutputType | null
    _min: PerfilAlimentarMinAggregateOutputType | null
    _max: PerfilAlimentarMaxAggregateOutputType | null
  }

  export type PerfilAlimentarAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PerfilAlimentarSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PerfilAlimentarMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    tipoDieta: $Enums.TipoDieta | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PerfilAlimentarMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    tipoDieta: $Enums.TipoDieta | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PerfilAlimentarCountAggregateOutputType = {
    id: number
    usuarioId: number
    tipoDieta: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type PerfilAlimentarAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PerfilAlimentarSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PerfilAlimentarMinAggregateInputType = {
    id?: true
    usuarioId?: true
    tipoDieta?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PerfilAlimentarMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    tipoDieta?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PerfilAlimentarCountAggregateInputType = {
    id?: true
    usuarioId?: true
    tipoDieta?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type PerfilAlimentarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerfilAlimentar to aggregate.
     */
    where?: PerfilAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerfilAlimentars to fetch.
     */
    orderBy?: PerfilAlimentarOrderByWithRelationInput | PerfilAlimentarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerfilAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerfilAlimentars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerfilAlimentars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PerfilAlimentars
    **/
    _count?: true | PerfilAlimentarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfilAlimentarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfilAlimentarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilAlimentarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilAlimentarMaxAggregateInputType
  }

  export type GetPerfilAlimentarAggregateType<T extends PerfilAlimentarAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfilAlimentar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfilAlimentar[P]>
      : GetScalarType<T[P], AggregatePerfilAlimentar[P]>
  }




  export type PerfilAlimentarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilAlimentarWhereInput
    orderBy?: PerfilAlimentarOrderByWithAggregationInput | PerfilAlimentarOrderByWithAggregationInput[]
    by: PerfilAlimentarScalarFieldEnum[] | PerfilAlimentarScalarFieldEnum
    having?: PerfilAlimentarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilAlimentarCountAggregateInputType | true
    _avg?: PerfilAlimentarAvgAggregateInputType
    _sum?: PerfilAlimentarSumAggregateInputType
    _min?: PerfilAlimentarMinAggregateInputType
    _max?: PerfilAlimentarMaxAggregateInputType
  }

  export type PerfilAlimentarGroupByOutputType = {
    id: number
    usuarioId: number
    tipoDieta: $Enums.TipoDieta
    criadoEm: Date
    atualizadoEm: Date
    _count: PerfilAlimentarCountAggregateOutputType | null
    _avg: PerfilAlimentarAvgAggregateOutputType | null
    _sum: PerfilAlimentarSumAggregateOutputType | null
    _min: PerfilAlimentarMinAggregateOutputType | null
    _max: PerfilAlimentarMaxAggregateOutputType | null
  }

  type GetPerfilAlimentarGroupByPayload<T extends PerfilAlimentarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilAlimentarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilAlimentarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilAlimentarGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilAlimentarGroupByOutputType[P]>
        }
      >
    >


  export type PerfilAlimentarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    tipoDieta?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restricoes?: boolean | PerfilAlimentar$restricoesArgs<ExtArgs>
    _count?: boolean | PerfilAlimentarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfilAlimentar"]>



  export type PerfilAlimentarSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    tipoDieta?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type PerfilAlimentarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "tipoDieta" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["perfilAlimentar"]>
  export type PerfilAlimentarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restricoes?: boolean | PerfilAlimentar$restricoesArgs<ExtArgs>
    _count?: boolean | PerfilAlimentarCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PerfilAlimentarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PerfilAlimentar"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      restricoes: Prisma.$RestricaoAlimentarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      tipoDieta: $Enums.TipoDieta
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["perfilAlimentar"]>
    composites: {}
  }

  type PerfilAlimentarGetPayload<S extends boolean | null | undefined | PerfilAlimentarDefaultArgs> = $Result.GetResult<Prisma.$PerfilAlimentarPayload, S>

  type PerfilAlimentarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerfilAlimentarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfilAlimentarCountAggregateInputType | true
    }

  export interface PerfilAlimentarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PerfilAlimentar'], meta: { name: 'PerfilAlimentar' } }
    /**
     * Find zero or one PerfilAlimentar that matches the filter.
     * @param {PerfilAlimentarFindUniqueArgs} args - Arguments to find a PerfilAlimentar
     * @example
     * // Get one PerfilAlimentar
     * const perfilAlimentar = await prisma.perfilAlimentar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerfilAlimentarFindUniqueArgs>(args: SelectSubset<T, PerfilAlimentarFindUniqueArgs<ExtArgs>>): Prisma__PerfilAlimentarClient<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PerfilAlimentar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerfilAlimentarFindUniqueOrThrowArgs} args - Arguments to find a PerfilAlimentar
     * @example
     * // Get one PerfilAlimentar
     * const perfilAlimentar = await prisma.perfilAlimentar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerfilAlimentarFindUniqueOrThrowArgs>(args: SelectSubset<T, PerfilAlimentarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerfilAlimentarClient<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerfilAlimentar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAlimentarFindFirstArgs} args - Arguments to find a PerfilAlimentar
     * @example
     * // Get one PerfilAlimentar
     * const perfilAlimentar = await prisma.perfilAlimentar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerfilAlimentarFindFirstArgs>(args?: SelectSubset<T, PerfilAlimentarFindFirstArgs<ExtArgs>>): Prisma__PerfilAlimentarClient<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerfilAlimentar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAlimentarFindFirstOrThrowArgs} args - Arguments to find a PerfilAlimentar
     * @example
     * // Get one PerfilAlimentar
     * const perfilAlimentar = await prisma.perfilAlimentar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerfilAlimentarFindFirstOrThrowArgs>(args?: SelectSubset<T, PerfilAlimentarFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerfilAlimentarClient<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PerfilAlimentars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAlimentarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PerfilAlimentars
     * const perfilAlimentars = await prisma.perfilAlimentar.findMany()
     * 
     * // Get first 10 PerfilAlimentars
     * const perfilAlimentars = await prisma.perfilAlimentar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilAlimentarWithIdOnly = await prisma.perfilAlimentar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerfilAlimentarFindManyArgs>(args?: SelectSubset<T, PerfilAlimentarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PerfilAlimentar.
     * @param {PerfilAlimentarCreateArgs} args - Arguments to create a PerfilAlimentar.
     * @example
     * // Create one PerfilAlimentar
     * const PerfilAlimentar = await prisma.perfilAlimentar.create({
     *   data: {
     *     // ... data to create a PerfilAlimentar
     *   }
     * })
     * 
     */
    create<T extends PerfilAlimentarCreateArgs>(args: SelectSubset<T, PerfilAlimentarCreateArgs<ExtArgs>>): Prisma__PerfilAlimentarClient<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PerfilAlimentars.
     * @param {PerfilAlimentarCreateManyArgs} args - Arguments to create many PerfilAlimentars.
     * @example
     * // Create many PerfilAlimentars
     * const perfilAlimentar = await prisma.perfilAlimentar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerfilAlimentarCreateManyArgs>(args?: SelectSubset<T, PerfilAlimentarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PerfilAlimentar.
     * @param {PerfilAlimentarDeleteArgs} args - Arguments to delete one PerfilAlimentar.
     * @example
     * // Delete one PerfilAlimentar
     * const PerfilAlimentar = await prisma.perfilAlimentar.delete({
     *   where: {
     *     // ... filter to delete one PerfilAlimentar
     *   }
     * })
     * 
     */
    delete<T extends PerfilAlimentarDeleteArgs>(args: SelectSubset<T, PerfilAlimentarDeleteArgs<ExtArgs>>): Prisma__PerfilAlimentarClient<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PerfilAlimentar.
     * @param {PerfilAlimentarUpdateArgs} args - Arguments to update one PerfilAlimentar.
     * @example
     * // Update one PerfilAlimentar
     * const perfilAlimentar = await prisma.perfilAlimentar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerfilAlimentarUpdateArgs>(args: SelectSubset<T, PerfilAlimentarUpdateArgs<ExtArgs>>): Prisma__PerfilAlimentarClient<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PerfilAlimentars.
     * @param {PerfilAlimentarDeleteManyArgs} args - Arguments to filter PerfilAlimentars to delete.
     * @example
     * // Delete a few PerfilAlimentars
     * const { count } = await prisma.perfilAlimentar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerfilAlimentarDeleteManyArgs>(args?: SelectSubset<T, PerfilAlimentarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerfilAlimentars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAlimentarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PerfilAlimentars
     * const perfilAlimentar = await prisma.perfilAlimentar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerfilAlimentarUpdateManyArgs>(args: SelectSubset<T, PerfilAlimentarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PerfilAlimentar.
     * @param {PerfilAlimentarUpsertArgs} args - Arguments to update or create a PerfilAlimentar.
     * @example
     * // Update or create a PerfilAlimentar
     * const perfilAlimentar = await prisma.perfilAlimentar.upsert({
     *   create: {
     *     // ... data to create a PerfilAlimentar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PerfilAlimentar we want to update
     *   }
     * })
     */
    upsert<T extends PerfilAlimentarUpsertArgs>(args: SelectSubset<T, PerfilAlimentarUpsertArgs<ExtArgs>>): Prisma__PerfilAlimentarClient<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PerfilAlimentars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAlimentarCountArgs} args - Arguments to filter PerfilAlimentars to count.
     * @example
     * // Count the number of PerfilAlimentars
     * const count = await prisma.perfilAlimentar.count({
     *   where: {
     *     // ... the filter for the PerfilAlimentars we want to count
     *   }
     * })
    **/
    count<T extends PerfilAlimentarCountArgs>(
      args?: Subset<T, PerfilAlimentarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilAlimentarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PerfilAlimentar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAlimentarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerfilAlimentarAggregateArgs>(args: Subset<T, PerfilAlimentarAggregateArgs>): Prisma.PrismaPromise<GetPerfilAlimentarAggregateType<T>>

    /**
     * Group by PerfilAlimentar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAlimentarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerfilAlimentarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilAlimentarGroupByArgs['orderBy'] }
        : { orderBy?: PerfilAlimentarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerfilAlimentarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilAlimentarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PerfilAlimentar model
   */
  readonly fields: PerfilAlimentarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PerfilAlimentar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilAlimentarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restricoes<T extends PerfilAlimentar$restricoesArgs<ExtArgs> = {}>(args?: Subset<T, PerfilAlimentar$restricoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestricaoAlimentarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PerfilAlimentar model
   */
  interface PerfilAlimentarFieldRefs {
    readonly id: FieldRef<"PerfilAlimentar", 'Int'>
    readonly usuarioId: FieldRef<"PerfilAlimentar", 'Int'>
    readonly tipoDieta: FieldRef<"PerfilAlimentar", 'TipoDieta'>
    readonly criadoEm: FieldRef<"PerfilAlimentar", 'DateTime'>
    readonly atualizadoEm: FieldRef<"PerfilAlimentar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PerfilAlimentar findUnique
   */
  export type PerfilAlimentarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
    /**
     * Filter, which PerfilAlimentar to fetch.
     */
    where: PerfilAlimentarWhereUniqueInput
  }

  /**
   * PerfilAlimentar findUniqueOrThrow
   */
  export type PerfilAlimentarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
    /**
     * Filter, which PerfilAlimentar to fetch.
     */
    where: PerfilAlimentarWhereUniqueInput
  }

  /**
   * PerfilAlimentar findFirst
   */
  export type PerfilAlimentarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
    /**
     * Filter, which PerfilAlimentar to fetch.
     */
    where?: PerfilAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerfilAlimentars to fetch.
     */
    orderBy?: PerfilAlimentarOrderByWithRelationInput | PerfilAlimentarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerfilAlimentars.
     */
    cursor?: PerfilAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerfilAlimentars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerfilAlimentars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerfilAlimentars.
     */
    distinct?: PerfilAlimentarScalarFieldEnum | PerfilAlimentarScalarFieldEnum[]
  }

  /**
   * PerfilAlimentar findFirstOrThrow
   */
  export type PerfilAlimentarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
    /**
     * Filter, which PerfilAlimentar to fetch.
     */
    where?: PerfilAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerfilAlimentars to fetch.
     */
    orderBy?: PerfilAlimentarOrderByWithRelationInput | PerfilAlimentarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerfilAlimentars.
     */
    cursor?: PerfilAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerfilAlimentars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerfilAlimentars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerfilAlimentars.
     */
    distinct?: PerfilAlimentarScalarFieldEnum | PerfilAlimentarScalarFieldEnum[]
  }

  /**
   * PerfilAlimentar findMany
   */
  export type PerfilAlimentarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
    /**
     * Filter, which PerfilAlimentars to fetch.
     */
    where?: PerfilAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerfilAlimentars to fetch.
     */
    orderBy?: PerfilAlimentarOrderByWithRelationInput | PerfilAlimentarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PerfilAlimentars.
     */
    cursor?: PerfilAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerfilAlimentars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerfilAlimentars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerfilAlimentars.
     */
    distinct?: PerfilAlimentarScalarFieldEnum | PerfilAlimentarScalarFieldEnum[]
  }

  /**
   * PerfilAlimentar create
   */
  export type PerfilAlimentarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
    /**
     * The data needed to create a PerfilAlimentar.
     */
    data: XOR<PerfilAlimentarCreateInput, PerfilAlimentarUncheckedCreateInput>
  }

  /**
   * PerfilAlimentar createMany
   */
  export type PerfilAlimentarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PerfilAlimentars.
     */
    data: PerfilAlimentarCreateManyInput | PerfilAlimentarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PerfilAlimentar update
   */
  export type PerfilAlimentarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
    /**
     * The data needed to update a PerfilAlimentar.
     */
    data: XOR<PerfilAlimentarUpdateInput, PerfilAlimentarUncheckedUpdateInput>
    /**
     * Choose, which PerfilAlimentar to update.
     */
    where: PerfilAlimentarWhereUniqueInput
  }

  /**
   * PerfilAlimentar updateMany
   */
  export type PerfilAlimentarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PerfilAlimentars.
     */
    data: XOR<PerfilAlimentarUpdateManyMutationInput, PerfilAlimentarUncheckedUpdateManyInput>
    /**
     * Filter which PerfilAlimentars to update
     */
    where?: PerfilAlimentarWhereInput
    /**
     * Limit how many PerfilAlimentars to update.
     */
    limit?: number
  }

  /**
   * PerfilAlimentar upsert
   */
  export type PerfilAlimentarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
    /**
     * The filter to search for the PerfilAlimentar to update in case it exists.
     */
    where: PerfilAlimentarWhereUniqueInput
    /**
     * In case the PerfilAlimentar found by the `where` argument doesn't exist, create a new PerfilAlimentar with this data.
     */
    create: XOR<PerfilAlimentarCreateInput, PerfilAlimentarUncheckedCreateInput>
    /**
     * In case the PerfilAlimentar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilAlimentarUpdateInput, PerfilAlimentarUncheckedUpdateInput>
  }

  /**
   * PerfilAlimentar delete
   */
  export type PerfilAlimentarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
    /**
     * Filter which PerfilAlimentar to delete.
     */
    where: PerfilAlimentarWhereUniqueInput
  }

  /**
   * PerfilAlimentar deleteMany
   */
  export type PerfilAlimentarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerfilAlimentars to delete
     */
    where?: PerfilAlimentarWhereInput
    /**
     * Limit how many PerfilAlimentars to delete.
     */
    limit?: number
  }

  /**
   * PerfilAlimentar.restricoes
   */
  export type PerfilAlimentar$restricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
    where?: RestricaoAlimentarWhereInput
    orderBy?: RestricaoAlimentarOrderByWithRelationInput | RestricaoAlimentarOrderByWithRelationInput[]
    cursor?: RestricaoAlimentarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestricaoAlimentarScalarFieldEnum | RestricaoAlimentarScalarFieldEnum[]
  }

  /**
   * PerfilAlimentar without action
   */
  export type PerfilAlimentarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilAlimentar
     */
    select?: PerfilAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerfilAlimentar
     */
    omit?: PerfilAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilAlimentarInclude<ExtArgs> | null
  }


  /**
   * Model RestricaoAlimentar
   */

  export type AggregateRestricaoAlimentar = {
    _count: RestricaoAlimentarCountAggregateOutputType | null
    _avg: RestricaoAlimentarAvgAggregateOutputType | null
    _sum: RestricaoAlimentarSumAggregateOutputType | null
    _min: RestricaoAlimentarMinAggregateOutputType | null
    _max: RestricaoAlimentarMaxAggregateOutputType | null
  }

  export type RestricaoAlimentarAvgAggregateOutputType = {
    id: number | null
    perfilId: number | null
  }

  export type RestricaoAlimentarSumAggregateOutputType = {
    id: number | null
    perfilId: number | null
  }

  export type RestricaoAlimentarMinAggregateOutputType = {
    id: number | null
    perfilId: number | null
    tipo: string | null
  }

  export type RestricaoAlimentarMaxAggregateOutputType = {
    id: number | null
    perfilId: number | null
    tipo: string | null
  }

  export type RestricaoAlimentarCountAggregateOutputType = {
    id: number
    perfilId: number
    tipo: number
    _all: number
  }


  export type RestricaoAlimentarAvgAggregateInputType = {
    id?: true
    perfilId?: true
  }

  export type RestricaoAlimentarSumAggregateInputType = {
    id?: true
    perfilId?: true
  }

  export type RestricaoAlimentarMinAggregateInputType = {
    id?: true
    perfilId?: true
    tipo?: true
  }

  export type RestricaoAlimentarMaxAggregateInputType = {
    id?: true
    perfilId?: true
    tipo?: true
  }

  export type RestricaoAlimentarCountAggregateInputType = {
    id?: true
    perfilId?: true
    tipo?: true
    _all?: true
  }

  export type RestricaoAlimentarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestricaoAlimentar to aggregate.
     */
    where?: RestricaoAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestricaoAlimentars to fetch.
     */
    orderBy?: RestricaoAlimentarOrderByWithRelationInput | RestricaoAlimentarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestricaoAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestricaoAlimentars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestricaoAlimentars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestricaoAlimentars
    **/
    _count?: true | RestricaoAlimentarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestricaoAlimentarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestricaoAlimentarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestricaoAlimentarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestricaoAlimentarMaxAggregateInputType
  }

  export type GetRestricaoAlimentarAggregateType<T extends RestricaoAlimentarAggregateArgs> = {
        [P in keyof T & keyof AggregateRestricaoAlimentar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestricaoAlimentar[P]>
      : GetScalarType<T[P], AggregateRestricaoAlimentar[P]>
  }




  export type RestricaoAlimentarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestricaoAlimentarWhereInput
    orderBy?: RestricaoAlimentarOrderByWithAggregationInput | RestricaoAlimentarOrderByWithAggregationInput[]
    by: RestricaoAlimentarScalarFieldEnum[] | RestricaoAlimentarScalarFieldEnum
    having?: RestricaoAlimentarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestricaoAlimentarCountAggregateInputType | true
    _avg?: RestricaoAlimentarAvgAggregateInputType
    _sum?: RestricaoAlimentarSumAggregateInputType
    _min?: RestricaoAlimentarMinAggregateInputType
    _max?: RestricaoAlimentarMaxAggregateInputType
  }

  export type RestricaoAlimentarGroupByOutputType = {
    id: number
    perfilId: number
    tipo: string
    _count: RestricaoAlimentarCountAggregateOutputType | null
    _avg: RestricaoAlimentarAvgAggregateOutputType | null
    _sum: RestricaoAlimentarSumAggregateOutputType | null
    _min: RestricaoAlimentarMinAggregateOutputType | null
    _max: RestricaoAlimentarMaxAggregateOutputType | null
  }

  type GetRestricaoAlimentarGroupByPayload<T extends RestricaoAlimentarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestricaoAlimentarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestricaoAlimentarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestricaoAlimentarGroupByOutputType[P]>
            : GetScalarType<T[P], RestricaoAlimentarGroupByOutputType[P]>
        }
      >
    >


  export type RestricaoAlimentarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    perfilId?: boolean
    tipo?: boolean
    perfil?: boolean | PerfilAlimentarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restricaoAlimentar"]>



  export type RestricaoAlimentarSelectScalar = {
    id?: boolean
    perfilId?: boolean
    tipo?: boolean
  }

  export type RestricaoAlimentarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "perfilId" | "tipo", ExtArgs["result"]["restricaoAlimentar"]>
  export type RestricaoAlimentarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | PerfilAlimentarDefaultArgs<ExtArgs>
  }

  export type $RestricaoAlimentarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestricaoAlimentar"
    objects: {
      perfil: Prisma.$PerfilAlimentarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      perfilId: number
      tipo: string
    }, ExtArgs["result"]["restricaoAlimentar"]>
    composites: {}
  }

  type RestricaoAlimentarGetPayload<S extends boolean | null | undefined | RestricaoAlimentarDefaultArgs> = $Result.GetResult<Prisma.$RestricaoAlimentarPayload, S>

  type RestricaoAlimentarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestricaoAlimentarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestricaoAlimentarCountAggregateInputType | true
    }

  export interface RestricaoAlimentarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestricaoAlimentar'], meta: { name: 'RestricaoAlimentar' } }
    /**
     * Find zero or one RestricaoAlimentar that matches the filter.
     * @param {RestricaoAlimentarFindUniqueArgs} args - Arguments to find a RestricaoAlimentar
     * @example
     * // Get one RestricaoAlimentar
     * const restricaoAlimentar = await prisma.restricaoAlimentar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestricaoAlimentarFindUniqueArgs>(args: SelectSubset<T, RestricaoAlimentarFindUniqueArgs<ExtArgs>>): Prisma__RestricaoAlimentarClient<$Result.GetResult<Prisma.$RestricaoAlimentarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestricaoAlimentar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestricaoAlimentarFindUniqueOrThrowArgs} args - Arguments to find a RestricaoAlimentar
     * @example
     * // Get one RestricaoAlimentar
     * const restricaoAlimentar = await prisma.restricaoAlimentar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestricaoAlimentarFindUniqueOrThrowArgs>(args: SelectSubset<T, RestricaoAlimentarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestricaoAlimentarClient<$Result.GetResult<Prisma.$RestricaoAlimentarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestricaoAlimentar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestricaoAlimentarFindFirstArgs} args - Arguments to find a RestricaoAlimentar
     * @example
     * // Get one RestricaoAlimentar
     * const restricaoAlimentar = await prisma.restricaoAlimentar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestricaoAlimentarFindFirstArgs>(args?: SelectSubset<T, RestricaoAlimentarFindFirstArgs<ExtArgs>>): Prisma__RestricaoAlimentarClient<$Result.GetResult<Prisma.$RestricaoAlimentarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestricaoAlimentar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestricaoAlimentarFindFirstOrThrowArgs} args - Arguments to find a RestricaoAlimentar
     * @example
     * // Get one RestricaoAlimentar
     * const restricaoAlimentar = await prisma.restricaoAlimentar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestricaoAlimentarFindFirstOrThrowArgs>(args?: SelectSubset<T, RestricaoAlimentarFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestricaoAlimentarClient<$Result.GetResult<Prisma.$RestricaoAlimentarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestricaoAlimentars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestricaoAlimentarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestricaoAlimentars
     * const restricaoAlimentars = await prisma.restricaoAlimentar.findMany()
     * 
     * // Get first 10 RestricaoAlimentars
     * const restricaoAlimentars = await prisma.restricaoAlimentar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restricaoAlimentarWithIdOnly = await prisma.restricaoAlimentar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestricaoAlimentarFindManyArgs>(args?: SelectSubset<T, RestricaoAlimentarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestricaoAlimentarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestricaoAlimentar.
     * @param {RestricaoAlimentarCreateArgs} args - Arguments to create a RestricaoAlimentar.
     * @example
     * // Create one RestricaoAlimentar
     * const RestricaoAlimentar = await prisma.restricaoAlimentar.create({
     *   data: {
     *     // ... data to create a RestricaoAlimentar
     *   }
     * })
     * 
     */
    create<T extends RestricaoAlimentarCreateArgs>(args: SelectSubset<T, RestricaoAlimentarCreateArgs<ExtArgs>>): Prisma__RestricaoAlimentarClient<$Result.GetResult<Prisma.$RestricaoAlimentarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestricaoAlimentars.
     * @param {RestricaoAlimentarCreateManyArgs} args - Arguments to create many RestricaoAlimentars.
     * @example
     * // Create many RestricaoAlimentars
     * const restricaoAlimentar = await prisma.restricaoAlimentar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestricaoAlimentarCreateManyArgs>(args?: SelectSubset<T, RestricaoAlimentarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RestricaoAlimentar.
     * @param {RestricaoAlimentarDeleteArgs} args - Arguments to delete one RestricaoAlimentar.
     * @example
     * // Delete one RestricaoAlimentar
     * const RestricaoAlimentar = await prisma.restricaoAlimentar.delete({
     *   where: {
     *     // ... filter to delete one RestricaoAlimentar
     *   }
     * })
     * 
     */
    delete<T extends RestricaoAlimentarDeleteArgs>(args: SelectSubset<T, RestricaoAlimentarDeleteArgs<ExtArgs>>): Prisma__RestricaoAlimentarClient<$Result.GetResult<Prisma.$RestricaoAlimentarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestricaoAlimentar.
     * @param {RestricaoAlimentarUpdateArgs} args - Arguments to update one RestricaoAlimentar.
     * @example
     * // Update one RestricaoAlimentar
     * const restricaoAlimentar = await prisma.restricaoAlimentar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestricaoAlimentarUpdateArgs>(args: SelectSubset<T, RestricaoAlimentarUpdateArgs<ExtArgs>>): Prisma__RestricaoAlimentarClient<$Result.GetResult<Prisma.$RestricaoAlimentarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestricaoAlimentars.
     * @param {RestricaoAlimentarDeleteManyArgs} args - Arguments to filter RestricaoAlimentars to delete.
     * @example
     * // Delete a few RestricaoAlimentars
     * const { count } = await prisma.restricaoAlimentar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestricaoAlimentarDeleteManyArgs>(args?: SelectSubset<T, RestricaoAlimentarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestricaoAlimentars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestricaoAlimentarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestricaoAlimentars
     * const restricaoAlimentar = await prisma.restricaoAlimentar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestricaoAlimentarUpdateManyArgs>(args: SelectSubset<T, RestricaoAlimentarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RestricaoAlimentar.
     * @param {RestricaoAlimentarUpsertArgs} args - Arguments to update or create a RestricaoAlimentar.
     * @example
     * // Update or create a RestricaoAlimentar
     * const restricaoAlimentar = await prisma.restricaoAlimentar.upsert({
     *   create: {
     *     // ... data to create a RestricaoAlimentar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestricaoAlimentar we want to update
     *   }
     * })
     */
    upsert<T extends RestricaoAlimentarUpsertArgs>(args: SelectSubset<T, RestricaoAlimentarUpsertArgs<ExtArgs>>): Prisma__RestricaoAlimentarClient<$Result.GetResult<Prisma.$RestricaoAlimentarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestricaoAlimentars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestricaoAlimentarCountArgs} args - Arguments to filter RestricaoAlimentars to count.
     * @example
     * // Count the number of RestricaoAlimentars
     * const count = await prisma.restricaoAlimentar.count({
     *   where: {
     *     // ... the filter for the RestricaoAlimentars we want to count
     *   }
     * })
    **/
    count<T extends RestricaoAlimentarCountArgs>(
      args?: Subset<T, RestricaoAlimentarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestricaoAlimentarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestricaoAlimentar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestricaoAlimentarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestricaoAlimentarAggregateArgs>(args: Subset<T, RestricaoAlimentarAggregateArgs>): Prisma.PrismaPromise<GetRestricaoAlimentarAggregateType<T>>

    /**
     * Group by RestricaoAlimentar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestricaoAlimentarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestricaoAlimentarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestricaoAlimentarGroupByArgs['orderBy'] }
        : { orderBy?: RestricaoAlimentarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestricaoAlimentarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestricaoAlimentarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestricaoAlimentar model
   */
  readonly fields: RestricaoAlimentarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestricaoAlimentar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestricaoAlimentarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends PerfilAlimentarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerfilAlimentarDefaultArgs<ExtArgs>>): Prisma__PerfilAlimentarClient<$Result.GetResult<Prisma.$PerfilAlimentarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RestricaoAlimentar model
   */
  interface RestricaoAlimentarFieldRefs {
    readonly id: FieldRef<"RestricaoAlimentar", 'Int'>
    readonly perfilId: FieldRef<"RestricaoAlimentar", 'Int'>
    readonly tipo: FieldRef<"RestricaoAlimentar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RestricaoAlimentar findUnique
   */
  export type RestricaoAlimentarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
    /**
     * Filter, which RestricaoAlimentar to fetch.
     */
    where: RestricaoAlimentarWhereUniqueInput
  }

  /**
   * RestricaoAlimentar findUniqueOrThrow
   */
  export type RestricaoAlimentarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
    /**
     * Filter, which RestricaoAlimentar to fetch.
     */
    where: RestricaoAlimentarWhereUniqueInput
  }

  /**
   * RestricaoAlimentar findFirst
   */
  export type RestricaoAlimentarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
    /**
     * Filter, which RestricaoAlimentar to fetch.
     */
    where?: RestricaoAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestricaoAlimentars to fetch.
     */
    orderBy?: RestricaoAlimentarOrderByWithRelationInput | RestricaoAlimentarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestricaoAlimentars.
     */
    cursor?: RestricaoAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestricaoAlimentars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestricaoAlimentars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestricaoAlimentars.
     */
    distinct?: RestricaoAlimentarScalarFieldEnum | RestricaoAlimentarScalarFieldEnum[]
  }

  /**
   * RestricaoAlimentar findFirstOrThrow
   */
  export type RestricaoAlimentarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
    /**
     * Filter, which RestricaoAlimentar to fetch.
     */
    where?: RestricaoAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestricaoAlimentars to fetch.
     */
    orderBy?: RestricaoAlimentarOrderByWithRelationInput | RestricaoAlimentarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestricaoAlimentars.
     */
    cursor?: RestricaoAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestricaoAlimentars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestricaoAlimentars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestricaoAlimentars.
     */
    distinct?: RestricaoAlimentarScalarFieldEnum | RestricaoAlimentarScalarFieldEnum[]
  }

  /**
   * RestricaoAlimentar findMany
   */
  export type RestricaoAlimentarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
    /**
     * Filter, which RestricaoAlimentars to fetch.
     */
    where?: RestricaoAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestricaoAlimentars to fetch.
     */
    orderBy?: RestricaoAlimentarOrderByWithRelationInput | RestricaoAlimentarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestricaoAlimentars.
     */
    cursor?: RestricaoAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestricaoAlimentars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestricaoAlimentars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestricaoAlimentars.
     */
    distinct?: RestricaoAlimentarScalarFieldEnum | RestricaoAlimentarScalarFieldEnum[]
  }

  /**
   * RestricaoAlimentar create
   */
  export type RestricaoAlimentarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
    /**
     * The data needed to create a RestricaoAlimentar.
     */
    data: XOR<RestricaoAlimentarCreateInput, RestricaoAlimentarUncheckedCreateInput>
  }

  /**
   * RestricaoAlimentar createMany
   */
  export type RestricaoAlimentarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestricaoAlimentars.
     */
    data: RestricaoAlimentarCreateManyInput | RestricaoAlimentarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RestricaoAlimentar update
   */
  export type RestricaoAlimentarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
    /**
     * The data needed to update a RestricaoAlimentar.
     */
    data: XOR<RestricaoAlimentarUpdateInput, RestricaoAlimentarUncheckedUpdateInput>
    /**
     * Choose, which RestricaoAlimentar to update.
     */
    where: RestricaoAlimentarWhereUniqueInput
  }

  /**
   * RestricaoAlimentar updateMany
   */
  export type RestricaoAlimentarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestricaoAlimentars.
     */
    data: XOR<RestricaoAlimentarUpdateManyMutationInput, RestricaoAlimentarUncheckedUpdateManyInput>
    /**
     * Filter which RestricaoAlimentars to update
     */
    where?: RestricaoAlimentarWhereInput
    /**
     * Limit how many RestricaoAlimentars to update.
     */
    limit?: number
  }

  /**
   * RestricaoAlimentar upsert
   */
  export type RestricaoAlimentarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
    /**
     * The filter to search for the RestricaoAlimentar to update in case it exists.
     */
    where: RestricaoAlimentarWhereUniqueInput
    /**
     * In case the RestricaoAlimentar found by the `where` argument doesn't exist, create a new RestricaoAlimentar with this data.
     */
    create: XOR<RestricaoAlimentarCreateInput, RestricaoAlimentarUncheckedCreateInput>
    /**
     * In case the RestricaoAlimentar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestricaoAlimentarUpdateInput, RestricaoAlimentarUncheckedUpdateInput>
  }

  /**
   * RestricaoAlimentar delete
   */
  export type RestricaoAlimentarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
    /**
     * Filter which RestricaoAlimentar to delete.
     */
    where: RestricaoAlimentarWhereUniqueInput
  }

  /**
   * RestricaoAlimentar deleteMany
   */
  export type RestricaoAlimentarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestricaoAlimentars to delete
     */
    where?: RestricaoAlimentarWhereInput
    /**
     * Limit how many RestricaoAlimentars to delete.
     */
    limit?: number
  }

  /**
   * RestricaoAlimentar without action
   */
  export type RestricaoAlimentarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestricaoAlimentar
     */
    select?: RestricaoAlimentarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestricaoAlimentar
     */
    omit?: RestricaoAlimentarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestricaoAlimentarInclude<ExtArgs> | null
  }


  /**
   * Model Ingrediente
   */

  export type AggregateIngrediente = {
    _count: IngredienteCountAggregateOutputType | null
    _avg: IngredienteAvgAggregateOutputType | null
    _sum: IngredienteSumAggregateOutputType | null
    _min: IngredienteMinAggregateOutputType | null
    _max: IngredienteMaxAggregateOutputType | null
  }

  export type IngredienteAvgAggregateOutputType = {
    id: number | null
  }

  export type IngredienteSumAggregateOutputType = {
    id: number | null
  }

  export type IngredienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    categoria: string | null
    classificacaoStatus: string | null
    dietasPermitidas: string | null
    restricoes: string | null
  }

  export type IngredienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    categoria: string | null
    classificacaoStatus: string | null
    dietasPermitidas: string | null
    restricoes: string | null
  }

  export type IngredienteCountAggregateOutputType = {
    id: number
    nome: number
    categoria: number
    classificacaoStatus: number
    dietasPermitidas: number
    restricoes: number
    _all: number
  }


  export type IngredienteAvgAggregateInputType = {
    id?: true
  }

  export type IngredienteSumAggregateInputType = {
    id?: true
  }

  export type IngredienteMinAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    classificacaoStatus?: true
    dietasPermitidas?: true
    restricoes?: true
  }

  export type IngredienteMaxAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    classificacaoStatus?: true
    dietasPermitidas?: true
    restricoes?: true
  }

  export type IngredienteCountAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    classificacaoStatus?: true
    dietasPermitidas?: true
    restricoes?: true
    _all?: true
  }

  export type IngredienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingrediente to aggregate.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredientes
    **/
    _count?: true | IngredienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredienteMaxAggregateInputType
  }

  export type GetIngredienteAggregateType<T extends IngredienteAggregateArgs> = {
        [P in keyof T & keyof AggregateIngrediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngrediente[P]>
      : GetScalarType<T[P], AggregateIngrediente[P]>
  }




  export type IngredienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredienteWhereInput
    orderBy?: IngredienteOrderByWithAggregationInput | IngredienteOrderByWithAggregationInput[]
    by: IngredienteScalarFieldEnum[] | IngredienteScalarFieldEnum
    having?: IngredienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredienteCountAggregateInputType | true
    _avg?: IngredienteAvgAggregateInputType
    _sum?: IngredienteSumAggregateInputType
    _min?: IngredienteMinAggregateInputType
    _max?: IngredienteMaxAggregateInputType
  }

  export type IngredienteGroupByOutputType = {
    id: number
    nome: string
    categoria: string
    classificacaoStatus: string
    dietasPermitidas: string | null
    restricoes: string | null
    _count: IngredienteCountAggregateOutputType | null
    _avg: IngredienteAvgAggregateOutputType | null
    _sum: IngredienteSumAggregateOutputType | null
    _min: IngredienteMinAggregateOutputType | null
    _max: IngredienteMaxAggregateOutputType | null
  }

  type GetIngredienteGroupByPayload<T extends IngredienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredienteGroupByOutputType[P]>
            : GetScalarType<T[P], IngredienteGroupByOutputType[P]>
        }
      >
    >


  export type IngredienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    classificacaoStatus?: boolean
    dietasPermitidas?: boolean
    restricoes?: boolean
    inventarios?: boolean | Ingrediente$inventariosArgs<ExtArgs>
    receitaIngredientes?: boolean | Ingrediente$receitaIngredientesArgs<ExtArgs>
    _count?: boolean | IngredienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingrediente"]>



  export type IngredienteSelectScalar = {
    id?: boolean
    nome?: boolean
    categoria?: boolean
    classificacaoStatus?: boolean
    dietasPermitidas?: boolean
    restricoes?: boolean
  }

  export type IngredienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "categoria" | "classificacaoStatus" | "dietasPermitidas" | "restricoes", ExtArgs["result"]["ingrediente"]>
  export type IngredienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventarios?: boolean | Ingrediente$inventariosArgs<ExtArgs>
    receitaIngredientes?: boolean | Ingrediente$receitaIngredientesArgs<ExtArgs>
    _count?: boolean | IngredienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $IngredientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingrediente"
    objects: {
      inventarios: Prisma.$InventarioPayload<ExtArgs>[]
      receitaIngredientes: Prisma.$ReceitaIngredientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      categoria: string
      classificacaoStatus: string
      dietasPermitidas: string | null
      restricoes: string | null
    }, ExtArgs["result"]["ingrediente"]>
    composites: {}
  }

  type IngredienteGetPayload<S extends boolean | null | undefined | IngredienteDefaultArgs> = $Result.GetResult<Prisma.$IngredientePayload, S>

  type IngredienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredienteCountAggregateInputType | true
    }

  export interface IngredienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingrediente'], meta: { name: 'Ingrediente' } }
    /**
     * Find zero or one Ingrediente that matches the filter.
     * @param {IngredienteFindUniqueArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredienteFindUniqueArgs>(args: SelectSubset<T, IngredienteFindUniqueArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredienteFindUniqueOrThrowArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredienteFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindFirstArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredienteFindFirstArgs>(args?: SelectSubset<T, IngredienteFindFirstArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindFirstOrThrowArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredienteFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredientes
     * const ingredientes = await prisma.ingrediente.findMany()
     * 
     * // Get first 10 Ingredientes
     * const ingredientes = await prisma.ingrediente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredienteWithIdOnly = await prisma.ingrediente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredienteFindManyArgs>(args?: SelectSubset<T, IngredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingrediente.
     * @param {IngredienteCreateArgs} args - Arguments to create a Ingrediente.
     * @example
     * // Create one Ingrediente
     * const Ingrediente = await prisma.ingrediente.create({
     *   data: {
     *     // ... data to create a Ingrediente
     *   }
     * })
     * 
     */
    create<T extends IngredienteCreateArgs>(args: SelectSubset<T, IngredienteCreateArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredientes.
     * @param {IngredienteCreateManyArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingrediente = await prisma.ingrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredienteCreateManyArgs>(args?: SelectSubset<T, IngredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ingrediente.
     * @param {IngredienteDeleteArgs} args - Arguments to delete one Ingrediente.
     * @example
     * // Delete one Ingrediente
     * const Ingrediente = await prisma.ingrediente.delete({
     *   where: {
     *     // ... filter to delete one Ingrediente
     *   }
     * })
     * 
     */
    delete<T extends IngredienteDeleteArgs>(args: SelectSubset<T, IngredienteDeleteArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingrediente.
     * @param {IngredienteUpdateArgs} args - Arguments to update one Ingrediente.
     * @example
     * // Update one Ingrediente
     * const ingrediente = await prisma.ingrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredienteUpdateArgs>(args: SelectSubset<T, IngredienteUpdateArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredientes.
     * @param {IngredienteDeleteManyArgs} args - Arguments to filter Ingredientes to delete.
     * @example
     * // Delete a few Ingredientes
     * const { count } = await prisma.ingrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredienteDeleteManyArgs>(args?: SelectSubset<T, IngredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredientes
     * const ingrediente = await prisma.ingrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredienteUpdateManyArgs>(args: SelectSubset<T, IngredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ingrediente.
     * @param {IngredienteUpsertArgs} args - Arguments to update or create a Ingrediente.
     * @example
     * // Update or create a Ingrediente
     * const ingrediente = await prisma.ingrediente.upsert({
     *   create: {
     *     // ... data to create a Ingrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingrediente we want to update
     *   }
     * })
     */
    upsert<T extends IngredienteUpsertArgs>(args: SelectSubset<T, IngredienteUpsertArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteCountArgs} args - Arguments to filter Ingredientes to count.
     * @example
     * // Count the number of Ingredientes
     * const count = await prisma.ingrediente.count({
     *   where: {
     *     // ... the filter for the Ingredientes we want to count
     *   }
     * })
    **/
    count<T extends IngredienteCountArgs>(
      args?: Subset<T, IngredienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredienteAggregateArgs>(args: Subset<T, IngredienteAggregateArgs>): Prisma.PrismaPromise<GetIngredienteAggregateType<T>>

    /**
     * Group by Ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredienteGroupByArgs['orderBy'] }
        : { orderBy?: IngredienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingrediente model
   */
  readonly fields: IngredienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingrediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventarios<T extends Ingrediente$inventariosArgs<ExtArgs> = {}>(args?: Subset<T, Ingrediente$inventariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receitaIngredientes<T extends Ingrediente$receitaIngredientesArgs<ExtArgs> = {}>(args?: Subset<T, Ingrediente$receitaIngredientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingrediente model
   */
  interface IngredienteFieldRefs {
    readonly id: FieldRef<"Ingrediente", 'Int'>
    readonly nome: FieldRef<"Ingrediente", 'String'>
    readonly categoria: FieldRef<"Ingrediente", 'String'>
    readonly classificacaoStatus: FieldRef<"Ingrediente", 'String'>
    readonly dietasPermitidas: FieldRef<"Ingrediente", 'String'>
    readonly restricoes: FieldRef<"Ingrediente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingrediente findUnique
   */
  export type IngredienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente findUniqueOrThrow
   */
  export type IngredienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente findFirst
   */
  export type IngredienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente findFirstOrThrow
   */
  export type IngredienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente findMany
   */
  export type IngredienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingredientes to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente create
   */
  export type IngredienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingrediente.
     */
    data: XOR<IngredienteCreateInput, IngredienteUncheckedCreateInput>
  }

  /**
   * Ingrediente createMany
   */
  export type IngredienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredientes.
     */
    data: IngredienteCreateManyInput | IngredienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingrediente update
   */
  export type IngredienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingrediente.
     */
    data: XOR<IngredienteUpdateInput, IngredienteUncheckedUpdateInput>
    /**
     * Choose, which Ingrediente to update.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente updateMany
   */
  export type IngredienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredientes.
     */
    data: XOR<IngredienteUpdateManyMutationInput, IngredienteUncheckedUpdateManyInput>
    /**
     * Filter which Ingredientes to update
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to update.
     */
    limit?: number
  }

  /**
   * Ingrediente upsert
   */
  export type IngredienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingrediente to update in case it exists.
     */
    where: IngredienteWhereUniqueInput
    /**
     * In case the Ingrediente found by the `where` argument doesn't exist, create a new Ingrediente with this data.
     */
    create: XOR<IngredienteCreateInput, IngredienteUncheckedCreateInput>
    /**
     * In case the Ingrediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredienteUpdateInput, IngredienteUncheckedUpdateInput>
  }

  /**
   * Ingrediente delete
   */
  export type IngredienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter which Ingrediente to delete.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente deleteMany
   */
  export type IngredienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredientes to delete
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to delete.
     */
    limit?: number
  }

  /**
   * Ingrediente.inventarios
   */
  export type Ingrediente$inventariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    cursor?: InventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Ingrediente.receitaIngredientes
   */
  export type Ingrediente$receitaIngredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    where?: ReceitaIngredienteWhereInput
    orderBy?: ReceitaIngredienteOrderByWithRelationInput | ReceitaIngredienteOrderByWithRelationInput[]
    cursor?: ReceitaIngredienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaIngredienteScalarFieldEnum | ReceitaIngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente without action
   */
  export type IngredienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
  }


  /**
   * Model Inventario
   */

  export type AggregateInventario = {
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  export type InventarioAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    ingredienteId: number | null
    quantidade: number | null
  }

  export type InventarioSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    ingredienteId: number | null
    quantidade: number | null
  }

  export type InventarioMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    ingredienteId: number | null
    quantidade: number | null
    unidade: string | null
  }

  export type InventarioMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    ingredienteId: number | null
    quantidade: number | null
    unidade: string | null
  }

  export type InventarioCountAggregateOutputType = {
    id: number
    usuarioId: number
    ingredienteId: number
    quantidade: number
    unidade: number
    _all: number
  }


  export type InventarioAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    ingredienteId?: true
    quantidade?: true
  }

  export type InventarioSumAggregateInputType = {
    id?: true
    usuarioId?: true
    ingredienteId?: true
    quantidade?: true
  }

  export type InventarioMinAggregateInputType = {
    id?: true
    usuarioId?: true
    ingredienteId?: true
    quantidade?: true
    unidade?: true
  }

  export type InventarioMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    ingredienteId?: true
    quantidade?: true
    unidade?: true
  }

  export type InventarioCountAggregateInputType = {
    id?: true
    usuarioId?: true
    ingredienteId?: true
    quantidade?: true
    unidade?: true
    _all?: true
  }

  export type InventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventario to aggregate.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventarios
    **/
    _count?: true | InventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventarioMaxAggregateInputType
  }

  export type GetInventarioAggregateType<T extends InventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateInventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventario[P]>
      : GetScalarType<T[P], AggregateInventario[P]>
  }




  export type InventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithAggregationInput | InventarioOrderByWithAggregationInput[]
    by: InventarioScalarFieldEnum[] | InventarioScalarFieldEnum
    having?: InventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventarioCountAggregateInputType | true
    _avg?: InventarioAvgAggregateInputType
    _sum?: InventarioSumAggregateInputType
    _min?: InventarioMinAggregateInputType
    _max?: InventarioMaxAggregateInputType
  }

  export type InventarioGroupByOutputType = {
    id: number
    usuarioId: number
    ingredienteId: number
    quantidade: number
    unidade: string
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  type GetInventarioGroupByPayload<T extends InventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventarioGroupByOutputType[P]>
            : GetScalarType<T[P], InventarioGroupByOutputType[P]>
        }
      >
    >


  export type InventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    ingredienteId?: boolean
    quantidade?: boolean
    unidade?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario"]>



  export type InventarioSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    ingredienteId?: boolean
    quantidade?: boolean
    unidade?: boolean
  }

  export type InventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "ingredienteId" | "quantidade" | "unidade", ExtArgs["result"]["inventario"]>
  export type InventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }

  export type $InventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      ingrediente: Prisma.$IngredientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      ingredienteId: number
      quantidade: number
      unidade: string
    }, ExtArgs["result"]["inventario"]>
    composites: {}
  }

  type InventarioGetPayload<S extends boolean | null | undefined | InventarioDefaultArgs> = $Result.GetResult<Prisma.$InventarioPayload, S>

  type InventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventarioCountAggregateInputType | true
    }

  export interface InventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventario'], meta: { name: 'Inventario' } }
    /**
     * Find zero or one Inventario that matches the filter.
     * @param {InventarioFindUniqueArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventarioFindUniqueArgs>(args: SelectSubset<T, InventarioFindUniqueArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventarioFindUniqueOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, InventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventarioFindFirstArgs>(args?: SelectSubset<T, InventarioFindFirstArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, InventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventarios
     * const inventarios = await prisma.inventario.findMany()
     * 
     * // Get first 10 Inventarios
     * const inventarios = await prisma.inventario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventarioWithIdOnly = await prisma.inventario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventarioFindManyArgs>(args?: SelectSubset<T, InventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventario.
     * @param {InventarioCreateArgs} args - Arguments to create a Inventario.
     * @example
     * // Create one Inventario
     * const Inventario = await prisma.inventario.create({
     *   data: {
     *     // ... data to create a Inventario
     *   }
     * })
     * 
     */
    create<T extends InventarioCreateArgs>(args: SelectSubset<T, InventarioCreateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventarios.
     * @param {InventarioCreateManyArgs} args - Arguments to create many Inventarios.
     * @example
     * // Create many Inventarios
     * const inventario = await prisma.inventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventarioCreateManyArgs>(args?: SelectSubset<T, InventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventario.
     * @param {InventarioDeleteArgs} args - Arguments to delete one Inventario.
     * @example
     * // Delete one Inventario
     * const Inventario = await prisma.inventario.delete({
     *   where: {
     *     // ... filter to delete one Inventario
     *   }
     * })
     * 
     */
    delete<T extends InventarioDeleteArgs>(args: SelectSubset<T, InventarioDeleteArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventario.
     * @param {InventarioUpdateArgs} args - Arguments to update one Inventario.
     * @example
     * // Update one Inventario
     * const inventario = await prisma.inventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventarioUpdateArgs>(args: SelectSubset<T, InventarioUpdateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventarios.
     * @param {InventarioDeleteManyArgs} args - Arguments to filter Inventarios to delete.
     * @example
     * // Delete a few Inventarios
     * const { count } = await prisma.inventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventarioDeleteManyArgs>(args?: SelectSubset<T, InventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventarios
     * const inventario = await prisma.inventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventarioUpdateManyArgs>(args: SelectSubset<T, InventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventario.
     * @param {InventarioUpsertArgs} args - Arguments to update or create a Inventario.
     * @example
     * // Update or create a Inventario
     * const inventario = await prisma.inventario.upsert({
     *   create: {
     *     // ... data to create a Inventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventario we want to update
     *   }
     * })
     */
    upsert<T extends InventarioUpsertArgs>(args: SelectSubset<T, InventarioUpsertArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioCountArgs} args - Arguments to filter Inventarios to count.
     * @example
     * // Count the number of Inventarios
     * const count = await prisma.inventario.count({
     *   where: {
     *     // ... the filter for the Inventarios we want to count
     *   }
     * })
    **/
    count<T extends InventarioCountArgs>(
      args?: Subset<T, InventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventarioAggregateArgs>(args: Subset<T, InventarioAggregateArgs>): Prisma.PrismaPromise<GetInventarioAggregateType<T>>

    /**
     * Group by Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventarioGroupByArgs['orderBy'] }
        : { orderBy?: InventarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventario model
   */
  readonly fields: InventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingrediente<T extends IngredienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredienteDefaultArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventario model
   */
  interface InventarioFieldRefs {
    readonly id: FieldRef<"Inventario", 'Int'>
    readonly usuarioId: FieldRef<"Inventario", 'Int'>
    readonly ingredienteId: FieldRef<"Inventario", 'Int'>
    readonly quantidade: FieldRef<"Inventario", 'Float'>
    readonly unidade: FieldRef<"Inventario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inventario findUnique
   */
  export type InventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findUniqueOrThrow
   */
  export type InventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findFirst
   */
  export type InventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findFirstOrThrow
   */
  export type InventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findMany
   */
  export type InventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventarios to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario create
   */
  export type InventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventario.
     */
    data: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
  }

  /**
   * Inventario createMany
   */
  export type InventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventarios.
     */
    data: InventarioCreateManyInput | InventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventario update
   */
  export type InventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventario.
     */
    data: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
    /**
     * Choose, which Inventario to update.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario updateMany
   */
  export type InventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventarios.
     */
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyInput>
    /**
     * Filter which Inventarios to update
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to update.
     */
    limit?: number
  }

  /**
   * Inventario upsert
   */
  export type InventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventario to update in case it exists.
     */
    where: InventarioWhereUniqueInput
    /**
     * In case the Inventario found by the `where` argument doesn't exist, create a new Inventario with this data.
     */
    create: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
    /**
     * In case the Inventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
  }

  /**
   * Inventario delete
   */
  export type InventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter which Inventario to delete.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario deleteMany
   */
  export type InventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventarios to delete
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to delete.
     */
    limit?: number
  }

  /**
   * Inventario without action
   */
  export type InventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
  }


  /**
   * Model Receita
   */

  export type AggregateReceita = {
    _count: ReceitaCountAggregateOutputType | null
    _avg: ReceitaAvgAggregateOutputType | null
    _sum: ReceitaSumAggregateOutputType | null
    _min: ReceitaMinAggregateOutputType | null
    _max: ReceitaMaxAggregateOutputType | null
  }

  export type ReceitaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    tempoEstimado: number | null
    porcoes: number | null
  }

  export type ReceitaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    tempoEstimado: number | null
    porcoes: number | null
  }

  export type ReceitaMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    titulo: string | null
    modoPreparo: string | null
    tempoEstimado: number | null
    porcoes: number | null
    imagem: string | null
    publica: boolean | null
    geradaPorIA: boolean | null
    criadaEm: Date | null
    atualizadaEm: Date | null
  }

  export type ReceitaMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    titulo: string | null
    modoPreparo: string | null
    tempoEstimado: number | null
    porcoes: number | null
    imagem: string | null
    publica: boolean | null
    geradaPorIA: boolean | null
    criadaEm: Date | null
    atualizadaEm: Date | null
  }

  export type ReceitaCountAggregateOutputType = {
    id: number
    usuarioId: number
    titulo: number
    modoPreparo: number
    tempoEstimado: number
    porcoes: number
    imagem: number
    publica: number
    geradaPorIA: number
    criadaEm: number
    atualizadaEm: number
    _all: number
  }


  export type ReceitaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    tempoEstimado?: true
    porcoes?: true
  }

  export type ReceitaSumAggregateInputType = {
    id?: true
    usuarioId?: true
    tempoEstimado?: true
    porcoes?: true
  }

  export type ReceitaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    titulo?: true
    modoPreparo?: true
    tempoEstimado?: true
    porcoes?: true
    imagem?: true
    publica?: true
    geradaPorIA?: true
    criadaEm?: true
    atualizadaEm?: true
  }

  export type ReceitaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    titulo?: true
    modoPreparo?: true
    tempoEstimado?: true
    porcoes?: true
    imagem?: true
    publica?: true
    geradaPorIA?: true
    criadaEm?: true
    atualizadaEm?: true
  }

  export type ReceitaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    titulo?: true
    modoPreparo?: true
    tempoEstimado?: true
    porcoes?: true
    imagem?: true
    publica?: true
    geradaPorIA?: true
    criadaEm?: true
    atualizadaEm?: true
    _all?: true
  }

  export type ReceitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receita to aggregate.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receitas
    **/
    _count?: true | ReceitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaMaxAggregateInputType
  }

  export type GetReceitaAggregateType<T extends ReceitaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceita[P]>
      : GetScalarType<T[P], AggregateReceita[P]>
  }




  export type ReceitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaWhereInput
    orderBy?: ReceitaOrderByWithAggregationInput | ReceitaOrderByWithAggregationInput[]
    by: ReceitaScalarFieldEnum[] | ReceitaScalarFieldEnum
    having?: ReceitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaCountAggregateInputType | true
    _avg?: ReceitaAvgAggregateInputType
    _sum?: ReceitaSumAggregateInputType
    _min?: ReceitaMinAggregateInputType
    _max?: ReceitaMaxAggregateInputType
  }

  export type ReceitaGroupByOutputType = {
    id: number
    usuarioId: number
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes: number
    imagem: string | null
    publica: boolean
    geradaPorIA: boolean
    criadaEm: Date
    atualizadaEm: Date
    _count: ReceitaCountAggregateOutputType | null
    _avg: ReceitaAvgAggregateOutputType | null
    _sum: ReceitaSumAggregateOutputType | null
    _min: ReceitaMinAggregateOutputType | null
    _max: ReceitaMaxAggregateOutputType | null
  }

  type GetReceitaGroupByPayload<T extends ReceitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    titulo?: boolean
    modoPreparo?: boolean
    tempoEstimado?: boolean
    porcoes?: boolean
    imagem?: boolean
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: boolean
    atualizadaEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ingredientes?: boolean | Receita$ingredientesArgs<ExtArgs>
    postagens?: boolean | Receita$postagensArgs<ExtArgs>
    comentarios?: boolean | Receita$comentariosArgs<ExtArgs>
    favoritos?: boolean | Receita$favoritosArgs<ExtArgs>
    _count?: boolean | ReceitaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receita"]>



  export type ReceitaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    titulo?: boolean
    modoPreparo?: boolean
    tempoEstimado?: boolean
    porcoes?: boolean
    imagem?: boolean
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: boolean
    atualizadaEm?: boolean
  }

  export type ReceitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "titulo" | "modoPreparo" | "tempoEstimado" | "porcoes" | "imagem" | "publica" | "geradaPorIA" | "criadaEm" | "atualizadaEm", ExtArgs["result"]["receita"]>
  export type ReceitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ingredientes?: boolean | Receita$ingredientesArgs<ExtArgs>
    postagens?: boolean | Receita$postagensArgs<ExtArgs>
    comentarios?: boolean | Receita$comentariosArgs<ExtArgs>
    favoritos?: boolean | Receita$favoritosArgs<ExtArgs>
    _count?: boolean | ReceitaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReceitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receita"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      ingredientes: Prisma.$ReceitaIngredientePayload<ExtArgs>[]
      postagens: Prisma.$PostagemPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      titulo: string
      modoPreparo: string
      tempoEstimado: number
      porcoes: number
      imagem: string | null
      publica: boolean
      geradaPorIA: boolean
      criadaEm: Date
      atualizadaEm: Date
    }, ExtArgs["result"]["receita"]>
    composites: {}
  }

  type ReceitaGetPayload<S extends boolean | null | undefined | ReceitaDefaultArgs> = $Result.GetResult<Prisma.$ReceitaPayload, S>

  type ReceitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaCountAggregateInputType | true
    }

  export interface ReceitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receita'], meta: { name: 'Receita' } }
    /**
     * Find zero or one Receita that matches the filter.
     * @param {ReceitaFindUniqueArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaFindUniqueArgs>(args: SelectSubset<T, ReceitaFindUniqueArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaFindUniqueOrThrowArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindFirstArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaFindFirstArgs>(args?: SelectSubset<T, ReceitaFindFirstArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindFirstOrThrowArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receitas
     * const receitas = await prisma.receita.findMany()
     * 
     * // Get first 10 Receitas
     * const receitas = await prisma.receita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitaWithIdOnly = await prisma.receita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceitaFindManyArgs>(args?: SelectSubset<T, ReceitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receita.
     * @param {ReceitaCreateArgs} args - Arguments to create a Receita.
     * @example
     * // Create one Receita
     * const Receita = await prisma.receita.create({
     *   data: {
     *     // ... data to create a Receita
     *   }
     * })
     * 
     */
    create<T extends ReceitaCreateArgs>(args: SelectSubset<T, ReceitaCreateArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receitas.
     * @param {ReceitaCreateManyArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receita = await prisma.receita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaCreateManyArgs>(args?: SelectSubset<T, ReceitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Receita.
     * @param {ReceitaDeleteArgs} args - Arguments to delete one Receita.
     * @example
     * // Delete one Receita
     * const Receita = await prisma.receita.delete({
     *   where: {
     *     // ... filter to delete one Receita
     *   }
     * })
     * 
     */
    delete<T extends ReceitaDeleteArgs>(args: SelectSubset<T, ReceitaDeleteArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receita.
     * @param {ReceitaUpdateArgs} args - Arguments to update one Receita.
     * @example
     * // Update one Receita
     * const receita = await prisma.receita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaUpdateArgs>(args: SelectSubset<T, ReceitaUpdateArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receitas.
     * @param {ReceitaDeleteManyArgs} args - Arguments to filter Receitas to delete.
     * @example
     * // Delete a few Receitas
     * const { count } = await prisma.receita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaDeleteManyArgs>(args?: SelectSubset<T, ReceitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receitas
     * const receita = await prisma.receita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaUpdateManyArgs>(args: SelectSubset<T, ReceitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Receita.
     * @param {ReceitaUpsertArgs} args - Arguments to update or create a Receita.
     * @example
     * // Update or create a Receita
     * const receita = await prisma.receita.upsert({
     *   create: {
     *     // ... data to create a Receita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receita we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaUpsertArgs>(args: SelectSubset<T, ReceitaUpsertArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaCountArgs} args - Arguments to filter Receitas to count.
     * @example
     * // Count the number of Receitas
     * const count = await prisma.receita.count({
     *   where: {
     *     // ... the filter for the Receitas we want to count
     *   }
     * })
    **/
    count<T extends ReceitaCountArgs>(
      args?: Subset<T, ReceitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceitaAggregateArgs>(args: Subset<T, ReceitaAggregateArgs>): Prisma.PrismaPromise<GetReceitaAggregateType<T>>

    /**
     * Group by Receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receita model
   */
  readonly fields: ReceitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredientes<T extends Receita$ingredientesArgs<ExtArgs> = {}>(args?: Subset<T, Receita$ingredientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postagens<T extends Receita$postagensArgs<ExtArgs> = {}>(args?: Subset<T, Receita$postagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Receita$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Receita$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends Receita$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Receita$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Receita model
   */
  interface ReceitaFieldRefs {
    readonly id: FieldRef<"Receita", 'Int'>
    readonly usuarioId: FieldRef<"Receita", 'Int'>
    readonly titulo: FieldRef<"Receita", 'String'>
    readonly modoPreparo: FieldRef<"Receita", 'String'>
    readonly tempoEstimado: FieldRef<"Receita", 'Int'>
    readonly porcoes: FieldRef<"Receita", 'Int'>
    readonly imagem: FieldRef<"Receita", 'String'>
    readonly publica: FieldRef<"Receita", 'Boolean'>
    readonly geradaPorIA: FieldRef<"Receita", 'Boolean'>
    readonly criadaEm: FieldRef<"Receita", 'DateTime'>
    readonly atualizadaEm: FieldRef<"Receita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Receita findUnique
   */
  export type ReceitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita findUniqueOrThrow
   */
  export type ReceitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita findFirst
   */
  export type ReceitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita findFirstOrThrow
   */
  export type ReceitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita findMany
   */
  export type ReceitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receitas to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita create
   */
  export type ReceitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Receita.
     */
    data: XOR<ReceitaCreateInput, ReceitaUncheckedCreateInput>
  }

  /**
   * Receita createMany
   */
  export type ReceitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receitas.
     */
    data: ReceitaCreateManyInput | ReceitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receita update
   */
  export type ReceitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Receita.
     */
    data: XOR<ReceitaUpdateInput, ReceitaUncheckedUpdateInput>
    /**
     * Choose, which Receita to update.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita updateMany
   */
  export type ReceitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receitas.
     */
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyInput>
    /**
     * Filter which Receitas to update
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to update.
     */
    limit?: number
  }

  /**
   * Receita upsert
   */
  export type ReceitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Receita to update in case it exists.
     */
    where: ReceitaWhereUniqueInput
    /**
     * In case the Receita found by the `where` argument doesn't exist, create a new Receita with this data.
     */
    create: XOR<ReceitaCreateInput, ReceitaUncheckedCreateInput>
    /**
     * In case the Receita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaUpdateInput, ReceitaUncheckedUpdateInput>
  }

  /**
   * Receita delete
   */
  export type ReceitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter which Receita to delete.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita deleteMany
   */
  export type ReceitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receitas to delete
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to delete.
     */
    limit?: number
  }

  /**
   * Receita.ingredientes
   */
  export type Receita$ingredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    where?: ReceitaIngredienteWhereInput
    orderBy?: ReceitaIngredienteOrderByWithRelationInput | ReceitaIngredienteOrderByWithRelationInput[]
    cursor?: ReceitaIngredienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaIngredienteScalarFieldEnum | ReceitaIngredienteScalarFieldEnum[]
  }

  /**
   * Receita.postagens
   */
  export type Receita$postagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    where?: PostagemWhereInput
    orderBy?: PostagemOrderByWithRelationInput | PostagemOrderByWithRelationInput[]
    cursor?: PostagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostagemScalarFieldEnum | PostagemScalarFieldEnum[]
  }

  /**
   * Receita.comentarios
   */
  export type Receita$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Receita.favoritos
   */
  export type Receita$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Receita without action
   */
  export type ReceitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
  }


  /**
   * Model Favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _avg: FavoritoAvgAggregateOutputType | null
    _sum: FavoritoSumAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    receitaId: number | null
  }

  export type FavoritoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    receitaId: number | null
  }

  export type FavoritoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    receitaId: number | null
    criadoEm: Date | null
  }

  export type FavoritoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    receitaId: number | null
    criadoEm: Date | null
  }

  export type FavoritoCountAggregateOutputType = {
    id: number
    usuarioId: number
    receitaId: number
    criadoEm: number
    _all: number
  }


  export type FavoritoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
  }

  export type FavoritoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
  }

  export type FavoritoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
    criadoEm?: true
  }

  export type FavoritoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
    criadoEm?: true
  }

  export type FavoritoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
    criadoEm?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorito to aggregate.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type FavoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithAggregationInput | FavoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: FavoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _avg?: FavoritoAvgAggregateInputType
    _sum?: FavoritoSumAggregateInputType
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    id: number
    usuarioId: number
    receitaId: number
    criadoEm: Date
    _count: FavoritoCountAggregateOutputType | null
    _avg: FavoritoAvgAggregateOutputType | null
    _sum: FavoritoSumAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends FavoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type FavoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    receitaId?: boolean
    criadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>



  export type FavoritoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    receitaId?: boolean
    criadoEm?: boolean
  }

  export type FavoritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "receitaId" | "criadoEm", ExtArgs["result"]["favorito"]>
  export type FavoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }

  export type $FavoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorito"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      receita: Prisma.$ReceitaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      receitaId: number
      criadoEm: Date
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type FavoritoGetPayload<S extends boolean | null | undefined | FavoritoDefaultArgs> = $Result.GetResult<Prisma.$FavoritoPayload, S>

  type FavoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface FavoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorito'], meta: { name: 'Favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {FavoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritoFindUniqueArgs>(args: SelectSubset<T, FavoritoFindUniqueArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritoFindFirstArgs>(args?: SelectSubset<T, FavoritoFindFirstArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritoWithIdOnly = await prisma.favorito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritoFindManyArgs>(args?: SelectSubset<T, FavoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorito.
     * @param {FavoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends FavoritoCreateArgs>(args: SelectSubset<T, FavoritoCreateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {FavoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritoCreateManyArgs>(args?: SelectSubset<T, FavoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favorito.
     * @param {FavoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends FavoritoDeleteArgs>(args: SelectSubset<T, FavoritoDeleteArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorito.
     * @param {FavoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritoUpdateArgs>(args: SelectSubset<T, FavoritoUpdateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritoDeleteManyArgs>(args?: SelectSubset<T, FavoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritoUpdateManyArgs>(args: SelectSubset<T, FavoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorito.
     * @param {FavoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends FavoritoUpsertArgs>(args: SelectSubset<T, FavoritoUpsertArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritoCountArgs>(
      args?: Subset<T, FavoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritoGroupByArgs['orderBy'] }
        : { orderBy?: FavoritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorito model
   */
  readonly fields: FavoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorito model
   */
  interface FavoritoFieldRefs {
    readonly id: FieldRef<"Favorito", 'Int'>
    readonly usuarioId: FieldRef<"Favorito", 'Int'>
    readonly receitaId: FieldRef<"Favorito", 'Int'>
    readonly criadoEm: FieldRef<"Favorito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorito findUnique
   */
  export type FavoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findUniqueOrThrow
   */
  export type FavoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findFirst
   */
  export type FavoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findFirstOrThrow
   */
  export type FavoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findMany
   */
  export type FavoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito create
   */
  export type FavoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorito.
     */
    data: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
  }

  /**
   * Favorito createMany
   */
  export type FavoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorito update
   */
  export type FavoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorito.
     */
    data: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
    /**
     * Choose, which Favorito to update.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito updateMany
   */
  export type FavoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
  }

  /**
   * Favorito upsert
   */
  export type FavoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorito to update in case it exists.
     */
    where: FavoritoWhereUniqueInput
    /**
     * In case the Favorito found by the `where` argument doesn't exist, create a new Favorito with this data.
     */
    create: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
    /**
     * In case the Favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
  }

  /**
   * Favorito delete
   */
  export type FavoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter which Favorito to delete.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito deleteMany
   */
  export type FavoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to delete.
     */
    limit?: number
  }

  /**
   * Favorito without action
   */
  export type FavoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
  }


  /**
   * Model ReceitaGeracao
   */

  export type AggregateReceitaGeracao = {
    _count: ReceitaGeracaoCountAggregateOutputType | null
    _avg: ReceitaGeracaoAvgAggregateOutputType | null
    _sum: ReceitaGeracaoSumAggregateOutputType | null
    _min: ReceitaGeracaoMinAggregateOutputType | null
    _max: ReceitaGeracaoMaxAggregateOutputType | null
  }

  export type ReceitaGeracaoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    receitaId: number | null
    duracaoMs: number | null
  }

  export type ReceitaGeracaoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    receitaId: number | null
    duracaoMs: number | null
  }

  export type ReceitaGeracaoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    chaveCache: string | null
    modelo: string | null
    status: string | null
    erroCodigo: string | null
    receitaId: number | null
    cacheExpiraEm: Date | null
    rascunhoExpiraEm: Date | null
    criadaEm: Date | null
    finalizadaEm: Date | null
    duracaoMs: number | null
    reservaExpiraEm: Date | null
  }

  export type ReceitaGeracaoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    chaveCache: string | null
    modelo: string | null
    status: string | null
    erroCodigo: string | null
    receitaId: number | null
    cacheExpiraEm: Date | null
    rascunhoExpiraEm: Date | null
    criadaEm: Date | null
    finalizadaEm: Date | null
    duracaoMs: number | null
    reservaExpiraEm: Date | null
  }

  export type ReceitaGeracaoCountAggregateOutputType = {
    id: number
    usuarioId: number
    chaveCache: number
    modelo: number
    status: number
    payload: number
    consumo: number
    erroCodigo: number
    receitaId: number
    cacheExpiraEm: number
    rascunhoExpiraEm: number
    criadaEm: number
    finalizadaEm: number
    duracaoMs: number
    reservaExpiraEm: number
    _all: number
  }


  export type ReceitaGeracaoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
    duracaoMs?: true
  }

  export type ReceitaGeracaoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
    duracaoMs?: true
  }

  export type ReceitaGeracaoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    chaveCache?: true
    modelo?: true
    status?: true
    erroCodigo?: true
    receitaId?: true
    cacheExpiraEm?: true
    rascunhoExpiraEm?: true
    criadaEm?: true
    finalizadaEm?: true
    duracaoMs?: true
    reservaExpiraEm?: true
  }

  export type ReceitaGeracaoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    chaveCache?: true
    modelo?: true
    status?: true
    erroCodigo?: true
    receitaId?: true
    cacheExpiraEm?: true
    rascunhoExpiraEm?: true
    criadaEm?: true
    finalizadaEm?: true
    duracaoMs?: true
    reservaExpiraEm?: true
  }

  export type ReceitaGeracaoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    chaveCache?: true
    modelo?: true
    status?: true
    payload?: true
    consumo?: true
    erroCodigo?: true
    receitaId?: true
    cacheExpiraEm?: true
    rascunhoExpiraEm?: true
    criadaEm?: true
    finalizadaEm?: true
    duracaoMs?: true
    reservaExpiraEm?: true
    _all?: true
  }

  export type ReceitaGeracaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaGeracao to aggregate.
     */
    where?: ReceitaGeracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaGeracaos to fetch.
     */
    orderBy?: ReceitaGeracaoOrderByWithRelationInput | ReceitaGeracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaGeracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaGeracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaGeracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceitaGeracaos
    **/
    _count?: true | ReceitaGeracaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitaGeracaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitaGeracaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaGeracaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaGeracaoMaxAggregateInputType
  }

  export type GetReceitaGeracaoAggregateType<T extends ReceitaGeracaoAggregateArgs> = {
        [P in keyof T & keyof AggregateReceitaGeracao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceitaGeracao[P]>
      : GetScalarType<T[P], AggregateReceitaGeracao[P]>
  }




  export type ReceitaGeracaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaGeracaoWhereInput
    orderBy?: ReceitaGeracaoOrderByWithAggregationInput | ReceitaGeracaoOrderByWithAggregationInput[]
    by: ReceitaGeracaoScalarFieldEnum[] | ReceitaGeracaoScalarFieldEnum
    having?: ReceitaGeracaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaGeracaoCountAggregateInputType | true
    _avg?: ReceitaGeracaoAvgAggregateInputType
    _sum?: ReceitaGeracaoSumAggregateInputType
    _min?: ReceitaGeracaoMinAggregateInputType
    _max?: ReceitaGeracaoMaxAggregateInputType
  }

  export type ReceitaGeracaoGroupByOutputType = {
    id: number
    usuarioId: number
    chaveCache: string
    modelo: string
    status: string
    payload: JsonValue | null
    consumo: JsonValue | null
    erroCodigo: string | null
    receitaId: number | null
    cacheExpiraEm: Date | null
    rascunhoExpiraEm: Date | null
    criadaEm: Date
    finalizadaEm: Date | null
    duracaoMs: number | null
    reservaExpiraEm: Date | null
    _count: ReceitaGeracaoCountAggregateOutputType | null
    _avg: ReceitaGeracaoAvgAggregateOutputType | null
    _sum: ReceitaGeracaoSumAggregateOutputType | null
    _min: ReceitaGeracaoMinAggregateOutputType | null
    _max: ReceitaGeracaoMaxAggregateOutputType | null
  }

  type GetReceitaGeracaoGroupByPayload<T extends ReceitaGeracaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaGeracaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaGeracaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaGeracaoGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaGeracaoGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaGeracaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    chaveCache?: boolean
    modelo?: boolean
    status?: boolean
    payload?: boolean
    consumo?: boolean
    erroCodigo?: boolean
    receitaId?: boolean
    cacheExpiraEm?: boolean
    rascunhoExpiraEm?: boolean
    criadaEm?: boolean
    finalizadaEm?: boolean
    duracaoMs?: boolean
    reservaExpiraEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaGeracao"]>



  export type ReceitaGeracaoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    chaveCache?: boolean
    modelo?: boolean
    status?: boolean
    payload?: boolean
    consumo?: boolean
    erroCodigo?: boolean
    receitaId?: boolean
    cacheExpiraEm?: boolean
    rascunhoExpiraEm?: boolean
    criadaEm?: boolean
    finalizadaEm?: boolean
    duracaoMs?: boolean
    reservaExpiraEm?: boolean
  }

  export type ReceitaGeracaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "chaveCache" | "modelo" | "status" | "payload" | "consumo" | "erroCodigo" | "receitaId" | "cacheExpiraEm" | "rascunhoExpiraEm" | "criadaEm" | "finalizadaEm" | "duracaoMs" | "reservaExpiraEm", ExtArgs["result"]["receitaGeracao"]>
  export type ReceitaGeracaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ReceitaGeracaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceitaGeracao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      chaveCache: string
      modelo: string
      status: string
      payload: Prisma.JsonValue | null
      consumo: Prisma.JsonValue | null
      erroCodigo: string | null
      receitaId: number | null
      cacheExpiraEm: Date | null
      rascunhoExpiraEm: Date | null
      criadaEm: Date
      finalizadaEm: Date | null
      duracaoMs: number | null
      reservaExpiraEm: Date | null
    }, ExtArgs["result"]["receitaGeracao"]>
    composites: {}
  }

  type ReceitaGeracaoGetPayload<S extends boolean | null | undefined | ReceitaGeracaoDefaultArgs> = $Result.GetResult<Prisma.$ReceitaGeracaoPayload, S>

  type ReceitaGeracaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaGeracaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaGeracaoCountAggregateInputType | true
    }

  export interface ReceitaGeracaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceitaGeracao'], meta: { name: 'ReceitaGeracao' } }
    /**
     * Find zero or one ReceitaGeracao that matches the filter.
     * @param {ReceitaGeracaoFindUniqueArgs} args - Arguments to find a ReceitaGeracao
     * @example
     * // Get one ReceitaGeracao
     * const receitaGeracao = await prisma.receitaGeracao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaGeracaoFindUniqueArgs>(args: SelectSubset<T, ReceitaGeracaoFindUniqueArgs<ExtArgs>>): Prisma__ReceitaGeracaoClient<$Result.GetResult<Prisma.$ReceitaGeracaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceitaGeracao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaGeracaoFindUniqueOrThrowArgs} args - Arguments to find a ReceitaGeracao
     * @example
     * // Get one ReceitaGeracao
     * const receitaGeracao = await prisma.receitaGeracao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaGeracaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaGeracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaGeracaoClient<$Result.GetResult<Prisma.$ReceitaGeracaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaGeracao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGeracaoFindFirstArgs} args - Arguments to find a ReceitaGeracao
     * @example
     * // Get one ReceitaGeracao
     * const receitaGeracao = await prisma.receitaGeracao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaGeracaoFindFirstArgs>(args?: SelectSubset<T, ReceitaGeracaoFindFirstArgs<ExtArgs>>): Prisma__ReceitaGeracaoClient<$Result.GetResult<Prisma.$ReceitaGeracaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaGeracao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGeracaoFindFirstOrThrowArgs} args - Arguments to find a ReceitaGeracao
     * @example
     * // Get one ReceitaGeracao
     * const receitaGeracao = await prisma.receitaGeracao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaGeracaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaGeracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaGeracaoClient<$Result.GetResult<Prisma.$ReceitaGeracaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceitaGeracaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGeracaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceitaGeracaos
     * const receitaGeracaos = await prisma.receitaGeracao.findMany()
     * 
     * // Get first 10 ReceitaGeracaos
     * const receitaGeracaos = await prisma.receitaGeracao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitaGeracaoWithIdOnly = await prisma.receitaGeracao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceitaGeracaoFindManyArgs>(args?: SelectSubset<T, ReceitaGeracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaGeracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceitaGeracao.
     * @param {ReceitaGeracaoCreateArgs} args - Arguments to create a ReceitaGeracao.
     * @example
     * // Create one ReceitaGeracao
     * const ReceitaGeracao = await prisma.receitaGeracao.create({
     *   data: {
     *     // ... data to create a ReceitaGeracao
     *   }
     * })
     * 
     */
    create<T extends ReceitaGeracaoCreateArgs>(args: SelectSubset<T, ReceitaGeracaoCreateArgs<ExtArgs>>): Prisma__ReceitaGeracaoClient<$Result.GetResult<Prisma.$ReceitaGeracaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceitaGeracaos.
     * @param {ReceitaGeracaoCreateManyArgs} args - Arguments to create many ReceitaGeracaos.
     * @example
     * // Create many ReceitaGeracaos
     * const receitaGeracao = await prisma.receitaGeracao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaGeracaoCreateManyArgs>(args?: SelectSubset<T, ReceitaGeracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReceitaGeracao.
     * @param {ReceitaGeracaoDeleteArgs} args - Arguments to delete one ReceitaGeracao.
     * @example
     * // Delete one ReceitaGeracao
     * const ReceitaGeracao = await prisma.receitaGeracao.delete({
     *   where: {
     *     // ... filter to delete one ReceitaGeracao
     *   }
     * })
     * 
     */
    delete<T extends ReceitaGeracaoDeleteArgs>(args: SelectSubset<T, ReceitaGeracaoDeleteArgs<ExtArgs>>): Prisma__ReceitaGeracaoClient<$Result.GetResult<Prisma.$ReceitaGeracaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceitaGeracao.
     * @param {ReceitaGeracaoUpdateArgs} args - Arguments to update one ReceitaGeracao.
     * @example
     * // Update one ReceitaGeracao
     * const receitaGeracao = await prisma.receitaGeracao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaGeracaoUpdateArgs>(args: SelectSubset<T, ReceitaGeracaoUpdateArgs<ExtArgs>>): Prisma__ReceitaGeracaoClient<$Result.GetResult<Prisma.$ReceitaGeracaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceitaGeracaos.
     * @param {ReceitaGeracaoDeleteManyArgs} args - Arguments to filter ReceitaGeracaos to delete.
     * @example
     * // Delete a few ReceitaGeracaos
     * const { count } = await prisma.receitaGeracao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaGeracaoDeleteManyArgs>(args?: SelectSubset<T, ReceitaGeracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaGeracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGeracaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceitaGeracaos
     * const receitaGeracao = await prisma.receitaGeracao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaGeracaoUpdateManyArgs>(args: SelectSubset<T, ReceitaGeracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReceitaGeracao.
     * @param {ReceitaGeracaoUpsertArgs} args - Arguments to update or create a ReceitaGeracao.
     * @example
     * // Update or create a ReceitaGeracao
     * const receitaGeracao = await prisma.receitaGeracao.upsert({
     *   create: {
     *     // ... data to create a ReceitaGeracao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceitaGeracao we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaGeracaoUpsertArgs>(args: SelectSubset<T, ReceitaGeracaoUpsertArgs<ExtArgs>>): Prisma__ReceitaGeracaoClient<$Result.GetResult<Prisma.$ReceitaGeracaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceitaGeracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGeracaoCountArgs} args - Arguments to filter ReceitaGeracaos to count.
     * @example
     * // Count the number of ReceitaGeracaos
     * const count = await prisma.receitaGeracao.count({
     *   where: {
     *     // ... the filter for the ReceitaGeracaos we want to count
     *   }
     * })
    **/
    count<T extends ReceitaGeracaoCountArgs>(
      args?: Subset<T, ReceitaGeracaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaGeracaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceitaGeracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGeracaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceitaGeracaoAggregateArgs>(args: Subset<T, ReceitaGeracaoAggregateArgs>): Prisma.PrismaPromise<GetReceitaGeracaoAggregateType<T>>

    /**
     * Group by ReceitaGeracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGeracaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceitaGeracaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaGeracaoGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaGeracaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceitaGeracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaGeracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceitaGeracao model
   */
  readonly fields: ReceitaGeracaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceitaGeracao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaGeracaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReceitaGeracao model
   */
  interface ReceitaGeracaoFieldRefs {
    readonly id: FieldRef<"ReceitaGeracao", 'Int'>
    readonly usuarioId: FieldRef<"ReceitaGeracao", 'Int'>
    readonly chaveCache: FieldRef<"ReceitaGeracao", 'String'>
    readonly modelo: FieldRef<"ReceitaGeracao", 'String'>
    readonly status: FieldRef<"ReceitaGeracao", 'String'>
    readonly payload: FieldRef<"ReceitaGeracao", 'Json'>
    readonly consumo: FieldRef<"ReceitaGeracao", 'Json'>
    readonly erroCodigo: FieldRef<"ReceitaGeracao", 'String'>
    readonly receitaId: FieldRef<"ReceitaGeracao", 'Int'>
    readonly cacheExpiraEm: FieldRef<"ReceitaGeracao", 'DateTime'>
    readonly rascunhoExpiraEm: FieldRef<"ReceitaGeracao", 'DateTime'>
    readonly criadaEm: FieldRef<"ReceitaGeracao", 'DateTime'>
    readonly finalizadaEm: FieldRef<"ReceitaGeracao", 'DateTime'>
    readonly duracaoMs: FieldRef<"ReceitaGeracao", 'Int'>
    readonly reservaExpiraEm: FieldRef<"ReceitaGeracao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReceitaGeracao findUnique
   */
  export type ReceitaGeracaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaGeracao to fetch.
     */
    where: ReceitaGeracaoWhereUniqueInput
  }

  /**
   * ReceitaGeracao findUniqueOrThrow
   */
  export type ReceitaGeracaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaGeracao to fetch.
     */
    where: ReceitaGeracaoWhereUniqueInput
  }

  /**
   * ReceitaGeracao findFirst
   */
  export type ReceitaGeracaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaGeracao to fetch.
     */
    where?: ReceitaGeracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaGeracaos to fetch.
     */
    orderBy?: ReceitaGeracaoOrderByWithRelationInput | ReceitaGeracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaGeracaos.
     */
    cursor?: ReceitaGeracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaGeracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaGeracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaGeracaos.
     */
    distinct?: ReceitaGeracaoScalarFieldEnum | ReceitaGeracaoScalarFieldEnum[]
  }

  /**
   * ReceitaGeracao findFirstOrThrow
   */
  export type ReceitaGeracaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaGeracao to fetch.
     */
    where?: ReceitaGeracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaGeracaos to fetch.
     */
    orderBy?: ReceitaGeracaoOrderByWithRelationInput | ReceitaGeracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaGeracaos.
     */
    cursor?: ReceitaGeracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaGeracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaGeracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaGeracaos.
     */
    distinct?: ReceitaGeracaoScalarFieldEnum | ReceitaGeracaoScalarFieldEnum[]
  }

  /**
   * ReceitaGeracao findMany
   */
  export type ReceitaGeracaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaGeracaos to fetch.
     */
    where?: ReceitaGeracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaGeracaos to fetch.
     */
    orderBy?: ReceitaGeracaoOrderByWithRelationInput | ReceitaGeracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceitaGeracaos.
     */
    cursor?: ReceitaGeracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaGeracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaGeracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaGeracaos.
     */
    distinct?: ReceitaGeracaoScalarFieldEnum | ReceitaGeracaoScalarFieldEnum[]
  }

  /**
   * ReceitaGeracao create
   */
  export type ReceitaGeracaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceitaGeracao.
     */
    data: XOR<ReceitaGeracaoCreateInput, ReceitaGeracaoUncheckedCreateInput>
  }

  /**
   * ReceitaGeracao createMany
   */
  export type ReceitaGeracaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceitaGeracaos.
     */
    data: ReceitaGeracaoCreateManyInput | ReceitaGeracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceitaGeracao update
   */
  export type ReceitaGeracaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceitaGeracao.
     */
    data: XOR<ReceitaGeracaoUpdateInput, ReceitaGeracaoUncheckedUpdateInput>
    /**
     * Choose, which ReceitaGeracao to update.
     */
    where: ReceitaGeracaoWhereUniqueInput
  }

  /**
   * ReceitaGeracao updateMany
   */
  export type ReceitaGeracaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceitaGeracaos.
     */
    data: XOR<ReceitaGeracaoUpdateManyMutationInput, ReceitaGeracaoUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaGeracaos to update
     */
    where?: ReceitaGeracaoWhereInput
    /**
     * Limit how many ReceitaGeracaos to update.
     */
    limit?: number
  }

  /**
   * ReceitaGeracao upsert
   */
  export type ReceitaGeracaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceitaGeracao to update in case it exists.
     */
    where: ReceitaGeracaoWhereUniqueInput
    /**
     * In case the ReceitaGeracao found by the `where` argument doesn't exist, create a new ReceitaGeracao with this data.
     */
    create: XOR<ReceitaGeracaoCreateInput, ReceitaGeracaoUncheckedCreateInput>
    /**
     * In case the ReceitaGeracao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaGeracaoUpdateInput, ReceitaGeracaoUncheckedUpdateInput>
  }

  /**
   * ReceitaGeracao delete
   */
  export type ReceitaGeracaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
    /**
     * Filter which ReceitaGeracao to delete.
     */
    where: ReceitaGeracaoWhereUniqueInput
  }

  /**
   * ReceitaGeracao deleteMany
   */
  export type ReceitaGeracaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaGeracaos to delete
     */
    where?: ReceitaGeracaoWhereInput
    /**
     * Limit how many ReceitaGeracaos to delete.
     */
    limit?: number
  }

  /**
   * ReceitaGeracao without action
   */
  export type ReceitaGeracaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaGeracao
     */
    select?: ReceitaGeracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaGeracao
     */
    omit?: ReceitaGeracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaGeracaoInclude<ExtArgs> | null
  }


  /**
   * Model IaControle
   */

  export type AggregateIaControle = {
    _count: IaControleCountAggregateOutputType | null
    _avg: IaControleAvgAggregateOutputType | null
    _sum: IaControleSumAggregateOutputType | null
    _min: IaControleMinAggregateOutputType | null
    _max: IaControleMaxAggregateOutputType | null
  }

  export type IaControleAvgAggregateOutputType = {
    id: number | null
  }

  export type IaControleSumAggregateOutputType = {
    id: number | null
  }

  export type IaControleMinAggregateOutputType = {
    id: number | null
  }

  export type IaControleMaxAggregateOutputType = {
    id: number | null
  }

  export type IaControleCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type IaControleAvgAggregateInputType = {
    id?: true
  }

  export type IaControleSumAggregateInputType = {
    id?: true
  }

  export type IaControleMinAggregateInputType = {
    id?: true
  }

  export type IaControleMaxAggregateInputType = {
    id?: true
  }

  export type IaControleCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type IaControleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IaControle to aggregate.
     */
    where?: IaControleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IaControles to fetch.
     */
    orderBy?: IaControleOrderByWithRelationInput | IaControleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IaControleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IaControles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IaControles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IaControles
    **/
    _count?: true | IaControleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IaControleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IaControleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IaControleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IaControleMaxAggregateInputType
  }

  export type GetIaControleAggregateType<T extends IaControleAggregateArgs> = {
        [P in keyof T & keyof AggregateIaControle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIaControle[P]>
      : GetScalarType<T[P], AggregateIaControle[P]>
  }




  export type IaControleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IaControleWhereInput
    orderBy?: IaControleOrderByWithAggregationInput | IaControleOrderByWithAggregationInput[]
    by: IaControleScalarFieldEnum[] | IaControleScalarFieldEnum
    having?: IaControleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IaControleCountAggregateInputType | true
    _avg?: IaControleAvgAggregateInputType
    _sum?: IaControleSumAggregateInputType
    _min?: IaControleMinAggregateInputType
    _max?: IaControleMaxAggregateInputType
  }

  export type IaControleGroupByOutputType = {
    id: number
    _count: IaControleCountAggregateOutputType | null
    _avg: IaControleAvgAggregateOutputType | null
    _sum: IaControleSumAggregateOutputType | null
    _min: IaControleMinAggregateOutputType | null
    _max: IaControleMaxAggregateOutputType | null
  }

  type GetIaControleGroupByPayload<T extends IaControleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IaControleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IaControleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IaControleGroupByOutputType[P]>
            : GetScalarType<T[P], IaControleGroupByOutputType[P]>
        }
      >
    >


  export type IaControleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["iaControle"]>



  export type IaControleSelectScalar = {
    id?: boolean
  }

  export type IaControleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["iaControle"]>

  export type $IaControlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IaControle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["iaControle"]>
    composites: {}
  }

  type IaControleGetPayload<S extends boolean | null | undefined | IaControleDefaultArgs> = $Result.GetResult<Prisma.$IaControlePayload, S>

  type IaControleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IaControleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IaControleCountAggregateInputType | true
    }

  export interface IaControleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IaControle'], meta: { name: 'IaControle' } }
    /**
     * Find zero or one IaControle that matches the filter.
     * @param {IaControleFindUniqueArgs} args - Arguments to find a IaControle
     * @example
     * // Get one IaControle
     * const iaControle = await prisma.iaControle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IaControleFindUniqueArgs>(args: SelectSubset<T, IaControleFindUniqueArgs<ExtArgs>>): Prisma__IaControleClient<$Result.GetResult<Prisma.$IaControlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IaControle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IaControleFindUniqueOrThrowArgs} args - Arguments to find a IaControle
     * @example
     * // Get one IaControle
     * const iaControle = await prisma.iaControle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IaControleFindUniqueOrThrowArgs>(args: SelectSubset<T, IaControleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IaControleClient<$Result.GetResult<Prisma.$IaControlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IaControle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IaControleFindFirstArgs} args - Arguments to find a IaControle
     * @example
     * // Get one IaControle
     * const iaControle = await prisma.iaControle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IaControleFindFirstArgs>(args?: SelectSubset<T, IaControleFindFirstArgs<ExtArgs>>): Prisma__IaControleClient<$Result.GetResult<Prisma.$IaControlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IaControle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IaControleFindFirstOrThrowArgs} args - Arguments to find a IaControle
     * @example
     * // Get one IaControle
     * const iaControle = await prisma.iaControle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IaControleFindFirstOrThrowArgs>(args?: SelectSubset<T, IaControleFindFirstOrThrowArgs<ExtArgs>>): Prisma__IaControleClient<$Result.GetResult<Prisma.$IaControlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IaControles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IaControleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IaControles
     * const iaControles = await prisma.iaControle.findMany()
     * 
     * // Get first 10 IaControles
     * const iaControles = await prisma.iaControle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iaControleWithIdOnly = await prisma.iaControle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IaControleFindManyArgs>(args?: SelectSubset<T, IaControleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IaControlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IaControle.
     * @param {IaControleCreateArgs} args - Arguments to create a IaControle.
     * @example
     * // Create one IaControle
     * const IaControle = await prisma.iaControle.create({
     *   data: {
     *     // ... data to create a IaControle
     *   }
     * })
     * 
     */
    create<T extends IaControleCreateArgs>(args: SelectSubset<T, IaControleCreateArgs<ExtArgs>>): Prisma__IaControleClient<$Result.GetResult<Prisma.$IaControlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IaControles.
     * @param {IaControleCreateManyArgs} args - Arguments to create many IaControles.
     * @example
     * // Create many IaControles
     * const iaControle = await prisma.iaControle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IaControleCreateManyArgs>(args?: SelectSubset<T, IaControleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IaControle.
     * @param {IaControleDeleteArgs} args - Arguments to delete one IaControle.
     * @example
     * // Delete one IaControle
     * const IaControle = await prisma.iaControle.delete({
     *   where: {
     *     // ... filter to delete one IaControle
     *   }
     * })
     * 
     */
    delete<T extends IaControleDeleteArgs>(args: SelectSubset<T, IaControleDeleteArgs<ExtArgs>>): Prisma__IaControleClient<$Result.GetResult<Prisma.$IaControlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IaControle.
     * @param {IaControleUpdateArgs} args - Arguments to update one IaControle.
     * @example
     * // Update one IaControle
     * const iaControle = await prisma.iaControle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IaControleUpdateArgs>(args: SelectSubset<T, IaControleUpdateArgs<ExtArgs>>): Prisma__IaControleClient<$Result.GetResult<Prisma.$IaControlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IaControles.
     * @param {IaControleDeleteManyArgs} args - Arguments to filter IaControles to delete.
     * @example
     * // Delete a few IaControles
     * const { count } = await prisma.iaControle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends IaControleDeleteManyArgs>(args?: SelectSubset<T, IaControleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IaControles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IaControleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IaControles
     * const iaControle = await prisma.iaControle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends IaControleUpdateManyArgs>(args: SelectSubset<T, IaControleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IaControle.
     * @param {IaControleUpsertArgs} args - Arguments to update or create a IaControle.
     * @example
     * // Update or create a IaControle
     * const iaControle = await prisma.iaControle.upsert({
     *   create: {
     *     // ... data to create a IaControle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IaControle we want to update
     *   }
     * })
     */
    upsert<T extends IaControleUpsertArgs>(args: SelectSubset<T, IaControleUpsertArgs<ExtArgs>>): Prisma__IaControleClient<$Result.GetResult<Prisma.$IaControlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IaControles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IaControleCountArgs} args - Arguments to filter IaControles to count.
     * @example
     * // Count the number of IaControles
     * const count = await prisma.iaControle.count({
     *   where: {
     *     // ... the filter for the IaControles we want to count
     *   }
     * })
    **/
    count<T extends IaControleCountArgs>(
      args?: Subset<T, IaControleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IaControleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IaControle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IaControleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IaControleAggregateArgs>(args: Subset<T, IaControleAggregateArgs>): Prisma.PrismaPromise<GetIaControleAggregateType<T>>

    /**
     * Group by IaControle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IaControleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<
      T extends IaControleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IaControleGroupByArgs['orderBy'] }
        : { orderBy?: IaControleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IaControleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIaControleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IaControle model
   */
  readonly fields: IaControleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IaControle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IaControleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IaControle model
   */
  interface IaControleFieldRefs {
    readonly id: FieldRef<"IaControle", 'Int'>
  }


  // Custom InputTypes
  /**
   * IaControle findUnique
   */
  export type IaControleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IaControle
     */
    select?: IaControleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IaControle
     */
    omit?: IaControleOmit<ExtArgs> | null
    /**
     * Filter, which IaControle to fetch.
     */
    where: IaControleWhereUniqueInput
  }

  /**
   * IaControle findUniqueOrThrow
   */
  export type IaControleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IaControle
     */
    select?: IaControleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IaControle
     */
    omit?: IaControleOmit<ExtArgs> | null
    /**
     * Filter, which IaControle to fetch.
     */
    where: IaControleWhereUniqueInput
  }

  /**
   * IaControle findFirst
   */
  export type IaControleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IaControle
     */
    select?: IaControleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IaControle
     */
    omit?: IaControleOmit<ExtArgs> | null
    /**
     * Filter, which IaControle to fetch.
     */
    where?: IaControleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IaControles to fetch.
     */
    orderBy?: IaControleOrderByWithRelationInput | IaControleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for IaControles.
     */
    cursor?: IaControleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IaControles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IaControles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IaControles.
     */
    distinct?: IaControleScalarFieldEnum | IaControleScalarFieldEnum[]
  }

  /**
   * IaControle findFirstOrThrow
   */
  export type IaControleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IaControle
     */
    select?: IaControleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IaControle
     */
    omit?: IaControleOmit<ExtArgs> | null
    /**
     * Filter, which IaControle to fetch.
     */
    where?: IaControleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IaControles to fetch.
     */
    orderBy?: IaControleOrderByWithRelationInput | IaControleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for IaControles.
     */
    cursor?: IaControleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IaControles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IaControles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IaControles.
     */
    distinct?: IaControleScalarFieldEnum | IaControleScalarFieldEnum[]
  }

  /**
   * IaControle findMany
   */
  export type IaControleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IaControle
     */
    select?: IaControleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IaControle
     */
    omit?: IaControleOmit<ExtArgs> | null
    /**
     * Filter, which IaControles to fetch.
     */
    where?: IaControleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IaControles to fetch.
     */
    orderBy?: IaControleOrderByWithRelationInput | IaControleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing IaControles.
     */
    cursor?: IaControleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IaControles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IaControles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IaControles.
     */
    distinct?: IaControleScalarFieldEnum | IaControleScalarFieldEnum[]
  }

  /**
   * IaControle create
   */
  export type IaControleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IaControle
     */
    select?: IaControleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IaControle
     */
    omit?: IaControleOmit<ExtArgs> | null
    /**
     * The data needed to create a IaControle.
     */
    data: XOR<IaControleCreateInput, IaControleUncheckedCreateInput>
  }

  /**
   * IaControle createMany
   */
  export type IaControleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IaControles.
     */
    data: IaControleCreateManyInput | IaControleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IaControle update
   */
  export type IaControleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IaControle
     */
    select?: IaControleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IaControle
     */
    omit?: IaControleOmit<ExtArgs> | null
    /**
     * The data needed to update a IaControle.
     */
    data: XOR<IaControleUpdateInput, IaControleUncheckedUpdateInput>
    /**
     * Choose, which IaControle to update.
     */
    where: IaControleWhereUniqueInput
  }

  /**
   * IaControle updateMany
   */
  export type IaControleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IaControles.
     */
    data: XOR<IaControleUpdateManyMutationInput, IaControleUncheckedUpdateManyInput>
    /**
     * Filter which IaControles to update
     */
    where?: IaControleWhereInput
    /**
     * Limit how many IaControles to update.
     */
    limit?: number
  }

  /**
   * IaControle upsert
   */
  export type IaControleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IaControle
     */
    select?: IaControleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IaControle
     */
    omit?: IaControleOmit<ExtArgs> | null
    /**
     * The filter to search for the IaControle to update in case it exists.
     */
    where: IaControleWhereUniqueInput
    /**
     * In case the IaControle found by the `where` argument doesn't exist, create a new IaControle with this data.
     */
    create: XOR<IaControleCreateInput, IaControleUncheckedCreateInput>
    /**
     * In case the IaControle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IaControleUpdateInput, IaControleUncheckedUpdateInput>
  }

  /**
   * IaControle delete
   */
  export type IaControleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IaControle
     */
    select?: IaControleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IaControle
     */
    omit?: IaControleOmit<ExtArgs> | null
    /**
     * Filter which IaControle to delete.
     */
    where: IaControleWhereUniqueInput
  }

  /**
   * IaControle deleteMany
   */
  export type IaControleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IaControles to delete
     */
    where?: IaControleWhereInput
    /**
     * Limit how many IaControles to delete.
     */
    limit?: number
  }

  /**
   * IaControle without action
   */
  export type IaControleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IaControle
     */
    select?: IaControleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IaControle
     */
    omit?: IaControleOmit<ExtArgs> | null
  }


  /**
   * Model ReceitaIngrediente
   */

  export type AggregateReceitaIngrediente = {
    _count: ReceitaIngredienteCountAggregateOutputType | null
    _avg: ReceitaIngredienteAvgAggregateOutputType | null
    _sum: ReceitaIngredienteSumAggregateOutputType | null
    _min: ReceitaIngredienteMinAggregateOutputType | null
    _max: ReceitaIngredienteMaxAggregateOutputType | null
  }

  export type ReceitaIngredienteAvgAggregateOutputType = {
    receitaId: number | null
    ingredienteId: number | null
    quantidade: number | null
  }

  export type ReceitaIngredienteSumAggregateOutputType = {
    receitaId: number | null
    ingredienteId: number | null
    quantidade: number | null
  }

  export type ReceitaIngredienteMinAggregateOutputType = {
    receitaId: number | null
    ingredienteId: number | null
    quantidade: number | null
    unidade: string | null
    opcional: boolean | null
  }

  export type ReceitaIngredienteMaxAggregateOutputType = {
    receitaId: number | null
    ingredienteId: number | null
    quantidade: number | null
    unidade: string | null
    opcional: boolean | null
  }

  export type ReceitaIngredienteCountAggregateOutputType = {
    receitaId: number
    ingredienteId: number
    quantidade: number
    unidade: number
    opcional: number
    _all: number
  }


  export type ReceitaIngredienteAvgAggregateInputType = {
    receitaId?: true
    ingredienteId?: true
    quantidade?: true
  }

  export type ReceitaIngredienteSumAggregateInputType = {
    receitaId?: true
    ingredienteId?: true
    quantidade?: true
  }

  export type ReceitaIngredienteMinAggregateInputType = {
    receitaId?: true
    ingredienteId?: true
    quantidade?: true
    unidade?: true
    opcional?: true
  }

  export type ReceitaIngredienteMaxAggregateInputType = {
    receitaId?: true
    ingredienteId?: true
    quantidade?: true
    unidade?: true
    opcional?: true
  }

  export type ReceitaIngredienteCountAggregateInputType = {
    receitaId?: true
    ingredienteId?: true
    quantidade?: true
    unidade?: true
    opcional?: true
    _all?: true
  }

  export type ReceitaIngredienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaIngrediente to aggregate.
     */
    where?: ReceitaIngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReceitaIngredientes to fetch.
     */
    orderBy?: ReceitaIngredienteOrderByWithRelationInput | ReceitaIngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReceitaIngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReceitaIngredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReceitaIngredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ReceitaIngredientes
    **/
    _count?: true | ReceitaIngredienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ReceitaIngredienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ReceitaIngredienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaIngredienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaIngredienteMaxAggregateInputType
  }

  export type GetReceitaIngredienteAggregateType<T extends ReceitaIngredienteAggregateArgs> = {
        [P in keyof T & keyof AggregateReceitaIngrediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceitaIngrediente[P]>
      : GetScalarType<T[P], AggregateReceitaIngrediente[P]>
  }




  export type ReceitaIngredienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaIngredienteWhereInput
    orderBy?: ReceitaIngredienteOrderByWithAggregationInput | ReceitaIngredienteOrderByWithAggregationInput[]
    by: ReceitaIngredienteScalarFieldEnum[] | ReceitaIngredienteScalarFieldEnum
    having?: ReceitaIngredienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaIngredienteCountAggregateInputType | true
    _avg?: ReceitaIngredienteAvgAggregateInputType
    _sum?: ReceitaIngredienteSumAggregateInputType
    _min?: ReceitaIngredienteMinAggregateInputType
    _max?: ReceitaIngredienteMaxAggregateInputType
  }

  export type ReceitaIngredienteGroupByOutputType = {
    receitaId: number
    ingredienteId: number
    quantidade: number
    unidade: string
    opcional: boolean
    _count: ReceitaIngredienteCountAggregateOutputType | null
    _avg: ReceitaIngredienteAvgAggregateOutputType | null
    _sum: ReceitaIngredienteSumAggregateOutputType | null
    _min: ReceitaIngredienteMinAggregateOutputType | null
    _max: ReceitaIngredienteMaxAggregateOutputType | null
  }

  type GetReceitaIngredienteGroupByPayload<T extends ReceitaIngredienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaIngredienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaIngredienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaIngredienteGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaIngredienteGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaIngredienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receitaId?: boolean
    ingredienteId?: boolean
    quantidade?: boolean
    unidade?: boolean
    opcional?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaIngrediente"]>



  export type ReceitaIngredienteSelectScalar = {
    receitaId?: boolean
    ingredienteId?: boolean
    quantidade?: boolean
    unidade?: boolean
    opcional?: boolean
  }

  export type ReceitaIngredienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"receitaId" | "ingredienteId" | "quantidade" | "unidade" | "opcional", ExtArgs["result"]["receitaIngrediente"]>
  export type ReceitaIngredienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }

  export type $ReceitaIngredientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceitaIngrediente"
    objects: {
      receita: Prisma.$ReceitaPayload<ExtArgs>
      ingrediente: Prisma.$IngredientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      receitaId: number
      ingredienteId: number
      quantidade: number
      unidade: string
      opcional: boolean
    }, ExtArgs["result"]["receitaIngrediente"]>
    composites: {}
  }

  type ReceitaIngredienteGetPayload<S extends boolean | null | undefined | ReceitaIngredienteDefaultArgs> = $Result.GetResult<Prisma.$ReceitaIngredientePayload, S>

  type ReceitaIngredienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaIngredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaIngredienteCountAggregateInputType | true
    }

  export interface ReceitaIngredienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceitaIngrediente'], meta: { name: 'ReceitaIngrediente' } }
    /**
     * Find zero or one ReceitaIngrediente that matches the filter.
     * @param {ReceitaIngredienteFindUniqueArgs} args - Arguments to find a ReceitaIngrediente
     * @example
     * // Get one ReceitaIngrediente
     * const receitaIngrediente = await prisma.receitaIngrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaIngredienteFindUniqueArgs>(args: SelectSubset<T, ReceitaIngredienteFindUniqueArgs<ExtArgs>>): Prisma__ReceitaIngredienteClient<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceitaIngrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaIngredienteFindUniqueOrThrowArgs} args - Arguments to find a ReceitaIngrediente
     * @example
     * // Get one ReceitaIngrediente
     * const receitaIngrediente = await prisma.receitaIngrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaIngredienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaIngredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaIngredienteClient<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaIngrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaIngredienteFindFirstArgs} args - Arguments to find a ReceitaIngrediente
     * @example
     * // Get one ReceitaIngrediente
     * const receitaIngrediente = await prisma.receitaIngrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaIngredienteFindFirstArgs>(args?: SelectSubset<T, ReceitaIngredienteFindFirstArgs<ExtArgs>>): Prisma__ReceitaIngredienteClient<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaIngrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaIngredienteFindFirstOrThrowArgs} args - Arguments to find a ReceitaIngrediente
     * @example
     * // Get one ReceitaIngrediente
     * const receitaIngrediente = await prisma.receitaIngrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaIngredienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaIngredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaIngredienteClient<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceitaIngredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaIngredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceitaIngredientes
     * const receitaIngredientes = await prisma.receitaIngrediente.findMany()
     *
     * // Get first 10 ReceitaIngredientes
     * const receitaIngredientes = await prisma.receitaIngrediente.findMany({ take: 10 })
     *
     * // Only select the `receitaId`
     * const receitaIngredienteWithReceitaIdOnly = await prisma.receitaIngrediente.findMany({ select: { receitaId: true } })
     *
     */
    findMany<T extends ReceitaIngredienteFindManyArgs>(args?: SelectSubset<T, ReceitaIngredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceitaIngrediente.
     * @param {ReceitaIngredienteCreateArgs} args - Arguments to create a ReceitaIngrediente.
     * @example
     * // Create one ReceitaIngrediente
     * const ReceitaIngrediente = await prisma.receitaIngrediente.create({
     *   data: {
     *     // ... data to create a ReceitaIngrediente
     *   }
     * })
     *
     */
    create<T extends ReceitaIngredienteCreateArgs>(args: SelectSubset<T, ReceitaIngredienteCreateArgs<ExtArgs>>): Prisma__ReceitaIngredienteClient<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceitaIngredientes.
     * @param {ReceitaIngredienteCreateManyArgs} args - Arguments to create many ReceitaIngredientes.
     * @example
     * // Create many ReceitaIngredientes
     * const receitaIngrediente = await prisma.receitaIngrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReceitaIngredienteCreateManyArgs>(args?: SelectSubset<T, ReceitaIngredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReceitaIngrediente.
     * @param {ReceitaIngredienteDeleteArgs} args - Arguments to delete one ReceitaIngrediente.
     * @example
     * // Delete one ReceitaIngrediente
     * const ReceitaIngrediente = await prisma.receitaIngrediente.delete({
     *   where: {
     *     // ... filter to delete one ReceitaIngrediente
     *   }
     * })
     *
     */
    delete<T extends ReceitaIngredienteDeleteArgs>(args: SelectSubset<T, ReceitaIngredienteDeleteArgs<ExtArgs>>): Prisma__ReceitaIngredienteClient<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceitaIngrediente.
     * @param {ReceitaIngredienteUpdateArgs} args - Arguments to update one ReceitaIngrediente.
     * @example
     * // Update one ReceitaIngrediente
     * const receitaIngrediente = await prisma.receitaIngrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReceitaIngredienteUpdateArgs>(args: SelectSubset<T, ReceitaIngredienteUpdateArgs<ExtArgs>>): Prisma__ReceitaIngredienteClient<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceitaIngredientes.
     * @param {ReceitaIngredienteDeleteManyArgs} args - Arguments to filter ReceitaIngredientes to delete.
     * @example
     * // Delete a few ReceitaIngredientes
     * const { count } = await prisma.receitaIngrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaIngredienteDeleteManyArgs>(args?: SelectSubset<T, ReceitaIngredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaIngredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaIngredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceitaIngredientes
     * const receitaIngrediente = await prisma.receitaIngrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaIngredienteUpdateManyArgs>(args: SelectSubset<T, ReceitaIngredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReceitaIngrediente.
     * @param {ReceitaIngredienteUpsertArgs} args - Arguments to update or create a ReceitaIngrediente.
     * @example
     * // Update or create a ReceitaIngrediente
     * const receitaIngrediente = await prisma.receitaIngrediente.upsert({
     *   create: {
     *     // ... data to create a ReceitaIngrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceitaIngrediente we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaIngredienteUpsertArgs>(args: SelectSubset<T, ReceitaIngredienteUpsertArgs<ExtArgs>>): Prisma__ReceitaIngredienteClient<$Result.GetResult<Prisma.$ReceitaIngredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceitaIngredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaIngredienteCountArgs} args - Arguments to filter ReceitaIngredientes to count.
     * @example
     * // Count the number of ReceitaIngredientes
     * const count = await prisma.receitaIngrediente.count({
     *   where: {
     *     // ... the filter for the ReceitaIngredientes we want to count
     *   }
     * })
    **/
    count<T extends ReceitaIngredienteCountArgs>(
      args?: Subset<T, ReceitaIngredienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaIngredienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceitaIngrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaIngredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceitaIngredienteAggregateArgs>(args: Subset<T, ReceitaIngredienteAggregateArgs>): Prisma.PrismaPromise<GetReceitaIngredienteAggregateType<T>>

    /**
     * Group by ReceitaIngrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaIngredienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceitaIngredienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaIngredienteGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaIngredienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceitaIngredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaIngredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceitaIngrediente model
   */
  readonly fields: ReceitaIngredienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceitaIngrediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaIngredienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingrediente<T extends IngredienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredienteDefaultArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReceitaIngrediente model
   */
  interface ReceitaIngredienteFieldRefs {
    readonly receitaId: FieldRef<"ReceitaIngrediente", 'Int'>
    readonly ingredienteId: FieldRef<"ReceitaIngrediente", 'Int'>
    readonly quantidade: FieldRef<"ReceitaIngrediente", 'Float'>
    readonly unidade: FieldRef<"ReceitaIngrediente", 'String'>
    readonly opcional: FieldRef<"ReceitaIngrediente", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ReceitaIngrediente findUnique
   */
  export type ReceitaIngredienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaIngrediente to fetch.
     */
    where: ReceitaIngredienteWhereUniqueInput
  }

  /**
   * ReceitaIngrediente findUniqueOrThrow
   */
  export type ReceitaIngredienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaIngrediente to fetch.
     */
    where: ReceitaIngredienteWhereUniqueInput
  }

  /**
   * ReceitaIngrediente findFirst
   */
  export type ReceitaIngredienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaIngrediente to fetch.
     */
    where?: ReceitaIngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaIngredientes to fetch.
     */
    orderBy?: ReceitaIngredienteOrderByWithRelationInput | ReceitaIngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaIngredientes.
     */
    cursor?: ReceitaIngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaIngredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaIngredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaIngredientes.
     */
    distinct?: ReceitaIngredienteScalarFieldEnum | ReceitaIngredienteScalarFieldEnum[]
  }

  /**
   * ReceitaIngrediente findFirstOrThrow
   */
  export type ReceitaIngredienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaIngrediente to fetch.
     */
    where?: ReceitaIngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaIngredientes to fetch.
     */
    orderBy?: ReceitaIngredienteOrderByWithRelationInput | ReceitaIngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaIngredientes.
     */
    cursor?: ReceitaIngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaIngredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaIngredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaIngredientes.
     */
    distinct?: ReceitaIngredienteScalarFieldEnum | ReceitaIngredienteScalarFieldEnum[]
  }

  /**
   * ReceitaIngrediente findMany
   */
  export type ReceitaIngredienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaIngredientes to fetch.
     */
    where?: ReceitaIngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaIngredientes to fetch.
     */
    orderBy?: ReceitaIngredienteOrderByWithRelationInput | ReceitaIngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceitaIngredientes.
     */
    cursor?: ReceitaIngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaIngredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaIngredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaIngredientes.
     */
    distinct?: ReceitaIngredienteScalarFieldEnum | ReceitaIngredienteScalarFieldEnum[]
  }

  /**
   * ReceitaIngrediente create
   */
  export type ReceitaIngredienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceitaIngrediente.
     */
    data: XOR<ReceitaIngredienteCreateInput, ReceitaIngredienteUncheckedCreateInput>
  }

  /**
   * ReceitaIngrediente createMany
   */
  export type ReceitaIngredienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceitaIngredientes.
     */
    data: ReceitaIngredienteCreateManyInput | ReceitaIngredienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceitaIngrediente update
   */
  export type ReceitaIngredienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceitaIngrediente.
     */
    data: XOR<ReceitaIngredienteUpdateInput, ReceitaIngredienteUncheckedUpdateInput>
    /**
     * Choose, which ReceitaIngrediente to update.
     */
    where: ReceitaIngredienteWhereUniqueInput
  }

  /**
   * ReceitaIngrediente updateMany
   */
  export type ReceitaIngredienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceitaIngredientes.
     */
    data: XOR<ReceitaIngredienteUpdateManyMutationInput, ReceitaIngredienteUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaIngredientes to update
     */
    where?: ReceitaIngredienteWhereInput
    /**
     * Limit how many ReceitaIngredientes to update.
     */
    limit?: number
  }

  /**
   * ReceitaIngrediente upsert
   */
  export type ReceitaIngredienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceitaIngrediente to update in case it exists.
     */
    where: ReceitaIngredienteWhereUniqueInput
    /**
     * In case the ReceitaIngrediente found by the `where` argument doesn't exist, create a new ReceitaIngrediente with this data.
     */
    create: XOR<ReceitaIngredienteCreateInput, ReceitaIngredienteUncheckedCreateInput>
    /**
     * In case the ReceitaIngrediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaIngredienteUpdateInput, ReceitaIngredienteUncheckedUpdateInput>
  }

  /**
   * ReceitaIngrediente delete
   */
  export type ReceitaIngredienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter which ReceitaIngrediente to delete.
     */
    where: ReceitaIngredienteWhereUniqueInput
  }

  /**
   * ReceitaIngrediente deleteMany
   */
  export type ReceitaIngredienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaIngredientes to delete
     */
    where?: ReceitaIngredienteWhereInput
    /**
     * Limit how many ReceitaIngredientes to delete.
     */
    limit?: number
  }

  /**
   * ReceitaIngrediente without action
   */
  export type ReceitaIngredienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaIngrediente
     */
    select?: ReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaIngrediente
     */
    omit?: ReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIngredienteInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    receitaId: number | null
    usuarioId: number | null
    respostaDeId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    receitaId: number | null
    usuarioId: number | null
    respostaDeId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    receitaId: number | null
    usuarioId: number | null
    respostaDeId: number | null
    texto: string | null
    criadoEm: Date | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    receitaId: number | null
    usuarioId: number | null
    respostaDeId: number | null
    texto: string | null
    criadoEm: Date | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    receitaId: number
    usuarioId: number
    respostaDeId: number
    texto: number
    criadoEm: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    receitaId?: true
    usuarioId?: true
    respostaDeId?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    receitaId?: true
    usuarioId?: true
    respostaDeId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    receitaId?: true
    usuarioId?: true
    respostaDeId?: true
    texto?: true
    criadoEm?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    receitaId?: true
    usuarioId?: true
    respostaDeId?: true
    texto?: true
    criadoEm?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    receitaId?: true
    usuarioId?: true
    respostaDeId?: true
    texto?: true
    criadoEm?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    receitaId: number
    usuarioId: number
    respostaDeId: number | null
    texto: string
    criadoEm: Date
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receitaId?: boolean
    usuarioId?: boolean
    respostaDeId?: boolean
    texto?: boolean
    criadoEm?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    respostaDe?: boolean | Comentario$respostaDeArgs<ExtArgs>
    respostas?: boolean | Comentario$respostasArgs<ExtArgs>
    _count?: boolean | ComentarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>



  export type ComentarioSelectScalar = {
    id?: boolean
    receitaId?: boolean
    usuarioId?: boolean
    respostaDeId?: boolean
    texto?: boolean
    criadoEm?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receitaId" | "usuarioId" | "respostaDeId" | "texto" | "criadoEm", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    respostaDe?: boolean | Comentario$respostaDeArgs<ExtArgs>
    respostas?: boolean | Comentario$respostasArgs<ExtArgs>
    _count?: boolean | ComentarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      receita: Prisma.$ReceitaPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      respostaDe: Prisma.$ComentarioPayload<ExtArgs> | null
      respostas: Prisma.$ComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      receitaId: number
      usuarioId: number
      respostaDeId: number | null
      texto: string
      criadoEm: Date
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    respostaDe<T extends Comentario$respostaDeArgs<ExtArgs> = {}>(args?: Subset<T, Comentario$respostaDeArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    respostas<T extends Comentario$respostasArgs<ExtArgs> = {}>(args?: Subset<T, Comentario$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'Int'>
    readonly receitaId: FieldRef<"Comentario", 'Int'>
    readonly usuarioId: FieldRef<"Comentario", 'Int'>
    readonly respostaDeId: FieldRef<"Comentario", 'Int'>
    readonly texto: FieldRef<"Comentario", 'String'>
    readonly criadoEm: FieldRef<"Comentario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario.respostaDe
   */
  export type Comentario$respostaDeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
  }

  /**
   * Comentario.respostas
   */
  export type Comentario$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model Postagem
   */

  export type AggregatePostagem = {
    _count: PostagemCountAggregateOutputType | null
    _avg: PostagemAvgAggregateOutputType | null
    _sum: PostagemSumAggregateOutputType | null
    _min: PostagemMinAggregateOutputType | null
    _max: PostagemMaxAggregateOutputType | null
  }

  export type PostagemAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    receitaId: number | null
  }

  export type PostagemSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    receitaId: number | null
  }

  export type PostagemMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    receitaId: number | null
    imagemPrato: string | null
    comentario: string | null
    criadaEm: Date | null
  }

  export type PostagemMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    receitaId: number | null
    imagemPrato: string | null
    comentario: string | null
    criadaEm: Date | null
  }

  export type PostagemCountAggregateOutputType = {
    id: number
    usuarioId: number
    receitaId: number
    imagemPrato: number
    comentario: number
    criadaEm: number
    _all: number
  }


  export type PostagemAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
  }

  export type PostagemSumAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
  }

  export type PostagemMinAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
    imagemPrato?: true
    comentario?: true
    criadaEm?: true
  }

  export type PostagemMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
    imagemPrato?: true
    comentario?: true
    criadaEm?: true
  }

  export type PostagemCountAggregateInputType = {
    id?: true
    usuarioId?: true
    receitaId?: true
    imagemPrato?: true
    comentario?: true
    criadaEm?: true
    _all?: true
  }

  export type PostagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Postagem to aggregate.
     */
    where?: PostagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Postagems to fetch.
     */
    orderBy?: PostagemOrderByWithRelationInput | PostagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Postagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Postagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Postagems
    **/
    _count?: true | PostagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostagemMaxAggregateInputType
  }

  export type GetPostagemAggregateType<T extends PostagemAggregateArgs> = {
        [P in keyof T & keyof AggregatePostagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostagem[P]>
      : GetScalarType<T[P], AggregatePostagem[P]>
  }




  export type PostagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostagemWhereInput
    orderBy?: PostagemOrderByWithAggregationInput | PostagemOrderByWithAggregationInput[]
    by: PostagemScalarFieldEnum[] | PostagemScalarFieldEnum
    having?: PostagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostagemCountAggregateInputType | true
    _avg?: PostagemAvgAggregateInputType
    _sum?: PostagemSumAggregateInputType
    _min?: PostagemMinAggregateInputType
    _max?: PostagemMaxAggregateInputType
  }

  export type PostagemGroupByOutputType = {
    id: number
    usuarioId: number
    receitaId: number | null
    imagemPrato: string | null
    comentario: string | null
    criadaEm: Date
    _count: PostagemCountAggregateOutputType | null
    _avg: PostagemAvgAggregateOutputType | null
    _sum: PostagemSumAggregateOutputType | null
    _min: PostagemMinAggregateOutputType | null
    _max: PostagemMaxAggregateOutputType | null
  }

  type GetPostagemGroupByPayload<T extends PostagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostagemGroupByOutputType[P]>
            : GetScalarType<T[P], PostagemGroupByOutputType[P]>
        }
      >
    >


  export type PostagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    receitaId?: boolean
    imagemPrato?: boolean
    comentario?: boolean
    criadaEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | Postagem$receitaArgs<ExtArgs>
  }, ExtArgs["result"]["postagem"]>



  export type PostagemSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    receitaId?: boolean
    imagemPrato?: boolean
    comentario?: boolean
    criadaEm?: boolean
  }

  export type PostagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "receitaId" | "imagemPrato" | "comentario" | "criadaEm", ExtArgs["result"]["postagem"]>
  export type PostagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | Postagem$receitaArgs<ExtArgs>
  }

  export type $PostagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Postagem"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      receita: Prisma.$ReceitaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      receitaId: number | null
      imagemPrato: string | null
      comentario: string | null
      criadaEm: Date
    }, ExtArgs["result"]["postagem"]>
    composites: {}
  }

  type PostagemGetPayload<S extends boolean | null | undefined | PostagemDefaultArgs> = $Result.GetResult<Prisma.$PostagemPayload, S>

  type PostagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostagemCountAggregateInputType | true
    }

  export interface PostagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Postagem'], meta: { name: 'Postagem' } }
    /**
     * Find zero or one Postagem that matches the filter.
     * @param {PostagemFindUniqueArgs} args - Arguments to find a Postagem
     * @example
     * // Get one Postagem
     * const postagem = await prisma.postagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostagemFindUniqueArgs>(args: SelectSubset<T, PostagemFindUniqueArgs<ExtArgs>>): Prisma__PostagemClient<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Postagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostagemFindUniqueOrThrowArgs} args - Arguments to find a Postagem
     * @example
     * // Get one Postagem
     * const postagem = await prisma.postagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostagemFindUniqueOrThrowArgs>(args: SelectSubset<T, PostagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostagemClient<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Postagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostagemFindFirstArgs} args - Arguments to find a Postagem
     * @example
     * // Get one Postagem
     * const postagem = await prisma.postagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostagemFindFirstArgs>(args?: SelectSubset<T, PostagemFindFirstArgs<ExtArgs>>): Prisma__PostagemClient<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Postagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostagemFindFirstOrThrowArgs} args - Arguments to find a Postagem
     * @example
     * // Get one Postagem
     * const postagem = await prisma.postagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostagemFindFirstOrThrowArgs>(args?: SelectSubset<T, PostagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostagemClient<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Postagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Postagems
     * const postagems = await prisma.postagem.findMany()
     * 
     * // Get first 10 Postagems
     * const postagems = await prisma.postagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postagemWithIdOnly = await prisma.postagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostagemFindManyArgs>(args?: SelectSubset<T, PostagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Postagem.
     * @param {PostagemCreateArgs} args - Arguments to create a Postagem.
     * @example
     * // Create one Postagem
     * const Postagem = await prisma.postagem.create({
     *   data: {
     *     // ... data to create a Postagem
     *   }
     * })
     * 
     */
    create<T extends PostagemCreateArgs>(args: SelectSubset<T, PostagemCreateArgs<ExtArgs>>): Prisma__PostagemClient<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Postagems.
     * @param {PostagemCreateManyArgs} args - Arguments to create many Postagems.
     * @example
     * // Create many Postagems
     * const postagem = await prisma.postagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostagemCreateManyArgs>(args?: SelectSubset<T, PostagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Postagem.
     * @param {PostagemDeleteArgs} args - Arguments to delete one Postagem.
     * @example
     * // Delete one Postagem
     * const Postagem = await prisma.postagem.delete({
     *   where: {
     *     // ... filter to delete one Postagem
     *   }
     * })
     * 
     */
    delete<T extends PostagemDeleteArgs>(args: SelectSubset<T, PostagemDeleteArgs<ExtArgs>>): Prisma__PostagemClient<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Postagem.
     * @param {PostagemUpdateArgs} args - Arguments to update one Postagem.
     * @example
     * // Update one Postagem
     * const postagem = await prisma.postagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostagemUpdateArgs>(args: SelectSubset<T, PostagemUpdateArgs<ExtArgs>>): Prisma__PostagemClient<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Postagems.
     * @param {PostagemDeleteManyArgs} args - Arguments to filter Postagems to delete.
     * @example
     * // Delete a few Postagems
     * const { count } = await prisma.postagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostagemDeleteManyArgs>(args?: SelectSubset<T, PostagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Postagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Postagems
     * const postagem = await prisma.postagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostagemUpdateManyArgs>(args: SelectSubset<T, PostagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Postagem.
     * @param {PostagemUpsertArgs} args - Arguments to update or create a Postagem.
     * @example
     * // Update or create a Postagem
     * const postagem = await prisma.postagem.upsert({
     *   create: {
     *     // ... data to create a Postagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Postagem we want to update
     *   }
     * })
     */
    upsert<T extends PostagemUpsertArgs>(args: SelectSubset<T, PostagemUpsertArgs<ExtArgs>>): Prisma__PostagemClient<$Result.GetResult<Prisma.$PostagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Postagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostagemCountArgs} args - Arguments to filter Postagems to count.
     * @example
     * // Count the number of Postagems
     * const count = await prisma.postagem.count({
     *   where: {
     *     // ... the filter for the Postagems we want to count
     *   }
     * })
    **/
    count<T extends PostagemCountArgs>(
      args?: Subset<T, PostagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Postagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostagemAggregateArgs>(args: Subset<T, PostagemAggregateArgs>): Prisma.PrismaPromise<GetPostagemAggregateType<T>>

    /**
     * Group by Postagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostagemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostagemGroupByArgs['orderBy'] }
        : { orderBy?: PostagemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Postagem model
   */
  readonly fields: PostagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Postagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receita<T extends Postagem$receitaArgs<ExtArgs> = {}>(args?: Subset<T, Postagem$receitaArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Postagem model
   */
  interface PostagemFieldRefs {
    readonly id: FieldRef<"Postagem", 'Int'>
    readonly usuarioId: FieldRef<"Postagem", 'Int'>
    readonly receitaId: FieldRef<"Postagem", 'Int'>
    readonly imagemPrato: FieldRef<"Postagem", 'String'>
    readonly comentario: FieldRef<"Postagem", 'String'>
    readonly criadaEm: FieldRef<"Postagem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Postagem findUnique
   */
  export type PostagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    /**
     * Filter, which Postagem to fetch.
     */
    where: PostagemWhereUniqueInput
  }

  /**
   * Postagem findUniqueOrThrow
   */
  export type PostagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    /**
     * Filter, which Postagem to fetch.
     */
    where: PostagemWhereUniqueInput
  }

  /**
   * Postagem findFirst
   */
  export type PostagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    /**
     * Filter, which Postagem to fetch.
     */
    where?: PostagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Postagems to fetch.
     */
    orderBy?: PostagemOrderByWithRelationInput | PostagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Postagems.
     */
    cursor?: PostagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Postagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Postagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Postagems.
     */
    distinct?: PostagemScalarFieldEnum | PostagemScalarFieldEnum[]
  }

  /**
   * Postagem findFirstOrThrow
   */
  export type PostagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    /**
     * Filter, which Postagem to fetch.
     */
    where?: PostagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Postagems to fetch.
     */
    orderBy?: PostagemOrderByWithRelationInput | PostagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Postagems.
     */
    cursor?: PostagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Postagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Postagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Postagems.
     */
    distinct?: PostagemScalarFieldEnum | PostagemScalarFieldEnum[]
  }

  /**
   * Postagem findMany
   */
  export type PostagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    /**
     * Filter, which Postagems to fetch.
     */
    where?: PostagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Postagems to fetch.
     */
    orderBy?: PostagemOrderByWithRelationInput | PostagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Postagems.
     */
    cursor?: PostagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Postagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Postagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Postagems.
     */
    distinct?: PostagemScalarFieldEnum | PostagemScalarFieldEnum[]
  }

  /**
   * Postagem create
   */
  export type PostagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Postagem.
     */
    data: XOR<PostagemCreateInput, PostagemUncheckedCreateInput>
  }

  /**
   * Postagem createMany
   */
  export type PostagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Postagems.
     */
    data: PostagemCreateManyInput | PostagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Postagem update
   */
  export type PostagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Postagem.
     */
    data: XOR<PostagemUpdateInput, PostagemUncheckedUpdateInput>
    /**
     * Choose, which Postagem to update.
     */
    where: PostagemWhereUniqueInput
  }

  /**
   * Postagem updateMany
   */
  export type PostagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Postagems.
     */
    data: XOR<PostagemUpdateManyMutationInput, PostagemUncheckedUpdateManyInput>
    /**
     * Filter which Postagems to update
     */
    where?: PostagemWhereInput
    /**
     * Limit how many Postagems to update.
     */
    limit?: number
  }

  /**
   * Postagem upsert
   */
  export type PostagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Postagem to update in case it exists.
     */
    where: PostagemWhereUniqueInput
    /**
     * In case the Postagem found by the `where` argument doesn't exist, create a new Postagem with this data.
     */
    create: XOR<PostagemCreateInput, PostagemUncheckedCreateInput>
    /**
     * In case the Postagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostagemUpdateInput, PostagemUncheckedUpdateInput>
  }

  /**
   * Postagem delete
   */
  export type PostagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
    /**
     * Filter which Postagem to delete.
     */
    where: PostagemWhereUniqueInput
  }

  /**
   * Postagem deleteMany
   */
  export type PostagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Postagems to delete
     */
    where?: PostagemWhereInput
    /**
     * Limit how many Postagems to delete.
     */
    limit?: number
  }

  /**
   * Postagem.receita
   */
  export type Postagem$receitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    where?: ReceitaWhereInput
  }

  /**
   * Postagem without action
   */
  export type PostagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Postagem
     */
    select?: PostagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Postagem
     */
    omit?: PostagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostagemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    avatar: 'avatar',
    nivelHabilidade: 'nivelHabilidade',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PerfilAlimentarScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    tipoDieta: 'tipoDieta',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type PerfilAlimentarScalarFieldEnum = (typeof PerfilAlimentarScalarFieldEnum)[keyof typeof PerfilAlimentarScalarFieldEnum]


  export const RestricaoAlimentarScalarFieldEnum: {
    id: 'id',
    perfilId: 'perfilId',
    tipo: 'tipo'
  };

  export type RestricaoAlimentarScalarFieldEnum = (typeof RestricaoAlimentarScalarFieldEnum)[keyof typeof RestricaoAlimentarScalarFieldEnum]


  export const IngredienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    categoria: 'categoria',
    classificacaoStatus: 'classificacaoStatus',
    dietasPermitidas: 'dietasPermitidas',
    restricoes: 'restricoes'
  };

  export type IngredienteScalarFieldEnum = (typeof IngredienteScalarFieldEnum)[keyof typeof IngredienteScalarFieldEnum]


  export const InventarioScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    ingredienteId: 'ingredienteId',
    quantidade: 'quantidade',
    unidade: 'unidade'
  };

  export type InventarioScalarFieldEnum = (typeof InventarioScalarFieldEnum)[keyof typeof InventarioScalarFieldEnum]


  export const ReceitaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    titulo: 'titulo',
    modoPreparo: 'modoPreparo',
    tempoEstimado: 'tempoEstimado',
    porcoes: 'porcoes',
    imagem: 'imagem',
    publica: 'publica',
    geradaPorIA: 'geradaPorIA',
    criadaEm: 'criadaEm',
    atualizadaEm: 'atualizadaEm'
  };

  export type ReceitaScalarFieldEnum = (typeof ReceitaScalarFieldEnum)[keyof typeof ReceitaScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    receitaId: 'receitaId',
    criadoEm: 'criadoEm'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const ReceitaGeracaoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    chaveCache: 'chaveCache',
    modelo: 'modelo',
    status: 'status',
    payload: 'payload',
    consumo: 'consumo',
    erroCodigo: 'erroCodigo',
    receitaId: 'receitaId',
    cacheExpiraEm: 'cacheExpiraEm',
    rascunhoExpiraEm: 'rascunhoExpiraEm',
    criadaEm: 'criadaEm',
    finalizadaEm: 'finalizadaEm',
    duracaoMs: 'duracaoMs',
    reservaExpiraEm: 'reservaExpiraEm'
  };

  export type ReceitaGeracaoScalarFieldEnum = (typeof ReceitaGeracaoScalarFieldEnum)[keyof typeof ReceitaGeracaoScalarFieldEnum]


  export const IaControleScalarFieldEnum: {
    id: 'id'
  };

  export type IaControleScalarFieldEnum = (typeof IaControleScalarFieldEnum)[keyof typeof IaControleScalarFieldEnum]


  export const ReceitaIngredienteScalarFieldEnum: {
    receitaId: 'receitaId',
    ingredienteId: 'ingredienteId',
    quantidade: 'quantidade',
    unidade: 'unidade',
    opcional: 'opcional'
  };

  export type ReceitaIngredienteScalarFieldEnum = (typeof ReceitaIngredienteScalarFieldEnum)[keyof typeof ReceitaIngredienteScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    receitaId: 'receitaId',
    usuarioId: 'usuarioId',
    respostaDeId: 'respostaDeId',
    texto: 'texto',
    criadoEm: 'criadoEm'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const PostagemScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    receitaId: 'receitaId',
    imagemPrato: 'imagemPrato',
    comentario: 'comentario',
    criadaEm: 'criadaEm'
  };

  export type PostagemScalarFieldEnum = (typeof PostagemScalarFieldEnum)[keyof typeof PostagemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    avatar: 'avatar'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const RestricaoAlimentarOrderByRelevanceFieldEnum: {
    tipo: 'tipo'
  };

  export type RestricaoAlimentarOrderByRelevanceFieldEnum = (typeof RestricaoAlimentarOrderByRelevanceFieldEnum)[keyof typeof RestricaoAlimentarOrderByRelevanceFieldEnum]


  export const IngredienteOrderByRelevanceFieldEnum: {
    nome: 'nome',
    categoria: 'categoria',
    classificacaoStatus: 'classificacaoStatus',
    dietasPermitidas: 'dietasPermitidas',
    restricoes: 'restricoes'
  };

  export type IngredienteOrderByRelevanceFieldEnum = (typeof IngredienteOrderByRelevanceFieldEnum)[keyof typeof IngredienteOrderByRelevanceFieldEnum]


  export const InventarioOrderByRelevanceFieldEnum: {
    unidade: 'unidade'
  };

  export type InventarioOrderByRelevanceFieldEnum = (typeof InventarioOrderByRelevanceFieldEnum)[keyof typeof InventarioOrderByRelevanceFieldEnum]


  export const ReceitaOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    modoPreparo: 'modoPreparo',
    imagem: 'imagem'
  };

  export type ReceitaOrderByRelevanceFieldEnum = (typeof ReceitaOrderByRelevanceFieldEnum)[keyof typeof ReceitaOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ReceitaGeracaoOrderByRelevanceFieldEnum: {
    chaveCache: 'chaveCache',
    modelo: 'modelo',
    status: 'status',
    erroCodigo: 'erroCodigo'
  };

  export type ReceitaGeracaoOrderByRelevanceFieldEnum = (typeof ReceitaGeracaoOrderByRelevanceFieldEnum)[keyof typeof ReceitaGeracaoOrderByRelevanceFieldEnum]


  export const ReceitaIngredienteOrderByRelevanceFieldEnum: {
    unidade: 'unidade'
  };

  export type ReceitaIngredienteOrderByRelevanceFieldEnum = (typeof ReceitaIngredienteOrderByRelevanceFieldEnum)[keyof typeof ReceitaIngredienteOrderByRelevanceFieldEnum]


  export const ComentarioOrderByRelevanceFieldEnum: {
    texto: 'texto'
  };

  export type ComentarioOrderByRelevanceFieldEnum = (typeof ComentarioOrderByRelevanceFieldEnum)[keyof typeof ComentarioOrderByRelevanceFieldEnum]


  export const PostagemOrderByRelevanceFieldEnum: {
    imagemPrato: 'imagemPrato',
    comentario: 'comentario'
  };

  export type PostagemOrderByRelevanceFieldEnum = (typeof PostagemOrderByRelevanceFieldEnum)[keyof typeof PostagemOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'NivelHabilidade'
   */
  export type EnumNivelHabilidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NivelHabilidade'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TipoDieta'
   */
  export type EnumTipoDietaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDieta'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    avatar?: StringNullableFilter<"Usuario"> | string | null
    nivelHabilidade?: EnumNivelHabilidadeFilter<"Usuario"> | $Enums.NivelHabilidade
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    perfil?: XOR<PerfilAlimentarNullableScalarRelationFilter, PerfilAlimentarWhereInput> | null
    inventario?: InventarioListRelationFilter
    receitas?: ReceitaListRelationFilter
    postagens?: PostagemListRelationFilter
    comentarios?: ComentarioListRelationFilter
    favoritos?: FavoritoListRelationFilter
    geracoes?: ReceitaGeracaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    avatar?: SortOrderInput | SortOrder
    nivelHabilidade?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    perfil?: PerfilAlimentarOrderByWithRelationInput
    inventario?: InventarioOrderByRelationAggregateInput
    receitas?: ReceitaOrderByRelationAggregateInput
    postagens?: PostagemOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    geracoes?: ReceitaGeracaoOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    avatar?: StringNullableFilter<"Usuario"> | string | null
    nivelHabilidade?: EnumNivelHabilidadeFilter<"Usuario"> | $Enums.NivelHabilidade
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    perfil?: XOR<PerfilAlimentarNullableScalarRelationFilter, PerfilAlimentarWhereInput> | null
    inventario?: InventarioListRelationFilter
    receitas?: ReceitaListRelationFilter
    postagens?: PostagemListRelationFilter
    comentarios?: ComentarioListRelationFilter
    favoritos?: FavoritoListRelationFilter
    geracoes?: ReceitaGeracaoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    avatar?: SortOrderInput | SortOrder
    nivelHabilidade?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    avatar?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    nivelHabilidade?: EnumNivelHabilidadeWithAggregatesFilter<"Usuario"> | $Enums.NivelHabilidade
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PerfilAlimentarWhereInput = {
    AND?: PerfilAlimentarWhereInput | PerfilAlimentarWhereInput[]
    OR?: PerfilAlimentarWhereInput[]
    NOT?: PerfilAlimentarWhereInput | PerfilAlimentarWhereInput[]
    id?: IntFilter<"PerfilAlimentar"> | number
    usuarioId?: IntFilter<"PerfilAlimentar"> | number
    tipoDieta?: EnumTipoDietaFilter<"PerfilAlimentar"> | $Enums.TipoDieta
    criadoEm?: DateTimeFilter<"PerfilAlimentar"> | Date | string
    atualizadoEm?: DateTimeFilter<"PerfilAlimentar"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    restricoes?: RestricaoAlimentarListRelationFilter
  }

  export type PerfilAlimentarOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    tipoDieta?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    restricoes?: RestricaoAlimentarOrderByRelationAggregateInput
  }

  export type PerfilAlimentarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: number
    AND?: PerfilAlimentarWhereInput | PerfilAlimentarWhereInput[]
    OR?: PerfilAlimentarWhereInput[]
    NOT?: PerfilAlimentarWhereInput | PerfilAlimentarWhereInput[]
    tipoDieta?: EnumTipoDietaFilter<"PerfilAlimentar"> | $Enums.TipoDieta
    criadoEm?: DateTimeFilter<"PerfilAlimentar"> | Date | string
    atualizadoEm?: DateTimeFilter<"PerfilAlimentar"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    restricoes?: RestricaoAlimentarListRelationFilter
  }, "id" | "usuarioId">

  export type PerfilAlimentarOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    tipoDieta?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: PerfilAlimentarCountOrderByAggregateInput
    _avg?: PerfilAlimentarAvgOrderByAggregateInput
    _max?: PerfilAlimentarMaxOrderByAggregateInput
    _min?: PerfilAlimentarMinOrderByAggregateInput
    _sum?: PerfilAlimentarSumOrderByAggregateInput
  }

  export type PerfilAlimentarScalarWhereWithAggregatesInput = {
    AND?: PerfilAlimentarScalarWhereWithAggregatesInput | PerfilAlimentarScalarWhereWithAggregatesInput[]
    OR?: PerfilAlimentarScalarWhereWithAggregatesInput[]
    NOT?: PerfilAlimentarScalarWhereWithAggregatesInput | PerfilAlimentarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PerfilAlimentar"> | number
    usuarioId?: IntWithAggregatesFilter<"PerfilAlimentar"> | number
    tipoDieta?: EnumTipoDietaWithAggregatesFilter<"PerfilAlimentar"> | $Enums.TipoDieta
    criadoEm?: DateTimeWithAggregatesFilter<"PerfilAlimentar"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"PerfilAlimentar"> | Date | string
  }

  export type RestricaoAlimentarWhereInput = {
    AND?: RestricaoAlimentarWhereInput | RestricaoAlimentarWhereInput[]
    OR?: RestricaoAlimentarWhereInput[]
    NOT?: RestricaoAlimentarWhereInput | RestricaoAlimentarWhereInput[]
    id?: IntFilter<"RestricaoAlimentar"> | number
    perfilId?: IntFilter<"RestricaoAlimentar"> | number
    tipo?: StringFilter<"RestricaoAlimentar"> | string
    perfil?: XOR<PerfilAlimentarScalarRelationFilter, PerfilAlimentarWhereInput>
  }

  export type RestricaoAlimentarOrderByWithRelationInput = {
    id?: SortOrder
    perfilId?: SortOrder
    tipo?: SortOrder
    perfil?: PerfilAlimentarOrderByWithRelationInput
    _relevance?: RestricaoAlimentarOrderByRelevanceInput
  }

  export type RestricaoAlimentarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RestricaoAlimentarWhereInput | RestricaoAlimentarWhereInput[]
    OR?: RestricaoAlimentarWhereInput[]
    NOT?: RestricaoAlimentarWhereInput | RestricaoAlimentarWhereInput[]
    perfilId?: IntFilter<"RestricaoAlimentar"> | number
    tipo?: StringFilter<"RestricaoAlimentar"> | string
    perfil?: XOR<PerfilAlimentarScalarRelationFilter, PerfilAlimentarWhereInput>
  }, "id">

  export type RestricaoAlimentarOrderByWithAggregationInput = {
    id?: SortOrder
    perfilId?: SortOrder
    tipo?: SortOrder
    _count?: RestricaoAlimentarCountOrderByAggregateInput
    _avg?: RestricaoAlimentarAvgOrderByAggregateInput
    _max?: RestricaoAlimentarMaxOrderByAggregateInput
    _min?: RestricaoAlimentarMinOrderByAggregateInput
    _sum?: RestricaoAlimentarSumOrderByAggregateInput
  }

  export type RestricaoAlimentarScalarWhereWithAggregatesInput = {
    AND?: RestricaoAlimentarScalarWhereWithAggregatesInput | RestricaoAlimentarScalarWhereWithAggregatesInput[]
    OR?: RestricaoAlimentarScalarWhereWithAggregatesInput[]
    NOT?: RestricaoAlimentarScalarWhereWithAggregatesInput | RestricaoAlimentarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestricaoAlimentar"> | number
    perfilId?: IntWithAggregatesFilter<"RestricaoAlimentar"> | number
    tipo?: StringWithAggregatesFilter<"RestricaoAlimentar"> | string
  }

  export type IngredienteWhereInput = {
    AND?: IngredienteWhereInput | IngredienteWhereInput[]
    OR?: IngredienteWhereInput[]
    NOT?: IngredienteWhereInput | IngredienteWhereInput[]
    id?: IntFilter<"Ingrediente"> | number
    nome?: StringFilter<"Ingrediente"> | string
    categoria?: StringFilter<"Ingrediente"> | string
    classificacaoStatus?: StringFilter<"Ingrediente"> | string
    dietasPermitidas?: StringNullableFilter<"Ingrediente"> | string | null
    restricoes?: StringNullableFilter<"Ingrediente"> | string | null
    inventarios?: InventarioListRelationFilter
    receitaIngredientes?: ReceitaIngredienteListRelationFilter
  }

  export type IngredienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    classificacaoStatus?: SortOrder
    dietasPermitidas?: SortOrderInput | SortOrder
    restricoes?: SortOrderInput | SortOrder
    inventarios?: InventarioOrderByRelationAggregateInput
    receitaIngredientes?: ReceitaIngredienteOrderByRelationAggregateInput
    _relevance?: IngredienteOrderByRelevanceInput
  }

  export type IngredienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: IngredienteWhereInput | IngredienteWhereInput[]
    OR?: IngredienteWhereInput[]
    NOT?: IngredienteWhereInput | IngredienteWhereInput[]
    categoria?: StringFilter<"Ingrediente"> | string
    classificacaoStatus?: StringFilter<"Ingrediente"> | string
    dietasPermitidas?: StringNullableFilter<"Ingrediente"> | string | null
    restricoes?: StringNullableFilter<"Ingrediente"> | string | null
    inventarios?: InventarioListRelationFilter
    receitaIngredientes?: ReceitaIngredienteListRelationFilter
  }, "id" | "nome">

  export type IngredienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    classificacaoStatus?: SortOrder
    dietasPermitidas?: SortOrderInput | SortOrder
    restricoes?: SortOrderInput | SortOrder
    _count?: IngredienteCountOrderByAggregateInput
    _avg?: IngredienteAvgOrderByAggregateInput
    _max?: IngredienteMaxOrderByAggregateInput
    _min?: IngredienteMinOrderByAggregateInput
    _sum?: IngredienteSumOrderByAggregateInput
  }

  export type IngredienteScalarWhereWithAggregatesInput = {
    AND?: IngredienteScalarWhereWithAggregatesInput | IngredienteScalarWhereWithAggregatesInput[]
    OR?: IngredienteScalarWhereWithAggregatesInput[]
    NOT?: IngredienteScalarWhereWithAggregatesInput | IngredienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingrediente"> | number
    nome?: StringWithAggregatesFilter<"Ingrediente"> | string
    categoria?: StringWithAggregatesFilter<"Ingrediente"> | string
    classificacaoStatus?: StringWithAggregatesFilter<"Ingrediente"> | string
    dietasPermitidas?: StringNullableWithAggregatesFilter<"Ingrediente"> | string | null
    restricoes?: StringNullableWithAggregatesFilter<"Ingrediente"> | string | null
  }

  export type InventarioWhereInput = {
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    id?: IntFilter<"Inventario"> | number
    usuarioId?: IntFilter<"Inventario"> | number
    ingredienteId?: IntFilter<"Inventario"> | number
    quantidade?: FloatFilter<"Inventario"> | number
    unidade?: StringFilter<"Inventario"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }

  export type InventarioOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    ingrediente?: IngredienteOrderByWithRelationInput
    _relevance?: InventarioOrderByRelevanceInput
  }

  export type InventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_ingredienteId?: InventarioUsuarioIdIngredienteIdCompoundUniqueInput
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    usuarioId?: IntFilter<"Inventario"> | number
    ingredienteId?: IntFilter<"Inventario"> | number
    quantidade?: FloatFilter<"Inventario"> | number
    unidade?: StringFilter<"Inventario"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }, "id" | "usuarioId_ingredienteId">

  export type InventarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    _count?: InventarioCountOrderByAggregateInput
    _avg?: InventarioAvgOrderByAggregateInput
    _max?: InventarioMaxOrderByAggregateInput
    _min?: InventarioMinOrderByAggregateInput
    _sum?: InventarioSumOrderByAggregateInput
  }

  export type InventarioScalarWhereWithAggregatesInput = {
    AND?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    OR?: InventarioScalarWhereWithAggregatesInput[]
    NOT?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inventario"> | number
    usuarioId?: IntWithAggregatesFilter<"Inventario"> | number
    ingredienteId?: IntWithAggregatesFilter<"Inventario"> | number
    quantidade?: FloatWithAggregatesFilter<"Inventario"> | number
    unidade?: StringWithAggregatesFilter<"Inventario"> | string
  }

  export type ReceitaWhereInput = {
    AND?: ReceitaWhereInput | ReceitaWhereInput[]
    OR?: ReceitaWhereInput[]
    NOT?: ReceitaWhereInput | ReceitaWhereInput[]
    id?: IntFilter<"Receita"> | number
    usuarioId?: IntFilter<"Receita"> | number
    titulo?: StringFilter<"Receita"> | string
    modoPreparo?: StringFilter<"Receita"> | string
    tempoEstimado?: IntFilter<"Receita"> | number
    porcoes?: IntFilter<"Receita"> | number
    imagem?: StringNullableFilter<"Receita"> | string | null
    publica?: BoolFilter<"Receita"> | boolean
    geradaPorIA?: BoolFilter<"Receita"> | boolean
    criadaEm?: DateTimeFilter<"Receita"> | Date | string
    atualizadaEm?: DateTimeFilter<"Receita"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ingredientes?: ReceitaIngredienteListRelationFilter
    postagens?: PostagemListRelationFilter
    comentarios?: ComentarioListRelationFilter
    favoritos?: FavoritoListRelationFilter
  }

  export type ReceitaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    titulo?: SortOrder
    modoPreparo?: SortOrder
    tempoEstimado?: SortOrder
    porcoes?: SortOrder
    imagem?: SortOrderInput | SortOrder
    publica?: SortOrder
    geradaPorIA?: SortOrder
    criadaEm?: SortOrder
    atualizadaEm?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    ingredientes?: ReceitaIngredienteOrderByRelationAggregateInput
    postagens?: PostagemOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    _relevance?: ReceitaOrderByRelevanceInput
  }

  export type ReceitaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReceitaWhereInput | ReceitaWhereInput[]
    OR?: ReceitaWhereInput[]
    NOT?: ReceitaWhereInput | ReceitaWhereInput[]
    usuarioId?: IntFilter<"Receita"> | number
    titulo?: StringFilter<"Receita"> | string
    modoPreparo?: StringFilter<"Receita"> | string
    tempoEstimado?: IntFilter<"Receita"> | number
    porcoes?: IntFilter<"Receita"> | number
    imagem?: StringNullableFilter<"Receita"> | string | null
    publica?: BoolFilter<"Receita"> | boolean
    geradaPorIA?: BoolFilter<"Receita"> | boolean
    criadaEm?: DateTimeFilter<"Receita"> | Date | string
    atualizadaEm?: DateTimeFilter<"Receita"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ingredientes?: ReceitaIngredienteListRelationFilter
    postagens?: PostagemListRelationFilter
    comentarios?: ComentarioListRelationFilter
    favoritos?: FavoritoListRelationFilter
  }, "id">

  export type ReceitaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    titulo?: SortOrder
    modoPreparo?: SortOrder
    tempoEstimado?: SortOrder
    porcoes?: SortOrder
    imagem?: SortOrderInput | SortOrder
    publica?: SortOrder
    geradaPorIA?: SortOrder
    criadaEm?: SortOrder
    atualizadaEm?: SortOrder
    _count?: ReceitaCountOrderByAggregateInput
    _avg?: ReceitaAvgOrderByAggregateInput
    _max?: ReceitaMaxOrderByAggregateInput
    _min?: ReceitaMinOrderByAggregateInput
    _sum?: ReceitaSumOrderByAggregateInput
  }

  export type ReceitaScalarWhereWithAggregatesInput = {
    AND?: ReceitaScalarWhereWithAggregatesInput | ReceitaScalarWhereWithAggregatesInput[]
    OR?: ReceitaScalarWhereWithAggregatesInput[]
    NOT?: ReceitaScalarWhereWithAggregatesInput | ReceitaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Receita"> | number
    usuarioId?: IntWithAggregatesFilter<"Receita"> | number
    titulo?: StringWithAggregatesFilter<"Receita"> | string
    modoPreparo?: StringWithAggregatesFilter<"Receita"> | string
    tempoEstimado?: IntWithAggregatesFilter<"Receita"> | number
    porcoes?: IntWithAggregatesFilter<"Receita"> | number
    imagem?: StringNullableWithAggregatesFilter<"Receita"> | string | null
    publica?: BoolWithAggregatesFilter<"Receita"> | boolean
    geradaPorIA?: BoolWithAggregatesFilter<"Receita"> | boolean
    criadaEm?: DateTimeWithAggregatesFilter<"Receita"> | Date | string
    atualizadaEm?: DateTimeWithAggregatesFilter<"Receita"> | Date | string
  }

  export type FavoritoWhereInput = {
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    id?: IntFilter<"Favorito"> | number
    usuarioId?: IntFilter<"Favorito"> | number
    receitaId?: IntFilter<"Favorito"> | number
    criadoEm?: DateTimeFilter<"Favorito"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
  }

  export type FavoritoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
    criadoEm?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    receita?: ReceitaOrderByWithRelationInput
  }

  export type FavoritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_receitaId?: FavoritoUsuarioIdReceitaIdCompoundUniqueInput
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    usuarioId?: IntFilter<"Favorito"> | number
    receitaId?: IntFilter<"Favorito"> | number
    criadoEm?: DateTimeFilter<"Favorito"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
  }, "id" | "usuarioId_receitaId">

  export type FavoritoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
    criadoEm?: SortOrder
    _count?: FavoritoCountOrderByAggregateInput
    _avg?: FavoritoAvgOrderByAggregateInput
    _max?: FavoritoMaxOrderByAggregateInput
    _min?: FavoritoMinOrderByAggregateInput
    _sum?: FavoritoSumOrderByAggregateInput
  }

  export type FavoritoScalarWhereWithAggregatesInput = {
    AND?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    OR?: FavoritoScalarWhereWithAggregatesInput[]
    NOT?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorito"> | number
    usuarioId?: IntWithAggregatesFilter<"Favorito"> | number
    receitaId?: IntWithAggregatesFilter<"Favorito"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Favorito"> | Date | string
  }

  export type ReceitaGeracaoWhereInput = {
    AND?: ReceitaGeracaoWhereInput | ReceitaGeracaoWhereInput[]
    OR?: ReceitaGeracaoWhereInput[]
    NOT?: ReceitaGeracaoWhereInput | ReceitaGeracaoWhereInput[]
    id?: IntFilter<"ReceitaGeracao"> | number
    usuarioId?: IntFilter<"ReceitaGeracao"> | number
    chaveCache?: StringFilter<"ReceitaGeracao"> | string
    modelo?: StringFilter<"ReceitaGeracao"> | string
    status?: StringFilter<"ReceitaGeracao"> | string
    payload?: JsonNullableFilter<"ReceitaGeracao">
    consumo?: JsonNullableFilter<"ReceitaGeracao">
    erroCodigo?: StringNullableFilter<"ReceitaGeracao"> | string | null
    receitaId?: IntNullableFilter<"ReceitaGeracao"> | number | null
    cacheExpiraEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    rascunhoExpiraEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    criadaEm?: DateTimeFilter<"ReceitaGeracao"> | Date | string
    finalizadaEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    duracaoMs?: IntNullableFilter<"ReceitaGeracao"> | number | null
    reservaExpiraEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ReceitaGeracaoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    chaveCache?: SortOrder
    modelo?: SortOrder
    status?: SortOrder
    payload?: SortOrderInput | SortOrder
    consumo?: SortOrderInput | SortOrder
    erroCodigo?: SortOrderInput | SortOrder
    receitaId?: SortOrderInput | SortOrder
    cacheExpiraEm?: SortOrderInput | SortOrder
    rascunhoExpiraEm?: SortOrderInput | SortOrder
    criadaEm?: SortOrder
    finalizadaEm?: SortOrderInput | SortOrder
    duracaoMs?: SortOrderInput | SortOrder
    reservaExpiraEm?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: ReceitaGeracaoOrderByRelevanceInput
  }

  export type ReceitaGeracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReceitaGeracaoWhereInput | ReceitaGeracaoWhereInput[]
    OR?: ReceitaGeracaoWhereInput[]
    NOT?: ReceitaGeracaoWhereInput | ReceitaGeracaoWhereInput[]
    usuarioId?: IntFilter<"ReceitaGeracao"> | number
    chaveCache?: StringFilter<"ReceitaGeracao"> | string
    modelo?: StringFilter<"ReceitaGeracao"> | string
    status?: StringFilter<"ReceitaGeracao"> | string
    payload?: JsonNullableFilter<"ReceitaGeracao">
    consumo?: JsonNullableFilter<"ReceitaGeracao">
    erroCodigo?: StringNullableFilter<"ReceitaGeracao"> | string | null
    receitaId?: IntNullableFilter<"ReceitaGeracao"> | number | null
    cacheExpiraEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    rascunhoExpiraEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    criadaEm?: DateTimeFilter<"ReceitaGeracao"> | Date | string
    finalizadaEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    duracaoMs?: IntNullableFilter<"ReceitaGeracao"> | number | null
    reservaExpiraEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ReceitaGeracaoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    chaveCache?: SortOrder
    modelo?: SortOrder
    status?: SortOrder
    payload?: SortOrderInput | SortOrder
    consumo?: SortOrderInput | SortOrder
    erroCodigo?: SortOrderInput | SortOrder
    receitaId?: SortOrderInput | SortOrder
    cacheExpiraEm?: SortOrderInput | SortOrder
    rascunhoExpiraEm?: SortOrderInput | SortOrder
    criadaEm?: SortOrder
    finalizadaEm?: SortOrderInput | SortOrder
    duracaoMs?: SortOrderInput | SortOrder
    reservaExpiraEm?: SortOrderInput | SortOrder
    _count?: ReceitaGeracaoCountOrderByAggregateInput
    _avg?: ReceitaGeracaoAvgOrderByAggregateInput
    _max?: ReceitaGeracaoMaxOrderByAggregateInput
    _min?: ReceitaGeracaoMinOrderByAggregateInput
    _sum?: ReceitaGeracaoSumOrderByAggregateInput
  }

  export type ReceitaGeracaoScalarWhereWithAggregatesInput = {
    AND?: ReceitaGeracaoScalarWhereWithAggregatesInput | ReceitaGeracaoScalarWhereWithAggregatesInput[]
    OR?: ReceitaGeracaoScalarWhereWithAggregatesInput[]
    NOT?: ReceitaGeracaoScalarWhereWithAggregatesInput | ReceitaGeracaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReceitaGeracao"> | number
    usuarioId?: IntWithAggregatesFilter<"ReceitaGeracao"> | number
    chaveCache?: StringWithAggregatesFilter<"ReceitaGeracao"> | string
    modelo?: StringWithAggregatesFilter<"ReceitaGeracao"> | string
    status?: StringWithAggregatesFilter<"ReceitaGeracao"> | string
    payload?: JsonNullableWithAggregatesFilter<"ReceitaGeracao">
    consumo?: JsonNullableWithAggregatesFilter<"ReceitaGeracao">
    erroCodigo?: StringNullableWithAggregatesFilter<"ReceitaGeracao"> | string | null
    receitaId?: IntNullableWithAggregatesFilter<"ReceitaGeracao"> | number | null
    cacheExpiraEm?: DateTimeNullableWithAggregatesFilter<"ReceitaGeracao"> | Date | string | null
    rascunhoExpiraEm?: DateTimeNullableWithAggregatesFilter<"ReceitaGeracao"> | Date | string | null
    criadaEm?: DateTimeWithAggregatesFilter<"ReceitaGeracao"> | Date | string
    finalizadaEm?: DateTimeNullableWithAggregatesFilter<"ReceitaGeracao"> | Date | string | null
    duracaoMs?: IntNullableWithAggregatesFilter<"ReceitaGeracao"> | number | null
    reservaExpiraEm?: DateTimeNullableWithAggregatesFilter<"ReceitaGeracao"> | Date | string | null
  }

  export type IaControleWhereInput = {
    AND?: IaControleWhereInput | IaControleWhereInput[]
    OR?: IaControleWhereInput[]
    NOT?: IaControleWhereInput | IaControleWhereInput[]
    id?: IntFilter<"IaControle"> | number
  }

  export type IaControleOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type IaControleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IaControleWhereInput | IaControleWhereInput[]
    OR?: IaControleWhereInput[]
    NOT?: IaControleWhereInput | IaControleWhereInput[]
  }, "id">

  export type IaControleOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: IaControleCountOrderByAggregateInput
    _avg?: IaControleAvgOrderByAggregateInput
    _max?: IaControleMaxOrderByAggregateInput
    _min?: IaControleMinOrderByAggregateInput
    _sum?: IaControleSumOrderByAggregateInput
  }

  export type IaControleScalarWhereWithAggregatesInput = {
    AND?: IaControleScalarWhereWithAggregatesInput | IaControleScalarWhereWithAggregatesInput[]
    OR?: IaControleScalarWhereWithAggregatesInput[]
    NOT?: IaControleScalarWhereWithAggregatesInput | IaControleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IaControle"> | number
  }

  export type ReceitaIngredienteWhereInput = {
    AND?: ReceitaIngredienteWhereInput | ReceitaIngredienteWhereInput[]
    OR?: ReceitaIngredienteWhereInput[]
    NOT?: ReceitaIngredienteWhereInput | ReceitaIngredienteWhereInput[]
    receitaId?: IntFilter<"ReceitaIngrediente"> | number
    ingredienteId?: IntFilter<"ReceitaIngrediente"> | number
    quantidade?: FloatFilter<"ReceitaIngrediente"> | number
    unidade?: StringFilter<"ReceitaIngrediente"> | string
    opcional?: BoolFilter<"ReceitaIngrediente"> | boolean
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }

  export type ReceitaIngredienteOrderByWithRelationInput = {
    receitaId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    opcional?: SortOrder
    receita?: ReceitaOrderByWithRelationInput
    ingrediente?: IngredienteOrderByWithRelationInput
    _relevance?: ReceitaIngredienteOrderByRelevanceInput
  }

  export type ReceitaIngredienteWhereUniqueInput = Prisma.AtLeast<{
    receitaId_ingredienteId?: ReceitaIngredienteReceitaIdIngredienteIdCompoundUniqueInput
    AND?: ReceitaIngredienteWhereInput | ReceitaIngredienteWhereInput[]
    OR?: ReceitaIngredienteWhereInput[]
    NOT?: ReceitaIngredienteWhereInput | ReceitaIngredienteWhereInput[]
    receitaId?: IntFilter<"ReceitaIngrediente"> | number
    ingredienteId?: IntFilter<"ReceitaIngrediente"> | number
    quantidade?: FloatFilter<"ReceitaIngrediente"> | number
    unidade?: StringFilter<"ReceitaIngrediente"> | string
    opcional?: BoolFilter<"ReceitaIngrediente"> | boolean
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }, "receitaId_ingredienteId">

  export type ReceitaIngredienteOrderByWithAggregationInput = {
    receitaId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    opcional?: SortOrder
    _count?: ReceitaIngredienteCountOrderByAggregateInput
    _avg?: ReceitaIngredienteAvgOrderByAggregateInput
    _max?: ReceitaIngredienteMaxOrderByAggregateInput
    _min?: ReceitaIngredienteMinOrderByAggregateInput
    _sum?: ReceitaIngredienteSumOrderByAggregateInput
  }

  export type ReceitaIngredienteScalarWhereWithAggregatesInput = {
    AND?: ReceitaIngredienteScalarWhereWithAggregatesInput | ReceitaIngredienteScalarWhereWithAggregatesInput[]
    OR?: ReceitaIngredienteScalarWhereWithAggregatesInput[]
    NOT?: ReceitaIngredienteScalarWhereWithAggregatesInput | ReceitaIngredienteScalarWhereWithAggregatesInput[]
    receitaId?: IntWithAggregatesFilter<"ReceitaIngrediente"> | number
    ingredienteId?: IntWithAggregatesFilter<"ReceitaIngrediente"> | number
    quantidade?: FloatWithAggregatesFilter<"ReceitaIngrediente"> | number
    unidade?: StringWithAggregatesFilter<"ReceitaIngrediente"> | string
    opcional?: BoolWithAggregatesFilter<"ReceitaIngrediente"> | boolean
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: IntFilter<"Comentario"> | number
    receitaId?: IntFilter<"Comentario"> | number
    usuarioId?: IntFilter<"Comentario"> | number
    respostaDeId?: IntNullableFilter<"Comentario"> | number | null
    texto?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    respostaDe?: XOR<ComentarioNullableScalarRelationFilter, ComentarioWhereInput> | null
    respostas?: ComentarioListRelationFilter
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    receitaId?: SortOrder
    usuarioId?: SortOrder
    respostaDeId?: SortOrderInput | SortOrder
    texto?: SortOrder
    criadoEm?: SortOrder
    receita?: ReceitaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    respostaDe?: ComentarioOrderByWithRelationInput
    respostas?: ComentarioOrderByRelationAggregateInput
    _relevance?: ComentarioOrderByRelevanceInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    receitaId?: IntFilter<"Comentario"> | number
    usuarioId?: IntFilter<"Comentario"> | number
    respostaDeId?: IntNullableFilter<"Comentario"> | number | null
    texto?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    respostaDe?: XOR<ComentarioNullableScalarRelationFilter, ComentarioWhereInput> | null
    respostas?: ComentarioListRelationFilter
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    receitaId?: SortOrder
    usuarioId?: SortOrder
    respostaDeId?: SortOrderInput | SortOrder
    texto?: SortOrder
    criadoEm?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _avg?: ComentarioAvgOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
    _sum?: ComentarioSumOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comentario"> | number
    receitaId?: IntWithAggregatesFilter<"Comentario"> | number
    usuarioId?: IntWithAggregatesFilter<"Comentario"> | number
    respostaDeId?: IntNullableWithAggregatesFilter<"Comentario"> | number | null
    texto?: StringWithAggregatesFilter<"Comentario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
  }

  export type PostagemWhereInput = {
    AND?: PostagemWhereInput | PostagemWhereInput[]
    OR?: PostagemWhereInput[]
    NOT?: PostagemWhereInput | PostagemWhereInput[]
    id?: IntFilter<"Postagem"> | number
    usuarioId?: IntFilter<"Postagem"> | number
    receitaId?: IntNullableFilter<"Postagem"> | number | null
    imagemPrato?: StringNullableFilter<"Postagem"> | string | null
    comentario?: StringNullableFilter<"Postagem"> | string | null
    criadaEm?: DateTimeFilter<"Postagem"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    receita?: XOR<ReceitaNullableScalarRelationFilter, ReceitaWhereInput> | null
  }

  export type PostagemOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrderInput | SortOrder
    imagemPrato?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    criadaEm?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    receita?: ReceitaOrderByWithRelationInput
    _relevance?: PostagemOrderByRelevanceInput
  }

  export type PostagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostagemWhereInput | PostagemWhereInput[]
    OR?: PostagemWhereInput[]
    NOT?: PostagemWhereInput | PostagemWhereInput[]
    usuarioId?: IntFilter<"Postagem"> | number
    receitaId?: IntNullableFilter<"Postagem"> | number | null
    imagemPrato?: StringNullableFilter<"Postagem"> | string | null
    comentario?: StringNullableFilter<"Postagem"> | string | null
    criadaEm?: DateTimeFilter<"Postagem"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    receita?: XOR<ReceitaNullableScalarRelationFilter, ReceitaWhereInput> | null
  }, "id">

  export type PostagemOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrderInput | SortOrder
    imagemPrato?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    criadaEm?: SortOrder
    _count?: PostagemCountOrderByAggregateInput
    _avg?: PostagemAvgOrderByAggregateInput
    _max?: PostagemMaxOrderByAggregateInput
    _min?: PostagemMinOrderByAggregateInput
    _sum?: PostagemSumOrderByAggregateInput
  }

  export type PostagemScalarWhereWithAggregatesInput = {
    AND?: PostagemScalarWhereWithAggregatesInput | PostagemScalarWhereWithAggregatesInput[]
    OR?: PostagemScalarWhereWithAggregatesInput[]
    NOT?: PostagemScalarWhereWithAggregatesInput | PostagemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Postagem"> | number
    usuarioId?: IntWithAggregatesFilter<"Postagem"> | number
    receitaId?: IntNullableWithAggregatesFilter<"Postagem"> | number | null
    imagemPrato?: StringNullableWithAggregatesFilter<"Postagem"> | string | null
    comentario?: StringNullableWithAggregatesFilter<"Postagem"> | string | null
    criadaEm?: DateTimeWithAggregatesFilter<"Postagem"> | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarUncheckedCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioUncheckedCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaUncheckedCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUncheckedUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUncheckedUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUncheckedUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilAlimentarCreateInput = {
    tipoDieta?: $Enums.TipoDieta
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPerfilInput
    restricoes?: RestricaoAlimentarCreateNestedManyWithoutPerfilInput
  }

  export type PerfilAlimentarUncheckedCreateInput = {
    id?: number
    usuarioId: number
    tipoDieta?: $Enums.TipoDieta
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    restricoes?: RestricaoAlimentarUncheckedCreateNestedManyWithoutPerfilInput
  }

  export type PerfilAlimentarUpdateInput = {
    tipoDieta?: EnumTipoDietaFieldUpdateOperationsInput | $Enums.TipoDieta
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPerfilNestedInput
    restricoes?: RestricaoAlimentarUpdateManyWithoutPerfilNestedInput
  }

  export type PerfilAlimentarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    tipoDieta?: EnumTipoDietaFieldUpdateOperationsInput | $Enums.TipoDieta
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restricoes?: RestricaoAlimentarUncheckedUpdateManyWithoutPerfilNestedInput
  }

  export type PerfilAlimentarCreateManyInput = {
    id?: number
    usuarioId: number
    tipoDieta?: $Enums.TipoDieta
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PerfilAlimentarUpdateManyMutationInput = {
    tipoDieta?: EnumTipoDietaFieldUpdateOperationsInput | $Enums.TipoDieta
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilAlimentarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    tipoDieta?: EnumTipoDietaFieldUpdateOperationsInput | $Enums.TipoDieta
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestricaoAlimentarCreateInput = {
    tipo: string
    perfil: PerfilAlimentarCreateNestedOneWithoutRestricoesInput
  }

  export type RestricaoAlimentarUncheckedCreateInput = {
    id?: number
    perfilId: number
    tipo: string
  }

  export type RestricaoAlimentarUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilAlimentarUpdateOneRequiredWithoutRestricoesNestedInput
  }

  export type RestricaoAlimentarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    perfilId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type RestricaoAlimentarCreateManyInput = {
    id?: number
    perfilId: number
    tipo: string
  }

  export type RestricaoAlimentarUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type RestricaoAlimentarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    perfilId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type IngredienteCreateInput = {
    nome: string
    categoria: string
    classificacaoStatus?: string
    dietasPermitidas?: string | null
    restricoes?: string | null
    inventarios?: InventarioCreateNestedManyWithoutIngredienteInput
    receitaIngredientes?: ReceitaIngredienteCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateInput = {
    id?: number
    nome: string
    categoria: string
    classificacaoStatus?: string
    dietasPermitidas?: string | null
    restricoes?: string | null
    inventarios?: InventarioUncheckedCreateNestedManyWithoutIngredienteInput
    receitaIngredientes?: ReceitaIngredienteUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    classificacaoStatus?: StringFieldUpdateOperationsInput | string
    dietasPermitidas?: NullableStringFieldUpdateOperationsInput | string | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    inventarios?: InventarioUpdateManyWithoutIngredienteNestedInput
    receitaIngredientes?: ReceitaIngredienteUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    classificacaoStatus?: StringFieldUpdateOperationsInput | string
    dietasPermitidas?: NullableStringFieldUpdateOperationsInput | string | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    inventarios?: InventarioUncheckedUpdateManyWithoutIngredienteNestedInput
    receitaIngredientes?: ReceitaIngredienteUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteCreateManyInput = {
    id?: number
    nome: string
    categoria: string
    classificacaoStatus?: string
    dietasPermitidas?: string | null
    restricoes?: string | null
  }

  export type IngredienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    classificacaoStatus?: StringFieldUpdateOperationsInput | string
    dietasPermitidas?: NullableStringFieldUpdateOperationsInput | string | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngredienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    classificacaoStatus?: StringFieldUpdateOperationsInput | string
    dietasPermitidas?: NullableStringFieldUpdateOperationsInput | string | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventarioCreateInput = {
    quantidade: number
    unidade: string
    usuario: UsuarioCreateNestedOneWithoutInventarioInput
    ingrediente: IngredienteCreateNestedOneWithoutInventariosInput
  }

  export type InventarioUncheckedCreateInput = {
    id?: number
    usuarioId: number
    ingredienteId: number
    quantidade: number
    unidade: string
  }

  export type InventarioUpdateInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutInventarioNestedInput
    ingrediente?: IngredienteUpdateOneRequiredWithoutInventariosNestedInput
  }

  export type InventarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    ingredienteId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
  }

  export type InventarioCreateManyInput = {
    id?: number
    usuarioId: number
    ingredienteId: number
    quantidade: number
    unidade: string
  }

  export type InventarioUpdateManyMutationInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
  }

  export type InventarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    ingredienteId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
  }

  export type ReceitaCreateInput = {
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReceitasInput
    ingredientes?: ReceitaIngredienteCreateNestedManyWithoutReceitaInput
    postagens?: PostagemCreateNestedManyWithoutReceitaInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
    favoritos?: FavoritoCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateInput = {
    id?: number
    usuarioId: number
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    ingredientes?: ReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutReceitaInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReceitasNestedInput
    ingredientes?: ReceitaIngredienteUpdateManyWithoutReceitaNestedInput
    postagens?: PostagemUpdateManyWithoutReceitaNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
    favoritos?: FavoritoUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientes?: ReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutReceitaNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaCreateManyInput = {
    id?: number
    usuarioId: number
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
  }

  export type ReceitaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateInput = {
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFavoritosInput
    receita: ReceitaCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    receitaId: number
    criadoEm?: Date | string
  }

  export type FavoritoUpdateInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFavoritosNestedInput
    receita?: ReceitaUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateManyInput = {
    id?: number
    usuarioId: number
    receitaId: number
    criadoEm?: Date | string
  }

  export type FavoritoUpdateManyMutationInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaGeracaoCreateInput = {
    chaveCache: string
    modelo: string
    status: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: string | null
    receitaId?: number | null
    cacheExpiraEm?: Date | string | null
    rascunhoExpiraEm?: Date | string | null
    criadaEm?: Date | string
    finalizadaEm?: Date | string | null
    duracaoMs?: number | null
    reservaExpiraEm?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutGeracoesInput
  }

  export type ReceitaGeracaoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    chaveCache: string
    modelo: string
    status: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: string | null
    receitaId?: number | null
    cacheExpiraEm?: Date | string | null
    rascunhoExpiraEm?: Date | string | null
    criadaEm?: Date | string
    finalizadaEm?: Date | string | null
    duracaoMs?: number | null
    reservaExpiraEm?: Date | string | null
  }

  export type ReceitaGeracaoUpdateInput = {
    chaveCache?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: NullableStringFieldUpdateOperationsInput | string | null
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    cacheExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rascunhoExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizadaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracaoMs?: NullableIntFieldUpdateOperationsInput | number | null
    reservaExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutGeracoesNestedInput
  }

  export type ReceitaGeracaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    chaveCache?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: NullableStringFieldUpdateOperationsInput | string | null
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    cacheExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rascunhoExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizadaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracaoMs?: NullableIntFieldUpdateOperationsInput | number | null
    reservaExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceitaGeracaoCreateManyInput = {
    id?: number
    usuarioId: number
    chaveCache: string
    modelo: string
    status: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: string | null
    receitaId?: number | null
    cacheExpiraEm?: Date | string | null
    rascunhoExpiraEm?: Date | string | null
    criadaEm?: Date | string
    finalizadaEm?: Date | string | null
    duracaoMs?: number | null
    reservaExpiraEm?: Date | string | null
  }

  export type ReceitaGeracaoUpdateManyMutationInput = {
    chaveCache?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: NullableStringFieldUpdateOperationsInput | string | null
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    cacheExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rascunhoExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizadaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracaoMs?: NullableIntFieldUpdateOperationsInput | number | null
    reservaExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceitaGeracaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    chaveCache?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: NullableStringFieldUpdateOperationsInput | string | null
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    cacheExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rascunhoExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizadaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracaoMs?: NullableIntFieldUpdateOperationsInput | number | null
    reservaExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IaControleCreateInput = {
    id: number
  }

  export type IaControleUncheckedCreateInput = {
    id: number
  }

  export type IaControleUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type IaControleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type IaControleCreateManyInput = {
    id: number
  }

  export type IaControleUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type IaControleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaIngredienteCreateInput = {
    quantidade: number
    unidade: string
    opcional?: boolean
    receita: ReceitaCreateNestedOneWithoutIngredientesInput
    ingrediente: IngredienteCreateNestedOneWithoutReceitaIngredientesInput
  }

  export type ReceitaIngredienteUncheckedCreateInput = {
    receitaId: number
    ingredienteId: number
    quantidade: number
    unidade: string
    opcional?: boolean
  }

  export type ReceitaIngredienteUpdateInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    opcional?: BoolFieldUpdateOperationsInput | boolean
    receita?: ReceitaUpdateOneRequiredWithoutIngredientesNestedInput
    ingrediente?: IngredienteUpdateOneRequiredWithoutReceitaIngredientesNestedInput
  }

  export type ReceitaIngredienteUncheckedUpdateInput = {
    receitaId?: IntFieldUpdateOperationsInput | number
    ingredienteId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    opcional?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReceitaIngredienteCreateManyInput = {
    receitaId: number
    ingredienteId: number
    quantidade: number
    unidade: string
    opcional?: boolean
  }

  export type ReceitaIngredienteUpdateManyMutationInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    opcional?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReceitaIngredienteUncheckedUpdateManyInput = {
    receitaId?: IntFieldUpdateOperationsInput | number
    ingredienteId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    opcional?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComentarioCreateInput = {
    texto: string
    criadoEm?: Date | string
    receita: ReceitaCreateNestedOneWithoutComentariosInput
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
    respostaDe?: ComentarioCreateNestedOneWithoutRespostasInput
    respostas?: ComentarioCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: number
    receitaId: number
    usuarioId: number
    respostaDeId?: number | null
    texto: string
    criadoEm?: Date | string
    respostas?: ComentarioUncheckedCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutComentariosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    respostaDe?: ComentarioUpdateOneWithoutRespostasNestedInput
    respostas?: ComentarioUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: ComentarioUncheckedUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioCreateManyInput = {
    id?: number
    receitaId: number
    usuarioId: number
    respostaDeId?: number | null
    texto: string
    criadoEm?: Date | string
  }

  export type ComentarioUpdateManyMutationInput = {
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostagemCreateInput = {
    imagemPrato?: string | null
    comentario?: string | null
    criadaEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPostagensInput
    receita?: ReceitaCreateNestedOneWithoutPostagensInput
  }

  export type PostagemUncheckedCreateInput = {
    id?: number
    usuarioId: number
    receitaId?: number | null
    imagemPrato?: string | null
    comentario?: string | null
    criadaEm?: Date | string
  }

  export type PostagemUpdateInput = {
    imagemPrato?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPostagensNestedInput
    receita?: ReceitaUpdateOneWithoutPostagensNestedInput
  }

  export type PostagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagemPrato?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostagemCreateManyInput = {
    id?: number
    usuarioId: number
    receitaId?: number | null
    imagemPrato?: string | null
    comentario?: string | null
    criadaEm?: Date | string
  }

  export type PostagemUpdateManyMutationInput = {
    imagemPrato?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagemPrato?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumNivelHabilidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelHabilidade | EnumNivelHabilidadeFieldRefInput<$PrismaModel>
    in?: $Enums.NivelHabilidade[]
    notIn?: $Enums.NivelHabilidade[]
    not?: NestedEnumNivelHabilidadeFilter<$PrismaModel> | $Enums.NivelHabilidade
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PerfilAlimentarNullableScalarRelationFilter = {
    is?: PerfilAlimentarWhereInput | null
    isNot?: PerfilAlimentarWhereInput | null
  }

  export type InventarioListRelationFilter = {
    every?: InventarioWhereInput
    some?: InventarioWhereInput
    none?: InventarioWhereInput
  }

  export type ReceitaListRelationFilter = {
    every?: ReceitaWhereInput
    some?: ReceitaWhereInput
    none?: ReceitaWhereInput
  }

  export type PostagemListRelationFilter = {
    every?: PostagemWhereInput
    some?: PostagemWhereInput
    none?: PostagemWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type FavoritoListRelationFilter = {
    every?: FavoritoWhereInput
    some?: FavoritoWhereInput
    none?: FavoritoWhereInput
  }

  export type ReceitaGeracaoListRelationFilter = {
    every?: ReceitaGeracaoWhereInput
    some?: ReceitaGeracaoWhereInput
    none?: ReceitaGeracaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceitaGeracaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    avatar?: SortOrder
    nivelHabilidade?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    avatar?: SortOrder
    nivelHabilidade?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    avatar?: SortOrder
    nivelHabilidade?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumNivelHabilidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelHabilidade | EnumNivelHabilidadeFieldRefInput<$PrismaModel>
    in?: $Enums.NivelHabilidade[]
    notIn?: $Enums.NivelHabilidade[]
    not?: NestedEnumNivelHabilidadeWithAggregatesFilter<$PrismaModel> | $Enums.NivelHabilidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNivelHabilidadeFilter<$PrismaModel>
    _max?: NestedEnumNivelHabilidadeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTipoDietaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDieta | EnumTipoDietaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDieta[]
    notIn?: $Enums.TipoDieta[]
    not?: NestedEnumTipoDietaFilter<$PrismaModel> | $Enums.TipoDieta
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type RestricaoAlimentarListRelationFilter = {
    every?: RestricaoAlimentarWhereInput
    some?: RestricaoAlimentarWhereInput
    none?: RestricaoAlimentarWhereInput
  }

  export type RestricaoAlimentarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerfilAlimentarCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    tipoDieta?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PerfilAlimentarAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type PerfilAlimentarMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    tipoDieta?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PerfilAlimentarMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    tipoDieta?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PerfilAlimentarSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumTipoDietaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDieta | EnumTipoDietaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDieta[]
    notIn?: $Enums.TipoDieta[]
    not?: NestedEnumTipoDietaWithAggregatesFilter<$PrismaModel> | $Enums.TipoDieta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDietaFilter<$PrismaModel>
    _max?: NestedEnumTipoDietaFilter<$PrismaModel>
  }

  export type PerfilAlimentarScalarRelationFilter = {
    is?: PerfilAlimentarWhereInput
    isNot?: PerfilAlimentarWhereInput
  }

  export type RestricaoAlimentarOrderByRelevanceInput = {
    fields: RestricaoAlimentarOrderByRelevanceFieldEnum | RestricaoAlimentarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RestricaoAlimentarCountOrderByAggregateInput = {
    id?: SortOrder
    perfilId?: SortOrder
    tipo?: SortOrder
  }

  export type RestricaoAlimentarAvgOrderByAggregateInput = {
    id?: SortOrder
    perfilId?: SortOrder
  }

  export type RestricaoAlimentarMaxOrderByAggregateInput = {
    id?: SortOrder
    perfilId?: SortOrder
    tipo?: SortOrder
  }

  export type RestricaoAlimentarMinOrderByAggregateInput = {
    id?: SortOrder
    perfilId?: SortOrder
    tipo?: SortOrder
  }

  export type RestricaoAlimentarSumOrderByAggregateInput = {
    id?: SortOrder
    perfilId?: SortOrder
  }

  export type ReceitaIngredienteListRelationFilter = {
    every?: ReceitaIngredienteWhereInput
    some?: ReceitaIngredienteWhereInput
    none?: ReceitaIngredienteWhereInput
  }

  export type ReceitaIngredienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredienteOrderByRelevanceInput = {
    fields: IngredienteOrderByRelevanceFieldEnum | IngredienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IngredienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    classificacaoStatus?: SortOrder
    dietasPermitidas?: SortOrder
    restricoes?: SortOrder
  }

  export type IngredienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IngredienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    classificacaoStatus?: SortOrder
    dietasPermitidas?: SortOrder
    restricoes?: SortOrder
  }

  export type IngredienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    classificacaoStatus?: SortOrder
    dietasPermitidas?: SortOrder
    restricoes?: SortOrder
  }

  export type IngredienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IngredienteScalarRelationFilter = {
    is?: IngredienteWhereInput
    isNot?: IngredienteWhereInput
  }

  export type InventarioOrderByRelevanceInput = {
    fields: InventarioOrderByRelevanceFieldEnum | InventarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InventarioUsuarioIdIngredienteIdCompoundUniqueInput = {
    usuarioId: number
    ingredienteId: number
  }

  export type InventarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
  }

  export type InventarioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
  }

  export type InventarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
  }

  export type InventarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
  }

  export type InventarioSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReceitaOrderByRelevanceInput = {
    fields: ReceitaOrderByRelevanceFieldEnum | ReceitaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReceitaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    titulo?: SortOrder
    modoPreparo?: SortOrder
    tempoEstimado?: SortOrder
    porcoes?: SortOrder
    imagem?: SortOrder
    publica?: SortOrder
    geradaPorIA?: SortOrder
    criadaEm?: SortOrder
    atualizadaEm?: SortOrder
  }

  export type ReceitaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    tempoEstimado?: SortOrder
    porcoes?: SortOrder
  }

  export type ReceitaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    titulo?: SortOrder
    modoPreparo?: SortOrder
    tempoEstimado?: SortOrder
    porcoes?: SortOrder
    imagem?: SortOrder
    publica?: SortOrder
    geradaPorIA?: SortOrder
    criadaEm?: SortOrder
    atualizadaEm?: SortOrder
  }

  export type ReceitaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    titulo?: SortOrder
    modoPreparo?: SortOrder
    tempoEstimado?: SortOrder
    porcoes?: SortOrder
    imagem?: SortOrder
    publica?: SortOrder
    geradaPorIA?: SortOrder
    criadaEm?: SortOrder
    atualizadaEm?: SortOrder
  }

  export type ReceitaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    tempoEstimado?: SortOrder
    porcoes?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReceitaScalarRelationFilter = {
    is?: ReceitaWhereInput
    isNot?: ReceitaWhereInput
  }

  export type FavoritoUsuarioIdReceitaIdCompoundUniqueInput = {
    usuarioId: number
    receitaId: number
  }

  export type FavoritoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
    criadoEm?: SortOrder
  }

  export type FavoritoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
  }

  export type FavoritoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
    criadoEm?: SortOrder
  }

  export type FavoritoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
    criadoEm?: SortOrder
  }

  export type FavoritoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReceitaGeracaoOrderByRelevanceInput = {
    fields: ReceitaGeracaoOrderByRelevanceFieldEnum | ReceitaGeracaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReceitaGeracaoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    chaveCache?: SortOrder
    modelo?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    consumo?: SortOrder
    erroCodigo?: SortOrder
    receitaId?: SortOrder
    cacheExpiraEm?: SortOrder
    rascunhoExpiraEm?: SortOrder
    criadaEm?: SortOrder
    finalizadaEm?: SortOrder
    duracaoMs?: SortOrder
    reservaExpiraEm?: SortOrder
  }

  export type ReceitaGeracaoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
    duracaoMs?: SortOrder
  }

  export type ReceitaGeracaoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    chaveCache?: SortOrder
    modelo?: SortOrder
    status?: SortOrder
    erroCodigo?: SortOrder
    receitaId?: SortOrder
    cacheExpiraEm?: SortOrder
    rascunhoExpiraEm?: SortOrder
    criadaEm?: SortOrder
    finalizadaEm?: SortOrder
    duracaoMs?: SortOrder
    reservaExpiraEm?: SortOrder
  }

  export type ReceitaGeracaoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    chaveCache?: SortOrder
    modelo?: SortOrder
    status?: SortOrder
    erroCodigo?: SortOrder
    receitaId?: SortOrder
    cacheExpiraEm?: SortOrder
    rascunhoExpiraEm?: SortOrder
    criadaEm?: SortOrder
    finalizadaEm?: SortOrder
    duracaoMs?: SortOrder
    reservaExpiraEm?: SortOrder
  }

  export type ReceitaGeracaoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
    duracaoMs?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IaControleCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IaControleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IaControleMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IaControleMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IaControleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReceitaIngredienteOrderByRelevanceInput = {
    fields: ReceitaIngredienteOrderByRelevanceFieldEnum | ReceitaIngredienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReceitaIngredienteReceitaIdIngredienteIdCompoundUniqueInput = {
    receitaId: number
    ingredienteId: number
  }

  export type ReceitaIngredienteCountOrderByAggregateInput = {
    receitaId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    opcional?: SortOrder
  }

  export type ReceitaIngredienteAvgOrderByAggregateInput = {
    receitaId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
  }

  export type ReceitaIngredienteMaxOrderByAggregateInput = {
    receitaId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    opcional?: SortOrder
  }

  export type ReceitaIngredienteMinOrderByAggregateInput = {
    receitaId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    opcional?: SortOrder
  }

  export type ReceitaIngredienteSumOrderByAggregateInput = {
    receitaId?: SortOrder
    ingredienteId?: SortOrder
    quantidade?: SortOrder
  }

  export type ComentarioNullableScalarRelationFilter = {
    is?: ComentarioWhereInput | null
    isNot?: ComentarioWhereInput | null
  }

  export type ComentarioOrderByRelevanceInput = {
    fields: ComentarioOrderByRelevanceFieldEnum | ComentarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    receitaId?: SortOrder
    usuarioId?: SortOrder
    respostaDeId?: SortOrder
    texto?: SortOrder
    criadoEm?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    receitaId?: SortOrder
    usuarioId?: SortOrder
    respostaDeId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    receitaId?: SortOrder
    usuarioId?: SortOrder
    respostaDeId?: SortOrder
    texto?: SortOrder
    criadoEm?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    receitaId?: SortOrder
    usuarioId?: SortOrder
    respostaDeId?: SortOrder
    texto?: SortOrder
    criadoEm?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    receitaId?: SortOrder
    usuarioId?: SortOrder
    respostaDeId?: SortOrder
  }

  export type ReceitaNullableScalarRelationFilter = {
    is?: ReceitaWhereInput | null
    isNot?: ReceitaWhereInput | null
  }

  export type PostagemOrderByRelevanceInput = {
    fields: PostagemOrderByRelevanceFieldEnum | PostagemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostagemCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
    imagemPrato?: SortOrder
    comentario?: SortOrder
    criadaEm?: SortOrder
  }

  export type PostagemAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
  }

  export type PostagemMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
    imagemPrato?: SortOrder
    comentario?: SortOrder
    criadaEm?: SortOrder
  }

  export type PostagemMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
    imagemPrato?: SortOrder
    comentario?: SortOrder
    criadaEm?: SortOrder
  }

  export type PostagemSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    receitaId?: SortOrder
  }

  export type PerfilAlimentarCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PerfilAlimentarCreateWithoutUsuarioInput, PerfilAlimentarUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilAlimentarCreateOrConnectWithoutUsuarioInput
    connect?: PerfilAlimentarWhereUniqueInput
  }

  export type InventarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<InventarioCreateWithoutUsuarioInput, InventarioUncheckedCreateWithoutUsuarioInput> | InventarioCreateWithoutUsuarioInput[] | InventarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutUsuarioInput | InventarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: InventarioCreateManyUsuarioInputEnvelope
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
  }

  export type ReceitaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReceitaCreateWithoutUsuarioInput, ReceitaUncheckedCreateWithoutUsuarioInput> | ReceitaCreateWithoutUsuarioInput[] | ReceitaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutUsuarioInput | ReceitaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReceitaCreateManyUsuarioInputEnvelope
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
  }

  export type PostagemCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PostagemCreateWithoutUsuarioInput, PostagemUncheckedCreateWithoutUsuarioInput> | PostagemCreateWithoutUsuarioInput[] | PostagemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PostagemCreateOrConnectWithoutUsuarioInput | PostagemCreateOrConnectWithoutUsuarioInput[]
    createMany?: PostagemCreateManyUsuarioInputEnvelope
    connect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ReceitaGeracaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReceitaGeracaoCreateWithoutUsuarioInput, ReceitaGeracaoUncheckedCreateWithoutUsuarioInput> | ReceitaGeracaoCreateWithoutUsuarioInput[] | ReceitaGeracaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaGeracaoCreateOrConnectWithoutUsuarioInput | ReceitaGeracaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReceitaGeracaoCreateManyUsuarioInputEnvelope
    connect?: ReceitaGeracaoWhereUniqueInput | ReceitaGeracaoWhereUniqueInput[]
  }

  export type PerfilAlimentarUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PerfilAlimentarCreateWithoutUsuarioInput, PerfilAlimentarUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilAlimentarCreateOrConnectWithoutUsuarioInput
    connect?: PerfilAlimentarWhereUniqueInput
  }

  export type InventarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<InventarioCreateWithoutUsuarioInput, InventarioUncheckedCreateWithoutUsuarioInput> | InventarioCreateWithoutUsuarioInput[] | InventarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutUsuarioInput | InventarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: InventarioCreateManyUsuarioInputEnvelope
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
  }

  export type ReceitaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReceitaCreateWithoutUsuarioInput, ReceitaUncheckedCreateWithoutUsuarioInput> | ReceitaCreateWithoutUsuarioInput[] | ReceitaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutUsuarioInput | ReceitaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReceitaCreateManyUsuarioInputEnvelope
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
  }

  export type PostagemUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PostagemCreateWithoutUsuarioInput, PostagemUncheckedCreateWithoutUsuarioInput> | PostagemCreateWithoutUsuarioInput[] | PostagemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PostagemCreateOrConnectWithoutUsuarioInput | PostagemCreateOrConnectWithoutUsuarioInput[]
    createMany?: PostagemCreateManyUsuarioInputEnvelope
    connect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ReceitaGeracaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReceitaGeracaoCreateWithoutUsuarioInput, ReceitaGeracaoUncheckedCreateWithoutUsuarioInput> | ReceitaGeracaoCreateWithoutUsuarioInput[] | ReceitaGeracaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaGeracaoCreateOrConnectWithoutUsuarioInput | ReceitaGeracaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReceitaGeracaoCreateManyUsuarioInputEnvelope
    connect?: ReceitaGeracaoWhereUniqueInput | ReceitaGeracaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumNivelHabilidadeFieldUpdateOperationsInput = {
    set?: $Enums.NivelHabilidade
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PerfilAlimentarUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PerfilAlimentarCreateWithoutUsuarioInput, PerfilAlimentarUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilAlimentarCreateOrConnectWithoutUsuarioInput
    upsert?: PerfilAlimentarUpsertWithoutUsuarioInput
    disconnect?: PerfilAlimentarWhereInput | boolean
    delete?: PerfilAlimentarWhereInput | boolean
    connect?: PerfilAlimentarWhereUniqueInput
    update?: XOR<XOR<PerfilAlimentarUpdateToOneWithWhereWithoutUsuarioInput, PerfilAlimentarUpdateWithoutUsuarioInput>, PerfilAlimentarUncheckedUpdateWithoutUsuarioInput>
  }

  export type InventarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<InventarioCreateWithoutUsuarioInput, InventarioUncheckedCreateWithoutUsuarioInput> | InventarioCreateWithoutUsuarioInput[] | InventarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutUsuarioInput | InventarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: InventarioUpsertWithWhereUniqueWithoutUsuarioInput | InventarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: InventarioCreateManyUsuarioInputEnvelope
    set?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    disconnect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    delete?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    update?: InventarioUpdateWithWhereUniqueWithoutUsuarioInput | InventarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: InventarioUpdateManyWithWhereWithoutUsuarioInput | InventarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
  }

  export type ReceitaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReceitaCreateWithoutUsuarioInput, ReceitaUncheckedCreateWithoutUsuarioInput> | ReceitaCreateWithoutUsuarioInput[] | ReceitaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutUsuarioInput | ReceitaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReceitaUpsertWithWhereUniqueWithoutUsuarioInput | ReceitaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReceitaCreateManyUsuarioInputEnvelope
    set?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    disconnect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    delete?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    update?: ReceitaUpdateWithWhereUniqueWithoutUsuarioInput | ReceitaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReceitaUpdateManyWithWhereWithoutUsuarioInput | ReceitaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
  }

  export type PostagemUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PostagemCreateWithoutUsuarioInput, PostagemUncheckedCreateWithoutUsuarioInput> | PostagemCreateWithoutUsuarioInput[] | PostagemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PostagemCreateOrConnectWithoutUsuarioInput | PostagemCreateOrConnectWithoutUsuarioInput[]
    upsert?: PostagemUpsertWithWhereUniqueWithoutUsuarioInput | PostagemUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PostagemCreateManyUsuarioInputEnvelope
    set?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    disconnect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    delete?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    connect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    update?: PostagemUpdateWithWhereUniqueWithoutUsuarioInput | PostagemUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PostagemUpdateManyWithWhereWithoutUsuarioInput | PostagemUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PostagemScalarWhereInput | PostagemScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutUsuarioInput | ComentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutUsuarioInput | ComentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutUsuarioInput | ComentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUsuarioInput | FavoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUsuarioInput | FavoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUsuarioInput | FavoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ReceitaGeracaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReceitaGeracaoCreateWithoutUsuarioInput, ReceitaGeracaoUncheckedCreateWithoutUsuarioInput> | ReceitaGeracaoCreateWithoutUsuarioInput[] | ReceitaGeracaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaGeracaoCreateOrConnectWithoutUsuarioInput | ReceitaGeracaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReceitaGeracaoUpsertWithWhereUniqueWithoutUsuarioInput | ReceitaGeracaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReceitaGeracaoCreateManyUsuarioInputEnvelope
    set?: ReceitaGeracaoWhereUniqueInput | ReceitaGeracaoWhereUniqueInput[]
    disconnect?: ReceitaGeracaoWhereUniqueInput | ReceitaGeracaoWhereUniqueInput[]
    delete?: ReceitaGeracaoWhereUniqueInput | ReceitaGeracaoWhereUniqueInput[]
    connect?: ReceitaGeracaoWhereUniqueInput | ReceitaGeracaoWhereUniqueInput[]
    update?: ReceitaGeracaoUpdateWithWhereUniqueWithoutUsuarioInput | ReceitaGeracaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReceitaGeracaoUpdateManyWithWhereWithoutUsuarioInput | ReceitaGeracaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReceitaGeracaoScalarWhereInput | ReceitaGeracaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PerfilAlimentarUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PerfilAlimentarCreateWithoutUsuarioInput, PerfilAlimentarUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilAlimentarCreateOrConnectWithoutUsuarioInput
    upsert?: PerfilAlimentarUpsertWithoutUsuarioInput
    disconnect?: PerfilAlimentarWhereInput | boolean
    delete?: PerfilAlimentarWhereInput | boolean
    connect?: PerfilAlimentarWhereUniqueInput
    update?: XOR<XOR<PerfilAlimentarUpdateToOneWithWhereWithoutUsuarioInput, PerfilAlimentarUpdateWithoutUsuarioInput>, PerfilAlimentarUncheckedUpdateWithoutUsuarioInput>
  }

  export type InventarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<InventarioCreateWithoutUsuarioInput, InventarioUncheckedCreateWithoutUsuarioInput> | InventarioCreateWithoutUsuarioInput[] | InventarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutUsuarioInput | InventarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: InventarioUpsertWithWhereUniqueWithoutUsuarioInput | InventarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: InventarioCreateManyUsuarioInputEnvelope
    set?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    disconnect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    delete?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    update?: InventarioUpdateWithWhereUniqueWithoutUsuarioInput | InventarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: InventarioUpdateManyWithWhereWithoutUsuarioInput | InventarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
  }

  export type ReceitaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReceitaCreateWithoutUsuarioInput, ReceitaUncheckedCreateWithoutUsuarioInput> | ReceitaCreateWithoutUsuarioInput[] | ReceitaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutUsuarioInput | ReceitaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReceitaUpsertWithWhereUniqueWithoutUsuarioInput | ReceitaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReceitaCreateManyUsuarioInputEnvelope
    set?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    disconnect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    delete?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    update?: ReceitaUpdateWithWhereUniqueWithoutUsuarioInput | ReceitaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReceitaUpdateManyWithWhereWithoutUsuarioInput | ReceitaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
  }

  export type PostagemUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PostagemCreateWithoutUsuarioInput, PostagemUncheckedCreateWithoutUsuarioInput> | PostagemCreateWithoutUsuarioInput[] | PostagemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PostagemCreateOrConnectWithoutUsuarioInput | PostagemCreateOrConnectWithoutUsuarioInput[]
    upsert?: PostagemUpsertWithWhereUniqueWithoutUsuarioInput | PostagemUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PostagemCreateManyUsuarioInputEnvelope
    set?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    disconnect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    delete?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    connect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    update?: PostagemUpdateWithWhereUniqueWithoutUsuarioInput | PostagemUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PostagemUpdateManyWithWhereWithoutUsuarioInput | PostagemUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PostagemScalarWhereInput | PostagemScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutUsuarioInput | ComentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutUsuarioInput | ComentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutUsuarioInput | ComentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUsuarioInput | FavoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUsuarioInput | FavoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUsuarioInput | FavoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ReceitaGeracaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReceitaGeracaoCreateWithoutUsuarioInput, ReceitaGeracaoUncheckedCreateWithoutUsuarioInput> | ReceitaGeracaoCreateWithoutUsuarioInput[] | ReceitaGeracaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaGeracaoCreateOrConnectWithoutUsuarioInput | ReceitaGeracaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReceitaGeracaoUpsertWithWhereUniqueWithoutUsuarioInput | ReceitaGeracaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReceitaGeracaoCreateManyUsuarioInputEnvelope
    set?: ReceitaGeracaoWhereUniqueInput | ReceitaGeracaoWhereUniqueInput[]
    disconnect?: ReceitaGeracaoWhereUniqueInput | ReceitaGeracaoWhereUniqueInput[]
    delete?: ReceitaGeracaoWhereUniqueInput | ReceitaGeracaoWhereUniqueInput[]
    connect?: ReceitaGeracaoWhereUniqueInput | ReceitaGeracaoWhereUniqueInput[]
    update?: ReceitaGeracaoUpdateWithWhereUniqueWithoutUsuarioInput | ReceitaGeracaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReceitaGeracaoUpdateManyWithWhereWithoutUsuarioInput | ReceitaGeracaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReceitaGeracaoScalarWhereInput | ReceitaGeracaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPerfilInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RestricaoAlimentarCreateNestedManyWithoutPerfilInput = {
    create?: XOR<RestricaoAlimentarCreateWithoutPerfilInput, RestricaoAlimentarUncheckedCreateWithoutPerfilInput> | RestricaoAlimentarCreateWithoutPerfilInput[] | RestricaoAlimentarUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: RestricaoAlimentarCreateOrConnectWithoutPerfilInput | RestricaoAlimentarCreateOrConnectWithoutPerfilInput[]
    createMany?: RestricaoAlimentarCreateManyPerfilInputEnvelope
    connect?: RestricaoAlimentarWhereUniqueInput | RestricaoAlimentarWhereUniqueInput[]
  }

  export type RestricaoAlimentarUncheckedCreateNestedManyWithoutPerfilInput = {
    create?: XOR<RestricaoAlimentarCreateWithoutPerfilInput, RestricaoAlimentarUncheckedCreateWithoutPerfilInput> | RestricaoAlimentarCreateWithoutPerfilInput[] | RestricaoAlimentarUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: RestricaoAlimentarCreateOrConnectWithoutPerfilInput | RestricaoAlimentarCreateOrConnectWithoutPerfilInput[]
    createMany?: RestricaoAlimentarCreateManyPerfilInputEnvelope
    connect?: RestricaoAlimentarWhereUniqueInput | RestricaoAlimentarWhereUniqueInput[]
  }

  export type EnumTipoDietaFieldUpdateOperationsInput = {
    set?: $Enums.TipoDieta
  }

  export type UsuarioUpdateOneRequiredWithoutPerfilNestedInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput
    upsert?: UsuarioUpsertWithoutPerfilInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPerfilInput, UsuarioUpdateWithoutPerfilInput>, UsuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type RestricaoAlimentarUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<RestricaoAlimentarCreateWithoutPerfilInput, RestricaoAlimentarUncheckedCreateWithoutPerfilInput> | RestricaoAlimentarCreateWithoutPerfilInput[] | RestricaoAlimentarUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: RestricaoAlimentarCreateOrConnectWithoutPerfilInput | RestricaoAlimentarCreateOrConnectWithoutPerfilInput[]
    upsert?: RestricaoAlimentarUpsertWithWhereUniqueWithoutPerfilInput | RestricaoAlimentarUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: RestricaoAlimentarCreateManyPerfilInputEnvelope
    set?: RestricaoAlimentarWhereUniqueInput | RestricaoAlimentarWhereUniqueInput[]
    disconnect?: RestricaoAlimentarWhereUniqueInput | RestricaoAlimentarWhereUniqueInput[]
    delete?: RestricaoAlimentarWhereUniqueInput | RestricaoAlimentarWhereUniqueInput[]
    connect?: RestricaoAlimentarWhereUniqueInput | RestricaoAlimentarWhereUniqueInput[]
    update?: RestricaoAlimentarUpdateWithWhereUniqueWithoutPerfilInput | RestricaoAlimentarUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: RestricaoAlimentarUpdateManyWithWhereWithoutPerfilInput | RestricaoAlimentarUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: RestricaoAlimentarScalarWhereInput | RestricaoAlimentarScalarWhereInput[]
  }

  export type RestricaoAlimentarUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<RestricaoAlimentarCreateWithoutPerfilInput, RestricaoAlimentarUncheckedCreateWithoutPerfilInput> | RestricaoAlimentarCreateWithoutPerfilInput[] | RestricaoAlimentarUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: RestricaoAlimentarCreateOrConnectWithoutPerfilInput | RestricaoAlimentarCreateOrConnectWithoutPerfilInput[]
    upsert?: RestricaoAlimentarUpsertWithWhereUniqueWithoutPerfilInput | RestricaoAlimentarUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: RestricaoAlimentarCreateManyPerfilInputEnvelope
    set?: RestricaoAlimentarWhereUniqueInput | RestricaoAlimentarWhereUniqueInput[]
    disconnect?: RestricaoAlimentarWhereUniqueInput | RestricaoAlimentarWhereUniqueInput[]
    delete?: RestricaoAlimentarWhereUniqueInput | RestricaoAlimentarWhereUniqueInput[]
    connect?: RestricaoAlimentarWhereUniqueInput | RestricaoAlimentarWhereUniqueInput[]
    update?: RestricaoAlimentarUpdateWithWhereUniqueWithoutPerfilInput | RestricaoAlimentarUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: RestricaoAlimentarUpdateManyWithWhereWithoutPerfilInput | RestricaoAlimentarUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: RestricaoAlimentarScalarWhereInput | RestricaoAlimentarScalarWhereInput[]
  }

  export type PerfilAlimentarCreateNestedOneWithoutRestricoesInput = {
    create?: XOR<PerfilAlimentarCreateWithoutRestricoesInput, PerfilAlimentarUncheckedCreateWithoutRestricoesInput>
    connectOrCreate?: PerfilAlimentarCreateOrConnectWithoutRestricoesInput
    connect?: PerfilAlimentarWhereUniqueInput
  }

  export type PerfilAlimentarUpdateOneRequiredWithoutRestricoesNestedInput = {
    create?: XOR<PerfilAlimentarCreateWithoutRestricoesInput, PerfilAlimentarUncheckedCreateWithoutRestricoesInput>
    connectOrCreate?: PerfilAlimentarCreateOrConnectWithoutRestricoesInput
    upsert?: PerfilAlimentarUpsertWithoutRestricoesInput
    connect?: PerfilAlimentarWhereUniqueInput
    update?: XOR<XOR<PerfilAlimentarUpdateToOneWithWhereWithoutRestricoesInput, PerfilAlimentarUpdateWithoutRestricoesInput>, PerfilAlimentarUncheckedUpdateWithoutRestricoesInput>
  }

  export type InventarioCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<InventarioCreateWithoutIngredienteInput, InventarioUncheckedCreateWithoutIngredienteInput> | InventarioCreateWithoutIngredienteInput[] | InventarioUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutIngredienteInput | InventarioCreateOrConnectWithoutIngredienteInput[]
    createMany?: InventarioCreateManyIngredienteInputEnvelope
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
  }

  export type ReceitaIngredienteCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<ReceitaIngredienteCreateWithoutIngredienteInput, ReceitaIngredienteUncheckedCreateWithoutIngredienteInput> | ReceitaIngredienteCreateWithoutIngredienteInput[] | ReceitaIngredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ReceitaIngredienteCreateOrConnectWithoutIngredienteInput | ReceitaIngredienteCreateOrConnectWithoutIngredienteInput[]
    createMany?: ReceitaIngredienteCreateManyIngredienteInputEnvelope
    connect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
  }

  export type InventarioUncheckedCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<InventarioCreateWithoutIngredienteInput, InventarioUncheckedCreateWithoutIngredienteInput> | InventarioCreateWithoutIngredienteInput[] | InventarioUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutIngredienteInput | InventarioCreateOrConnectWithoutIngredienteInput[]
    createMany?: InventarioCreateManyIngredienteInputEnvelope
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
  }

  export type ReceitaIngredienteUncheckedCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<ReceitaIngredienteCreateWithoutIngredienteInput, ReceitaIngredienteUncheckedCreateWithoutIngredienteInput> | ReceitaIngredienteCreateWithoutIngredienteInput[] | ReceitaIngredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ReceitaIngredienteCreateOrConnectWithoutIngredienteInput | ReceitaIngredienteCreateOrConnectWithoutIngredienteInput[]
    createMany?: ReceitaIngredienteCreateManyIngredienteInputEnvelope
    connect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
  }

  export type InventarioUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<InventarioCreateWithoutIngredienteInput, InventarioUncheckedCreateWithoutIngredienteInput> | InventarioCreateWithoutIngredienteInput[] | InventarioUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutIngredienteInput | InventarioCreateOrConnectWithoutIngredienteInput[]
    upsert?: InventarioUpsertWithWhereUniqueWithoutIngredienteInput | InventarioUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: InventarioCreateManyIngredienteInputEnvelope
    set?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    disconnect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    delete?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    update?: InventarioUpdateWithWhereUniqueWithoutIngredienteInput | InventarioUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: InventarioUpdateManyWithWhereWithoutIngredienteInput | InventarioUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
  }

  export type ReceitaIngredienteUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<ReceitaIngredienteCreateWithoutIngredienteInput, ReceitaIngredienteUncheckedCreateWithoutIngredienteInput> | ReceitaIngredienteCreateWithoutIngredienteInput[] | ReceitaIngredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ReceitaIngredienteCreateOrConnectWithoutIngredienteInput | ReceitaIngredienteCreateOrConnectWithoutIngredienteInput[]
    upsert?: ReceitaIngredienteUpsertWithWhereUniqueWithoutIngredienteInput | ReceitaIngredienteUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: ReceitaIngredienteCreateManyIngredienteInputEnvelope
    set?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    disconnect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    delete?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    connect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    update?: ReceitaIngredienteUpdateWithWhereUniqueWithoutIngredienteInput | ReceitaIngredienteUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: ReceitaIngredienteUpdateManyWithWhereWithoutIngredienteInput | ReceitaIngredienteUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: ReceitaIngredienteScalarWhereInput | ReceitaIngredienteScalarWhereInput[]
  }

  export type InventarioUncheckedUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<InventarioCreateWithoutIngredienteInput, InventarioUncheckedCreateWithoutIngredienteInput> | InventarioCreateWithoutIngredienteInput[] | InventarioUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutIngredienteInput | InventarioCreateOrConnectWithoutIngredienteInput[]
    upsert?: InventarioUpsertWithWhereUniqueWithoutIngredienteInput | InventarioUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: InventarioCreateManyIngredienteInputEnvelope
    set?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    disconnect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    delete?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    update?: InventarioUpdateWithWhereUniqueWithoutIngredienteInput | InventarioUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: InventarioUpdateManyWithWhereWithoutIngredienteInput | InventarioUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
  }

  export type ReceitaIngredienteUncheckedUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<ReceitaIngredienteCreateWithoutIngredienteInput, ReceitaIngredienteUncheckedCreateWithoutIngredienteInput> | ReceitaIngredienteCreateWithoutIngredienteInput[] | ReceitaIngredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ReceitaIngredienteCreateOrConnectWithoutIngredienteInput | ReceitaIngredienteCreateOrConnectWithoutIngredienteInput[]
    upsert?: ReceitaIngredienteUpsertWithWhereUniqueWithoutIngredienteInput | ReceitaIngredienteUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: ReceitaIngredienteCreateManyIngredienteInputEnvelope
    set?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    disconnect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    delete?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    connect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    update?: ReceitaIngredienteUpdateWithWhereUniqueWithoutIngredienteInput | ReceitaIngredienteUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: ReceitaIngredienteUpdateManyWithWhereWithoutIngredienteInput | ReceitaIngredienteUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: ReceitaIngredienteScalarWhereInput | ReceitaIngredienteScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutInventarioInput = {
    create?: XOR<UsuarioCreateWithoutInventarioInput, UsuarioUncheckedCreateWithoutInventarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInventarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type IngredienteCreateNestedOneWithoutInventariosInput = {
    create?: XOR<IngredienteCreateWithoutInventariosInput, IngredienteUncheckedCreateWithoutInventariosInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutInventariosInput
    connect?: IngredienteWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutInventarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutInventarioInput, UsuarioUncheckedCreateWithoutInventarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInventarioInput
    upsert?: UsuarioUpsertWithoutInventarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutInventarioInput, UsuarioUpdateWithoutInventarioInput>, UsuarioUncheckedUpdateWithoutInventarioInput>
  }

  export type IngredienteUpdateOneRequiredWithoutInventariosNestedInput = {
    create?: XOR<IngredienteCreateWithoutInventariosInput, IngredienteUncheckedCreateWithoutInventariosInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutInventariosInput
    upsert?: IngredienteUpsertWithoutInventariosInput
    connect?: IngredienteWhereUniqueInput
    update?: XOR<XOR<IngredienteUpdateToOneWithWhereWithoutInventariosInput, IngredienteUpdateWithoutInventariosInput>, IngredienteUncheckedUpdateWithoutInventariosInput>
  }

  export type UsuarioCreateNestedOneWithoutReceitasInput = {
    create?: XOR<UsuarioCreateWithoutReceitasInput, UsuarioUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReceitasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ReceitaIngredienteCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaIngredienteCreateWithoutReceitaInput, ReceitaIngredienteUncheckedCreateWithoutReceitaInput> | ReceitaIngredienteCreateWithoutReceitaInput[] | ReceitaIngredienteUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaIngredienteCreateOrConnectWithoutReceitaInput | ReceitaIngredienteCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaIngredienteCreateManyReceitaInputEnvelope
    connect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
  }

  export type PostagemCreateNestedManyWithoutReceitaInput = {
    create?: XOR<PostagemCreateWithoutReceitaInput, PostagemUncheckedCreateWithoutReceitaInput> | PostagemCreateWithoutReceitaInput[] | PostagemUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: PostagemCreateOrConnectWithoutReceitaInput | PostagemCreateOrConnectWithoutReceitaInput[]
    createMany?: PostagemCreateManyReceitaInputEnvelope
    connect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput> | ComentarioCreateWithoutReceitaInput[] | ComentarioUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutReceitaInput | ComentarioCreateOrConnectWithoutReceitaInput[]
    createMany?: ComentarioCreateManyReceitaInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutReceitaInput = {
    create?: XOR<FavoritoCreateWithoutReceitaInput, FavoritoUncheckedCreateWithoutReceitaInput> | FavoritoCreateWithoutReceitaInput[] | FavoritoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutReceitaInput | FavoritoCreateOrConnectWithoutReceitaInput[]
    createMany?: FavoritoCreateManyReceitaInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaIngredienteCreateWithoutReceitaInput, ReceitaIngredienteUncheckedCreateWithoutReceitaInput> | ReceitaIngredienteCreateWithoutReceitaInput[] | ReceitaIngredienteUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaIngredienteCreateOrConnectWithoutReceitaInput | ReceitaIngredienteCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaIngredienteCreateManyReceitaInputEnvelope
    connect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
  }

  export type PostagemUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<PostagemCreateWithoutReceitaInput, PostagemUncheckedCreateWithoutReceitaInput> | PostagemCreateWithoutReceitaInput[] | PostagemUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: PostagemCreateOrConnectWithoutReceitaInput | PostagemCreateOrConnectWithoutReceitaInput[]
    createMany?: PostagemCreateManyReceitaInputEnvelope
    connect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput> | ComentarioCreateWithoutReceitaInput[] | ComentarioUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutReceitaInput | ComentarioCreateOrConnectWithoutReceitaInput[]
    createMany?: ComentarioCreateManyReceitaInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<FavoritoCreateWithoutReceitaInput, FavoritoUncheckedCreateWithoutReceitaInput> | FavoritoCreateWithoutReceitaInput[] | FavoritoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutReceitaInput | FavoritoCreateOrConnectWithoutReceitaInput[]
    createMany?: FavoritoCreateManyReceitaInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutReceitasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReceitasInput, UsuarioUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReceitasInput
    upsert?: UsuarioUpsertWithoutReceitasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReceitasInput, UsuarioUpdateWithoutReceitasInput>, UsuarioUncheckedUpdateWithoutReceitasInput>
  }

  export type ReceitaIngredienteUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaIngredienteCreateWithoutReceitaInput, ReceitaIngredienteUncheckedCreateWithoutReceitaInput> | ReceitaIngredienteCreateWithoutReceitaInput[] | ReceitaIngredienteUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaIngredienteCreateOrConnectWithoutReceitaInput | ReceitaIngredienteCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaIngredienteUpsertWithWhereUniqueWithoutReceitaInput | ReceitaIngredienteUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaIngredienteCreateManyReceitaInputEnvelope
    set?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    disconnect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    delete?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    connect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    update?: ReceitaIngredienteUpdateWithWhereUniqueWithoutReceitaInput | ReceitaIngredienteUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaIngredienteUpdateManyWithWhereWithoutReceitaInput | ReceitaIngredienteUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaIngredienteScalarWhereInput | ReceitaIngredienteScalarWhereInput[]
  }

  export type PostagemUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<PostagemCreateWithoutReceitaInput, PostagemUncheckedCreateWithoutReceitaInput> | PostagemCreateWithoutReceitaInput[] | PostagemUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: PostagemCreateOrConnectWithoutReceitaInput | PostagemCreateOrConnectWithoutReceitaInput[]
    upsert?: PostagemUpsertWithWhereUniqueWithoutReceitaInput | PostagemUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: PostagemCreateManyReceitaInputEnvelope
    set?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    disconnect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    delete?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    connect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    update?: PostagemUpdateWithWhereUniqueWithoutReceitaInput | PostagemUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: PostagemUpdateManyWithWhereWithoutReceitaInput | PostagemUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: PostagemScalarWhereInput | PostagemScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput> | ComentarioCreateWithoutReceitaInput[] | ComentarioUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutReceitaInput | ComentarioCreateOrConnectWithoutReceitaInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutReceitaInput | ComentarioUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ComentarioCreateManyReceitaInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutReceitaInput | ComentarioUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutReceitaInput | ComentarioUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<FavoritoCreateWithoutReceitaInput, FavoritoUncheckedCreateWithoutReceitaInput> | FavoritoCreateWithoutReceitaInput[] | FavoritoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutReceitaInput | FavoritoCreateOrConnectWithoutReceitaInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutReceitaInput | FavoritoUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: FavoritoCreateManyReceitaInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutReceitaInput | FavoritoUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutReceitaInput | FavoritoUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaIngredienteCreateWithoutReceitaInput, ReceitaIngredienteUncheckedCreateWithoutReceitaInput> | ReceitaIngredienteCreateWithoutReceitaInput[] | ReceitaIngredienteUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaIngredienteCreateOrConnectWithoutReceitaInput | ReceitaIngredienteCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaIngredienteUpsertWithWhereUniqueWithoutReceitaInput | ReceitaIngredienteUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaIngredienteCreateManyReceitaInputEnvelope
    set?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    disconnect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    delete?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    connect?: ReceitaIngredienteWhereUniqueInput | ReceitaIngredienteWhereUniqueInput[]
    update?: ReceitaIngredienteUpdateWithWhereUniqueWithoutReceitaInput | ReceitaIngredienteUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaIngredienteUpdateManyWithWhereWithoutReceitaInput | ReceitaIngredienteUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaIngredienteScalarWhereInput | ReceitaIngredienteScalarWhereInput[]
  }

  export type PostagemUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<PostagemCreateWithoutReceitaInput, PostagemUncheckedCreateWithoutReceitaInput> | PostagemCreateWithoutReceitaInput[] | PostagemUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: PostagemCreateOrConnectWithoutReceitaInput | PostagemCreateOrConnectWithoutReceitaInput[]
    upsert?: PostagemUpsertWithWhereUniqueWithoutReceitaInput | PostagemUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: PostagemCreateManyReceitaInputEnvelope
    set?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    disconnect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    delete?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    connect?: PostagemWhereUniqueInput | PostagemWhereUniqueInput[]
    update?: PostagemUpdateWithWhereUniqueWithoutReceitaInput | PostagemUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: PostagemUpdateManyWithWhereWithoutReceitaInput | PostagemUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: PostagemScalarWhereInput | PostagemScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput> | ComentarioCreateWithoutReceitaInput[] | ComentarioUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutReceitaInput | ComentarioCreateOrConnectWithoutReceitaInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutReceitaInput | ComentarioUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ComentarioCreateManyReceitaInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutReceitaInput | ComentarioUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutReceitaInput | ComentarioUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<FavoritoCreateWithoutReceitaInput, FavoritoUncheckedCreateWithoutReceitaInput> | FavoritoCreateWithoutReceitaInput[] | FavoritoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutReceitaInput | FavoritoCreateOrConnectWithoutReceitaInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutReceitaInput | FavoritoUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: FavoritoCreateManyReceitaInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutReceitaInput | FavoritoUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutReceitaInput | FavoritoUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ReceitaCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<ReceitaCreateWithoutFavoritosInput, ReceitaUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutFavoritosInput
    connect?: ReceitaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritosInput
    upsert?: UsuarioUpsertWithoutFavoritosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFavoritosInput, UsuarioUpdateWithoutFavoritosInput>, UsuarioUncheckedUpdateWithoutFavoritosInput>
  }

  export type ReceitaUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<ReceitaCreateWithoutFavoritosInput, ReceitaUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutFavoritosInput
    upsert?: ReceitaUpsertWithoutFavoritosInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutFavoritosInput, ReceitaUpdateWithoutFavoritosInput>, ReceitaUncheckedUpdateWithoutFavoritosInput>
  }

  export type UsuarioCreateNestedOneWithoutGeracoesInput = {
    create?: XOR<UsuarioCreateWithoutGeracoesInput, UsuarioUncheckedCreateWithoutGeracoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGeracoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutGeracoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutGeracoesInput, UsuarioUncheckedCreateWithoutGeracoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGeracoesInput
    upsert?: UsuarioUpsertWithoutGeracoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutGeracoesInput, UsuarioUpdateWithoutGeracoesInput>, UsuarioUncheckedUpdateWithoutGeracoesInput>
  }

  export type ReceitaCreateNestedOneWithoutIngredientesInput = {
    create?: XOR<ReceitaCreateWithoutIngredientesInput, ReceitaUncheckedCreateWithoutIngredientesInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutIngredientesInput
    connect?: ReceitaWhereUniqueInput
  }

  export type IngredienteCreateNestedOneWithoutReceitaIngredientesInput = {
    create?: XOR<IngredienteCreateWithoutReceitaIngredientesInput, IngredienteUncheckedCreateWithoutReceitaIngredientesInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutReceitaIngredientesInput
    connect?: IngredienteWhereUniqueInput
  }

  export type ReceitaUpdateOneRequiredWithoutIngredientesNestedInput = {
    create?: XOR<ReceitaCreateWithoutIngredientesInput, ReceitaUncheckedCreateWithoutIngredientesInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutIngredientesInput
    upsert?: ReceitaUpsertWithoutIngredientesInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutIngredientesInput, ReceitaUpdateWithoutIngredientesInput>, ReceitaUncheckedUpdateWithoutIngredientesInput>
  }

  export type IngredienteUpdateOneRequiredWithoutReceitaIngredientesNestedInput = {
    create?: XOR<IngredienteCreateWithoutReceitaIngredientesInput, IngredienteUncheckedCreateWithoutReceitaIngredientesInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutReceitaIngredientesInput
    upsert?: IngredienteUpsertWithoutReceitaIngredientesInput
    connect?: IngredienteWhereUniqueInput
    update?: XOR<XOR<IngredienteUpdateToOneWithWhereWithoutReceitaIngredientesInput, IngredienteUpdateWithoutReceitaIngredientesInput>, IngredienteUncheckedUpdateWithoutReceitaIngredientesInput>
  }

  export type ReceitaCreateNestedOneWithoutComentariosInput = {
    create?: XOR<ReceitaCreateWithoutComentariosInput, ReceitaUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutComentariosInput
    connect?: ReceitaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ComentarioCreateNestedOneWithoutRespostasInput = {
    create?: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostasInput
    connect?: ComentarioWhereUniqueInput
  }

  export type ComentarioCreateNestedManyWithoutRespostaDeInput = {
    create?: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput> | ComentarioCreateWithoutRespostaDeInput[] | ComentarioUncheckedCreateWithoutRespostaDeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostaDeInput | ComentarioCreateOrConnectWithoutRespostaDeInput[]
    createMany?: ComentarioCreateManyRespostaDeInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutRespostaDeInput = {
    create?: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput> | ComentarioCreateWithoutRespostaDeInput[] | ComentarioUncheckedCreateWithoutRespostaDeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostaDeInput | ComentarioCreateOrConnectWithoutRespostaDeInput[]
    createMany?: ComentarioCreateManyRespostaDeInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ReceitaUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<ReceitaCreateWithoutComentariosInput, ReceitaUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutComentariosInput
    upsert?: ReceitaUpsertWithoutComentariosInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutComentariosInput, ReceitaUpdateWithoutComentariosInput>, ReceitaUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    upsert?: UsuarioUpsertWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComentariosInput, UsuarioUpdateWithoutComentariosInput>, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type ComentarioUpdateOneWithoutRespostasNestedInput = {
    create?: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostasInput
    upsert?: ComentarioUpsertWithoutRespostasInput
    disconnect?: ComentarioWhereInput | boolean
    delete?: ComentarioWhereInput | boolean
    connect?: ComentarioWhereUniqueInput
    update?: XOR<XOR<ComentarioUpdateToOneWithWhereWithoutRespostasInput, ComentarioUpdateWithoutRespostasInput>, ComentarioUncheckedUpdateWithoutRespostasInput>
  }

  export type ComentarioUpdateManyWithoutRespostaDeNestedInput = {
    create?: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput> | ComentarioCreateWithoutRespostaDeInput[] | ComentarioUncheckedCreateWithoutRespostaDeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostaDeInput | ComentarioCreateOrConnectWithoutRespostaDeInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutRespostaDeInput | ComentarioUpsertWithWhereUniqueWithoutRespostaDeInput[]
    createMany?: ComentarioCreateManyRespostaDeInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutRespostaDeInput | ComentarioUpdateWithWhereUniqueWithoutRespostaDeInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutRespostaDeInput | ComentarioUpdateManyWithWhereWithoutRespostaDeInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutRespostaDeNestedInput = {
    create?: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput> | ComentarioCreateWithoutRespostaDeInput[] | ComentarioUncheckedCreateWithoutRespostaDeInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRespostaDeInput | ComentarioCreateOrConnectWithoutRespostaDeInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutRespostaDeInput | ComentarioUpsertWithWhereUniqueWithoutRespostaDeInput[]
    createMany?: ComentarioCreateManyRespostaDeInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutRespostaDeInput | ComentarioUpdateWithWhereUniqueWithoutRespostaDeInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutRespostaDeInput | ComentarioUpdateManyWithWhereWithoutRespostaDeInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPostagensInput = {
    create?: XOR<UsuarioCreateWithoutPostagensInput, UsuarioUncheckedCreateWithoutPostagensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostagensInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ReceitaCreateNestedOneWithoutPostagensInput = {
    create?: XOR<ReceitaCreateWithoutPostagensInput, ReceitaUncheckedCreateWithoutPostagensInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutPostagensInput
    connect?: ReceitaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutPostagensNestedInput = {
    create?: XOR<UsuarioCreateWithoutPostagensInput, UsuarioUncheckedCreateWithoutPostagensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostagensInput
    upsert?: UsuarioUpsertWithoutPostagensInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPostagensInput, UsuarioUpdateWithoutPostagensInput>, UsuarioUncheckedUpdateWithoutPostagensInput>
  }

  export type ReceitaUpdateOneWithoutPostagensNestedInput = {
    create?: XOR<ReceitaCreateWithoutPostagensInput, ReceitaUncheckedCreateWithoutPostagensInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutPostagensInput
    upsert?: ReceitaUpsertWithoutPostagensInput
    disconnect?: ReceitaWhereInput | boolean
    delete?: ReceitaWhereInput | boolean
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutPostagensInput, ReceitaUpdateWithoutPostagensInput>, ReceitaUncheckedUpdateWithoutPostagensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumNivelHabilidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelHabilidade | EnumNivelHabilidadeFieldRefInput<$PrismaModel>
    in?: $Enums.NivelHabilidade[]
    notIn?: $Enums.NivelHabilidade[]
    not?: NestedEnumNivelHabilidadeFilter<$PrismaModel> | $Enums.NivelHabilidade
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumNivelHabilidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelHabilidade | EnumNivelHabilidadeFieldRefInput<$PrismaModel>
    in?: $Enums.NivelHabilidade[]
    notIn?: $Enums.NivelHabilidade[]
    not?: NestedEnumNivelHabilidadeWithAggregatesFilter<$PrismaModel> | $Enums.NivelHabilidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNivelHabilidadeFilter<$PrismaModel>
    _max?: NestedEnumNivelHabilidadeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTipoDietaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDieta | EnumTipoDietaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDieta[]
    notIn?: $Enums.TipoDieta[]
    not?: NestedEnumTipoDietaFilter<$PrismaModel> | $Enums.TipoDieta
  }

  export type NestedEnumTipoDietaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDieta | EnumTipoDietaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDieta[]
    notIn?: $Enums.TipoDieta[]
    not?: NestedEnumTipoDietaWithAggregatesFilter<$PrismaModel> | $Enums.TipoDieta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDietaFilter<$PrismaModel>
    _max?: NestedEnumTipoDietaFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PerfilAlimentarCreateWithoutUsuarioInput = {
    tipoDieta?: $Enums.TipoDieta
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    restricoes?: RestricaoAlimentarCreateNestedManyWithoutPerfilInput
  }

  export type PerfilAlimentarUncheckedCreateWithoutUsuarioInput = {
    id?: number
    tipoDieta?: $Enums.TipoDieta
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    restricoes?: RestricaoAlimentarUncheckedCreateNestedManyWithoutPerfilInput
  }

  export type PerfilAlimentarCreateOrConnectWithoutUsuarioInput = {
    where: PerfilAlimentarWhereUniqueInput
    create: XOR<PerfilAlimentarCreateWithoutUsuarioInput, PerfilAlimentarUncheckedCreateWithoutUsuarioInput>
  }

  export type InventarioCreateWithoutUsuarioInput = {
    quantidade: number
    unidade: string
    ingrediente: IngredienteCreateNestedOneWithoutInventariosInput
  }

  export type InventarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    ingredienteId: number
    quantidade: number
    unidade: string
  }

  export type InventarioCreateOrConnectWithoutUsuarioInput = {
    where: InventarioWhereUniqueInput
    create: XOR<InventarioCreateWithoutUsuarioInput, InventarioUncheckedCreateWithoutUsuarioInput>
  }

  export type InventarioCreateManyUsuarioInputEnvelope = {
    data: InventarioCreateManyUsuarioInput | InventarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaCreateWithoutUsuarioInput = {
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    ingredientes?: ReceitaIngredienteCreateNestedManyWithoutReceitaInput
    postagens?: PostagemCreateNestedManyWithoutReceitaInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
    favoritos?: FavoritoCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    ingredientes?: ReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutReceitaInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutUsuarioInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutUsuarioInput, ReceitaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReceitaCreateManyUsuarioInputEnvelope = {
    data: ReceitaCreateManyUsuarioInput | ReceitaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PostagemCreateWithoutUsuarioInput = {
    imagemPrato?: string | null
    comentario?: string | null
    criadaEm?: Date | string
    receita?: ReceitaCreateNestedOneWithoutPostagensInput
  }

  export type PostagemUncheckedCreateWithoutUsuarioInput = {
    id?: number
    receitaId?: number | null
    imagemPrato?: string | null
    comentario?: string | null
    criadaEm?: Date | string
  }

  export type PostagemCreateOrConnectWithoutUsuarioInput = {
    where: PostagemWhereUniqueInput
    create: XOR<PostagemCreateWithoutUsuarioInput, PostagemUncheckedCreateWithoutUsuarioInput>
  }

  export type PostagemCreateManyUsuarioInputEnvelope = {
    data: PostagemCreateManyUsuarioInput | PostagemCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutUsuarioInput = {
    texto: string
    criadoEm?: Date | string
    receita: ReceitaCreateNestedOneWithoutComentariosInput
    respostaDe?: ComentarioCreateNestedOneWithoutRespostasInput
    respostas?: ComentarioCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    receitaId: number
    respostaDeId?: number | null
    texto: string
    criadoEm?: Date | string
    respostas?: ComentarioUncheckedCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioCreateOrConnectWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ComentarioCreateManyUsuarioInputEnvelope = {
    data: ComentarioCreateManyUsuarioInput | ComentarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutUsuarioInput = {
    criadoEm?: Date | string
    receita: ReceitaCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    receitaId: number
    criadoEm?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritoCreateManyUsuarioInputEnvelope = {
    data: FavoritoCreateManyUsuarioInput | FavoritoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaGeracaoCreateWithoutUsuarioInput = {
    chaveCache: string
    modelo: string
    status: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: string | null
    receitaId?: number | null
    cacheExpiraEm?: Date | string | null
    rascunhoExpiraEm?: Date | string | null
    criadaEm?: Date | string
    finalizadaEm?: Date | string | null
    duracaoMs?: number | null
    reservaExpiraEm?: Date | string | null
  }

  export type ReceitaGeracaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    chaveCache: string
    modelo: string
    status: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: string | null
    receitaId?: number | null
    cacheExpiraEm?: Date | string | null
    rascunhoExpiraEm?: Date | string | null
    criadaEm?: Date | string
    finalizadaEm?: Date | string | null
    duracaoMs?: number | null
    reservaExpiraEm?: Date | string | null
  }

  export type ReceitaGeracaoCreateOrConnectWithoutUsuarioInput = {
    where: ReceitaGeracaoWhereUniqueInput
    create: XOR<ReceitaGeracaoCreateWithoutUsuarioInput, ReceitaGeracaoUncheckedCreateWithoutUsuarioInput>
  }

  export type ReceitaGeracaoCreateManyUsuarioInputEnvelope = {
    data: ReceitaGeracaoCreateManyUsuarioInput | ReceitaGeracaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PerfilAlimentarUpsertWithoutUsuarioInput = {
    update: XOR<PerfilAlimentarUpdateWithoutUsuarioInput, PerfilAlimentarUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PerfilAlimentarCreateWithoutUsuarioInput, PerfilAlimentarUncheckedCreateWithoutUsuarioInput>
    where?: PerfilAlimentarWhereInput
  }

  export type PerfilAlimentarUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: PerfilAlimentarWhereInput
    data: XOR<PerfilAlimentarUpdateWithoutUsuarioInput, PerfilAlimentarUncheckedUpdateWithoutUsuarioInput>
  }

  export type PerfilAlimentarUpdateWithoutUsuarioInput = {
    tipoDieta?: EnumTipoDietaFieldUpdateOperationsInput | $Enums.TipoDieta
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restricoes?: RestricaoAlimentarUpdateManyWithoutPerfilNestedInput
  }

  export type PerfilAlimentarUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDieta?: EnumTipoDietaFieldUpdateOperationsInput | $Enums.TipoDieta
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restricoes?: RestricaoAlimentarUncheckedUpdateManyWithoutPerfilNestedInput
  }

  export type InventarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: InventarioWhereUniqueInput
    update: XOR<InventarioUpdateWithoutUsuarioInput, InventarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<InventarioCreateWithoutUsuarioInput, InventarioUncheckedCreateWithoutUsuarioInput>
  }

  export type InventarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: InventarioWhereUniqueInput
    data: XOR<InventarioUpdateWithoutUsuarioInput, InventarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type InventarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: InventarioScalarWhereInput
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type InventarioScalarWhereInput = {
    AND?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
    OR?: InventarioScalarWhereInput[]
    NOT?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
    id?: IntFilter<"Inventario"> | number
    usuarioId?: IntFilter<"Inventario"> | number
    ingredienteId?: IntFilter<"Inventario"> | number
    quantidade?: FloatFilter<"Inventario"> | number
    unidade?: StringFilter<"Inventario"> | string
  }

  export type ReceitaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReceitaWhereUniqueInput
    update: XOR<ReceitaUpdateWithoutUsuarioInput, ReceitaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReceitaCreateWithoutUsuarioInput, ReceitaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReceitaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReceitaWhereUniqueInput
    data: XOR<ReceitaUpdateWithoutUsuarioInput, ReceitaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReceitaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReceitaScalarWhereInput
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReceitaScalarWhereInput = {
    AND?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
    OR?: ReceitaScalarWhereInput[]
    NOT?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
    id?: IntFilter<"Receita"> | number
    usuarioId?: IntFilter<"Receita"> | number
    titulo?: StringFilter<"Receita"> | string
    modoPreparo?: StringFilter<"Receita"> | string
    tempoEstimado?: IntFilter<"Receita"> | number
    porcoes?: IntFilter<"Receita"> | number
    imagem?: StringNullableFilter<"Receita"> | string | null
    publica?: BoolFilter<"Receita"> | boolean
    geradaPorIA?: BoolFilter<"Receita"> | boolean
    criadaEm?: DateTimeFilter<"Receita"> | Date | string
    atualizadaEm?: DateTimeFilter<"Receita"> | Date | string
  }

  export type PostagemUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PostagemWhereUniqueInput
    update: XOR<PostagemUpdateWithoutUsuarioInput, PostagemUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PostagemCreateWithoutUsuarioInput, PostagemUncheckedCreateWithoutUsuarioInput>
  }

  export type PostagemUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PostagemWhereUniqueInput
    data: XOR<PostagemUpdateWithoutUsuarioInput, PostagemUncheckedUpdateWithoutUsuarioInput>
  }

  export type PostagemUpdateManyWithWhereWithoutUsuarioInput = {
    where: PostagemScalarWhereInput
    data: XOR<PostagemUpdateManyMutationInput, PostagemUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PostagemScalarWhereInput = {
    AND?: PostagemScalarWhereInput | PostagemScalarWhereInput[]
    OR?: PostagemScalarWhereInput[]
    NOT?: PostagemScalarWhereInput | PostagemScalarWhereInput[]
    id?: IntFilter<"Postagem"> | number
    usuarioId?: IntFilter<"Postagem"> | number
    receitaId?: IntNullableFilter<"Postagem"> | number | null
    imagemPrato?: StringNullableFilter<"Postagem"> | string | null
    comentario?: StringNullableFilter<"Postagem"> | string | null
    criadaEm?: DateTimeFilter<"Postagem"> | Date | string
  }

  export type ComentarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutUsuarioInput, ComentarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutUsuarioInput, ComentarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: IntFilter<"Comentario"> | number
    receitaId?: IntFilter<"Comentario"> | number
    usuarioId?: IntFilter<"Comentario"> | number
    respostaDeId?: IntNullableFilter<"Comentario"> | number | null
    texto?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
  }

  export type FavoritoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutUsuarioInput, FavoritoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutUsuarioInput, FavoritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutUsuarioInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: IntFilter<"Favorito"> | number
    usuarioId?: IntFilter<"Favorito"> | number
    receitaId?: IntFilter<"Favorito"> | number
    criadoEm?: DateTimeFilter<"Favorito"> | Date | string
  }

  export type ReceitaGeracaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReceitaGeracaoWhereUniqueInput
    update: XOR<ReceitaGeracaoUpdateWithoutUsuarioInput, ReceitaGeracaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReceitaGeracaoCreateWithoutUsuarioInput, ReceitaGeracaoUncheckedCreateWithoutUsuarioInput>
  }

  export type ReceitaGeracaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReceitaGeracaoWhereUniqueInput
    data: XOR<ReceitaGeracaoUpdateWithoutUsuarioInput, ReceitaGeracaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReceitaGeracaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReceitaGeracaoScalarWhereInput
    data: XOR<ReceitaGeracaoUpdateManyMutationInput, ReceitaGeracaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReceitaGeracaoScalarWhereInput = {
    AND?: ReceitaGeracaoScalarWhereInput | ReceitaGeracaoScalarWhereInput[]
    OR?: ReceitaGeracaoScalarWhereInput[]
    NOT?: ReceitaGeracaoScalarWhereInput | ReceitaGeracaoScalarWhereInput[]
    id?: IntFilter<"ReceitaGeracao"> | number
    usuarioId?: IntFilter<"ReceitaGeracao"> | number
    chaveCache?: StringFilter<"ReceitaGeracao"> | string
    modelo?: StringFilter<"ReceitaGeracao"> | string
    status?: StringFilter<"ReceitaGeracao"> | string
    payload?: JsonNullableFilter<"ReceitaGeracao">
    consumo?: JsonNullableFilter<"ReceitaGeracao">
    erroCodigo?: StringNullableFilter<"ReceitaGeracao"> | string | null
    receitaId?: IntNullableFilter<"ReceitaGeracao"> | number | null
    cacheExpiraEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    rascunhoExpiraEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    criadaEm?: DateTimeFilter<"ReceitaGeracao"> | Date | string
    finalizadaEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
    duracaoMs?: IntNullableFilter<"ReceitaGeracao"> | number | null
    reservaExpiraEm?: DateTimeNullableFilter<"ReceitaGeracao"> | Date | string | null
  }

  export type UsuarioCreateWithoutPerfilInput = {
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    inventario?: InventarioCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPerfilInput = {
    id?: number
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    inventario?: InventarioUncheckedCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaUncheckedCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
  }

  export type RestricaoAlimentarCreateWithoutPerfilInput = {
    tipo: string
  }

  export type RestricaoAlimentarUncheckedCreateWithoutPerfilInput = {
    id?: number
    tipo: string
  }

  export type RestricaoAlimentarCreateOrConnectWithoutPerfilInput = {
    where: RestricaoAlimentarWhereUniqueInput
    create: XOR<RestricaoAlimentarCreateWithoutPerfilInput, RestricaoAlimentarUncheckedCreateWithoutPerfilInput>
  }

  export type RestricaoAlimentarCreateManyPerfilInputEnvelope = {
    data: RestricaoAlimentarCreateManyPerfilInput | RestricaoAlimentarCreateManyPerfilInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPerfilInput = {
    update: XOR<UsuarioUpdateWithoutPerfilInput, UsuarioUncheckedUpdateWithoutPerfilInput>
    create: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPerfilInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPerfilInput, UsuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type UsuarioUpdateWithoutPerfilInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    inventario?: InventarioUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPerfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    inventario?: InventarioUncheckedUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUncheckedUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type RestricaoAlimentarUpsertWithWhereUniqueWithoutPerfilInput = {
    where: RestricaoAlimentarWhereUniqueInput
    update: XOR<RestricaoAlimentarUpdateWithoutPerfilInput, RestricaoAlimentarUncheckedUpdateWithoutPerfilInput>
    create: XOR<RestricaoAlimentarCreateWithoutPerfilInput, RestricaoAlimentarUncheckedCreateWithoutPerfilInput>
  }

  export type RestricaoAlimentarUpdateWithWhereUniqueWithoutPerfilInput = {
    where: RestricaoAlimentarWhereUniqueInput
    data: XOR<RestricaoAlimentarUpdateWithoutPerfilInput, RestricaoAlimentarUncheckedUpdateWithoutPerfilInput>
  }

  export type RestricaoAlimentarUpdateManyWithWhereWithoutPerfilInput = {
    where: RestricaoAlimentarScalarWhereInput
    data: XOR<RestricaoAlimentarUpdateManyMutationInput, RestricaoAlimentarUncheckedUpdateManyWithoutPerfilInput>
  }

  export type RestricaoAlimentarScalarWhereInput = {
    AND?: RestricaoAlimentarScalarWhereInput | RestricaoAlimentarScalarWhereInput[]
    OR?: RestricaoAlimentarScalarWhereInput[]
    NOT?: RestricaoAlimentarScalarWhereInput | RestricaoAlimentarScalarWhereInput[]
    id?: IntFilter<"RestricaoAlimentar"> | number
    perfilId?: IntFilter<"RestricaoAlimentar"> | number
    tipo?: StringFilter<"RestricaoAlimentar"> | string
  }

  export type PerfilAlimentarCreateWithoutRestricoesInput = {
    tipoDieta?: $Enums.TipoDieta
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPerfilInput
  }

  export type PerfilAlimentarUncheckedCreateWithoutRestricoesInput = {
    id?: number
    usuarioId: number
    tipoDieta?: $Enums.TipoDieta
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PerfilAlimentarCreateOrConnectWithoutRestricoesInput = {
    where: PerfilAlimentarWhereUniqueInput
    create: XOR<PerfilAlimentarCreateWithoutRestricoesInput, PerfilAlimentarUncheckedCreateWithoutRestricoesInput>
  }

  export type PerfilAlimentarUpsertWithoutRestricoesInput = {
    update: XOR<PerfilAlimentarUpdateWithoutRestricoesInput, PerfilAlimentarUncheckedUpdateWithoutRestricoesInput>
    create: XOR<PerfilAlimentarCreateWithoutRestricoesInput, PerfilAlimentarUncheckedCreateWithoutRestricoesInput>
    where?: PerfilAlimentarWhereInput
  }

  export type PerfilAlimentarUpdateToOneWithWhereWithoutRestricoesInput = {
    where?: PerfilAlimentarWhereInput
    data: XOR<PerfilAlimentarUpdateWithoutRestricoesInput, PerfilAlimentarUncheckedUpdateWithoutRestricoesInput>
  }

  export type PerfilAlimentarUpdateWithoutRestricoesInput = {
    tipoDieta?: EnumTipoDietaFieldUpdateOperationsInput | $Enums.TipoDieta
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPerfilNestedInput
  }

  export type PerfilAlimentarUncheckedUpdateWithoutRestricoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    tipoDieta?: EnumTipoDietaFieldUpdateOperationsInput | $Enums.TipoDieta
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventarioCreateWithoutIngredienteInput = {
    quantidade: number
    unidade: string
    usuario: UsuarioCreateNestedOneWithoutInventarioInput
  }

  export type InventarioUncheckedCreateWithoutIngredienteInput = {
    id?: number
    usuarioId: number
    quantidade: number
    unidade: string
  }

  export type InventarioCreateOrConnectWithoutIngredienteInput = {
    where: InventarioWhereUniqueInput
    create: XOR<InventarioCreateWithoutIngredienteInput, InventarioUncheckedCreateWithoutIngredienteInput>
  }

  export type InventarioCreateManyIngredienteInputEnvelope = {
    data: InventarioCreateManyIngredienteInput | InventarioCreateManyIngredienteInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaIngredienteCreateWithoutIngredienteInput = {
    quantidade: number
    unidade: string
    opcional?: boolean
    receita: ReceitaCreateNestedOneWithoutIngredientesInput
  }

  export type ReceitaIngredienteUncheckedCreateWithoutIngredienteInput = {
    receitaId: number
    quantidade: number
    unidade: string
    opcional?: boolean
  }

  export type ReceitaIngredienteCreateOrConnectWithoutIngredienteInput = {
    where: ReceitaIngredienteWhereUniqueInput
    create: XOR<ReceitaIngredienteCreateWithoutIngredienteInput, ReceitaIngredienteUncheckedCreateWithoutIngredienteInput>
  }

  export type ReceitaIngredienteCreateManyIngredienteInputEnvelope = {
    data: ReceitaIngredienteCreateManyIngredienteInput | ReceitaIngredienteCreateManyIngredienteInput[]
    skipDuplicates?: boolean
  }

  export type InventarioUpsertWithWhereUniqueWithoutIngredienteInput = {
    where: InventarioWhereUniqueInput
    update: XOR<InventarioUpdateWithoutIngredienteInput, InventarioUncheckedUpdateWithoutIngredienteInput>
    create: XOR<InventarioCreateWithoutIngredienteInput, InventarioUncheckedCreateWithoutIngredienteInput>
  }

  export type InventarioUpdateWithWhereUniqueWithoutIngredienteInput = {
    where: InventarioWhereUniqueInput
    data: XOR<InventarioUpdateWithoutIngredienteInput, InventarioUncheckedUpdateWithoutIngredienteInput>
  }

  export type InventarioUpdateManyWithWhereWithoutIngredienteInput = {
    where: InventarioScalarWhereInput
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyWithoutIngredienteInput>
  }

  export type ReceitaIngredienteUpsertWithWhereUniqueWithoutIngredienteInput = {
    where: ReceitaIngredienteWhereUniqueInput
    update: XOR<ReceitaIngredienteUpdateWithoutIngredienteInput, ReceitaIngredienteUncheckedUpdateWithoutIngredienteInput>
    create: XOR<ReceitaIngredienteCreateWithoutIngredienteInput, ReceitaIngredienteUncheckedCreateWithoutIngredienteInput>
  }

  export type ReceitaIngredienteUpdateWithWhereUniqueWithoutIngredienteInput = {
    where: ReceitaIngredienteWhereUniqueInput
    data: XOR<ReceitaIngredienteUpdateWithoutIngredienteInput, ReceitaIngredienteUncheckedUpdateWithoutIngredienteInput>
  }

  export type ReceitaIngredienteUpdateManyWithWhereWithoutIngredienteInput = {
    where: ReceitaIngredienteScalarWhereInput
    data: XOR<ReceitaIngredienteUpdateManyMutationInput, ReceitaIngredienteUncheckedUpdateManyWithoutIngredienteInput>
  }

  export type ReceitaIngredienteScalarWhereInput = {
    AND?: ReceitaIngredienteScalarWhereInput | ReceitaIngredienteScalarWhereInput[]
    OR?: ReceitaIngredienteScalarWhereInput[]
    NOT?: ReceitaIngredienteScalarWhereInput | ReceitaIngredienteScalarWhereInput[]
    receitaId?: IntFilter<"ReceitaIngrediente"> | number
    ingredienteId?: IntFilter<"ReceitaIngrediente"> | number
    quantidade?: FloatFilter<"ReceitaIngrediente"> | number
    unidade?: StringFilter<"ReceitaIngrediente"> | string
    opcional?: BoolFilter<"ReceitaIngrediente"> | boolean
  }

  export type UsuarioCreateWithoutInventarioInput = {
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarCreateNestedOneWithoutUsuarioInput
    receitas?: ReceitaCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutInventarioInput = {
    id?: number
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarUncheckedCreateNestedOneWithoutUsuarioInput
    receitas?: ReceitaUncheckedCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutInventarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutInventarioInput, UsuarioUncheckedCreateWithoutInventarioInput>
  }

  export type IngredienteCreateWithoutInventariosInput = {
    nome: string
    categoria: string
    classificacaoStatus?: string
    dietasPermitidas?: string | null
    restricoes?: string | null
    receitaIngredientes?: ReceitaIngredienteCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateWithoutInventariosInput = {
    id?: number
    nome: string
    categoria: string
    classificacaoStatus?: string
    dietasPermitidas?: string | null
    restricoes?: string | null
    receitaIngredientes?: ReceitaIngredienteUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteCreateOrConnectWithoutInventariosInput = {
    where: IngredienteWhereUniqueInput
    create: XOR<IngredienteCreateWithoutInventariosInput, IngredienteUncheckedCreateWithoutInventariosInput>
  }

  export type UsuarioUpsertWithoutInventarioInput = {
    update: XOR<UsuarioUpdateWithoutInventarioInput, UsuarioUncheckedUpdateWithoutInventarioInput>
    create: XOR<UsuarioCreateWithoutInventarioInput, UsuarioUncheckedCreateWithoutInventarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutInventarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutInventarioInput, UsuarioUncheckedUpdateWithoutInventarioInput>
  }

  export type UsuarioUpdateWithoutInventarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUpdateOneWithoutUsuarioNestedInput
    receitas?: ReceitaUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutInventarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUncheckedUpdateOneWithoutUsuarioNestedInput
    receitas?: ReceitaUncheckedUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type IngredienteUpsertWithoutInventariosInput = {
    update: XOR<IngredienteUpdateWithoutInventariosInput, IngredienteUncheckedUpdateWithoutInventariosInput>
    create: XOR<IngredienteCreateWithoutInventariosInput, IngredienteUncheckedCreateWithoutInventariosInput>
    where?: IngredienteWhereInput
  }

  export type IngredienteUpdateToOneWithWhereWithoutInventariosInput = {
    where?: IngredienteWhereInput
    data: XOR<IngredienteUpdateWithoutInventariosInput, IngredienteUncheckedUpdateWithoutInventariosInput>
  }

  export type IngredienteUpdateWithoutInventariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    classificacaoStatus?: StringFieldUpdateOperationsInput | string
    dietasPermitidas?: NullableStringFieldUpdateOperationsInput | string | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    receitaIngredientes?: ReceitaIngredienteUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateWithoutInventariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    classificacaoStatus?: StringFieldUpdateOperationsInput | string
    dietasPermitidas?: NullableStringFieldUpdateOperationsInput | string | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    receitaIngredientes?: ReceitaIngredienteUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type UsuarioCreateWithoutReceitasInput = {
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReceitasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarUncheckedCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioUncheckedCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReceitasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReceitasInput, UsuarioUncheckedCreateWithoutReceitasInput>
  }

  export type ReceitaIngredienteCreateWithoutReceitaInput = {
    quantidade: number
    unidade: string
    opcional?: boolean
    ingrediente: IngredienteCreateNestedOneWithoutReceitaIngredientesInput
  }

  export type ReceitaIngredienteUncheckedCreateWithoutReceitaInput = {
    ingredienteId: number
    quantidade: number
    unidade: string
    opcional?: boolean
  }

  export type ReceitaIngredienteCreateOrConnectWithoutReceitaInput = {
    where: ReceitaIngredienteWhereUniqueInput
    create: XOR<ReceitaIngredienteCreateWithoutReceitaInput, ReceitaIngredienteUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaIngredienteCreateManyReceitaInputEnvelope = {
    data: ReceitaIngredienteCreateManyReceitaInput | ReceitaIngredienteCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type PostagemCreateWithoutReceitaInput = {
    imagemPrato?: string | null
    comentario?: string | null
    criadaEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPostagensInput
  }

  export type PostagemUncheckedCreateWithoutReceitaInput = {
    id?: number
    usuarioId: number
    imagemPrato?: string | null
    comentario?: string | null
    criadaEm?: Date | string
  }

  export type PostagemCreateOrConnectWithoutReceitaInput = {
    where: PostagemWhereUniqueInput
    create: XOR<PostagemCreateWithoutReceitaInput, PostagemUncheckedCreateWithoutReceitaInput>
  }

  export type PostagemCreateManyReceitaInputEnvelope = {
    data: PostagemCreateManyReceitaInput | PostagemCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutReceitaInput = {
    texto: string
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
    respostaDe?: ComentarioCreateNestedOneWithoutRespostasInput
    respostas?: ComentarioCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioUncheckedCreateWithoutReceitaInput = {
    id?: number
    usuarioId: number
    respostaDeId?: number | null
    texto: string
    criadoEm?: Date | string
    respostas?: ComentarioUncheckedCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioCreateOrConnectWithoutReceitaInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput>
  }

  export type ComentarioCreateManyReceitaInputEnvelope = {
    data: ComentarioCreateManyReceitaInput | ComentarioCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutReceitaInput = {
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutReceitaInput = {
    id?: number
    usuarioId: number
    criadoEm?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutReceitaInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutReceitaInput, FavoritoUncheckedCreateWithoutReceitaInput>
  }

  export type FavoritoCreateManyReceitaInputEnvelope = {
    data: FavoritoCreateManyReceitaInput | FavoritoCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutReceitasInput = {
    update: XOR<UsuarioUpdateWithoutReceitasInput, UsuarioUncheckedUpdateWithoutReceitasInput>
    create: XOR<UsuarioCreateWithoutReceitasInput, UsuarioUncheckedCreateWithoutReceitasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReceitasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReceitasInput, UsuarioUncheckedUpdateWithoutReceitasInput>
  }

  export type UsuarioUpdateWithoutReceitasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReceitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUncheckedUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUncheckedUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ReceitaIngredienteUpsertWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaIngredienteWhereUniqueInput
    update: XOR<ReceitaIngredienteUpdateWithoutReceitaInput, ReceitaIngredienteUncheckedUpdateWithoutReceitaInput>
    create: XOR<ReceitaIngredienteCreateWithoutReceitaInput, ReceitaIngredienteUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaIngredienteUpdateWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaIngredienteWhereUniqueInput
    data: XOR<ReceitaIngredienteUpdateWithoutReceitaInput, ReceitaIngredienteUncheckedUpdateWithoutReceitaInput>
  }

  export type ReceitaIngredienteUpdateManyWithWhereWithoutReceitaInput = {
    where: ReceitaIngredienteScalarWhereInput
    data: XOR<ReceitaIngredienteUpdateManyMutationInput, ReceitaIngredienteUncheckedUpdateManyWithoutReceitaInput>
  }

  export type PostagemUpsertWithWhereUniqueWithoutReceitaInput = {
    where: PostagemWhereUniqueInput
    update: XOR<PostagemUpdateWithoutReceitaInput, PostagemUncheckedUpdateWithoutReceitaInput>
    create: XOR<PostagemCreateWithoutReceitaInput, PostagemUncheckedCreateWithoutReceitaInput>
  }

  export type PostagemUpdateWithWhereUniqueWithoutReceitaInput = {
    where: PostagemWhereUniqueInput
    data: XOR<PostagemUpdateWithoutReceitaInput, PostagemUncheckedUpdateWithoutReceitaInput>
  }

  export type PostagemUpdateManyWithWhereWithoutReceitaInput = {
    where: PostagemScalarWhereInput
    data: XOR<PostagemUpdateManyMutationInput, PostagemUncheckedUpdateManyWithoutReceitaInput>
  }

  export type ComentarioUpsertWithWhereUniqueWithoutReceitaInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutReceitaInput, ComentarioUncheckedUpdateWithoutReceitaInput>
    create: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutReceitaInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutReceitaInput, ComentarioUncheckedUpdateWithoutReceitaInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutReceitaInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutReceitaInput>
  }

  export type FavoritoUpsertWithWhereUniqueWithoutReceitaInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutReceitaInput, FavoritoUncheckedUpdateWithoutReceitaInput>
    create: XOR<FavoritoCreateWithoutReceitaInput, FavoritoUncheckedCreateWithoutReceitaInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutReceitaInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutReceitaInput, FavoritoUncheckedUpdateWithoutReceitaInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutReceitaInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutReceitaInput>
  }

  export type UsuarioCreateWithoutFavoritosInput = {
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFavoritosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarUncheckedCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioUncheckedCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaUncheckedCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFavoritosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
  }

  export type ReceitaCreateWithoutFavoritosInput = {
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReceitasInput
    ingredientes?: ReceitaIngredienteCreateNestedManyWithoutReceitaInput
    postagens?: PostagemCreateNestedManyWithoutReceitaInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutFavoritosInput = {
    id?: number
    usuarioId: number
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    ingredientes?: ReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutReceitaInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutFavoritosInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutFavoritosInput, ReceitaUncheckedCreateWithoutFavoritosInput>
  }

  export type UsuarioUpsertWithoutFavoritosInput = {
    update: XOR<UsuarioUpdateWithoutFavoritosInput, UsuarioUncheckedUpdateWithoutFavoritosInput>
    create: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFavoritosInput, UsuarioUncheckedUpdateWithoutFavoritosInput>
  }

  export type UsuarioUpdateWithoutFavoritosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFavoritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUncheckedUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUncheckedUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUncheckedUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ReceitaUpsertWithoutFavoritosInput = {
    update: XOR<ReceitaUpdateWithoutFavoritosInput, ReceitaUncheckedUpdateWithoutFavoritosInput>
    create: XOR<ReceitaCreateWithoutFavoritosInput, ReceitaUncheckedCreateWithoutFavoritosInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutFavoritosInput, ReceitaUncheckedUpdateWithoutFavoritosInput>
  }

  export type ReceitaUpdateWithoutFavoritosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReceitasNestedInput
    ingredientes?: ReceitaIngredienteUpdateManyWithoutReceitaNestedInput
    postagens?: PostagemUpdateManyWithoutReceitaNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutFavoritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientes?: ReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutReceitaNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type UsuarioCreateWithoutGeracoesInput = {
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutGeracoesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarUncheckedCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioUncheckedCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaUncheckedCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutGeracoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGeracoesInput, UsuarioUncheckedCreateWithoutGeracoesInput>
  }

  export type UsuarioUpsertWithoutGeracoesInput = {
    update: XOR<UsuarioUpdateWithoutGeracoesInput, UsuarioUncheckedUpdateWithoutGeracoesInput>
    create: XOR<UsuarioCreateWithoutGeracoesInput, UsuarioUncheckedCreateWithoutGeracoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutGeracoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutGeracoesInput, UsuarioUncheckedUpdateWithoutGeracoesInput>
  }

  export type UsuarioUpdateWithoutGeracoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGeracoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUncheckedUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUncheckedUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUncheckedUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ReceitaCreateWithoutIngredientesInput = {
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReceitasInput
    postagens?: PostagemCreateNestedManyWithoutReceitaInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
    favoritos?: FavoritoCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutIngredientesInput = {
    id?: number
    usuarioId: number
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    postagens?: PostagemUncheckedCreateNestedManyWithoutReceitaInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutIngredientesInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutIngredientesInput, ReceitaUncheckedCreateWithoutIngredientesInput>
  }

  export type IngredienteCreateWithoutReceitaIngredientesInput = {
    nome: string
    categoria: string
    classificacaoStatus?: string
    dietasPermitidas?: string | null
    restricoes?: string | null
    inventarios?: InventarioCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateWithoutReceitaIngredientesInput = {
    id?: number
    nome: string
    categoria: string
    classificacaoStatus?: string
    dietasPermitidas?: string | null
    restricoes?: string | null
    inventarios?: InventarioUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteCreateOrConnectWithoutReceitaIngredientesInput = {
    where: IngredienteWhereUniqueInput
    create: XOR<IngredienteCreateWithoutReceitaIngredientesInput, IngredienteUncheckedCreateWithoutReceitaIngredientesInput>
  }

  export type ReceitaUpsertWithoutIngredientesInput = {
    update: XOR<ReceitaUpdateWithoutIngredientesInput, ReceitaUncheckedUpdateWithoutIngredientesInput>
    create: XOR<ReceitaCreateWithoutIngredientesInput, ReceitaUncheckedCreateWithoutIngredientesInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutIngredientesInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutIngredientesInput, ReceitaUncheckedUpdateWithoutIngredientesInput>
  }

  export type ReceitaUpdateWithoutIngredientesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReceitasNestedInput
    postagens?: PostagemUpdateManyWithoutReceitaNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
    favoritos?: FavoritoUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutIngredientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    postagens?: PostagemUncheckedUpdateManyWithoutReceitaNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type IngredienteUpsertWithoutReceitaIngredientesInput = {
    update: XOR<IngredienteUpdateWithoutReceitaIngredientesInput, IngredienteUncheckedUpdateWithoutReceitaIngredientesInput>
    create: XOR<IngredienteCreateWithoutReceitaIngredientesInput, IngredienteUncheckedCreateWithoutReceitaIngredientesInput>
    where?: IngredienteWhereInput
  }

  export type IngredienteUpdateToOneWithWhereWithoutReceitaIngredientesInput = {
    where?: IngredienteWhereInput
    data: XOR<IngredienteUpdateWithoutReceitaIngredientesInput, IngredienteUncheckedUpdateWithoutReceitaIngredientesInput>
  }

  export type IngredienteUpdateWithoutReceitaIngredientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    classificacaoStatus?: StringFieldUpdateOperationsInput | string
    dietasPermitidas?: NullableStringFieldUpdateOperationsInput | string | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    inventarios?: InventarioUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateWithoutReceitaIngredientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    classificacaoStatus?: StringFieldUpdateOperationsInput | string
    dietasPermitidas?: NullableStringFieldUpdateOperationsInput | string | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    inventarios?: InventarioUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type ReceitaCreateWithoutComentariosInput = {
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReceitasInput
    ingredientes?: ReceitaIngredienteCreateNestedManyWithoutReceitaInput
    postagens?: PostagemCreateNestedManyWithoutReceitaInput
    favoritos?: FavoritoCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutComentariosInput = {
    id?: number
    usuarioId: number
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    ingredientes?: ReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutReceitaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutComentariosInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutComentariosInput, ReceitaUncheckedCreateWithoutComentariosInput>
  }

  export type UsuarioCreateWithoutComentariosInput = {
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutComentariosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarUncheckedCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioUncheckedCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaUncheckedCreateNestedManyWithoutUsuarioInput
    postagens?: PostagemUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComentariosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
  }

  export type ComentarioCreateWithoutRespostasInput = {
    texto: string
    criadoEm?: Date | string
    receita: ReceitaCreateNestedOneWithoutComentariosInput
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
    respostaDe?: ComentarioCreateNestedOneWithoutRespostasInput
  }

  export type ComentarioUncheckedCreateWithoutRespostasInput = {
    id?: number
    receitaId: number
    usuarioId: number
    respostaDeId?: number | null
    texto: string
    criadoEm?: Date | string
  }

  export type ComentarioCreateOrConnectWithoutRespostasInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
  }

  export type ComentarioCreateWithoutRespostaDeInput = {
    texto: string
    criadoEm?: Date | string
    receita: ReceitaCreateNestedOneWithoutComentariosInput
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
    respostas?: ComentarioCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioUncheckedCreateWithoutRespostaDeInput = {
    id?: number
    receitaId: number
    usuarioId: number
    texto: string
    criadoEm?: Date | string
    respostas?: ComentarioUncheckedCreateNestedManyWithoutRespostaDeInput
  }

  export type ComentarioCreateOrConnectWithoutRespostaDeInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput>
  }

  export type ComentarioCreateManyRespostaDeInputEnvelope = {
    data: ComentarioCreateManyRespostaDeInput | ComentarioCreateManyRespostaDeInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaUpsertWithoutComentariosInput = {
    update: XOR<ReceitaUpdateWithoutComentariosInput, ReceitaUncheckedUpdateWithoutComentariosInput>
    create: XOR<ReceitaCreateWithoutComentariosInput, ReceitaUncheckedCreateWithoutComentariosInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutComentariosInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutComentariosInput, ReceitaUncheckedUpdateWithoutComentariosInput>
  }

  export type ReceitaUpdateWithoutComentariosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReceitasNestedInput
    ingredientes?: ReceitaIngredienteUpdateManyWithoutReceitaNestedInput
    postagens?: PostagemUpdateManyWithoutReceitaNestedInput
    favoritos?: FavoritoUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientes?: ReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutReceitaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type UsuarioUpsertWithoutComentariosInput = {
    update: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioUpdateWithoutComentariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUncheckedUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUncheckedUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUncheckedUpdateManyWithoutUsuarioNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ComentarioUpsertWithoutRespostasInput = {
    update: XOR<ComentarioUpdateWithoutRespostasInput, ComentarioUncheckedUpdateWithoutRespostasInput>
    create: XOR<ComentarioCreateWithoutRespostasInput, ComentarioUncheckedCreateWithoutRespostasInput>
    where?: ComentarioWhereInput
  }

  export type ComentarioUpdateToOneWithWhereWithoutRespostasInput = {
    where?: ComentarioWhereInput
    data: XOR<ComentarioUpdateWithoutRespostasInput, ComentarioUncheckedUpdateWithoutRespostasInput>
  }

  export type ComentarioUpdateWithoutRespostasInput = {
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutComentariosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    respostaDe?: ComentarioUpdateOneWithoutRespostasNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutRespostasInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpsertWithWhereUniqueWithoutRespostaDeInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutRespostaDeInput, ComentarioUncheckedUpdateWithoutRespostaDeInput>
    create: XOR<ComentarioCreateWithoutRespostaDeInput, ComentarioUncheckedCreateWithoutRespostaDeInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutRespostaDeInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutRespostaDeInput, ComentarioUncheckedUpdateWithoutRespostaDeInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutRespostaDeInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutRespostaDeInput>
  }

  export type UsuarioCreateWithoutPostagensInput = {
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPostagensInput = {
    id?: number
    nome: string
    email: string
    senha: string
    avatar?: string | null
    nivelHabilidade?: $Enums.NivelHabilidade
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    perfil?: PerfilAlimentarUncheckedCreateNestedOneWithoutUsuarioInput
    inventario?: InventarioUncheckedCreateNestedManyWithoutUsuarioInput
    receitas?: ReceitaUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    geracoes?: ReceitaGeracaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPostagensInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPostagensInput, UsuarioUncheckedCreateWithoutPostagensInput>
  }

  export type ReceitaCreateWithoutPostagensInput = {
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReceitasInput
    ingredientes?: ReceitaIngredienteCreateNestedManyWithoutReceitaInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
    favoritos?: FavoritoCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutPostagensInput = {
    id?: number
    usuarioId: number
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
    ingredientes?: ReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutPostagensInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutPostagensInput, ReceitaUncheckedCreateWithoutPostagensInput>
  }

  export type UsuarioUpsertWithoutPostagensInput = {
    update: XOR<UsuarioUpdateWithoutPostagensInput, UsuarioUncheckedUpdateWithoutPostagensInput>
    create: XOR<UsuarioCreateWithoutPostagensInput, UsuarioUncheckedCreateWithoutPostagensInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPostagensInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPostagensInput, UsuarioUncheckedUpdateWithoutPostagensInput>
  }

  export type UsuarioUpdateWithoutPostagensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPostagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    nivelHabilidade?: EnumNivelHabilidadeFieldUpdateOperationsInput | $Enums.NivelHabilidade
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilAlimentarUncheckedUpdateOneWithoutUsuarioNestedInput
    inventario?: InventarioUncheckedUpdateManyWithoutUsuarioNestedInput
    receitas?: ReceitaUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    geracoes?: ReceitaGeracaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ReceitaUpsertWithoutPostagensInput = {
    update: XOR<ReceitaUpdateWithoutPostagensInput, ReceitaUncheckedUpdateWithoutPostagensInput>
    create: XOR<ReceitaCreateWithoutPostagensInput, ReceitaUncheckedCreateWithoutPostagensInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutPostagensInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutPostagensInput, ReceitaUncheckedUpdateWithoutPostagensInput>
  }

  export type ReceitaUpdateWithoutPostagensInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReceitasNestedInput
    ingredientes?: ReceitaIngredienteUpdateManyWithoutReceitaNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
    favoritos?: FavoritoUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutPostagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientes?: ReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type InventarioCreateManyUsuarioInput = {
    id?: number
    ingredienteId: number
    quantidade: number
    unidade: string
  }

  export type ReceitaCreateManyUsuarioInput = {
    id?: number
    titulo: string
    modoPreparo: string
    tempoEstimado: number
    porcoes?: number
    imagem?: string | null
    publica?: boolean
    geradaPorIA?: boolean
    criadaEm?: Date | string
    atualizadaEm?: Date | string
  }

  export type PostagemCreateManyUsuarioInput = {
    id?: number
    receitaId?: number | null
    imagemPrato?: string | null
    comentario?: string | null
    criadaEm?: Date | string
  }

  export type ComentarioCreateManyUsuarioInput = {
    id?: number
    receitaId: number
    respostaDeId?: number | null
    texto: string
    criadoEm?: Date | string
  }

  export type FavoritoCreateManyUsuarioInput = {
    id?: number
    receitaId: number
    criadoEm?: Date | string
  }

  export type ReceitaGeracaoCreateManyUsuarioInput = {
    id?: number
    chaveCache: string
    modelo: string
    status: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: string | null
    receitaId?: number | null
    cacheExpiraEm?: Date | string | null
    rascunhoExpiraEm?: Date | string | null
    criadaEm?: Date | string
    finalizadaEm?: Date | string | null
    duracaoMs?: number | null
    reservaExpiraEm?: Date | string | null
  }

  export type InventarioUpdateWithoutUsuarioInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    ingrediente?: IngredienteUpdateOneRequiredWithoutInventariosNestedInput
  }

  export type InventarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredienteId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
  }

  export type InventarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredienteId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
  }

  export type ReceitaUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientes?: ReceitaIngredienteUpdateManyWithoutReceitaNestedInput
    postagens?: PostagemUpdateManyWithoutReceitaNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
    favoritos?: FavoritoUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientes?: ReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
    postagens?: PostagemUncheckedUpdateManyWithoutReceitaNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    modoPreparo?: StringFieldUpdateOperationsInput | string
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    porcoes?: IntFieldUpdateOperationsInput | number
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    publica?: BoolFieldUpdateOperationsInput | boolean
    geradaPorIA?: BoolFieldUpdateOperationsInput | boolean
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostagemUpdateWithoutUsuarioInput = {
    imagemPrato?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneWithoutPostagensNestedInput
  }

  export type PostagemUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagemPrato?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostagemUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagemPrato?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpdateWithoutUsuarioInput = {
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutComentariosNestedInput
    respostaDe?: ComentarioUpdateOneWithoutRespostasNestedInput
    respostas?: ComentarioUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: ComentarioUncheckedUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUpdateWithoutUsuarioInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaGeracaoUpdateWithoutUsuarioInput = {
    chaveCache?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: NullableStringFieldUpdateOperationsInput | string | null
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    cacheExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rascunhoExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizadaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracaoMs?: NullableIntFieldUpdateOperationsInput | number | null
    reservaExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceitaGeracaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    chaveCache?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: NullableStringFieldUpdateOperationsInput | string | null
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    cacheExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rascunhoExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizadaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracaoMs?: NullableIntFieldUpdateOperationsInput | number | null
    reservaExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceitaGeracaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    chaveCache?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    consumo?: NullableJsonNullValueInput | InputJsonValue
    erroCodigo?: NullableStringFieldUpdateOperationsInput | string | null
    receitaId?: NullableIntFieldUpdateOperationsInput | number | null
    cacheExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rascunhoExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    finalizadaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duracaoMs?: NullableIntFieldUpdateOperationsInput | number | null
    reservaExpiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RestricaoAlimentarCreateManyPerfilInput = {
    id?: number
    tipo: string
  }

  export type RestricaoAlimentarUpdateWithoutPerfilInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type RestricaoAlimentarUncheckedUpdateWithoutPerfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type RestricaoAlimentarUncheckedUpdateManyWithoutPerfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type InventarioCreateManyIngredienteInput = {
    id?: number
    usuarioId: number
    quantidade: number
    unidade: string
  }

  export type ReceitaIngredienteCreateManyIngredienteInput = {
    receitaId: number
    quantidade: number
    unidade: string
    opcional?: boolean
  }

  export type InventarioUpdateWithoutIngredienteInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutInventarioNestedInput
  }

  export type InventarioUncheckedUpdateWithoutIngredienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
  }

  export type InventarioUncheckedUpdateManyWithoutIngredienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
  }

  export type ReceitaIngredienteUpdateWithoutIngredienteInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    opcional?: BoolFieldUpdateOperationsInput | boolean
    receita?: ReceitaUpdateOneRequiredWithoutIngredientesNestedInput
  }

  export type ReceitaIngredienteUncheckedUpdateWithoutIngredienteInput = {
    receitaId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    opcional?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReceitaIngredienteUncheckedUpdateManyWithoutIngredienteInput = {
    receitaId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    opcional?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReceitaIngredienteCreateManyReceitaInput = {
    ingredienteId: number
    quantidade: number
    unidade: string
    opcional?: boolean
  }

  export type PostagemCreateManyReceitaInput = {
    id?: number
    usuarioId: number
    imagemPrato?: string | null
    comentario?: string | null
    criadaEm?: Date | string
  }

  export type ComentarioCreateManyReceitaInput = {
    id?: number
    usuarioId: number
    respostaDeId?: number | null
    texto: string
    criadoEm?: Date | string
  }

  export type FavoritoCreateManyReceitaInput = {
    id?: number
    usuarioId: number
    criadoEm?: Date | string
  }

  export type ReceitaIngredienteUpdateWithoutReceitaInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    opcional?: BoolFieldUpdateOperationsInput | boolean
    ingrediente?: IngredienteUpdateOneRequiredWithoutReceitaIngredientesNestedInput
  }

  export type ReceitaIngredienteUncheckedUpdateWithoutReceitaInput = {
    ingredienteId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    opcional?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReceitaIngredienteUncheckedUpdateManyWithoutReceitaInput = {
    ingredienteId?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    opcional?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostagemUpdateWithoutReceitaInput = {
    imagemPrato?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPostagensNestedInput
  }

  export type PostagemUncheckedUpdateWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    imagemPrato?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostagemUncheckedUpdateManyWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    imagemPrato?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpdateWithoutReceitaInput = {
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    respostaDe?: ComentarioUpdateOneWithoutRespostasNestedInput
    respostas?: ComentarioUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: ComentarioUncheckedUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    respostaDeId?: NullableIntFieldUpdateOperationsInput | number | null
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUpdateWithoutReceitaInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioCreateManyRespostaDeInput = {
    id?: number
    receitaId: number
    usuarioId: number
    texto: string
    criadoEm?: Date | string
  }

  export type ComentarioUpdateWithoutRespostaDeInput = {
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutComentariosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    respostas?: ComentarioUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutRespostaDeInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: ComentarioUncheckedUpdateManyWithoutRespostaDeNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutRespostaDeInput = {
    id?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
