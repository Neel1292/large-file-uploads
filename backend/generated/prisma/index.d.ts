
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Upload
 * 
 */
export type Upload = $Result.DefaultSelection<Prisma.$UploadPayload>
/**
 * Model UploadChunk
 * 
 */
export type UploadChunk = $Result.DefaultSelection<Prisma.$UploadChunkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UploadStatus: {
  UPLOADING: 'UPLOADING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus]


export const ChunkStatus: {
  PENDING: 'PENDING',
  UPLOADED: 'UPLOADED',
  FAILED: 'FAILED'
};

export type ChunkStatus = (typeof ChunkStatus)[keyof typeof ChunkStatus]


export const StorageService: {
  CLOUDINARY: 'CLOUDINARY',
  AWS: 'AWS'
};

export type StorageService = (typeof StorageService)[keyof typeof StorageService]

}

export type UploadStatus = $Enums.UploadStatus

export const UploadStatus: typeof $Enums.UploadStatus

export type ChunkStatus = $Enums.ChunkStatus

export const ChunkStatus: typeof $Enums.ChunkStatus

export type StorageService = $Enums.StorageService

export const StorageService: typeof $Enums.StorageService

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upload`: Exposes CRUD operations for the **Upload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uploads
    * const uploads = await prisma.upload.findMany()
    * ```
    */
  get upload(): Prisma.UploadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploadChunk`: Exposes CRUD operations for the **UploadChunk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadChunks
    * const uploadChunks = await prisma.uploadChunk.findMany()
    * ```
    */
  get uploadChunk(): Prisma.UploadChunkDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    User: 'User',
    Upload: 'Upload',
    UploadChunk: 'UploadChunk'
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
      modelProps: "user" | "upload" | "uploadChunk"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Upload: {
        payload: Prisma.$UploadPayload<ExtArgs>
        fields: Prisma.UploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          findFirst: {
            args: Prisma.UploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          findMany: {
            args: Prisma.UploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>[]
          }
          create: {
            args: Prisma.UploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          createMany: {
            args: Prisma.UploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>[]
          }
          delete: {
            args: Prisma.UploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          update: {
            args: Prisma.UploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          deleteMany: {
            args: Prisma.UploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>[]
          }
          upsert: {
            args: Prisma.UploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          aggregate: {
            args: Prisma.UploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpload>
          }
          groupBy: {
            args: Prisma.UploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadCountArgs<ExtArgs>
            result: $Utils.Optional<UploadCountAggregateOutputType> | number
          }
        }
      }
      UploadChunk: {
        payload: Prisma.$UploadChunkPayload<ExtArgs>
        fields: Prisma.UploadChunkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadChunkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadChunkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload>
          }
          findFirst: {
            args: Prisma.UploadChunkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadChunkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload>
          }
          findMany: {
            args: Prisma.UploadChunkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload>[]
          }
          create: {
            args: Prisma.UploadChunkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload>
          }
          createMany: {
            args: Prisma.UploadChunkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadChunkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload>[]
          }
          delete: {
            args: Prisma.UploadChunkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload>
          }
          update: {
            args: Prisma.UploadChunkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload>
          }
          deleteMany: {
            args: Prisma.UploadChunkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadChunkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadChunkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload>[]
          }
          upsert: {
            args: Prisma.UploadChunkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadChunkPayload>
          }
          aggregate: {
            args: Prisma.UploadChunkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadChunk>
          }
          groupBy: {
            args: Prisma.UploadChunkGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadChunkGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadChunkCountArgs<ExtArgs>
            result: $Utils.Optional<UploadChunkCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    user?: UserOmit
    upload?: UploadOmit
    uploadChunk?: UploadChunkOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    uploads: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploads?: boolean | UserCountOutputTypeCountUploadsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadWhereInput
  }


  /**
   * Count Type UploadCountOutputType
   */

  export type UploadCountOutputType = {
    chunks: number
  }

  export type UploadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | UploadCountOutputTypeCountChunksArgs
  }

  // Custom InputTypes
  /**
   * UploadCountOutputType without action
   */
  export type UploadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadCountOutputType
     */
    select?: UploadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UploadCountOutputType without action
   */
  export type UploadCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadChunkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    passwordHash: string | null
    name: string | null
    storageService: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    passwordHash: string | null
    name: string | null
    storageService: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    storageService: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    storageService?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    storageService?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    storageService?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    email: string
    passwordHash: string
    name: string | null
    storageService: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    storageService?: boolean
    createdAt?: boolean
    uploads?: boolean | User$uploadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    storageService?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    storageService?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    storageService?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "storageService" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploads?: boolean | User$uploadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      uploads: Prisma.$UploadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
      passwordHash: string
      name: string | null
      storageService: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploads<T extends User$uploadsArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly storageService: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.uploads
   */
  export type User$uploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
    where?: UploadWhereInput
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    cursor?: UploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadScalarFieldEnum | UploadScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Upload
   */

  export type AggregateUpload = {
    _count: UploadCountAggregateOutputType | null
    _avg: UploadAvgAggregateOutputType | null
    _sum: UploadSumAggregateOutputType | null
    _min: UploadMinAggregateOutputType | null
    _max: UploadMaxAggregateOutputType | null
  }

  export type UploadAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    fileSize: number | null
    chunkSize: number | null
    totalChunks: number | null
    uploadedChunks: number | null
  }

  export type UploadSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    fileSize: bigint | null
    chunkSize: number | null
    totalChunks: number | null
    uploadedChunks: number | null
  }

  export type UploadMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    fileName: string | null
    fileSize: bigint | null
    mimeType: string | null
    chunkSize: number | null
    totalChunks: number | null
    uploadedChunks: number | null
    ipHash: string | null
    service: $Enums.StorageService | null
    cloudinaryUploadId: string | null
    cloudinaryPublicId: string | null
    cloudinarySecureUrl: string | null
    awsUploadId: string | null
    awsKey: string | null
    awsUrl: string | null
    status: $Enums.UploadStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UploadMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    fileName: string | null
    fileSize: bigint | null
    mimeType: string | null
    chunkSize: number | null
    totalChunks: number | null
    uploadedChunks: number | null
    ipHash: string | null
    service: $Enums.StorageService | null
    cloudinaryUploadId: string | null
    cloudinaryPublicId: string | null
    cloudinarySecureUrl: string | null
    awsUploadId: string | null
    awsKey: string | null
    awsUrl: string | null
    status: $Enums.UploadStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UploadCountAggregateOutputType = {
    id: number
    userId: number
    fileName: number
    fileSize: number
    mimeType: number
    chunkSize: number
    totalChunks: number
    uploadedChunks: number
    ipHash: number
    service: number
    cloudinaryUploadId: number
    cloudinaryPublicId: number
    cloudinarySecureUrl: number
    awsUploadId: number
    awsKey: number
    awsUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UploadAvgAggregateInputType = {
    id?: true
    userId?: true
    fileSize?: true
    chunkSize?: true
    totalChunks?: true
    uploadedChunks?: true
  }

  export type UploadSumAggregateInputType = {
    id?: true
    userId?: true
    fileSize?: true
    chunkSize?: true
    totalChunks?: true
    uploadedChunks?: true
  }

  export type UploadMinAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    chunkSize?: true
    totalChunks?: true
    uploadedChunks?: true
    ipHash?: true
    service?: true
    cloudinaryUploadId?: true
    cloudinaryPublicId?: true
    cloudinarySecureUrl?: true
    awsUploadId?: true
    awsKey?: true
    awsUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UploadMaxAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    chunkSize?: true
    totalChunks?: true
    uploadedChunks?: true
    ipHash?: true
    service?: true
    cloudinaryUploadId?: true
    cloudinaryPublicId?: true
    cloudinarySecureUrl?: true
    awsUploadId?: true
    awsKey?: true
    awsUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UploadCountAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    chunkSize?: true
    totalChunks?: true
    uploadedChunks?: true
    ipHash?: true
    service?: true
    cloudinaryUploadId?: true
    cloudinaryPublicId?: true
    cloudinarySecureUrl?: true
    awsUploadId?: true
    awsKey?: true
    awsUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upload to aggregate.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Uploads
    **/
    _count?: true | UploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadMaxAggregateInputType
  }

  export type GetUploadAggregateType<T extends UploadAggregateArgs> = {
        [P in keyof T & keyof AggregateUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpload[P]>
      : GetScalarType<T[P], AggregateUpload[P]>
  }




  export type UploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadWhereInput
    orderBy?: UploadOrderByWithAggregationInput | UploadOrderByWithAggregationInput[]
    by: UploadScalarFieldEnum[] | UploadScalarFieldEnum
    having?: UploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadCountAggregateInputType | true
    _avg?: UploadAvgAggregateInputType
    _sum?: UploadSumAggregateInputType
    _min?: UploadMinAggregateInputType
    _max?: UploadMaxAggregateInputType
  }

  export type UploadGroupByOutputType = {
    id: bigint
    userId: bigint
    fileName: string
    fileSize: bigint
    mimeType: string
    chunkSize: number
    totalChunks: number
    uploadedChunks: number
    ipHash: string | null
    service: $Enums.StorageService
    cloudinaryUploadId: string | null
    cloudinaryPublicId: string | null
    cloudinarySecureUrl: string | null
    awsUploadId: string | null
    awsKey: string | null
    awsUrl: string | null
    status: $Enums.UploadStatus
    createdAt: Date
    updatedAt: Date
    _count: UploadCountAggregateOutputType | null
    _avg: UploadAvgAggregateOutputType | null
    _sum: UploadSumAggregateOutputType | null
    _min: UploadMinAggregateOutputType | null
    _max: UploadMaxAggregateOutputType | null
  }

  type GetUploadGroupByPayload<T extends UploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadGroupByOutputType[P]>
            : GetScalarType<T[P], UploadGroupByOutputType[P]>
        }
      >
    >


  export type UploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    chunkSize?: boolean
    totalChunks?: boolean
    uploadedChunks?: boolean
    ipHash?: boolean
    service?: boolean
    cloudinaryUploadId?: boolean
    cloudinaryPublicId?: boolean
    cloudinarySecureUrl?: boolean
    awsUploadId?: boolean
    awsKey?: boolean
    awsUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chunks?: boolean | Upload$chunksArgs<ExtArgs>
    _count?: boolean | UploadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upload"]>

  export type UploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    chunkSize?: boolean
    totalChunks?: boolean
    uploadedChunks?: boolean
    ipHash?: boolean
    service?: boolean
    cloudinaryUploadId?: boolean
    cloudinaryPublicId?: boolean
    cloudinarySecureUrl?: boolean
    awsUploadId?: boolean
    awsKey?: boolean
    awsUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upload"]>

  export type UploadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    chunkSize?: boolean
    totalChunks?: boolean
    uploadedChunks?: boolean
    ipHash?: boolean
    service?: boolean
    cloudinaryUploadId?: boolean
    cloudinaryPublicId?: boolean
    cloudinarySecureUrl?: boolean
    awsUploadId?: boolean
    awsKey?: boolean
    awsUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upload"]>

  export type UploadSelectScalar = {
    id?: boolean
    userId?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    chunkSize?: boolean
    totalChunks?: boolean
    uploadedChunks?: boolean
    ipHash?: boolean
    service?: boolean
    cloudinaryUploadId?: boolean
    cloudinaryPublicId?: boolean
    cloudinarySecureUrl?: boolean
    awsUploadId?: boolean
    awsKey?: boolean
    awsUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fileName" | "fileSize" | "mimeType" | "chunkSize" | "totalChunks" | "uploadedChunks" | "ipHash" | "service" | "cloudinaryUploadId" | "cloudinaryPublicId" | "cloudinarySecureUrl" | "awsUploadId" | "awsKey" | "awsUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["upload"]>
  export type UploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chunks?: boolean | Upload$chunksArgs<ExtArgs>
    _count?: boolean | UploadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UploadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UploadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Upload"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chunks: Prisma.$UploadChunkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      fileName: string
      fileSize: bigint
      mimeType: string
      chunkSize: number
      totalChunks: number
      uploadedChunks: number
      ipHash: string | null
      service: $Enums.StorageService
      cloudinaryUploadId: string | null
      cloudinaryPublicId: string | null
      cloudinarySecureUrl: string | null
      awsUploadId: string | null
      awsKey: string | null
      awsUrl: string | null
      status: $Enums.UploadStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["upload"]>
    composites: {}
  }

  type UploadGetPayload<S extends boolean | null | undefined | UploadDefaultArgs> = $Result.GetResult<Prisma.$UploadPayload, S>

  type UploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadCountAggregateInputType | true
    }

  export interface UploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Upload'], meta: { name: 'Upload' } }
    /**
     * Find zero or one Upload that matches the filter.
     * @param {UploadFindUniqueArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadFindUniqueArgs>(args: SelectSubset<T, UploadFindUniqueArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Upload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadFindUniqueOrThrowArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadFindFirstArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadFindFirstArgs>(args?: SelectSubset<T, UploadFindFirstArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadFindFirstOrThrowArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Uploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uploads
     * const uploads = await prisma.upload.findMany()
     * 
     * // Get first 10 Uploads
     * const uploads = await prisma.upload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadWithIdOnly = await prisma.upload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadFindManyArgs>(args?: SelectSubset<T, UploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Upload.
     * @param {UploadCreateArgs} args - Arguments to create a Upload.
     * @example
     * // Create one Upload
     * const Upload = await prisma.upload.create({
     *   data: {
     *     // ... data to create a Upload
     *   }
     * })
     * 
     */
    create<T extends UploadCreateArgs>(args: SelectSubset<T, UploadCreateArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Uploads.
     * @param {UploadCreateManyArgs} args - Arguments to create many Uploads.
     * @example
     * // Create many Uploads
     * const upload = await prisma.upload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadCreateManyArgs>(args?: SelectSubset<T, UploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Uploads and returns the data saved in the database.
     * @param {UploadCreateManyAndReturnArgs} args - Arguments to create many Uploads.
     * @example
     * // Create many Uploads
     * const upload = await prisma.upload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Uploads and only return the `id`
     * const uploadWithIdOnly = await prisma.upload.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Upload.
     * @param {UploadDeleteArgs} args - Arguments to delete one Upload.
     * @example
     * // Delete one Upload
     * const Upload = await prisma.upload.delete({
     *   where: {
     *     // ... filter to delete one Upload
     *   }
     * })
     * 
     */
    delete<T extends UploadDeleteArgs>(args: SelectSubset<T, UploadDeleteArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Upload.
     * @param {UploadUpdateArgs} args - Arguments to update one Upload.
     * @example
     * // Update one Upload
     * const upload = await prisma.upload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadUpdateArgs>(args: SelectSubset<T, UploadUpdateArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Uploads.
     * @param {UploadDeleteManyArgs} args - Arguments to filter Uploads to delete.
     * @example
     * // Delete a few Uploads
     * const { count } = await prisma.upload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadDeleteManyArgs>(args?: SelectSubset<T, UploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uploads
     * const upload = await prisma.upload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadUpdateManyArgs>(args: SelectSubset<T, UploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uploads and returns the data updated in the database.
     * @param {UploadUpdateManyAndReturnArgs} args - Arguments to update many Uploads.
     * @example
     * // Update many Uploads
     * const upload = await prisma.upload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Uploads and only return the `id`
     * const uploadWithIdOnly = await prisma.upload.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Upload.
     * @param {UploadUpsertArgs} args - Arguments to update or create a Upload.
     * @example
     * // Update or create a Upload
     * const upload = await prisma.upload.upsert({
     *   create: {
     *     // ... data to create a Upload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Upload we want to update
     *   }
     * })
     */
    upsert<T extends UploadUpsertArgs>(args: SelectSubset<T, UploadUpsertArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadCountArgs} args - Arguments to filter Uploads to count.
     * @example
     * // Count the number of Uploads
     * const count = await prisma.upload.count({
     *   where: {
     *     // ... the filter for the Uploads we want to count
     *   }
     * })
    **/
    count<T extends UploadCountArgs>(
      args?: Subset<T, UploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Upload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UploadAggregateArgs>(args: Subset<T, UploadAggregateArgs>): Prisma.PrismaPromise<GetUploadAggregateType<T>>

    /**
     * Group by Upload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadGroupByArgs} args - Group by arguments.
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
      T extends UploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadGroupByArgs['orderBy'] }
        : { orderBy?: UploadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Upload model
   */
  readonly fields: UploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Upload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chunks<T extends Upload$chunksArgs<ExtArgs> = {}>(args?: Subset<T, Upload$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Upload model
   */
  interface UploadFieldRefs {
    readonly id: FieldRef<"Upload", 'BigInt'>
    readonly userId: FieldRef<"Upload", 'BigInt'>
    readonly fileName: FieldRef<"Upload", 'String'>
    readonly fileSize: FieldRef<"Upload", 'BigInt'>
    readonly mimeType: FieldRef<"Upload", 'String'>
    readonly chunkSize: FieldRef<"Upload", 'Int'>
    readonly totalChunks: FieldRef<"Upload", 'Int'>
    readonly uploadedChunks: FieldRef<"Upload", 'Int'>
    readonly ipHash: FieldRef<"Upload", 'String'>
    readonly service: FieldRef<"Upload", 'StorageService'>
    readonly cloudinaryUploadId: FieldRef<"Upload", 'String'>
    readonly cloudinaryPublicId: FieldRef<"Upload", 'String'>
    readonly cloudinarySecureUrl: FieldRef<"Upload", 'String'>
    readonly awsUploadId: FieldRef<"Upload", 'String'>
    readonly awsKey: FieldRef<"Upload", 'String'>
    readonly awsUrl: FieldRef<"Upload", 'String'>
    readonly status: FieldRef<"Upload", 'UploadStatus'>
    readonly createdAt: FieldRef<"Upload", 'DateTime'>
    readonly updatedAt: FieldRef<"Upload", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Upload findUnique
   */
  export type UploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where: UploadWhereUniqueInput
  }

  /**
   * Upload findUniqueOrThrow
   */
  export type UploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where: UploadWhereUniqueInput
  }

  /**
   * Upload findFirst
   */
  export type UploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Uploads.
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uploads.
     */
    distinct?: UploadScalarFieldEnum | UploadScalarFieldEnum[]
  }

  /**
   * Upload findFirstOrThrow
   */
  export type UploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Uploads.
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uploads.
     */
    distinct?: UploadScalarFieldEnum | UploadScalarFieldEnum[]
  }

  /**
   * Upload findMany
   */
  export type UploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
    /**
     * Filter, which Uploads to fetch.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Uploads.
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uploads.
     */
    distinct?: UploadScalarFieldEnum | UploadScalarFieldEnum[]
  }

  /**
   * Upload create
   */
  export type UploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
    /**
     * The data needed to create a Upload.
     */
    data: XOR<UploadCreateInput, UploadUncheckedCreateInput>
  }

  /**
   * Upload createMany
   */
  export type UploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Uploads.
     */
    data: UploadCreateManyInput | UploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Upload createManyAndReturn
   */
  export type UploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * The data used to create many Uploads.
     */
    data: UploadCreateManyInput | UploadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Upload update
   */
  export type UploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
    /**
     * The data needed to update a Upload.
     */
    data: XOR<UploadUpdateInput, UploadUncheckedUpdateInput>
    /**
     * Choose, which Upload to update.
     */
    where: UploadWhereUniqueInput
  }

  /**
   * Upload updateMany
   */
  export type UploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Uploads.
     */
    data: XOR<UploadUpdateManyMutationInput, UploadUncheckedUpdateManyInput>
    /**
     * Filter which Uploads to update
     */
    where?: UploadWhereInput
    /**
     * Limit how many Uploads to update.
     */
    limit?: number
  }

  /**
   * Upload updateManyAndReturn
   */
  export type UploadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * The data used to update Uploads.
     */
    data: XOR<UploadUpdateManyMutationInput, UploadUncheckedUpdateManyInput>
    /**
     * Filter which Uploads to update
     */
    where?: UploadWhereInput
    /**
     * Limit how many Uploads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Upload upsert
   */
  export type UploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
    /**
     * The filter to search for the Upload to update in case it exists.
     */
    where: UploadWhereUniqueInput
    /**
     * In case the Upload found by the `where` argument doesn't exist, create a new Upload with this data.
     */
    create: XOR<UploadCreateInput, UploadUncheckedCreateInput>
    /**
     * In case the Upload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadUpdateInput, UploadUncheckedUpdateInput>
  }

  /**
   * Upload delete
   */
  export type UploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
    /**
     * Filter which Upload to delete.
     */
    where: UploadWhereUniqueInput
  }

  /**
   * Upload deleteMany
   */
  export type UploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Uploads to delete
     */
    where?: UploadWhereInput
    /**
     * Limit how many Uploads to delete.
     */
    limit?: number
  }

  /**
   * Upload.chunks
   */
  export type Upload$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
    where?: UploadChunkWhereInput
    orderBy?: UploadChunkOrderByWithRelationInput | UploadChunkOrderByWithRelationInput[]
    cursor?: UploadChunkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadChunkScalarFieldEnum | UploadChunkScalarFieldEnum[]
  }

  /**
   * Upload without action
   */
  export type UploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadInclude<ExtArgs> | null
  }


  /**
   * Model UploadChunk
   */

  export type AggregateUploadChunk = {
    _count: UploadChunkCountAggregateOutputType | null
    _avg: UploadChunkAvgAggregateOutputType | null
    _sum: UploadChunkSumAggregateOutputType | null
    _min: UploadChunkMinAggregateOutputType | null
    _max: UploadChunkMaxAggregateOutputType | null
  }

  export type UploadChunkAvgAggregateOutputType = {
    id: number | null
    uploadId: number | null
    chunkIndex: number | null
    byteStart: number | null
    byteEnd: number | null
  }

  export type UploadChunkSumAggregateOutputType = {
    id: bigint | null
    uploadId: bigint | null
    chunkIndex: number | null
    byteStart: bigint | null
    byteEnd: bigint | null
  }

  export type UploadChunkMinAggregateOutputType = {
    id: bigint | null
    uploadId: bigint | null
    chunkIndex: number | null
    byteStart: bigint | null
    byteEnd: bigint | null
    status: $Enums.ChunkStatus | null
    uploadedAt: Date | null
  }

  export type UploadChunkMaxAggregateOutputType = {
    id: bigint | null
    uploadId: bigint | null
    chunkIndex: number | null
    byteStart: bigint | null
    byteEnd: bigint | null
    status: $Enums.ChunkStatus | null
    uploadedAt: Date | null
  }

  export type UploadChunkCountAggregateOutputType = {
    id: number
    uploadId: number
    chunkIndex: number
    byteStart: number
    byteEnd: number
    status: number
    uploadedAt: number
    _all: number
  }


  export type UploadChunkAvgAggregateInputType = {
    id?: true
    uploadId?: true
    chunkIndex?: true
    byteStart?: true
    byteEnd?: true
  }

  export type UploadChunkSumAggregateInputType = {
    id?: true
    uploadId?: true
    chunkIndex?: true
    byteStart?: true
    byteEnd?: true
  }

  export type UploadChunkMinAggregateInputType = {
    id?: true
    uploadId?: true
    chunkIndex?: true
    byteStart?: true
    byteEnd?: true
    status?: true
    uploadedAt?: true
  }

  export type UploadChunkMaxAggregateInputType = {
    id?: true
    uploadId?: true
    chunkIndex?: true
    byteStart?: true
    byteEnd?: true
    status?: true
    uploadedAt?: true
  }

  export type UploadChunkCountAggregateInputType = {
    id?: true
    uploadId?: true
    chunkIndex?: true
    byteStart?: true
    byteEnd?: true
    status?: true
    uploadedAt?: true
    _all?: true
  }

  export type UploadChunkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadChunk to aggregate.
     */
    where?: UploadChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadChunks to fetch.
     */
    orderBy?: UploadChunkOrderByWithRelationInput | UploadChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadChunks
    **/
    _count?: true | UploadChunkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadChunkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadChunkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadChunkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadChunkMaxAggregateInputType
  }

  export type GetUploadChunkAggregateType<T extends UploadChunkAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadChunk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadChunk[P]>
      : GetScalarType<T[P], AggregateUploadChunk[P]>
  }




  export type UploadChunkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadChunkWhereInput
    orderBy?: UploadChunkOrderByWithAggregationInput | UploadChunkOrderByWithAggregationInput[]
    by: UploadChunkScalarFieldEnum[] | UploadChunkScalarFieldEnum
    having?: UploadChunkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadChunkCountAggregateInputType | true
    _avg?: UploadChunkAvgAggregateInputType
    _sum?: UploadChunkSumAggregateInputType
    _min?: UploadChunkMinAggregateInputType
    _max?: UploadChunkMaxAggregateInputType
  }

  export type UploadChunkGroupByOutputType = {
    id: bigint
    uploadId: bigint
    chunkIndex: number
    byteStart: bigint
    byteEnd: bigint
    status: $Enums.ChunkStatus
    uploadedAt: Date | null
    _count: UploadChunkCountAggregateOutputType | null
    _avg: UploadChunkAvgAggregateOutputType | null
    _sum: UploadChunkSumAggregateOutputType | null
    _min: UploadChunkMinAggregateOutputType | null
    _max: UploadChunkMaxAggregateOutputType | null
  }

  type GetUploadChunkGroupByPayload<T extends UploadChunkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadChunkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadChunkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadChunkGroupByOutputType[P]>
            : GetScalarType<T[P], UploadChunkGroupByOutputType[P]>
        }
      >
    >


  export type UploadChunkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uploadId?: boolean
    chunkIndex?: boolean
    byteStart?: boolean
    byteEnd?: boolean
    status?: boolean
    uploadedAt?: boolean
    upload?: boolean | UploadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadChunk"]>

  export type UploadChunkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uploadId?: boolean
    chunkIndex?: boolean
    byteStart?: boolean
    byteEnd?: boolean
    status?: boolean
    uploadedAt?: boolean
    upload?: boolean | UploadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadChunk"]>

  export type UploadChunkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uploadId?: boolean
    chunkIndex?: boolean
    byteStart?: boolean
    byteEnd?: boolean
    status?: boolean
    uploadedAt?: boolean
    upload?: boolean | UploadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadChunk"]>

  export type UploadChunkSelectScalar = {
    id?: boolean
    uploadId?: boolean
    chunkIndex?: boolean
    byteStart?: boolean
    byteEnd?: boolean
    status?: boolean
    uploadedAt?: boolean
  }

  export type UploadChunkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uploadId" | "chunkIndex" | "byteStart" | "byteEnd" | "status" | "uploadedAt", ExtArgs["result"]["uploadChunk"]>
  export type UploadChunkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upload?: boolean | UploadDefaultArgs<ExtArgs>
  }
  export type UploadChunkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upload?: boolean | UploadDefaultArgs<ExtArgs>
  }
  export type UploadChunkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upload?: boolean | UploadDefaultArgs<ExtArgs>
  }

  export type $UploadChunkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadChunk"
    objects: {
      upload: Prisma.$UploadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uploadId: bigint
      chunkIndex: number
      byteStart: bigint
      byteEnd: bigint
      status: $Enums.ChunkStatus
      uploadedAt: Date | null
    }, ExtArgs["result"]["uploadChunk"]>
    composites: {}
  }

  type UploadChunkGetPayload<S extends boolean | null | undefined | UploadChunkDefaultArgs> = $Result.GetResult<Prisma.$UploadChunkPayload, S>

  type UploadChunkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadChunkCountAggregateInputType | true
    }

  export interface UploadChunkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadChunk'], meta: { name: 'UploadChunk' } }
    /**
     * Find zero or one UploadChunk that matches the filter.
     * @param {UploadChunkFindUniqueArgs} args - Arguments to find a UploadChunk
     * @example
     * // Get one UploadChunk
     * const uploadChunk = await prisma.uploadChunk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadChunkFindUniqueArgs>(args: SelectSubset<T, UploadChunkFindUniqueArgs<ExtArgs>>): Prisma__UploadChunkClient<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadChunk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadChunkFindUniqueOrThrowArgs} args - Arguments to find a UploadChunk
     * @example
     * // Get one UploadChunk
     * const uploadChunk = await prisma.uploadChunk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadChunkFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadChunkClient<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadChunk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadChunkFindFirstArgs} args - Arguments to find a UploadChunk
     * @example
     * // Get one UploadChunk
     * const uploadChunk = await prisma.uploadChunk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadChunkFindFirstArgs>(args?: SelectSubset<T, UploadChunkFindFirstArgs<ExtArgs>>): Prisma__UploadChunkClient<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadChunk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadChunkFindFirstOrThrowArgs} args - Arguments to find a UploadChunk
     * @example
     * // Get one UploadChunk
     * const uploadChunk = await prisma.uploadChunk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadChunkFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadChunkClient<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadChunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadChunkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadChunks
     * const uploadChunks = await prisma.uploadChunk.findMany()
     * 
     * // Get first 10 UploadChunks
     * const uploadChunks = await prisma.uploadChunk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadChunkWithIdOnly = await prisma.uploadChunk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadChunkFindManyArgs>(args?: SelectSubset<T, UploadChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadChunk.
     * @param {UploadChunkCreateArgs} args - Arguments to create a UploadChunk.
     * @example
     * // Create one UploadChunk
     * const UploadChunk = await prisma.uploadChunk.create({
     *   data: {
     *     // ... data to create a UploadChunk
     *   }
     * })
     * 
     */
    create<T extends UploadChunkCreateArgs>(args: SelectSubset<T, UploadChunkCreateArgs<ExtArgs>>): Prisma__UploadChunkClient<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadChunks.
     * @param {UploadChunkCreateManyArgs} args - Arguments to create many UploadChunks.
     * @example
     * // Create many UploadChunks
     * const uploadChunk = await prisma.uploadChunk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadChunkCreateManyArgs>(args?: SelectSubset<T, UploadChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadChunks and returns the data saved in the database.
     * @param {UploadChunkCreateManyAndReturnArgs} args - Arguments to create many UploadChunks.
     * @example
     * // Create many UploadChunks
     * const uploadChunk = await prisma.uploadChunk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadChunks and only return the `id`
     * const uploadChunkWithIdOnly = await prisma.uploadChunk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadChunkCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadChunk.
     * @param {UploadChunkDeleteArgs} args - Arguments to delete one UploadChunk.
     * @example
     * // Delete one UploadChunk
     * const UploadChunk = await prisma.uploadChunk.delete({
     *   where: {
     *     // ... filter to delete one UploadChunk
     *   }
     * })
     * 
     */
    delete<T extends UploadChunkDeleteArgs>(args: SelectSubset<T, UploadChunkDeleteArgs<ExtArgs>>): Prisma__UploadChunkClient<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadChunk.
     * @param {UploadChunkUpdateArgs} args - Arguments to update one UploadChunk.
     * @example
     * // Update one UploadChunk
     * const uploadChunk = await prisma.uploadChunk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadChunkUpdateArgs>(args: SelectSubset<T, UploadChunkUpdateArgs<ExtArgs>>): Prisma__UploadChunkClient<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadChunks.
     * @param {UploadChunkDeleteManyArgs} args - Arguments to filter UploadChunks to delete.
     * @example
     * // Delete a few UploadChunks
     * const { count } = await prisma.uploadChunk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadChunkDeleteManyArgs>(args?: SelectSubset<T, UploadChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadChunkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadChunks
     * const uploadChunk = await prisma.uploadChunk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadChunkUpdateManyArgs>(args: SelectSubset<T, UploadChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadChunks and returns the data updated in the database.
     * @param {UploadChunkUpdateManyAndReturnArgs} args - Arguments to update many UploadChunks.
     * @example
     * // Update many UploadChunks
     * const uploadChunk = await prisma.uploadChunk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadChunks and only return the `id`
     * const uploadChunkWithIdOnly = await prisma.uploadChunk.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadChunkUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadChunk.
     * @param {UploadChunkUpsertArgs} args - Arguments to update or create a UploadChunk.
     * @example
     * // Update or create a UploadChunk
     * const uploadChunk = await prisma.uploadChunk.upsert({
     *   create: {
     *     // ... data to create a UploadChunk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadChunk we want to update
     *   }
     * })
     */
    upsert<T extends UploadChunkUpsertArgs>(args: SelectSubset<T, UploadChunkUpsertArgs<ExtArgs>>): Prisma__UploadChunkClient<$Result.GetResult<Prisma.$UploadChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadChunkCountArgs} args - Arguments to filter UploadChunks to count.
     * @example
     * // Count the number of UploadChunks
     * const count = await prisma.uploadChunk.count({
     *   where: {
     *     // ... the filter for the UploadChunks we want to count
     *   }
     * })
    **/
    count<T extends UploadChunkCountArgs>(
      args?: Subset<T, UploadChunkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadChunkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadChunkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UploadChunkAggregateArgs>(args: Subset<T, UploadChunkAggregateArgs>): Prisma.PrismaPromise<GetUploadChunkAggregateType<T>>

    /**
     * Group by UploadChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadChunkGroupByArgs} args - Group by arguments.
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
      T extends UploadChunkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadChunkGroupByArgs['orderBy'] }
        : { orderBy?: UploadChunkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UploadChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadChunk model
   */
  readonly fields: UploadChunkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadChunk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadChunkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    upload<T extends UploadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UploadDefaultArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UploadChunk model
   */
  interface UploadChunkFieldRefs {
    readonly id: FieldRef<"UploadChunk", 'BigInt'>
    readonly uploadId: FieldRef<"UploadChunk", 'BigInt'>
    readonly chunkIndex: FieldRef<"UploadChunk", 'Int'>
    readonly byteStart: FieldRef<"UploadChunk", 'BigInt'>
    readonly byteEnd: FieldRef<"UploadChunk", 'BigInt'>
    readonly status: FieldRef<"UploadChunk", 'ChunkStatus'>
    readonly uploadedAt: FieldRef<"UploadChunk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UploadChunk findUnique
   */
  export type UploadChunkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
    /**
     * Filter, which UploadChunk to fetch.
     */
    where: UploadChunkWhereUniqueInput
  }

  /**
   * UploadChunk findUniqueOrThrow
   */
  export type UploadChunkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
    /**
     * Filter, which UploadChunk to fetch.
     */
    where: UploadChunkWhereUniqueInput
  }

  /**
   * UploadChunk findFirst
   */
  export type UploadChunkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
    /**
     * Filter, which UploadChunk to fetch.
     */
    where?: UploadChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadChunks to fetch.
     */
    orderBy?: UploadChunkOrderByWithRelationInput | UploadChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadChunks.
     */
    cursor?: UploadChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadChunks.
     */
    distinct?: UploadChunkScalarFieldEnum | UploadChunkScalarFieldEnum[]
  }

  /**
   * UploadChunk findFirstOrThrow
   */
  export type UploadChunkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
    /**
     * Filter, which UploadChunk to fetch.
     */
    where?: UploadChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadChunks to fetch.
     */
    orderBy?: UploadChunkOrderByWithRelationInput | UploadChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadChunks.
     */
    cursor?: UploadChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadChunks.
     */
    distinct?: UploadChunkScalarFieldEnum | UploadChunkScalarFieldEnum[]
  }

  /**
   * UploadChunk findMany
   */
  export type UploadChunkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
    /**
     * Filter, which UploadChunks to fetch.
     */
    where?: UploadChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadChunks to fetch.
     */
    orderBy?: UploadChunkOrderByWithRelationInput | UploadChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadChunks.
     */
    cursor?: UploadChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadChunks.
     */
    distinct?: UploadChunkScalarFieldEnum | UploadChunkScalarFieldEnum[]
  }

  /**
   * UploadChunk create
   */
  export type UploadChunkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
    /**
     * The data needed to create a UploadChunk.
     */
    data: XOR<UploadChunkCreateInput, UploadChunkUncheckedCreateInput>
  }

  /**
   * UploadChunk createMany
   */
  export type UploadChunkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadChunks.
     */
    data: UploadChunkCreateManyInput | UploadChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadChunk createManyAndReturn
   */
  export type UploadChunkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * The data used to create many UploadChunks.
     */
    data: UploadChunkCreateManyInput | UploadChunkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UploadChunk update
   */
  export type UploadChunkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
    /**
     * The data needed to update a UploadChunk.
     */
    data: XOR<UploadChunkUpdateInput, UploadChunkUncheckedUpdateInput>
    /**
     * Choose, which UploadChunk to update.
     */
    where: UploadChunkWhereUniqueInput
  }

  /**
   * UploadChunk updateMany
   */
  export type UploadChunkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadChunks.
     */
    data: XOR<UploadChunkUpdateManyMutationInput, UploadChunkUncheckedUpdateManyInput>
    /**
     * Filter which UploadChunks to update
     */
    where?: UploadChunkWhereInput
    /**
     * Limit how many UploadChunks to update.
     */
    limit?: number
  }

  /**
   * UploadChunk updateManyAndReturn
   */
  export type UploadChunkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * The data used to update UploadChunks.
     */
    data: XOR<UploadChunkUpdateManyMutationInput, UploadChunkUncheckedUpdateManyInput>
    /**
     * Filter which UploadChunks to update
     */
    where?: UploadChunkWhereInput
    /**
     * Limit how many UploadChunks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UploadChunk upsert
   */
  export type UploadChunkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
    /**
     * The filter to search for the UploadChunk to update in case it exists.
     */
    where: UploadChunkWhereUniqueInput
    /**
     * In case the UploadChunk found by the `where` argument doesn't exist, create a new UploadChunk with this data.
     */
    create: XOR<UploadChunkCreateInput, UploadChunkUncheckedCreateInput>
    /**
     * In case the UploadChunk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadChunkUpdateInput, UploadChunkUncheckedUpdateInput>
  }

  /**
   * UploadChunk delete
   */
  export type UploadChunkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
    /**
     * Filter which UploadChunk to delete.
     */
    where: UploadChunkWhereUniqueInput
  }

  /**
   * UploadChunk deleteMany
   */
  export type UploadChunkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadChunks to delete
     */
    where?: UploadChunkWhereInput
    /**
     * Limit how many UploadChunks to delete.
     */
    limit?: number
  }

  /**
   * UploadChunk without action
   */
  export type UploadChunkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadChunk
     */
    select?: UploadChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadChunk
     */
    omit?: UploadChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadChunkInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    storageService: 'storageService',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UploadScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fileName: 'fileName',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    chunkSize: 'chunkSize',
    totalChunks: 'totalChunks',
    uploadedChunks: 'uploadedChunks',
    ipHash: 'ipHash',
    service: 'service',
    cloudinaryUploadId: 'cloudinaryUploadId',
    cloudinaryPublicId: 'cloudinaryPublicId',
    cloudinarySecureUrl: 'cloudinarySecureUrl',
    awsUploadId: 'awsUploadId',
    awsKey: 'awsKey',
    awsUrl: 'awsUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UploadScalarFieldEnum = (typeof UploadScalarFieldEnum)[keyof typeof UploadScalarFieldEnum]


  export const UploadChunkScalarFieldEnum: {
    id: 'id',
    uploadId: 'uploadId',
    chunkIndex: 'chunkIndex',
    byteStart: 'byteStart',
    byteEnd: 'byteEnd',
    status: 'status',
    uploadedAt: 'uploadedAt'
  };

  export type UploadChunkScalarFieldEnum = (typeof UploadChunkScalarFieldEnum)[keyof typeof UploadChunkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StorageService'
   */
  export type EnumStorageServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageService'>
    


  /**
   * Reference to a field of type 'StorageService[]'
   */
  export type ListEnumStorageServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageService[]'>
    


  /**
   * Reference to a field of type 'UploadStatus'
   */
  export type EnumUploadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UploadStatus'>
    


  /**
   * Reference to a field of type 'UploadStatus[]'
   */
  export type ListEnumUploadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UploadStatus[]'>
    


  /**
   * Reference to a field of type 'ChunkStatus'
   */
  export type EnumChunkStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChunkStatus'>
    


  /**
   * Reference to a field of type 'ChunkStatus[]'
   */
  export type ListEnumChunkStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChunkStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    storageService?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    uploads?: UploadListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    storageService?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    uploads?: UploadOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    storageService?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    uploads?: UploadListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    storageService?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    storageService?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UploadWhereInput = {
    AND?: UploadWhereInput | UploadWhereInput[]
    OR?: UploadWhereInput[]
    NOT?: UploadWhereInput | UploadWhereInput[]
    id?: BigIntFilter<"Upload"> | bigint | number
    userId?: BigIntFilter<"Upload"> | bigint | number
    fileName?: StringFilter<"Upload"> | string
    fileSize?: BigIntFilter<"Upload"> | bigint | number
    mimeType?: StringFilter<"Upload"> | string
    chunkSize?: IntFilter<"Upload"> | number
    totalChunks?: IntFilter<"Upload"> | number
    uploadedChunks?: IntFilter<"Upload"> | number
    ipHash?: StringNullableFilter<"Upload"> | string | null
    service?: EnumStorageServiceFilter<"Upload"> | $Enums.StorageService
    cloudinaryUploadId?: StringNullableFilter<"Upload"> | string | null
    cloudinaryPublicId?: StringNullableFilter<"Upload"> | string | null
    cloudinarySecureUrl?: StringNullableFilter<"Upload"> | string | null
    awsUploadId?: StringNullableFilter<"Upload"> | string | null
    awsKey?: StringNullableFilter<"Upload"> | string | null
    awsUrl?: StringNullableFilter<"Upload"> | string | null
    status?: EnumUploadStatusFilter<"Upload"> | $Enums.UploadStatus
    createdAt?: DateTimeFilter<"Upload"> | Date | string
    updatedAt?: DateTimeFilter<"Upload"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chunks?: UploadChunkListRelationFilter
  }

  export type UploadOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    chunkSize?: SortOrder
    totalChunks?: SortOrder
    uploadedChunks?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    service?: SortOrder
    cloudinaryUploadId?: SortOrderInput | SortOrder
    cloudinaryPublicId?: SortOrderInput | SortOrder
    cloudinarySecureUrl?: SortOrderInput | SortOrder
    awsUploadId?: SortOrderInput | SortOrder
    awsKey?: SortOrderInput | SortOrder
    awsUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chunks?: UploadChunkOrderByRelationAggregateInput
  }

  export type UploadWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UploadWhereInput | UploadWhereInput[]
    OR?: UploadWhereInput[]
    NOT?: UploadWhereInput | UploadWhereInput[]
    userId?: BigIntFilter<"Upload"> | bigint | number
    fileName?: StringFilter<"Upload"> | string
    fileSize?: BigIntFilter<"Upload"> | bigint | number
    mimeType?: StringFilter<"Upload"> | string
    chunkSize?: IntFilter<"Upload"> | number
    totalChunks?: IntFilter<"Upload"> | number
    uploadedChunks?: IntFilter<"Upload"> | number
    ipHash?: StringNullableFilter<"Upload"> | string | null
    service?: EnumStorageServiceFilter<"Upload"> | $Enums.StorageService
    cloudinaryUploadId?: StringNullableFilter<"Upload"> | string | null
    cloudinaryPublicId?: StringNullableFilter<"Upload"> | string | null
    cloudinarySecureUrl?: StringNullableFilter<"Upload"> | string | null
    awsUploadId?: StringNullableFilter<"Upload"> | string | null
    awsKey?: StringNullableFilter<"Upload"> | string | null
    awsUrl?: StringNullableFilter<"Upload"> | string | null
    status?: EnumUploadStatusFilter<"Upload"> | $Enums.UploadStatus
    createdAt?: DateTimeFilter<"Upload"> | Date | string
    updatedAt?: DateTimeFilter<"Upload"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chunks?: UploadChunkListRelationFilter
  }, "id">

  export type UploadOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    chunkSize?: SortOrder
    totalChunks?: SortOrder
    uploadedChunks?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    service?: SortOrder
    cloudinaryUploadId?: SortOrderInput | SortOrder
    cloudinaryPublicId?: SortOrderInput | SortOrder
    cloudinarySecureUrl?: SortOrderInput | SortOrder
    awsUploadId?: SortOrderInput | SortOrder
    awsKey?: SortOrderInput | SortOrder
    awsUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UploadCountOrderByAggregateInput
    _avg?: UploadAvgOrderByAggregateInput
    _max?: UploadMaxOrderByAggregateInput
    _min?: UploadMinOrderByAggregateInput
    _sum?: UploadSumOrderByAggregateInput
  }

  export type UploadScalarWhereWithAggregatesInput = {
    AND?: UploadScalarWhereWithAggregatesInput | UploadScalarWhereWithAggregatesInput[]
    OR?: UploadScalarWhereWithAggregatesInput[]
    NOT?: UploadScalarWhereWithAggregatesInput | UploadScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Upload"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"Upload"> | bigint | number
    fileName?: StringWithAggregatesFilter<"Upload"> | string
    fileSize?: BigIntWithAggregatesFilter<"Upload"> | bigint | number
    mimeType?: StringWithAggregatesFilter<"Upload"> | string
    chunkSize?: IntWithAggregatesFilter<"Upload"> | number
    totalChunks?: IntWithAggregatesFilter<"Upload"> | number
    uploadedChunks?: IntWithAggregatesFilter<"Upload"> | number
    ipHash?: StringNullableWithAggregatesFilter<"Upload"> | string | null
    service?: EnumStorageServiceWithAggregatesFilter<"Upload"> | $Enums.StorageService
    cloudinaryUploadId?: StringNullableWithAggregatesFilter<"Upload"> | string | null
    cloudinaryPublicId?: StringNullableWithAggregatesFilter<"Upload"> | string | null
    cloudinarySecureUrl?: StringNullableWithAggregatesFilter<"Upload"> | string | null
    awsUploadId?: StringNullableWithAggregatesFilter<"Upload"> | string | null
    awsKey?: StringNullableWithAggregatesFilter<"Upload"> | string | null
    awsUrl?: StringNullableWithAggregatesFilter<"Upload"> | string | null
    status?: EnumUploadStatusWithAggregatesFilter<"Upload"> | $Enums.UploadStatus
    createdAt?: DateTimeWithAggregatesFilter<"Upload"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Upload"> | Date | string
  }

  export type UploadChunkWhereInput = {
    AND?: UploadChunkWhereInput | UploadChunkWhereInput[]
    OR?: UploadChunkWhereInput[]
    NOT?: UploadChunkWhereInput | UploadChunkWhereInput[]
    id?: BigIntFilter<"UploadChunk"> | bigint | number
    uploadId?: BigIntFilter<"UploadChunk"> | bigint | number
    chunkIndex?: IntFilter<"UploadChunk"> | number
    byteStart?: BigIntFilter<"UploadChunk"> | bigint | number
    byteEnd?: BigIntFilter<"UploadChunk"> | bigint | number
    status?: EnumChunkStatusFilter<"UploadChunk"> | $Enums.ChunkStatus
    uploadedAt?: DateTimeNullableFilter<"UploadChunk"> | Date | string | null
    upload?: XOR<UploadScalarRelationFilter, UploadWhereInput>
  }

  export type UploadChunkOrderByWithRelationInput = {
    id?: SortOrder
    uploadId?: SortOrder
    chunkIndex?: SortOrder
    byteStart?: SortOrder
    byteEnd?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrderInput | SortOrder
    upload?: UploadOrderByWithRelationInput
  }

  export type UploadChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uploadId_chunkIndex?: UploadChunkUploadIdChunkIndexCompoundUniqueInput
    AND?: UploadChunkWhereInput | UploadChunkWhereInput[]
    OR?: UploadChunkWhereInput[]
    NOT?: UploadChunkWhereInput | UploadChunkWhereInput[]
    uploadId?: BigIntFilter<"UploadChunk"> | bigint | number
    chunkIndex?: IntFilter<"UploadChunk"> | number
    byteStart?: BigIntFilter<"UploadChunk"> | bigint | number
    byteEnd?: BigIntFilter<"UploadChunk"> | bigint | number
    status?: EnumChunkStatusFilter<"UploadChunk"> | $Enums.ChunkStatus
    uploadedAt?: DateTimeNullableFilter<"UploadChunk"> | Date | string | null
    upload?: XOR<UploadScalarRelationFilter, UploadWhereInput>
  }, "id" | "uploadId_chunkIndex">

  export type UploadChunkOrderByWithAggregationInput = {
    id?: SortOrder
    uploadId?: SortOrder
    chunkIndex?: SortOrder
    byteStart?: SortOrder
    byteEnd?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrderInput | SortOrder
    _count?: UploadChunkCountOrderByAggregateInput
    _avg?: UploadChunkAvgOrderByAggregateInput
    _max?: UploadChunkMaxOrderByAggregateInput
    _min?: UploadChunkMinOrderByAggregateInput
    _sum?: UploadChunkSumOrderByAggregateInput
  }

  export type UploadChunkScalarWhereWithAggregatesInput = {
    AND?: UploadChunkScalarWhereWithAggregatesInput | UploadChunkScalarWhereWithAggregatesInput[]
    OR?: UploadChunkScalarWhereWithAggregatesInput[]
    NOT?: UploadChunkScalarWhereWithAggregatesInput | UploadChunkScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UploadChunk"> | bigint | number
    uploadId?: BigIntWithAggregatesFilter<"UploadChunk"> | bigint | number
    chunkIndex?: IntWithAggregatesFilter<"UploadChunk"> | number
    byteStart?: BigIntWithAggregatesFilter<"UploadChunk"> | bigint | number
    byteEnd?: BigIntWithAggregatesFilter<"UploadChunk"> | bigint | number
    status?: EnumChunkStatusWithAggregatesFilter<"UploadChunk"> | $Enums.ChunkStatus
    uploadedAt?: DateTimeNullableWithAggregatesFilter<"UploadChunk"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    name?: string | null
    storageService?: string | null
    createdAt?: Date | string
    uploads?: UploadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    name?: string | null
    storageService?: string | null
    createdAt?: Date | string
    uploads?: UploadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    storageService?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploads?: UploadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    storageService?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploads?: UploadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    name?: string | null
    storageService?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    storageService?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    storageService?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadCreateInput = {
    id?: bigint | number
    fileName: string
    fileSize: bigint | number
    mimeType: string
    chunkSize: number
    totalChunks: number
    uploadedChunks?: number
    ipHash?: string | null
    service?: $Enums.StorageService
    cloudinaryUploadId?: string | null
    cloudinaryPublicId?: string | null
    cloudinarySecureUrl?: string | null
    awsUploadId?: string | null
    awsKey?: string | null
    awsUrl?: string | null
    status?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUploadsInput
    chunks?: UploadChunkCreateNestedManyWithoutUploadInput
  }

  export type UploadUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    fileName: string
    fileSize: bigint | number
    mimeType: string
    chunkSize: number
    totalChunks: number
    uploadedChunks?: number
    ipHash?: string | null
    service?: $Enums.StorageService
    cloudinaryUploadId?: string | null
    cloudinaryPublicId?: string | null
    cloudinarySecureUrl?: string | null
    awsUploadId?: string | null
    awsKey?: string | null
    awsUrl?: string | null
    status?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: UploadChunkUncheckedCreateNestedManyWithoutUploadInput
  }

  export type UploadUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    mimeType?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    totalChunks?: IntFieldUpdateOperationsInput | number
    uploadedChunks?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumStorageServiceFieldUpdateOperationsInput | $Enums.StorageService
    cloudinaryUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinarySecureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awsUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    awsKey?: NullableStringFieldUpdateOperationsInput | string | null
    awsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUploadsNestedInput
    chunks?: UploadChunkUpdateManyWithoutUploadNestedInput
  }

  export type UploadUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    mimeType?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    totalChunks?: IntFieldUpdateOperationsInput | number
    uploadedChunks?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumStorageServiceFieldUpdateOperationsInput | $Enums.StorageService
    cloudinaryUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinarySecureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awsUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    awsKey?: NullableStringFieldUpdateOperationsInput | string | null
    awsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: UploadChunkUncheckedUpdateManyWithoutUploadNestedInput
  }

  export type UploadCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    fileName: string
    fileSize: bigint | number
    mimeType: string
    chunkSize: number
    totalChunks: number
    uploadedChunks?: number
    ipHash?: string | null
    service?: $Enums.StorageService
    cloudinaryUploadId?: string | null
    cloudinaryPublicId?: string | null
    cloudinarySecureUrl?: string | null
    awsUploadId?: string | null
    awsKey?: string | null
    awsUrl?: string | null
    status?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    mimeType?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    totalChunks?: IntFieldUpdateOperationsInput | number
    uploadedChunks?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumStorageServiceFieldUpdateOperationsInput | $Enums.StorageService
    cloudinaryUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinarySecureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awsUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    awsKey?: NullableStringFieldUpdateOperationsInput | string | null
    awsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    mimeType?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    totalChunks?: IntFieldUpdateOperationsInput | number
    uploadedChunks?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumStorageServiceFieldUpdateOperationsInput | $Enums.StorageService
    cloudinaryUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinarySecureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awsUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    awsKey?: NullableStringFieldUpdateOperationsInput | string | null
    awsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadChunkCreateInput = {
    id?: bigint | number
    chunkIndex: number
    byteStart: bigint | number
    byteEnd: bigint | number
    status?: $Enums.ChunkStatus
    uploadedAt?: Date | string | null
    upload: UploadCreateNestedOneWithoutChunksInput
  }

  export type UploadChunkUncheckedCreateInput = {
    id?: bigint | number
    uploadId: bigint | number
    chunkIndex: number
    byteStart: bigint | number
    byteEnd: bigint | number
    status?: $Enums.ChunkStatus
    uploadedAt?: Date | string | null
  }

  export type UploadChunkUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    byteStart?: BigIntFieldUpdateOperationsInput | bigint | number
    byteEnd?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChunkStatusFieldUpdateOperationsInput | $Enums.ChunkStatus
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upload?: UploadUpdateOneRequiredWithoutChunksNestedInput
  }

  export type UploadChunkUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uploadId?: BigIntFieldUpdateOperationsInput | bigint | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    byteStart?: BigIntFieldUpdateOperationsInput | bigint | number
    byteEnd?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChunkStatusFieldUpdateOperationsInput | $Enums.ChunkStatus
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UploadChunkCreateManyInput = {
    id?: bigint | number
    uploadId: bigint | number
    chunkIndex: number
    byteStart: bigint | number
    byteEnd: bigint | number
    status?: $Enums.ChunkStatus
    uploadedAt?: Date | string | null
  }

  export type UploadChunkUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    byteStart?: BigIntFieldUpdateOperationsInput | bigint | number
    byteEnd?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChunkStatusFieldUpdateOperationsInput | $Enums.ChunkStatus
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UploadChunkUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uploadId?: BigIntFieldUpdateOperationsInput | bigint | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    byteStart?: BigIntFieldUpdateOperationsInput | bigint | number
    byteEnd?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChunkStatusFieldUpdateOperationsInput | $Enums.ChunkStatus
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UploadListRelationFilter = {
    every?: UploadWhereInput
    some?: UploadWhereInput
    none?: UploadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    storageService?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    storageService?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    storageService?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStorageServiceFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageService | EnumStorageServiceFieldRefInput<$PrismaModel>
    in?: $Enums.StorageService[] | ListEnumStorageServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageService[] | ListEnumStorageServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageServiceFilter<$PrismaModel> | $Enums.StorageService
  }

  export type EnumUploadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusFilter<$PrismaModel> | $Enums.UploadStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UploadChunkListRelationFilter = {
    every?: UploadChunkWhereInput
    some?: UploadChunkWhereInput
    none?: UploadChunkWhereInput
  }

  export type UploadChunkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UploadCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    chunkSize?: SortOrder
    totalChunks?: SortOrder
    uploadedChunks?: SortOrder
    ipHash?: SortOrder
    service?: SortOrder
    cloudinaryUploadId?: SortOrder
    cloudinaryPublicId?: SortOrder
    cloudinarySecureUrl?: SortOrder
    awsUploadId?: SortOrder
    awsKey?: SortOrder
    awsUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileSize?: SortOrder
    chunkSize?: SortOrder
    totalChunks?: SortOrder
    uploadedChunks?: SortOrder
  }

  export type UploadMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    chunkSize?: SortOrder
    totalChunks?: SortOrder
    uploadedChunks?: SortOrder
    ipHash?: SortOrder
    service?: SortOrder
    cloudinaryUploadId?: SortOrder
    cloudinaryPublicId?: SortOrder
    cloudinarySecureUrl?: SortOrder
    awsUploadId?: SortOrder
    awsKey?: SortOrder
    awsUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    chunkSize?: SortOrder
    totalChunks?: SortOrder
    uploadedChunks?: SortOrder
    ipHash?: SortOrder
    service?: SortOrder
    cloudinaryUploadId?: SortOrder
    cloudinaryPublicId?: SortOrder
    cloudinarySecureUrl?: SortOrder
    awsUploadId?: SortOrder
    awsKey?: SortOrder
    awsUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileSize?: SortOrder
    chunkSize?: SortOrder
    totalChunks?: SortOrder
    uploadedChunks?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumStorageServiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageService | EnumStorageServiceFieldRefInput<$PrismaModel>
    in?: $Enums.StorageService[] | ListEnumStorageServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageService[] | ListEnumStorageServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageServiceWithAggregatesFilter<$PrismaModel> | $Enums.StorageService
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageServiceFilter<$PrismaModel>
    _max?: NestedEnumStorageServiceFilter<$PrismaModel>
  }

  export type EnumUploadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusWithAggregatesFilter<$PrismaModel> | $Enums.UploadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUploadStatusFilter<$PrismaModel>
    _max?: NestedEnumUploadStatusFilter<$PrismaModel>
  }

  export type EnumChunkStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChunkStatus | EnumChunkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChunkStatus[] | ListEnumChunkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChunkStatus[] | ListEnumChunkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChunkStatusFilter<$PrismaModel> | $Enums.ChunkStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UploadScalarRelationFilter = {
    is?: UploadWhereInput
    isNot?: UploadWhereInput
  }

  export type UploadChunkUploadIdChunkIndexCompoundUniqueInput = {
    uploadId: bigint | number
    chunkIndex: number
  }

  export type UploadChunkCountOrderByAggregateInput = {
    id?: SortOrder
    uploadId?: SortOrder
    chunkIndex?: SortOrder
    byteStart?: SortOrder
    byteEnd?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UploadChunkAvgOrderByAggregateInput = {
    id?: SortOrder
    uploadId?: SortOrder
    chunkIndex?: SortOrder
    byteStart?: SortOrder
    byteEnd?: SortOrder
  }

  export type UploadChunkMaxOrderByAggregateInput = {
    id?: SortOrder
    uploadId?: SortOrder
    chunkIndex?: SortOrder
    byteStart?: SortOrder
    byteEnd?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UploadChunkMinOrderByAggregateInput = {
    id?: SortOrder
    uploadId?: SortOrder
    chunkIndex?: SortOrder
    byteStart?: SortOrder
    byteEnd?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UploadChunkSumOrderByAggregateInput = {
    id?: SortOrder
    uploadId?: SortOrder
    chunkIndex?: SortOrder
    byteStart?: SortOrder
    byteEnd?: SortOrder
  }

  export type EnumChunkStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChunkStatus | EnumChunkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChunkStatus[] | ListEnumChunkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChunkStatus[] | ListEnumChunkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChunkStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChunkStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChunkStatusFilter<$PrismaModel>
    _max?: NestedEnumChunkStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UploadCreateNestedManyWithoutUserInput = {
    create?: XOR<UploadCreateWithoutUserInput, UploadUncheckedCreateWithoutUserInput> | UploadCreateWithoutUserInput[] | UploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UploadCreateOrConnectWithoutUserInput | UploadCreateOrConnectWithoutUserInput[]
    createMany?: UploadCreateManyUserInputEnvelope
    connect?: UploadWhereUniqueInput | UploadWhereUniqueInput[]
  }

  export type UploadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UploadCreateWithoutUserInput, UploadUncheckedCreateWithoutUserInput> | UploadCreateWithoutUserInput[] | UploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UploadCreateOrConnectWithoutUserInput | UploadCreateOrConnectWithoutUserInput[]
    createMany?: UploadCreateManyUserInputEnvelope
    connect?: UploadWhereUniqueInput | UploadWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UploadUpdateManyWithoutUserNestedInput = {
    create?: XOR<UploadCreateWithoutUserInput, UploadUncheckedCreateWithoutUserInput> | UploadCreateWithoutUserInput[] | UploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UploadCreateOrConnectWithoutUserInput | UploadCreateOrConnectWithoutUserInput[]
    upsert?: UploadUpsertWithWhereUniqueWithoutUserInput | UploadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UploadCreateManyUserInputEnvelope
    set?: UploadWhereUniqueInput | UploadWhereUniqueInput[]
    disconnect?: UploadWhereUniqueInput | UploadWhereUniqueInput[]
    delete?: UploadWhereUniqueInput | UploadWhereUniqueInput[]
    connect?: UploadWhereUniqueInput | UploadWhereUniqueInput[]
    update?: UploadUpdateWithWhereUniqueWithoutUserInput | UploadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UploadUpdateManyWithWhereWithoutUserInput | UploadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UploadScalarWhereInput | UploadScalarWhereInput[]
  }

  export type UploadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UploadCreateWithoutUserInput, UploadUncheckedCreateWithoutUserInput> | UploadCreateWithoutUserInput[] | UploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UploadCreateOrConnectWithoutUserInput | UploadCreateOrConnectWithoutUserInput[]
    upsert?: UploadUpsertWithWhereUniqueWithoutUserInput | UploadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UploadCreateManyUserInputEnvelope
    set?: UploadWhereUniqueInput | UploadWhereUniqueInput[]
    disconnect?: UploadWhereUniqueInput | UploadWhereUniqueInput[]
    delete?: UploadWhereUniqueInput | UploadWhereUniqueInput[]
    connect?: UploadWhereUniqueInput | UploadWhereUniqueInput[]
    update?: UploadUpdateWithWhereUniqueWithoutUserInput | UploadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UploadUpdateManyWithWhereWithoutUserInput | UploadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UploadScalarWhereInput | UploadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUploadsInput = {
    create?: XOR<UserCreateWithoutUploadsInput, UserUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadsInput
    connect?: UserWhereUniqueInput
  }

  export type UploadChunkCreateNestedManyWithoutUploadInput = {
    create?: XOR<UploadChunkCreateWithoutUploadInput, UploadChunkUncheckedCreateWithoutUploadInput> | UploadChunkCreateWithoutUploadInput[] | UploadChunkUncheckedCreateWithoutUploadInput[]
    connectOrCreate?: UploadChunkCreateOrConnectWithoutUploadInput | UploadChunkCreateOrConnectWithoutUploadInput[]
    createMany?: UploadChunkCreateManyUploadInputEnvelope
    connect?: UploadChunkWhereUniqueInput | UploadChunkWhereUniqueInput[]
  }

  export type UploadChunkUncheckedCreateNestedManyWithoutUploadInput = {
    create?: XOR<UploadChunkCreateWithoutUploadInput, UploadChunkUncheckedCreateWithoutUploadInput> | UploadChunkCreateWithoutUploadInput[] | UploadChunkUncheckedCreateWithoutUploadInput[]
    connectOrCreate?: UploadChunkCreateOrConnectWithoutUploadInput | UploadChunkCreateOrConnectWithoutUploadInput[]
    createMany?: UploadChunkCreateManyUploadInputEnvelope
    connect?: UploadChunkWhereUniqueInput | UploadChunkWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStorageServiceFieldUpdateOperationsInput = {
    set?: $Enums.StorageService
  }

  export type EnumUploadStatusFieldUpdateOperationsInput = {
    set?: $Enums.UploadStatus
  }

  export type UserUpdateOneRequiredWithoutUploadsNestedInput = {
    create?: XOR<UserCreateWithoutUploadsInput, UserUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadsInput
    upsert?: UserUpsertWithoutUploadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadsInput, UserUpdateWithoutUploadsInput>, UserUncheckedUpdateWithoutUploadsInput>
  }

  export type UploadChunkUpdateManyWithoutUploadNestedInput = {
    create?: XOR<UploadChunkCreateWithoutUploadInput, UploadChunkUncheckedCreateWithoutUploadInput> | UploadChunkCreateWithoutUploadInput[] | UploadChunkUncheckedCreateWithoutUploadInput[]
    connectOrCreate?: UploadChunkCreateOrConnectWithoutUploadInput | UploadChunkCreateOrConnectWithoutUploadInput[]
    upsert?: UploadChunkUpsertWithWhereUniqueWithoutUploadInput | UploadChunkUpsertWithWhereUniqueWithoutUploadInput[]
    createMany?: UploadChunkCreateManyUploadInputEnvelope
    set?: UploadChunkWhereUniqueInput | UploadChunkWhereUniqueInput[]
    disconnect?: UploadChunkWhereUniqueInput | UploadChunkWhereUniqueInput[]
    delete?: UploadChunkWhereUniqueInput | UploadChunkWhereUniqueInput[]
    connect?: UploadChunkWhereUniqueInput | UploadChunkWhereUniqueInput[]
    update?: UploadChunkUpdateWithWhereUniqueWithoutUploadInput | UploadChunkUpdateWithWhereUniqueWithoutUploadInput[]
    updateMany?: UploadChunkUpdateManyWithWhereWithoutUploadInput | UploadChunkUpdateManyWithWhereWithoutUploadInput[]
    deleteMany?: UploadChunkScalarWhereInput | UploadChunkScalarWhereInput[]
  }

  export type UploadChunkUncheckedUpdateManyWithoutUploadNestedInput = {
    create?: XOR<UploadChunkCreateWithoutUploadInput, UploadChunkUncheckedCreateWithoutUploadInput> | UploadChunkCreateWithoutUploadInput[] | UploadChunkUncheckedCreateWithoutUploadInput[]
    connectOrCreate?: UploadChunkCreateOrConnectWithoutUploadInput | UploadChunkCreateOrConnectWithoutUploadInput[]
    upsert?: UploadChunkUpsertWithWhereUniqueWithoutUploadInput | UploadChunkUpsertWithWhereUniqueWithoutUploadInput[]
    createMany?: UploadChunkCreateManyUploadInputEnvelope
    set?: UploadChunkWhereUniqueInput | UploadChunkWhereUniqueInput[]
    disconnect?: UploadChunkWhereUniqueInput | UploadChunkWhereUniqueInput[]
    delete?: UploadChunkWhereUniqueInput | UploadChunkWhereUniqueInput[]
    connect?: UploadChunkWhereUniqueInput | UploadChunkWhereUniqueInput[]
    update?: UploadChunkUpdateWithWhereUniqueWithoutUploadInput | UploadChunkUpdateWithWhereUniqueWithoutUploadInput[]
    updateMany?: UploadChunkUpdateManyWithWhereWithoutUploadInput | UploadChunkUpdateManyWithWhereWithoutUploadInput[]
    deleteMany?: UploadChunkScalarWhereInput | UploadChunkScalarWhereInput[]
  }

  export type UploadCreateNestedOneWithoutChunksInput = {
    create?: XOR<UploadCreateWithoutChunksInput, UploadUncheckedCreateWithoutChunksInput>
    connectOrCreate?: UploadCreateOrConnectWithoutChunksInput
    connect?: UploadWhereUniqueInput
  }

  export type EnumChunkStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChunkStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UploadUpdateOneRequiredWithoutChunksNestedInput = {
    create?: XOR<UploadCreateWithoutChunksInput, UploadUncheckedCreateWithoutChunksInput>
    connectOrCreate?: UploadCreateOrConnectWithoutChunksInput
    upsert?: UploadUpsertWithoutChunksInput
    connect?: UploadWhereUniqueInput
    update?: XOR<XOR<UploadUpdateToOneWithWhereWithoutChunksInput, UploadUpdateWithoutChunksInput>, UploadUncheckedUpdateWithoutChunksInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStorageServiceFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageService | EnumStorageServiceFieldRefInput<$PrismaModel>
    in?: $Enums.StorageService[] | ListEnumStorageServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageService[] | ListEnumStorageServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageServiceFilter<$PrismaModel> | $Enums.StorageService
  }

  export type NestedEnumUploadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusFilter<$PrismaModel> | $Enums.UploadStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumStorageServiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageService | EnumStorageServiceFieldRefInput<$PrismaModel>
    in?: $Enums.StorageService[] | ListEnumStorageServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageService[] | ListEnumStorageServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageServiceWithAggregatesFilter<$PrismaModel> | $Enums.StorageService
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageServiceFilter<$PrismaModel>
    _max?: NestedEnumStorageServiceFilter<$PrismaModel>
  }

  export type NestedEnumUploadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UploadStatus | EnumUploadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UploadStatus[] | ListEnumUploadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUploadStatusWithAggregatesFilter<$PrismaModel> | $Enums.UploadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUploadStatusFilter<$PrismaModel>
    _max?: NestedEnumUploadStatusFilter<$PrismaModel>
  }

  export type NestedEnumChunkStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChunkStatus | EnumChunkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChunkStatus[] | ListEnumChunkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChunkStatus[] | ListEnumChunkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChunkStatusFilter<$PrismaModel> | $Enums.ChunkStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumChunkStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChunkStatus | EnumChunkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChunkStatus[] | ListEnumChunkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChunkStatus[] | ListEnumChunkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChunkStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChunkStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChunkStatusFilter<$PrismaModel>
    _max?: NestedEnumChunkStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UploadCreateWithoutUserInput = {
    id?: bigint | number
    fileName: string
    fileSize: bigint | number
    mimeType: string
    chunkSize: number
    totalChunks: number
    uploadedChunks?: number
    ipHash?: string | null
    service?: $Enums.StorageService
    cloudinaryUploadId?: string | null
    cloudinaryPublicId?: string | null
    cloudinarySecureUrl?: string | null
    awsUploadId?: string | null
    awsKey?: string | null
    awsUrl?: string | null
    status?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: UploadChunkCreateNestedManyWithoutUploadInput
  }

  export type UploadUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    fileName: string
    fileSize: bigint | number
    mimeType: string
    chunkSize: number
    totalChunks: number
    uploadedChunks?: number
    ipHash?: string | null
    service?: $Enums.StorageService
    cloudinaryUploadId?: string | null
    cloudinaryPublicId?: string | null
    cloudinarySecureUrl?: string | null
    awsUploadId?: string | null
    awsKey?: string | null
    awsUrl?: string | null
    status?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: UploadChunkUncheckedCreateNestedManyWithoutUploadInput
  }

  export type UploadCreateOrConnectWithoutUserInput = {
    where: UploadWhereUniqueInput
    create: XOR<UploadCreateWithoutUserInput, UploadUncheckedCreateWithoutUserInput>
  }

  export type UploadCreateManyUserInputEnvelope = {
    data: UploadCreateManyUserInput | UploadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UploadUpsertWithWhereUniqueWithoutUserInput = {
    where: UploadWhereUniqueInput
    update: XOR<UploadUpdateWithoutUserInput, UploadUncheckedUpdateWithoutUserInput>
    create: XOR<UploadCreateWithoutUserInput, UploadUncheckedCreateWithoutUserInput>
  }

  export type UploadUpdateWithWhereUniqueWithoutUserInput = {
    where: UploadWhereUniqueInput
    data: XOR<UploadUpdateWithoutUserInput, UploadUncheckedUpdateWithoutUserInput>
  }

  export type UploadUpdateManyWithWhereWithoutUserInput = {
    where: UploadScalarWhereInput
    data: XOR<UploadUpdateManyMutationInput, UploadUncheckedUpdateManyWithoutUserInput>
  }

  export type UploadScalarWhereInput = {
    AND?: UploadScalarWhereInput | UploadScalarWhereInput[]
    OR?: UploadScalarWhereInput[]
    NOT?: UploadScalarWhereInput | UploadScalarWhereInput[]
    id?: BigIntFilter<"Upload"> | bigint | number
    userId?: BigIntFilter<"Upload"> | bigint | number
    fileName?: StringFilter<"Upload"> | string
    fileSize?: BigIntFilter<"Upload"> | bigint | number
    mimeType?: StringFilter<"Upload"> | string
    chunkSize?: IntFilter<"Upload"> | number
    totalChunks?: IntFilter<"Upload"> | number
    uploadedChunks?: IntFilter<"Upload"> | number
    ipHash?: StringNullableFilter<"Upload"> | string | null
    service?: EnumStorageServiceFilter<"Upload"> | $Enums.StorageService
    cloudinaryUploadId?: StringNullableFilter<"Upload"> | string | null
    cloudinaryPublicId?: StringNullableFilter<"Upload"> | string | null
    cloudinarySecureUrl?: StringNullableFilter<"Upload"> | string | null
    awsUploadId?: StringNullableFilter<"Upload"> | string | null
    awsKey?: StringNullableFilter<"Upload"> | string | null
    awsUrl?: StringNullableFilter<"Upload"> | string | null
    status?: EnumUploadStatusFilter<"Upload"> | $Enums.UploadStatus
    createdAt?: DateTimeFilter<"Upload"> | Date | string
    updatedAt?: DateTimeFilter<"Upload"> | Date | string
  }

  export type UserCreateWithoutUploadsInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    name?: string | null
    storageService?: string | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUploadsInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    name?: string | null
    storageService?: string | null
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUploadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadsInput, UserUncheckedCreateWithoutUploadsInput>
  }

  export type UploadChunkCreateWithoutUploadInput = {
    id?: bigint | number
    chunkIndex: number
    byteStart: bigint | number
    byteEnd: bigint | number
    status?: $Enums.ChunkStatus
    uploadedAt?: Date | string | null
  }

  export type UploadChunkUncheckedCreateWithoutUploadInput = {
    id?: bigint | number
    chunkIndex: number
    byteStart: bigint | number
    byteEnd: bigint | number
    status?: $Enums.ChunkStatus
    uploadedAt?: Date | string | null
  }

  export type UploadChunkCreateOrConnectWithoutUploadInput = {
    where: UploadChunkWhereUniqueInput
    create: XOR<UploadChunkCreateWithoutUploadInput, UploadChunkUncheckedCreateWithoutUploadInput>
  }

  export type UploadChunkCreateManyUploadInputEnvelope = {
    data: UploadChunkCreateManyUploadInput | UploadChunkCreateManyUploadInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUploadsInput = {
    update: XOR<UserUpdateWithoutUploadsInput, UserUncheckedUpdateWithoutUploadsInput>
    create: XOR<UserCreateWithoutUploadsInput, UserUncheckedCreateWithoutUploadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadsInput, UserUncheckedUpdateWithoutUploadsInput>
  }

  export type UserUpdateWithoutUploadsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    storageService?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUploadsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    storageService?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadChunkUpsertWithWhereUniqueWithoutUploadInput = {
    where: UploadChunkWhereUniqueInput
    update: XOR<UploadChunkUpdateWithoutUploadInput, UploadChunkUncheckedUpdateWithoutUploadInput>
    create: XOR<UploadChunkCreateWithoutUploadInput, UploadChunkUncheckedCreateWithoutUploadInput>
  }

  export type UploadChunkUpdateWithWhereUniqueWithoutUploadInput = {
    where: UploadChunkWhereUniqueInput
    data: XOR<UploadChunkUpdateWithoutUploadInput, UploadChunkUncheckedUpdateWithoutUploadInput>
  }

  export type UploadChunkUpdateManyWithWhereWithoutUploadInput = {
    where: UploadChunkScalarWhereInput
    data: XOR<UploadChunkUpdateManyMutationInput, UploadChunkUncheckedUpdateManyWithoutUploadInput>
  }

  export type UploadChunkScalarWhereInput = {
    AND?: UploadChunkScalarWhereInput | UploadChunkScalarWhereInput[]
    OR?: UploadChunkScalarWhereInput[]
    NOT?: UploadChunkScalarWhereInput | UploadChunkScalarWhereInput[]
    id?: BigIntFilter<"UploadChunk"> | bigint | number
    uploadId?: BigIntFilter<"UploadChunk"> | bigint | number
    chunkIndex?: IntFilter<"UploadChunk"> | number
    byteStart?: BigIntFilter<"UploadChunk"> | bigint | number
    byteEnd?: BigIntFilter<"UploadChunk"> | bigint | number
    status?: EnumChunkStatusFilter<"UploadChunk"> | $Enums.ChunkStatus
    uploadedAt?: DateTimeNullableFilter<"UploadChunk"> | Date | string | null
  }

  export type UploadCreateWithoutChunksInput = {
    id?: bigint | number
    fileName: string
    fileSize: bigint | number
    mimeType: string
    chunkSize: number
    totalChunks: number
    uploadedChunks?: number
    ipHash?: string | null
    service?: $Enums.StorageService
    cloudinaryUploadId?: string | null
    cloudinaryPublicId?: string | null
    cloudinarySecureUrl?: string | null
    awsUploadId?: string | null
    awsKey?: string | null
    awsUrl?: string | null
    status?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUploadsInput
  }

  export type UploadUncheckedCreateWithoutChunksInput = {
    id?: bigint | number
    userId: bigint | number
    fileName: string
    fileSize: bigint | number
    mimeType: string
    chunkSize: number
    totalChunks: number
    uploadedChunks?: number
    ipHash?: string | null
    service?: $Enums.StorageService
    cloudinaryUploadId?: string | null
    cloudinaryPublicId?: string | null
    cloudinarySecureUrl?: string | null
    awsUploadId?: string | null
    awsKey?: string | null
    awsUrl?: string | null
    status?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadCreateOrConnectWithoutChunksInput = {
    where: UploadWhereUniqueInput
    create: XOR<UploadCreateWithoutChunksInput, UploadUncheckedCreateWithoutChunksInput>
  }

  export type UploadUpsertWithoutChunksInput = {
    update: XOR<UploadUpdateWithoutChunksInput, UploadUncheckedUpdateWithoutChunksInput>
    create: XOR<UploadCreateWithoutChunksInput, UploadUncheckedCreateWithoutChunksInput>
    where?: UploadWhereInput
  }

  export type UploadUpdateToOneWithWhereWithoutChunksInput = {
    where?: UploadWhereInput
    data: XOR<UploadUpdateWithoutChunksInput, UploadUncheckedUpdateWithoutChunksInput>
  }

  export type UploadUpdateWithoutChunksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    mimeType?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    totalChunks?: IntFieldUpdateOperationsInput | number
    uploadedChunks?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumStorageServiceFieldUpdateOperationsInput | $Enums.StorageService
    cloudinaryUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinarySecureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awsUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    awsKey?: NullableStringFieldUpdateOperationsInput | string | null
    awsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUploadsNestedInput
  }

  export type UploadUncheckedUpdateWithoutChunksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    mimeType?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    totalChunks?: IntFieldUpdateOperationsInput | number
    uploadedChunks?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumStorageServiceFieldUpdateOperationsInput | $Enums.StorageService
    cloudinaryUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinarySecureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awsUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    awsKey?: NullableStringFieldUpdateOperationsInput | string | null
    awsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadCreateManyUserInput = {
    id?: bigint | number
    fileName: string
    fileSize: bigint | number
    mimeType: string
    chunkSize: number
    totalChunks: number
    uploadedChunks?: number
    ipHash?: string | null
    service?: $Enums.StorageService
    cloudinaryUploadId?: string | null
    cloudinaryPublicId?: string | null
    cloudinarySecureUrl?: string | null
    awsUploadId?: string | null
    awsKey?: string | null
    awsUrl?: string | null
    status?: $Enums.UploadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    mimeType?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    totalChunks?: IntFieldUpdateOperationsInput | number
    uploadedChunks?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumStorageServiceFieldUpdateOperationsInput | $Enums.StorageService
    cloudinaryUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinarySecureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awsUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    awsKey?: NullableStringFieldUpdateOperationsInput | string | null
    awsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: UploadChunkUpdateManyWithoutUploadNestedInput
  }

  export type UploadUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    mimeType?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    totalChunks?: IntFieldUpdateOperationsInput | number
    uploadedChunks?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumStorageServiceFieldUpdateOperationsInput | $Enums.StorageService
    cloudinaryUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinarySecureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awsUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    awsKey?: NullableStringFieldUpdateOperationsInput | string | null
    awsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: UploadChunkUncheckedUpdateManyWithoutUploadNestedInput
  }

  export type UploadUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    mimeType?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    totalChunks?: IntFieldUpdateOperationsInput | number
    uploadedChunks?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumStorageServiceFieldUpdateOperationsInput | $Enums.StorageService
    cloudinaryUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinarySecureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awsUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    awsKey?: NullableStringFieldUpdateOperationsInput | string | null
    awsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUploadStatusFieldUpdateOperationsInput | $Enums.UploadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadChunkCreateManyUploadInput = {
    id?: bigint | number
    chunkIndex: number
    byteStart: bigint | number
    byteEnd: bigint | number
    status?: $Enums.ChunkStatus
    uploadedAt?: Date | string | null
  }

  export type UploadChunkUpdateWithoutUploadInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    byteStart?: BigIntFieldUpdateOperationsInput | bigint | number
    byteEnd?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChunkStatusFieldUpdateOperationsInput | $Enums.ChunkStatus
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UploadChunkUncheckedUpdateWithoutUploadInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    byteStart?: BigIntFieldUpdateOperationsInput | bigint | number
    byteEnd?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChunkStatusFieldUpdateOperationsInput | $Enums.ChunkStatus
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UploadChunkUncheckedUpdateManyWithoutUploadInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    byteStart?: BigIntFieldUpdateOperationsInput | bigint | number
    byteEnd?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumChunkStatusFieldUpdateOperationsInput | $Enums.ChunkStatus
    uploadedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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