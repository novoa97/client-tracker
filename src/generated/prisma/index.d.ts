
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ClientType
 * 
 */
export type ClientType = $Result.DefaultSelection<Prisma.$ClientTypePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>
/**
 * Model LicenseType
 * 
 */
export type LicenseType = $Result.DefaultSelection<Prisma.$LicenseTypePayload>
/**
 * Model DeviceType
 * 
 */
export type DeviceType = $Result.DefaultSelection<Prisma.$DeviceTypePayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ClientTypes
 * const clientTypes = await prisma.clientType.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ClientTypes
   * const clientTypes = await prisma.clientType.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clientType`: Exposes CRUD operations for the **ClientType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientTypes
    * const clientTypes = await prisma.clientType.findMany()
    * ```
    */
  get clientType(): Prisma.ClientTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.licenseType`: Exposes CRUD operations for the **LicenseType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseTypes
    * const licenseTypes = await prisma.licenseType.findMany()
    * ```
    */
  get licenseType(): Prisma.LicenseTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceType`: Exposes CRUD operations for the **DeviceType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceTypes
    * const deviceTypes = await prisma.deviceType.findMany()
    * ```
    */
  get deviceType(): Prisma.DeviceTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    ClientType: 'ClientType',
    Client: 'Client',
    License: 'License',
    LicenseType: 'LicenseType',
    DeviceType: 'DeviceType',
    Device: 'Device'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clientType" | "client" | "license" | "licenseType" | "deviceType" | "device"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ClientType: {
        payload: Prisma.$ClientTypePayload<ExtArgs>
        fields: Prisma.ClientTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTypePayload>
          }
          findFirst: {
            args: Prisma.ClientTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTypePayload>
          }
          findMany: {
            args: Prisma.ClientTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTypePayload>[]
          }
          create: {
            args: Prisma.ClientTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTypePayload>
          }
          createMany: {
            args: Prisma.ClientTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTypePayload>
          }
          update: {
            args: Prisma.ClientTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTypePayload>
          }
          deleteMany: {
            args: Prisma.ClientTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTypePayload>
          }
          aggregate: {
            args: Prisma.ClientTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientType>
          }
          groupBy: {
            args: Prisma.ClientTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ClientTypeCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      LicenseType: {
        payload: Prisma.$LicenseTypePayload<ExtArgs>
        fields: Prisma.LicenseTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseTypePayload>
          }
          findFirst: {
            args: Prisma.LicenseTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseTypePayload>
          }
          findMany: {
            args: Prisma.LicenseTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseTypePayload>[]
          }
          create: {
            args: Prisma.LicenseTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseTypePayload>
          }
          createMany: {
            args: Prisma.LicenseTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LicenseTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseTypePayload>
          }
          update: {
            args: Prisma.LicenseTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseTypePayload>
          }
          deleteMany: {
            args: Prisma.LicenseTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseTypePayload>
          }
          aggregate: {
            args: Prisma.LicenseTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseType>
          }
          groupBy: {
            args: Prisma.LicenseTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseTypeCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseTypeCountAggregateOutputType> | number
          }
        }
      }
      DeviceType: {
        payload: Prisma.$DeviceTypePayload<ExtArgs>
        fields: Prisma.DeviceTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          findFirst: {
            args: Prisma.DeviceTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          findMany: {
            args: Prisma.DeviceTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>[]
          }
          create: {
            args: Prisma.DeviceTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          createMany: {
            args: Prisma.DeviceTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeviceTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          update: {
            args: Prisma.DeviceTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          deleteMany: {
            args: Prisma.DeviceTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTypePayload>
          }
          aggregate: {
            args: Prisma.DeviceTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceType>
          }
          groupBy: {
            args: Prisma.DeviceTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceTypeCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceTypeCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    clientType?: ClientTypeOmit
    client?: ClientOmit
    license?: LicenseOmit
    licenseType?: LicenseTypeOmit
    deviceType?: DeviceTypeOmit
    device?: DeviceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ClientTypeCountOutputType
   */

  export type ClientTypeCountOutputType = {
    clients: number
  }

  export type ClientTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | ClientTypeCountOutputTypeCountClientsArgs
  }

  // Custom InputTypes
  /**
   * ClientTypeCountOutputType without action
   */
  export type ClientTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTypeCountOutputType
     */
    select?: ClientTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientTypeCountOutputType without action
   */
  export type ClientTypeCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    licenses: number
    devices: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | ClientCountOutputTypeCountLicensesArgs
    devices?: boolean | ClientCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Count Type LicenseCountOutputType
   */

  export type LicenseCountOutputType = {
    subLicenses: number
  }

  export type LicenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subLicenses?: boolean | LicenseCountOutputTypeCountSubLicensesArgs
  }

  // Custom InputTypes
  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseCountOutputType
     */
    select?: LicenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountSubLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
  }


  /**
   * Count Type LicenseTypeCountOutputType
   */

  export type LicenseTypeCountOutputType = {
    licenses: number
  }

  export type LicenseTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | LicenseTypeCountOutputTypeCountLicensesArgs
  }

  // Custom InputTypes
  /**
   * LicenseTypeCountOutputType without action
   */
  export type LicenseTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseTypeCountOutputType
     */
    select?: LicenseTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicenseTypeCountOutputType without action
   */
  export type LicenseTypeCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
  }


  /**
   * Count Type DeviceTypeCountOutputType
   */

  export type DeviceTypeCountOutputType = {
    devices: number
  }

  export type DeviceTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | DeviceTypeCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * DeviceTypeCountOutputType without action
   */
  export type DeviceTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceTypeCountOutputType
     */
    select?: DeviceTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceTypeCountOutputType without action
   */
  export type DeviceTypeCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ClientType
   */

  export type AggregateClientType = {
    _count: ClientTypeCountAggregateOutputType | null
    _min: ClientTypeMinAggregateOutputType | null
    _max: ClientTypeMaxAggregateOutputType | null
  }

  export type ClientTypeMinAggregateOutputType = {
    key: string | null
    name: string | null
    icon: string | null
    color: string | null
  }

  export type ClientTypeMaxAggregateOutputType = {
    key: string | null
    name: string | null
    icon: string | null
    color: string | null
  }

  export type ClientTypeCountAggregateOutputType = {
    key: number
    name: number
    icon: number
    color: number
    _all: number
  }


  export type ClientTypeMinAggregateInputType = {
    key?: true
    name?: true
    icon?: true
    color?: true
  }

  export type ClientTypeMaxAggregateInputType = {
    key?: true
    name?: true
    icon?: true
    color?: true
  }

  export type ClientTypeCountAggregateInputType = {
    key?: true
    name?: true
    icon?: true
    color?: true
    _all?: true
  }

  export type ClientTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientType to aggregate.
     */
    where?: ClientTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTypes to fetch.
     */
    orderBy?: ClientTypeOrderByWithRelationInput | ClientTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientTypes
    **/
    _count?: true | ClientTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientTypeMaxAggregateInputType
  }

  export type GetClientTypeAggregateType<T extends ClientTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateClientType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientType[P]>
      : GetScalarType<T[P], AggregateClientType[P]>
  }




  export type ClientTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientTypeWhereInput
    orderBy?: ClientTypeOrderByWithAggregationInput | ClientTypeOrderByWithAggregationInput[]
    by: ClientTypeScalarFieldEnum[] | ClientTypeScalarFieldEnum
    having?: ClientTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientTypeCountAggregateInputType | true
    _min?: ClientTypeMinAggregateInputType
    _max?: ClientTypeMaxAggregateInputType
  }

  export type ClientTypeGroupByOutputType = {
    key: string
    name: string
    icon: string
    color: string
    _count: ClientTypeCountAggregateOutputType | null
    _min: ClientTypeMinAggregateOutputType | null
    _max: ClientTypeMaxAggregateOutputType | null
  }

  type GetClientTypeGroupByPayload<T extends ClientTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ClientTypeGroupByOutputType[P]>
        }
      >
    >


  export type ClientTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    name?: boolean
    icon?: boolean
    color?: boolean
    clients?: boolean | ClientType$clientsArgs<ExtArgs>
    _count?: boolean | ClientTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientType"]>



  export type ClientTypeSelectScalar = {
    key?: boolean
    name?: boolean
    icon?: boolean
    color?: boolean
  }

  export type ClientTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "name" | "icon" | "color", ExtArgs["result"]["clientType"]>
  export type ClientTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | ClientType$clientsArgs<ExtArgs>
    _count?: boolean | ClientTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientType"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      key: string
      name: string
      icon: string
      color: string
    }, ExtArgs["result"]["clientType"]>
    composites: {}
  }

  type ClientTypeGetPayload<S extends boolean | null | undefined | ClientTypeDefaultArgs> = $Result.GetResult<Prisma.$ClientTypePayload, S>

  type ClientTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientTypeCountAggregateInputType | true
    }

  export interface ClientTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientType'], meta: { name: 'ClientType' } }
    /**
     * Find zero or one ClientType that matches the filter.
     * @param {ClientTypeFindUniqueArgs} args - Arguments to find a ClientType
     * @example
     * // Get one ClientType
     * const clientType = await prisma.clientType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientTypeFindUniqueArgs>(args: SelectSubset<T, ClientTypeFindUniqueArgs<ExtArgs>>): Prisma__ClientTypeClient<$Result.GetResult<Prisma.$ClientTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientTypeFindUniqueOrThrowArgs} args - Arguments to find a ClientType
     * @example
     * // Get one ClientType
     * const clientType = await prisma.clientType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientTypeClient<$Result.GetResult<Prisma.$ClientTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTypeFindFirstArgs} args - Arguments to find a ClientType
     * @example
     * // Get one ClientType
     * const clientType = await prisma.clientType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientTypeFindFirstArgs>(args?: SelectSubset<T, ClientTypeFindFirstArgs<ExtArgs>>): Prisma__ClientTypeClient<$Result.GetResult<Prisma.$ClientTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTypeFindFirstOrThrowArgs} args - Arguments to find a ClientType
     * @example
     * // Get one ClientType
     * const clientType = await prisma.clientType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientTypeClient<$Result.GetResult<Prisma.$ClientTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientTypes
     * const clientTypes = await prisma.clientType.findMany()
     * 
     * // Get first 10 ClientTypes
     * const clientTypes = await prisma.clientType.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const clientTypeWithKeyOnly = await prisma.clientType.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends ClientTypeFindManyArgs>(args?: SelectSubset<T, ClientTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientType.
     * @param {ClientTypeCreateArgs} args - Arguments to create a ClientType.
     * @example
     * // Create one ClientType
     * const ClientType = await prisma.clientType.create({
     *   data: {
     *     // ... data to create a ClientType
     *   }
     * })
     * 
     */
    create<T extends ClientTypeCreateArgs>(args: SelectSubset<T, ClientTypeCreateArgs<ExtArgs>>): Prisma__ClientTypeClient<$Result.GetResult<Prisma.$ClientTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientTypes.
     * @param {ClientTypeCreateManyArgs} args - Arguments to create many ClientTypes.
     * @example
     * // Create many ClientTypes
     * const clientType = await prisma.clientType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientTypeCreateManyArgs>(args?: SelectSubset<T, ClientTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClientType.
     * @param {ClientTypeDeleteArgs} args - Arguments to delete one ClientType.
     * @example
     * // Delete one ClientType
     * const ClientType = await prisma.clientType.delete({
     *   where: {
     *     // ... filter to delete one ClientType
     *   }
     * })
     * 
     */
    delete<T extends ClientTypeDeleteArgs>(args: SelectSubset<T, ClientTypeDeleteArgs<ExtArgs>>): Prisma__ClientTypeClient<$Result.GetResult<Prisma.$ClientTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientType.
     * @param {ClientTypeUpdateArgs} args - Arguments to update one ClientType.
     * @example
     * // Update one ClientType
     * const clientType = await prisma.clientType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientTypeUpdateArgs>(args: SelectSubset<T, ClientTypeUpdateArgs<ExtArgs>>): Prisma__ClientTypeClient<$Result.GetResult<Prisma.$ClientTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientTypes.
     * @param {ClientTypeDeleteManyArgs} args - Arguments to filter ClientTypes to delete.
     * @example
     * // Delete a few ClientTypes
     * const { count } = await prisma.clientType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientTypeDeleteManyArgs>(args?: SelectSubset<T, ClientTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientTypes
     * const clientType = await prisma.clientType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientTypeUpdateManyArgs>(args: SelectSubset<T, ClientTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientType.
     * @param {ClientTypeUpsertArgs} args - Arguments to update or create a ClientType.
     * @example
     * // Update or create a ClientType
     * const clientType = await prisma.clientType.upsert({
     *   create: {
     *     // ... data to create a ClientType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientType we want to update
     *   }
     * })
     */
    upsert<T extends ClientTypeUpsertArgs>(args: SelectSubset<T, ClientTypeUpsertArgs<ExtArgs>>): Prisma__ClientTypeClient<$Result.GetResult<Prisma.$ClientTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTypeCountArgs} args - Arguments to filter ClientTypes to count.
     * @example
     * // Count the number of ClientTypes
     * const count = await prisma.clientType.count({
     *   where: {
     *     // ... the filter for the ClientTypes we want to count
     *   }
     * })
    **/
    count<T extends ClientTypeCountArgs>(
      args?: Subset<T, ClientTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientTypeAggregateArgs>(args: Subset<T, ClientTypeAggregateArgs>): Prisma.PrismaPromise<GetClientTypeAggregateType<T>>

    /**
     * Group by ClientType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTypeGroupByArgs} args - Group by arguments.
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
      T extends ClientTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientTypeGroupByArgs['orderBy'] }
        : { orderBy?: ClientTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientType model
   */
  readonly fields: ClientTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends ClientType$clientsArgs<ExtArgs> = {}>(args?: Subset<T, ClientType$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ClientType model
   */
  interface ClientTypeFieldRefs {
    readonly key: FieldRef<"ClientType", 'String'>
    readonly name: FieldRef<"ClientType", 'String'>
    readonly icon: FieldRef<"ClientType", 'String'>
    readonly color: FieldRef<"ClientType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClientType findUnique
   */
  export type ClientTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientType
     */
    select?: ClientTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientType
     */
    omit?: ClientTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClientType to fetch.
     */
    where: ClientTypeWhereUniqueInput
  }

  /**
   * ClientType findUniqueOrThrow
   */
  export type ClientTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientType
     */
    select?: ClientTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientType
     */
    omit?: ClientTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClientType to fetch.
     */
    where: ClientTypeWhereUniqueInput
  }

  /**
   * ClientType findFirst
   */
  export type ClientTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientType
     */
    select?: ClientTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientType
     */
    omit?: ClientTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClientType to fetch.
     */
    where?: ClientTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTypes to fetch.
     */
    orderBy?: ClientTypeOrderByWithRelationInput | ClientTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientTypes.
     */
    cursor?: ClientTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientTypes.
     */
    distinct?: ClientTypeScalarFieldEnum | ClientTypeScalarFieldEnum[]
  }

  /**
   * ClientType findFirstOrThrow
   */
  export type ClientTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientType
     */
    select?: ClientTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientType
     */
    omit?: ClientTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClientType to fetch.
     */
    where?: ClientTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTypes to fetch.
     */
    orderBy?: ClientTypeOrderByWithRelationInput | ClientTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientTypes.
     */
    cursor?: ClientTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientTypes.
     */
    distinct?: ClientTypeScalarFieldEnum | ClientTypeScalarFieldEnum[]
  }

  /**
   * ClientType findMany
   */
  export type ClientTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientType
     */
    select?: ClientTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientType
     */
    omit?: ClientTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClientTypes to fetch.
     */
    where?: ClientTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTypes to fetch.
     */
    orderBy?: ClientTypeOrderByWithRelationInput | ClientTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientTypes.
     */
    cursor?: ClientTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTypes.
     */
    skip?: number
    distinct?: ClientTypeScalarFieldEnum | ClientTypeScalarFieldEnum[]
  }

  /**
   * ClientType create
   */
  export type ClientTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientType
     */
    select?: ClientTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientType
     */
    omit?: ClientTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientType.
     */
    data: XOR<ClientTypeCreateInput, ClientTypeUncheckedCreateInput>
  }

  /**
   * ClientType createMany
   */
  export type ClientTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientTypes.
     */
    data: ClientTypeCreateManyInput | ClientTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientType update
   */
  export type ClientTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientType
     */
    select?: ClientTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientType
     */
    omit?: ClientTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientType.
     */
    data: XOR<ClientTypeUpdateInput, ClientTypeUncheckedUpdateInput>
    /**
     * Choose, which ClientType to update.
     */
    where: ClientTypeWhereUniqueInput
  }

  /**
   * ClientType updateMany
   */
  export type ClientTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientTypes.
     */
    data: XOR<ClientTypeUpdateManyMutationInput, ClientTypeUncheckedUpdateManyInput>
    /**
     * Filter which ClientTypes to update
     */
    where?: ClientTypeWhereInput
    /**
     * Limit how many ClientTypes to update.
     */
    limit?: number
  }

  /**
   * ClientType upsert
   */
  export type ClientTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientType
     */
    select?: ClientTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientType
     */
    omit?: ClientTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientType to update in case it exists.
     */
    where: ClientTypeWhereUniqueInput
    /**
     * In case the ClientType found by the `where` argument doesn't exist, create a new ClientType with this data.
     */
    create: XOR<ClientTypeCreateInput, ClientTypeUncheckedCreateInput>
    /**
     * In case the ClientType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientTypeUpdateInput, ClientTypeUncheckedUpdateInput>
  }

  /**
   * ClientType delete
   */
  export type ClientTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientType
     */
    select?: ClientTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientType
     */
    omit?: ClientTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTypeInclude<ExtArgs> | null
    /**
     * Filter which ClientType to delete.
     */
    where: ClientTypeWhereUniqueInput
  }

  /**
   * ClientType deleteMany
   */
  export type ClientTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientTypes to delete
     */
    where?: ClientTypeWhereInput
    /**
     * Limit how many ClientTypes to delete.
     */
    limit?: number
  }

  /**
   * ClientType.clients
   */
  export type ClientType$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * ClientType without action
   */
  export type ClientTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientType
     */
    select?: ClientTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientType
     */
    omit?: ClientTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTypeInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ClientSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    legalName: string | null
    taxId: string | null
    address: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    notes: string | null
    typeKey: string | null
    createdAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    legalName: string | null
    taxId: string | null
    address: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    notes: string | null
    typeKey: string | null
    createdAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    legalName: number
    taxId: number
    address: number
    city: number
    latitude: number
    longitude: number
    notes: number
    typeKey: number
    createdAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ClientSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    taxId?: true
    address?: true
    city?: true
    latitude?: true
    longitude?: true
    notes?: true
    typeKey?: true
    createdAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    taxId?: true
    address?: true
    city?: true
    latitude?: true
    longitude?: true
    notes?: true
    typeKey?: true
    createdAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    legalName?: true
    taxId?: true
    address?: true
    city?: true
    latitude?: true
    longitude?: true
    notes?: true
    typeKey?: true
    createdAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes: string | null
    typeKey: string
    createdAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    legalName?: boolean
    taxId?: boolean
    address?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    notes?: boolean
    typeKey?: boolean
    createdAt?: boolean
    type?: boolean | ClientTypeDefaultArgs<ExtArgs>
    licenses?: boolean | Client$licensesArgs<ExtArgs>
    devices?: boolean | Client$devicesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>



  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    legalName?: boolean
    taxId?: boolean
    address?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    notes?: boolean
    typeKey?: boolean
    createdAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "legalName" | "taxId" | "address" | "city" | "latitude" | "longitude" | "notes" | "typeKey" | "createdAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | ClientTypeDefaultArgs<ExtArgs>
    licenses?: boolean | Client$licensesArgs<ExtArgs>
    devices?: boolean | Client$devicesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      type: Prisma.$ClientTypePayload<ExtArgs>
      licenses: Prisma.$LicensePayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      legalName: string
      taxId: string
      address: string
      city: string
      latitude: number
      longitude: number
      notes: string | null
      typeKey: string
      createdAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends ClientTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientTypeDefaultArgs<ExtArgs>>): Prisma__ClientTypeClient<$Result.GetResult<Prisma.$ClientTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    licenses<T extends Client$licensesArgs<ExtArgs> = {}>(args?: Subset<T, Client$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends Client$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Client$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly legalName: FieldRef<"Client", 'String'>
    readonly taxId: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly city: FieldRef<"Client", 'String'>
    readonly latitude: FieldRef<"Client", 'Float'>
    readonly longitude: FieldRef<"Client", 'Float'>
    readonly notes: FieldRef<"Client", 'String'>
    readonly typeKey: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.licenses
   */
  export type Client$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    cursor?: LicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * Client.devices
   */
  export type Client$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    typeKey: string | null
    parentId: string | null
  }

  export type LicenseMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    typeKey: string | null
    parentId: string | null
  }

  export type LicenseCountAggregateOutputType = {
    id: number
    clientId: number
    typeKey: number
    parentId: number
    _all: number
  }


  export type LicenseMinAggregateInputType = {
    id?: true
    clientId?: true
    typeKey?: true
    parentId?: true
  }

  export type LicenseMaxAggregateInputType = {
    id?: true
    clientId?: true
    typeKey?: true
    parentId?: true
  }

  export type LicenseCountAggregateInputType = {
    id?: true
    clientId?: true
    typeKey?: true
    parentId?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    id: string
    clientId: string
    typeKey: string
    parentId: string | null
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    typeKey?: boolean
    parentId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    type?: boolean | LicenseTypeDefaultArgs<ExtArgs>
    parent?: boolean | License$parentArgs<ExtArgs>
    subLicenses?: boolean | License$subLicensesArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>



  export type LicenseSelectScalar = {
    id?: boolean
    clientId?: boolean
    typeKey?: boolean
    parentId?: boolean
  }

  export type LicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "typeKey" | "parentId", ExtArgs["result"]["license"]>
  export type LicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    type?: boolean | LicenseTypeDefaultArgs<ExtArgs>
    parent?: boolean | License$parentArgs<ExtArgs>
    subLicenses?: boolean | License$subLicensesArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      type: Prisma.$LicenseTypePayload<ExtArgs>
      parent: Prisma.$LicensePayload<ExtArgs> | null
      subLicenses: Prisma.$LicensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      typeKey: string
      parentId: string | null
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseWithIdOnly = await prisma.license.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
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
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends LicenseTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseTypeDefaultArgs<ExtArgs>>): Prisma__LicenseTypeClient<$Result.GetResult<Prisma.$LicenseTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends License$parentArgs<ExtArgs> = {}>(args?: Subset<T, License$parentArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subLicenses<T extends License$subLicensesArgs<ExtArgs> = {}>(args?: Subset<T, License$subLicensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the License model
   */
  interface LicenseFieldRefs {
    readonly id: FieldRef<"License", 'String'>
    readonly clientId: FieldRef<"License", 'String'>
    readonly typeKey: FieldRef<"License", 'String'>
    readonly parentId: FieldRef<"License", 'String'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to delete.
     */
    limit?: number
  }

  /**
   * License.parent
   */
  export type License$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
  }

  /**
   * License.subLicenses
   */
  export type License$subLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    cursor?: LicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
  }


  /**
   * Model LicenseType
   */

  export type AggregateLicenseType = {
    _count: LicenseTypeCountAggregateOutputType | null
    _min: LicenseTypeMinAggregateOutputType | null
    _max: LicenseTypeMaxAggregateOutputType | null
  }

  export type LicenseTypeMinAggregateOutputType = {
    key: string | null
    name: string | null
  }

  export type LicenseTypeMaxAggregateOutputType = {
    key: string | null
    name: string | null
  }

  export type LicenseTypeCountAggregateOutputType = {
    key: number
    name: number
    _all: number
  }


  export type LicenseTypeMinAggregateInputType = {
    key?: true
    name?: true
  }

  export type LicenseTypeMaxAggregateInputType = {
    key?: true
    name?: true
  }

  export type LicenseTypeCountAggregateInputType = {
    key?: true
    name?: true
    _all?: true
  }

  export type LicenseTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseType to aggregate.
     */
    where?: LicenseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseTypes to fetch.
     */
    orderBy?: LicenseTypeOrderByWithRelationInput | LicenseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseTypes
    **/
    _count?: true | LicenseTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseTypeMaxAggregateInputType
  }

  export type GetLicenseTypeAggregateType<T extends LicenseTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseType[P]>
      : GetScalarType<T[P], AggregateLicenseType[P]>
  }




  export type LicenseTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseTypeWhereInput
    orderBy?: LicenseTypeOrderByWithAggregationInput | LicenseTypeOrderByWithAggregationInput[]
    by: LicenseTypeScalarFieldEnum[] | LicenseTypeScalarFieldEnum
    having?: LicenseTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseTypeCountAggregateInputType | true
    _min?: LicenseTypeMinAggregateInputType
    _max?: LicenseTypeMaxAggregateInputType
  }

  export type LicenseTypeGroupByOutputType = {
    key: string
    name: string
    _count: LicenseTypeCountAggregateOutputType | null
    _min: LicenseTypeMinAggregateOutputType | null
    _max: LicenseTypeMaxAggregateOutputType | null
  }

  type GetLicenseTypeGroupByPayload<T extends LicenseTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseTypeGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseTypeGroupByOutputType[P]>
        }
      >
    >


  export type LicenseTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    name?: boolean
    licenses?: boolean | LicenseType$licensesArgs<ExtArgs>
    _count?: boolean | LicenseTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseType"]>



  export type LicenseTypeSelectScalar = {
    key?: boolean
    name?: boolean
  }

  export type LicenseTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "name", ExtArgs["result"]["licenseType"]>
  export type LicenseTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | LicenseType$licensesArgs<ExtArgs>
    _count?: boolean | LicenseTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LicenseTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseType"
    objects: {
      licenses: Prisma.$LicensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      key: string
      name: string
    }, ExtArgs["result"]["licenseType"]>
    composites: {}
  }

  type LicenseTypeGetPayload<S extends boolean | null | undefined | LicenseTypeDefaultArgs> = $Result.GetResult<Prisma.$LicenseTypePayload, S>

  type LicenseTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseTypeCountAggregateInputType | true
    }

  export interface LicenseTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseType'], meta: { name: 'LicenseType' } }
    /**
     * Find zero or one LicenseType that matches the filter.
     * @param {LicenseTypeFindUniqueArgs} args - Arguments to find a LicenseType
     * @example
     * // Get one LicenseType
     * const licenseType = await prisma.licenseType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseTypeFindUniqueArgs>(args: SelectSubset<T, LicenseTypeFindUniqueArgs<ExtArgs>>): Prisma__LicenseTypeClient<$Result.GetResult<Prisma.$LicenseTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LicenseType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseTypeFindUniqueOrThrowArgs} args - Arguments to find a LicenseType
     * @example
     * // Get one LicenseType
     * const licenseType = await prisma.licenseType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseTypeClient<$Result.GetResult<Prisma.$LicenseTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LicenseType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseTypeFindFirstArgs} args - Arguments to find a LicenseType
     * @example
     * // Get one LicenseType
     * const licenseType = await prisma.licenseType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseTypeFindFirstArgs>(args?: SelectSubset<T, LicenseTypeFindFirstArgs<ExtArgs>>): Prisma__LicenseTypeClient<$Result.GetResult<Prisma.$LicenseTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LicenseType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseTypeFindFirstOrThrowArgs} args - Arguments to find a LicenseType
     * @example
     * // Get one LicenseType
     * const licenseType = await prisma.licenseType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseTypeClient<$Result.GetResult<Prisma.$LicenseTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LicenseTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseTypes
     * const licenseTypes = await prisma.licenseType.findMany()
     * 
     * // Get first 10 LicenseTypes
     * const licenseTypes = await prisma.licenseType.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const licenseTypeWithKeyOnly = await prisma.licenseType.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends LicenseTypeFindManyArgs>(args?: SelectSubset<T, LicenseTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LicenseType.
     * @param {LicenseTypeCreateArgs} args - Arguments to create a LicenseType.
     * @example
     * // Create one LicenseType
     * const LicenseType = await prisma.licenseType.create({
     *   data: {
     *     // ... data to create a LicenseType
     *   }
     * })
     * 
     */
    create<T extends LicenseTypeCreateArgs>(args: SelectSubset<T, LicenseTypeCreateArgs<ExtArgs>>): Prisma__LicenseTypeClient<$Result.GetResult<Prisma.$LicenseTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LicenseTypes.
     * @param {LicenseTypeCreateManyArgs} args - Arguments to create many LicenseTypes.
     * @example
     * // Create many LicenseTypes
     * const licenseType = await prisma.licenseType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseTypeCreateManyArgs>(args?: SelectSubset<T, LicenseTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LicenseType.
     * @param {LicenseTypeDeleteArgs} args - Arguments to delete one LicenseType.
     * @example
     * // Delete one LicenseType
     * const LicenseType = await prisma.licenseType.delete({
     *   where: {
     *     // ... filter to delete one LicenseType
     *   }
     * })
     * 
     */
    delete<T extends LicenseTypeDeleteArgs>(args: SelectSubset<T, LicenseTypeDeleteArgs<ExtArgs>>): Prisma__LicenseTypeClient<$Result.GetResult<Prisma.$LicenseTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LicenseType.
     * @param {LicenseTypeUpdateArgs} args - Arguments to update one LicenseType.
     * @example
     * // Update one LicenseType
     * const licenseType = await prisma.licenseType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseTypeUpdateArgs>(args: SelectSubset<T, LicenseTypeUpdateArgs<ExtArgs>>): Prisma__LicenseTypeClient<$Result.GetResult<Prisma.$LicenseTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LicenseTypes.
     * @param {LicenseTypeDeleteManyArgs} args - Arguments to filter LicenseTypes to delete.
     * @example
     * // Delete a few LicenseTypes
     * const { count } = await prisma.licenseType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseTypeDeleteManyArgs>(args?: SelectSubset<T, LicenseTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseTypes
     * const licenseType = await prisma.licenseType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseTypeUpdateManyArgs>(args: SelectSubset<T, LicenseTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LicenseType.
     * @param {LicenseTypeUpsertArgs} args - Arguments to update or create a LicenseType.
     * @example
     * // Update or create a LicenseType
     * const licenseType = await prisma.licenseType.upsert({
     *   create: {
     *     // ... data to create a LicenseType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseType we want to update
     *   }
     * })
     */
    upsert<T extends LicenseTypeUpsertArgs>(args: SelectSubset<T, LicenseTypeUpsertArgs<ExtArgs>>): Prisma__LicenseTypeClient<$Result.GetResult<Prisma.$LicenseTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LicenseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseTypeCountArgs} args - Arguments to filter LicenseTypes to count.
     * @example
     * // Count the number of LicenseTypes
     * const count = await prisma.licenseType.count({
     *   where: {
     *     // ... the filter for the LicenseTypes we want to count
     *   }
     * })
    **/
    count<T extends LicenseTypeCountArgs>(
      args?: Subset<T, LicenseTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LicenseTypeAggregateArgs>(args: Subset<T, LicenseTypeAggregateArgs>): Prisma.PrismaPromise<GetLicenseTypeAggregateType<T>>

    /**
     * Group by LicenseType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseTypeGroupByArgs} args - Group by arguments.
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
      T extends LicenseTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseTypeGroupByArgs['orderBy'] }
        : { orderBy?: LicenseTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LicenseTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseType model
   */
  readonly fields: LicenseTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    licenses<T extends LicenseType$licensesArgs<ExtArgs> = {}>(args?: Subset<T, LicenseType$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LicenseType model
   */
  interface LicenseTypeFieldRefs {
    readonly key: FieldRef<"LicenseType", 'String'>
    readonly name: FieldRef<"LicenseType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LicenseType findUnique
   */
  export type LicenseTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseType
     */
    select?: LicenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseType
     */
    omit?: LicenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseTypeInclude<ExtArgs> | null
    /**
     * Filter, which LicenseType to fetch.
     */
    where: LicenseTypeWhereUniqueInput
  }

  /**
   * LicenseType findUniqueOrThrow
   */
  export type LicenseTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseType
     */
    select?: LicenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseType
     */
    omit?: LicenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseTypeInclude<ExtArgs> | null
    /**
     * Filter, which LicenseType to fetch.
     */
    where: LicenseTypeWhereUniqueInput
  }

  /**
   * LicenseType findFirst
   */
  export type LicenseTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseType
     */
    select?: LicenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseType
     */
    omit?: LicenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseTypeInclude<ExtArgs> | null
    /**
     * Filter, which LicenseType to fetch.
     */
    where?: LicenseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseTypes to fetch.
     */
    orderBy?: LicenseTypeOrderByWithRelationInput | LicenseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseTypes.
     */
    cursor?: LicenseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseTypes.
     */
    distinct?: LicenseTypeScalarFieldEnum | LicenseTypeScalarFieldEnum[]
  }

  /**
   * LicenseType findFirstOrThrow
   */
  export type LicenseTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseType
     */
    select?: LicenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseType
     */
    omit?: LicenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseTypeInclude<ExtArgs> | null
    /**
     * Filter, which LicenseType to fetch.
     */
    where?: LicenseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseTypes to fetch.
     */
    orderBy?: LicenseTypeOrderByWithRelationInput | LicenseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseTypes.
     */
    cursor?: LicenseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseTypes.
     */
    distinct?: LicenseTypeScalarFieldEnum | LicenseTypeScalarFieldEnum[]
  }

  /**
   * LicenseType findMany
   */
  export type LicenseTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseType
     */
    select?: LicenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseType
     */
    omit?: LicenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseTypeInclude<ExtArgs> | null
    /**
     * Filter, which LicenseTypes to fetch.
     */
    where?: LicenseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseTypes to fetch.
     */
    orderBy?: LicenseTypeOrderByWithRelationInput | LicenseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseTypes.
     */
    cursor?: LicenseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseTypes.
     */
    skip?: number
    distinct?: LicenseTypeScalarFieldEnum | LicenseTypeScalarFieldEnum[]
  }

  /**
   * LicenseType create
   */
  export type LicenseTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseType
     */
    select?: LicenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseType
     */
    omit?: LicenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a LicenseType.
     */
    data: XOR<LicenseTypeCreateInput, LicenseTypeUncheckedCreateInput>
  }

  /**
   * LicenseType createMany
   */
  export type LicenseTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseTypes.
     */
    data: LicenseTypeCreateManyInput | LicenseTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseType update
   */
  export type LicenseTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseType
     */
    select?: LicenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseType
     */
    omit?: LicenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a LicenseType.
     */
    data: XOR<LicenseTypeUpdateInput, LicenseTypeUncheckedUpdateInput>
    /**
     * Choose, which LicenseType to update.
     */
    where: LicenseTypeWhereUniqueInput
  }

  /**
   * LicenseType updateMany
   */
  export type LicenseTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseTypes.
     */
    data: XOR<LicenseTypeUpdateManyMutationInput, LicenseTypeUncheckedUpdateManyInput>
    /**
     * Filter which LicenseTypes to update
     */
    where?: LicenseTypeWhereInput
    /**
     * Limit how many LicenseTypes to update.
     */
    limit?: number
  }

  /**
   * LicenseType upsert
   */
  export type LicenseTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseType
     */
    select?: LicenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseType
     */
    omit?: LicenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the LicenseType to update in case it exists.
     */
    where: LicenseTypeWhereUniqueInput
    /**
     * In case the LicenseType found by the `where` argument doesn't exist, create a new LicenseType with this data.
     */
    create: XOR<LicenseTypeCreateInput, LicenseTypeUncheckedCreateInput>
    /**
     * In case the LicenseType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseTypeUpdateInput, LicenseTypeUncheckedUpdateInput>
  }

  /**
   * LicenseType delete
   */
  export type LicenseTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseType
     */
    select?: LicenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseType
     */
    omit?: LicenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseTypeInclude<ExtArgs> | null
    /**
     * Filter which LicenseType to delete.
     */
    where: LicenseTypeWhereUniqueInput
  }

  /**
   * LicenseType deleteMany
   */
  export type LicenseTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseTypes to delete
     */
    where?: LicenseTypeWhereInput
    /**
     * Limit how many LicenseTypes to delete.
     */
    limit?: number
  }

  /**
   * LicenseType.licenses
   */
  export type LicenseType$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    cursor?: LicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * LicenseType without action
   */
  export type LicenseTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseType
     */
    select?: LicenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseType
     */
    omit?: LicenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseTypeInclude<ExtArgs> | null
  }


  /**
   * Model DeviceType
   */

  export type AggregateDeviceType = {
    _count: DeviceTypeCountAggregateOutputType | null
    _min: DeviceTypeMinAggregateOutputType | null
    _max: DeviceTypeMaxAggregateOutputType | null
  }

  export type DeviceTypeMinAggregateOutputType = {
    key: string | null
    name: string | null
    icon: string | null
  }

  export type DeviceTypeMaxAggregateOutputType = {
    key: string | null
    name: string | null
    icon: string | null
  }

  export type DeviceTypeCountAggregateOutputType = {
    key: number
    name: number
    icon: number
    _all: number
  }


  export type DeviceTypeMinAggregateInputType = {
    key?: true
    name?: true
    icon?: true
  }

  export type DeviceTypeMaxAggregateInputType = {
    key?: true
    name?: true
    icon?: true
  }

  export type DeviceTypeCountAggregateInputType = {
    key?: true
    name?: true
    icon?: true
    _all?: true
  }

  export type DeviceTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceType to aggregate.
     */
    where?: DeviceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: DeviceTypeOrderByWithRelationInput | DeviceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceTypes
    **/
    _count?: true | DeviceTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceTypeMaxAggregateInputType
  }

  export type GetDeviceTypeAggregateType<T extends DeviceTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceType[P]>
      : GetScalarType<T[P], AggregateDeviceType[P]>
  }




  export type DeviceTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceTypeWhereInput
    orderBy?: DeviceTypeOrderByWithAggregationInput | DeviceTypeOrderByWithAggregationInput[]
    by: DeviceTypeScalarFieldEnum[] | DeviceTypeScalarFieldEnum
    having?: DeviceTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceTypeCountAggregateInputType | true
    _min?: DeviceTypeMinAggregateInputType
    _max?: DeviceTypeMaxAggregateInputType
  }

  export type DeviceTypeGroupByOutputType = {
    key: string
    name: string
    icon: string
    _count: DeviceTypeCountAggregateOutputType | null
    _min: DeviceTypeMinAggregateOutputType | null
    _max: DeviceTypeMaxAggregateOutputType | null
  }

  type GetDeviceTypeGroupByPayload<T extends DeviceTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceTypeGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceTypeGroupByOutputType[P]>
        }
      >
    >


  export type DeviceTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    name?: boolean
    icon?: boolean
    devices?: boolean | DeviceType$devicesArgs<ExtArgs>
    _count?: boolean | DeviceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceType"]>



  export type DeviceTypeSelectScalar = {
    key?: boolean
    name?: boolean
    icon?: boolean
  }

  export type DeviceTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "name" | "icon", ExtArgs["result"]["deviceType"]>
  export type DeviceTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | DeviceType$devicesArgs<ExtArgs>
    _count?: boolean | DeviceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DeviceTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceType"
    objects: {
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      key: string
      name: string
      icon: string
    }, ExtArgs["result"]["deviceType"]>
    composites: {}
  }

  type DeviceTypeGetPayload<S extends boolean | null | undefined | DeviceTypeDefaultArgs> = $Result.GetResult<Prisma.$DeviceTypePayload, S>

  type DeviceTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceTypeCountAggregateInputType | true
    }

  export interface DeviceTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceType'], meta: { name: 'DeviceType' } }
    /**
     * Find zero or one DeviceType that matches the filter.
     * @param {DeviceTypeFindUniqueArgs} args - Arguments to find a DeviceType
     * @example
     * // Get one DeviceType
     * const deviceType = await prisma.deviceType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceTypeFindUniqueArgs>(args: SelectSubset<T, DeviceTypeFindUniqueArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceTypeFindUniqueOrThrowArgs} args - Arguments to find a DeviceType
     * @example
     * // Get one DeviceType
     * const deviceType = await prisma.deviceType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeFindFirstArgs} args - Arguments to find a DeviceType
     * @example
     * // Get one DeviceType
     * const deviceType = await prisma.deviceType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceTypeFindFirstArgs>(args?: SelectSubset<T, DeviceTypeFindFirstArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeFindFirstOrThrowArgs} args - Arguments to find a DeviceType
     * @example
     * // Get one DeviceType
     * const deviceType = await prisma.deviceType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceTypes
     * const deviceTypes = await prisma.deviceType.findMany()
     * 
     * // Get first 10 DeviceTypes
     * const deviceTypes = await prisma.deviceType.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const deviceTypeWithKeyOnly = await prisma.deviceType.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends DeviceTypeFindManyArgs>(args?: SelectSubset<T, DeviceTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceType.
     * @param {DeviceTypeCreateArgs} args - Arguments to create a DeviceType.
     * @example
     * // Create one DeviceType
     * const DeviceType = await prisma.deviceType.create({
     *   data: {
     *     // ... data to create a DeviceType
     *   }
     * })
     * 
     */
    create<T extends DeviceTypeCreateArgs>(args: SelectSubset<T, DeviceTypeCreateArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceTypes.
     * @param {DeviceTypeCreateManyArgs} args - Arguments to create many DeviceTypes.
     * @example
     * // Create many DeviceTypes
     * const deviceType = await prisma.deviceType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceTypeCreateManyArgs>(args?: SelectSubset<T, DeviceTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeviceType.
     * @param {DeviceTypeDeleteArgs} args - Arguments to delete one DeviceType.
     * @example
     * // Delete one DeviceType
     * const DeviceType = await prisma.deviceType.delete({
     *   where: {
     *     // ... filter to delete one DeviceType
     *   }
     * })
     * 
     */
    delete<T extends DeviceTypeDeleteArgs>(args: SelectSubset<T, DeviceTypeDeleteArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceType.
     * @param {DeviceTypeUpdateArgs} args - Arguments to update one DeviceType.
     * @example
     * // Update one DeviceType
     * const deviceType = await prisma.deviceType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceTypeUpdateArgs>(args: SelectSubset<T, DeviceTypeUpdateArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceTypes.
     * @param {DeviceTypeDeleteManyArgs} args - Arguments to filter DeviceTypes to delete.
     * @example
     * // Delete a few DeviceTypes
     * const { count } = await prisma.deviceType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceTypeDeleteManyArgs>(args?: SelectSubset<T, DeviceTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceTypes
     * const deviceType = await prisma.deviceType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceTypeUpdateManyArgs>(args: SelectSubset<T, DeviceTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceType.
     * @param {DeviceTypeUpsertArgs} args - Arguments to update or create a DeviceType.
     * @example
     * // Update or create a DeviceType
     * const deviceType = await prisma.deviceType.upsert({
     *   create: {
     *     // ... data to create a DeviceType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceType we want to update
     *   }
     * })
     */
    upsert<T extends DeviceTypeUpsertArgs>(args: SelectSubset<T, DeviceTypeUpsertArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeCountArgs} args - Arguments to filter DeviceTypes to count.
     * @example
     * // Count the number of DeviceTypes
     * const count = await prisma.deviceType.count({
     *   where: {
     *     // ... the filter for the DeviceTypes we want to count
     *   }
     * })
    **/
    count<T extends DeviceTypeCountArgs>(
      args?: Subset<T, DeviceTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceTypeAggregateArgs>(args: Subset<T, DeviceTypeAggregateArgs>): Prisma.PrismaPromise<GetDeviceTypeAggregateType<T>>

    /**
     * Group by DeviceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypeGroupByArgs} args - Group by arguments.
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
      T extends DeviceTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceTypeGroupByArgs['orderBy'] }
        : { orderBy?: DeviceTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceType model
   */
  readonly fields: DeviceTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devices<T extends DeviceType$devicesArgs<ExtArgs> = {}>(args?: Subset<T, DeviceType$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DeviceType model
   */
  interface DeviceTypeFieldRefs {
    readonly key: FieldRef<"DeviceType", 'String'>
    readonly name: FieldRef<"DeviceType", 'String'>
    readonly icon: FieldRef<"DeviceType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeviceType findUnique
   */
  export type DeviceTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter, which DeviceType to fetch.
     */
    where: DeviceTypeWhereUniqueInput
  }

  /**
   * DeviceType findUniqueOrThrow
   */
  export type DeviceTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter, which DeviceType to fetch.
     */
    where: DeviceTypeWhereUniqueInput
  }

  /**
   * DeviceType findFirst
   */
  export type DeviceTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter, which DeviceType to fetch.
     */
    where?: DeviceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: DeviceTypeOrderByWithRelationInput | DeviceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTypes.
     */
    cursor?: DeviceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTypes.
     */
    distinct?: DeviceTypeScalarFieldEnum | DeviceTypeScalarFieldEnum[]
  }

  /**
   * DeviceType findFirstOrThrow
   */
  export type DeviceTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter, which DeviceType to fetch.
     */
    where?: DeviceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: DeviceTypeOrderByWithRelationInput | DeviceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTypes.
     */
    cursor?: DeviceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTypes.
     */
    distinct?: DeviceTypeScalarFieldEnum | DeviceTypeScalarFieldEnum[]
  }

  /**
   * DeviceType findMany
   */
  export type DeviceTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter, which DeviceTypes to fetch.
     */
    where?: DeviceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: DeviceTypeOrderByWithRelationInput | DeviceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceTypes.
     */
    cursor?: DeviceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    distinct?: DeviceTypeScalarFieldEnum | DeviceTypeScalarFieldEnum[]
  }

  /**
   * DeviceType create
   */
  export type DeviceTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceType.
     */
    data: XOR<DeviceTypeCreateInput, DeviceTypeUncheckedCreateInput>
  }

  /**
   * DeviceType createMany
   */
  export type DeviceTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceTypes.
     */
    data: DeviceTypeCreateManyInput | DeviceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceType update
   */
  export type DeviceTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceType.
     */
    data: XOR<DeviceTypeUpdateInput, DeviceTypeUncheckedUpdateInput>
    /**
     * Choose, which DeviceType to update.
     */
    where: DeviceTypeWhereUniqueInput
  }

  /**
   * DeviceType updateMany
   */
  export type DeviceTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceTypes.
     */
    data: XOR<DeviceTypeUpdateManyMutationInput, DeviceTypeUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTypes to update
     */
    where?: DeviceTypeWhereInput
    /**
     * Limit how many DeviceTypes to update.
     */
    limit?: number
  }

  /**
   * DeviceType upsert
   */
  export type DeviceTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceType to update in case it exists.
     */
    where: DeviceTypeWhereUniqueInput
    /**
     * In case the DeviceType found by the `where` argument doesn't exist, create a new DeviceType with this data.
     */
    create: XOR<DeviceTypeCreateInput, DeviceTypeUncheckedCreateInput>
    /**
     * In case the DeviceType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceTypeUpdateInput, DeviceTypeUncheckedUpdateInput>
  }

  /**
   * DeviceType delete
   */
  export type DeviceTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
    /**
     * Filter which DeviceType to delete.
     */
    where: DeviceTypeWhereUniqueInput
  }

  /**
   * DeviceType deleteMany
   */
  export type DeviceTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceTypes to delete
     */
    where?: DeviceTypeWhereInput
    /**
     * Limit how many DeviceTypes to delete.
     */
    limit?: number
  }

  /**
   * DeviceType.devices
   */
  export type DeviceType$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * DeviceType without action
   */
  export type DeviceTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceType
     */
    select?: DeviceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceType
     */
    omit?: DeviceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceTypeInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    name: string | null
    serialNumber: string | null
    ip: string | null
    anyDesk: string | null
    typeKey: string | null
    clientId: string | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    serialNumber: string | null
    ip: string | null
    anyDesk: string | null
    typeKey: string | null
    clientId: string | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    serialNumber: number
    ip: number
    anyDesk: number
    typeKey: number
    clientId: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
    serialNumber?: true
    ip?: true
    anyDesk?: true
    typeKey?: true
    clientId?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
    serialNumber?: true
    ip?: true
    anyDesk?: true
    typeKey?: true
    clientId?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    serialNumber?: true
    ip?: true
    anyDesk?: true
    typeKey?: true
    clientId?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    name: string
    serialNumber: string | null
    ip: string | null
    anyDesk: string | null
    typeKey: string
    clientId: string
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serialNumber?: boolean
    ip?: boolean
    anyDesk?: boolean
    typeKey?: boolean
    clientId?: boolean
    type?: boolean | DeviceTypeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>



  export type DeviceSelectScalar = {
    id?: boolean
    name?: boolean
    serialNumber?: boolean
    ip?: boolean
    anyDesk?: boolean
    typeKey?: boolean
    clientId?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "serialNumber" | "ip" | "anyDesk" | "typeKey" | "clientId", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | DeviceTypeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      type: Prisma.$DeviceTypePayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      serialNumber: string | null
      ip: string | null
      anyDesk: string | null
      typeKey: string
      clientId: string
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends DeviceTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceTypeDefaultArgs<ExtArgs>>): Prisma__DeviceTypeClient<$Result.GetResult<Prisma.$DeviceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly serialNumber: FieldRef<"Device", 'String'>
    readonly ip: FieldRef<"Device", 'String'>
    readonly anyDesk: FieldRef<"Device", 'String'>
    readonly typeKey: FieldRef<"Device", 'String'>
    readonly clientId: FieldRef<"Device", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
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


  export const ClientTypeScalarFieldEnum: {
    key: 'key',
    name: 'name',
    icon: 'icon',
    color: 'color'
  };

  export type ClientTypeScalarFieldEnum = (typeof ClientTypeScalarFieldEnum)[keyof typeof ClientTypeScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    legalName: 'legalName',
    taxId: 'taxId',
    address: 'address',
    city: 'city',
    latitude: 'latitude',
    longitude: 'longitude',
    notes: 'notes',
    typeKey: 'typeKey',
    createdAt: 'createdAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    typeKey: 'typeKey',
    parentId: 'parentId'
  };

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const LicenseTypeScalarFieldEnum: {
    key: 'key',
    name: 'name'
  };

  export type LicenseTypeScalarFieldEnum = (typeof LicenseTypeScalarFieldEnum)[keyof typeof LicenseTypeScalarFieldEnum]


  export const DeviceTypeScalarFieldEnum: {
    key: 'key',
    name: 'name',
    icon: 'icon'
  };

  export type DeviceTypeScalarFieldEnum = (typeof DeviceTypeScalarFieldEnum)[keyof typeof DeviceTypeScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serialNumber: 'serialNumber',
    ip: 'ip',
    anyDesk: 'anyDesk',
    typeKey: 'typeKey',
    clientId: 'clientId'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ClientTypeOrderByRelevanceFieldEnum: {
    key: 'key',
    name: 'name',
    icon: 'icon',
    color: 'color'
  };

  export type ClientTypeOrderByRelevanceFieldEnum = (typeof ClientTypeOrderByRelevanceFieldEnum)[keyof typeof ClientTypeOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ClientOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    legalName: 'legalName',
    taxId: 'taxId',
    address: 'address',
    city: 'city',
    notes: 'notes',
    typeKey: 'typeKey'
  };

  export type ClientOrderByRelevanceFieldEnum = (typeof ClientOrderByRelevanceFieldEnum)[keyof typeof ClientOrderByRelevanceFieldEnum]


  export const LicenseOrderByRelevanceFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    typeKey: 'typeKey',
    parentId: 'parentId'
  };

  export type LicenseOrderByRelevanceFieldEnum = (typeof LicenseOrderByRelevanceFieldEnum)[keyof typeof LicenseOrderByRelevanceFieldEnum]


  export const LicenseTypeOrderByRelevanceFieldEnum: {
    key: 'key',
    name: 'name'
  };

  export type LicenseTypeOrderByRelevanceFieldEnum = (typeof LicenseTypeOrderByRelevanceFieldEnum)[keyof typeof LicenseTypeOrderByRelevanceFieldEnum]


  export const DeviceTypeOrderByRelevanceFieldEnum: {
    key: 'key',
    name: 'name',
    icon: 'icon'
  };

  export type DeviceTypeOrderByRelevanceFieldEnum = (typeof DeviceTypeOrderByRelevanceFieldEnum)[keyof typeof DeviceTypeOrderByRelevanceFieldEnum]


  export const DeviceOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    serialNumber: 'serialNumber',
    ip: 'ip',
    anyDesk: 'anyDesk',
    typeKey: 'typeKey',
    clientId: 'clientId'
  };

  export type DeviceOrderByRelevanceFieldEnum = (typeof DeviceOrderByRelevanceFieldEnum)[keyof typeof DeviceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type ClientTypeWhereInput = {
    AND?: ClientTypeWhereInput | ClientTypeWhereInput[]
    OR?: ClientTypeWhereInput[]
    NOT?: ClientTypeWhereInput | ClientTypeWhereInput[]
    key?: StringFilter<"ClientType"> | string
    name?: StringFilter<"ClientType"> | string
    icon?: StringFilter<"ClientType"> | string
    color?: StringFilter<"ClientType"> | string
    clients?: ClientListRelationFilter
  }

  export type ClientTypeOrderByWithRelationInput = {
    key?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    clients?: ClientOrderByRelationAggregateInput
    _relevance?: ClientTypeOrderByRelevanceInput
  }

  export type ClientTypeWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: ClientTypeWhereInput | ClientTypeWhereInput[]
    OR?: ClientTypeWhereInput[]
    NOT?: ClientTypeWhereInput | ClientTypeWhereInput[]
    name?: StringFilter<"ClientType"> | string
    icon?: StringFilter<"ClientType"> | string
    color?: StringFilter<"ClientType"> | string
    clients?: ClientListRelationFilter
  }, "key">

  export type ClientTypeOrderByWithAggregationInput = {
    key?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    _count?: ClientTypeCountOrderByAggregateInput
    _max?: ClientTypeMaxOrderByAggregateInput
    _min?: ClientTypeMinOrderByAggregateInput
  }

  export type ClientTypeScalarWhereWithAggregatesInput = {
    AND?: ClientTypeScalarWhereWithAggregatesInput | ClientTypeScalarWhereWithAggregatesInput[]
    OR?: ClientTypeScalarWhereWithAggregatesInput[]
    NOT?: ClientTypeScalarWhereWithAggregatesInput | ClientTypeScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"ClientType"> | string
    name?: StringWithAggregatesFilter<"ClientType"> | string
    icon?: StringWithAggregatesFilter<"ClientType"> | string
    color?: StringWithAggregatesFilter<"ClientType"> | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    legalName?: StringFilter<"Client"> | string
    taxId?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    city?: StringFilter<"Client"> | string
    latitude?: FloatFilter<"Client"> | number
    longitude?: FloatFilter<"Client"> | number
    notes?: StringNullableFilter<"Client"> | string | null
    typeKey?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    type?: XOR<ClientTypeScalarRelationFilter, ClientTypeWhereInput>
    licenses?: LicenseListRelationFilter
    devices?: DeviceListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    address?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    notes?: SortOrderInput | SortOrder
    typeKey?: SortOrder
    createdAt?: SortOrder
    type?: ClientTypeOrderByWithRelationInput
    licenses?: LicenseOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
    _relevance?: ClientOrderByRelevanceInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    legalName?: StringFilter<"Client"> | string
    taxId?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    city?: StringFilter<"Client"> | string
    latitude?: FloatFilter<"Client"> | number
    longitude?: FloatFilter<"Client"> | number
    notes?: StringNullableFilter<"Client"> | string | null
    typeKey?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    type?: XOR<ClientTypeScalarRelationFilter, ClientTypeWhereInput>
    licenses?: LicenseListRelationFilter
    devices?: DeviceListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    address?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    notes?: SortOrderInput | SortOrder
    typeKey?: SortOrder
    createdAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    legalName?: StringWithAggregatesFilter<"Client"> | string
    taxId?: StringWithAggregatesFilter<"Client"> | string
    address?: StringWithAggregatesFilter<"Client"> | string
    city?: StringWithAggregatesFilter<"Client"> | string
    latitude?: FloatWithAggregatesFilter<"Client"> | number
    longitude?: FloatWithAggregatesFilter<"Client"> | number
    notes?: StringNullableWithAggregatesFilter<"Client"> | string | null
    typeKey?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    id?: StringFilter<"License"> | string
    clientId?: StringFilter<"License"> | string
    typeKey?: StringFilter<"License"> | string
    parentId?: StringNullableFilter<"License"> | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    type?: XOR<LicenseTypeScalarRelationFilter, LicenseTypeWhereInput>
    parent?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
    subLicenses?: LicenseListRelationFilter
  }

  export type LicenseOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    typeKey?: SortOrder
    parentId?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    type?: LicenseTypeOrderByWithRelationInput
    parent?: LicenseOrderByWithRelationInput
    subLicenses?: LicenseOrderByRelationAggregateInput
    _relevance?: LicenseOrderByRelevanceInput
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    clientId?: StringFilter<"License"> | string
    typeKey?: StringFilter<"License"> | string
    parentId?: StringNullableFilter<"License"> | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    type?: XOR<LicenseTypeScalarRelationFilter, LicenseTypeWhereInput>
    parent?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
    subLicenses?: LicenseListRelationFilter
  }, "id">

  export type LicenseOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    typeKey?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"License"> | string
    clientId?: StringWithAggregatesFilter<"License"> | string
    typeKey?: StringWithAggregatesFilter<"License"> | string
    parentId?: StringNullableWithAggregatesFilter<"License"> | string | null
  }

  export type LicenseTypeWhereInput = {
    AND?: LicenseTypeWhereInput | LicenseTypeWhereInput[]
    OR?: LicenseTypeWhereInput[]
    NOT?: LicenseTypeWhereInput | LicenseTypeWhereInput[]
    key?: StringFilter<"LicenseType"> | string
    name?: StringFilter<"LicenseType"> | string
    licenses?: LicenseListRelationFilter
  }

  export type LicenseTypeOrderByWithRelationInput = {
    key?: SortOrder
    name?: SortOrder
    licenses?: LicenseOrderByRelationAggregateInput
    _relevance?: LicenseTypeOrderByRelevanceInput
  }

  export type LicenseTypeWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: LicenseTypeWhereInput | LicenseTypeWhereInput[]
    OR?: LicenseTypeWhereInput[]
    NOT?: LicenseTypeWhereInput | LicenseTypeWhereInput[]
    name?: StringFilter<"LicenseType"> | string
    licenses?: LicenseListRelationFilter
  }, "key">

  export type LicenseTypeOrderByWithAggregationInput = {
    key?: SortOrder
    name?: SortOrder
    _count?: LicenseTypeCountOrderByAggregateInput
    _max?: LicenseTypeMaxOrderByAggregateInput
    _min?: LicenseTypeMinOrderByAggregateInput
  }

  export type LicenseTypeScalarWhereWithAggregatesInput = {
    AND?: LicenseTypeScalarWhereWithAggregatesInput | LicenseTypeScalarWhereWithAggregatesInput[]
    OR?: LicenseTypeScalarWhereWithAggregatesInput[]
    NOT?: LicenseTypeScalarWhereWithAggregatesInput | LicenseTypeScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"LicenseType"> | string
    name?: StringWithAggregatesFilter<"LicenseType"> | string
  }

  export type DeviceTypeWhereInput = {
    AND?: DeviceTypeWhereInput | DeviceTypeWhereInput[]
    OR?: DeviceTypeWhereInput[]
    NOT?: DeviceTypeWhereInput | DeviceTypeWhereInput[]
    key?: StringFilter<"DeviceType"> | string
    name?: StringFilter<"DeviceType"> | string
    icon?: StringFilter<"DeviceType"> | string
    devices?: DeviceListRelationFilter
  }

  export type DeviceTypeOrderByWithRelationInput = {
    key?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    devices?: DeviceOrderByRelationAggregateInput
    _relevance?: DeviceTypeOrderByRelevanceInput
  }

  export type DeviceTypeWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: DeviceTypeWhereInput | DeviceTypeWhereInput[]
    OR?: DeviceTypeWhereInput[]
    NOT?: DeviceTypeWhereInput | DeviceTypeWhereInput[]
    name?: StringFilter<"DeviceType"> | string
    icon?: StringFilter<"DeviceType"> | string
    devices?: DeviceListRelationFilter
  }, "key">

  export type DeviceTypeOrderByWithAggregationInput = {
    key?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    _count?: DeviceTypeCountOrderByAggregateInput
    _max?: DeviceTypeMaxOrderByAggregateInput
    _min?: DeviceTypeMinOrderByAggregateInput
  }

  export type DeviceTypeScalarWhereWithAggregatesInput = {
    AND?: DeviceTypeScalarWhereWithAggregatesInput | DeviceTypeScalarWhereWithAggregatesInput[]
    OR?: DeviceTypeScalarWhereWithAggregatesInput[]
    NOT?: DeviceTypeScalarWhereWithAggregatesInput | DeviceTypeScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"DeviceType"> | string
    name?: StringWithAggregatesFilter<"DeviceType"> | string
    icon?: StringWithAggregatesFilter<"DeviceType"> | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    serialNumber?: StringNullableFilter<"Device"> | string | null
    ip?: StringNullableFilter<"Device"> | string | null
    anyDesk?: StringNullableFilter<"Device"> | string | null
    typeKey?: StringFilter<"Device"> | string
    clientId?: StringFilter<"Device"> | string
    type?: XOR<DeviceTypeScalarRelationFilter, DeviceTypeWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    anyDesk?: SortOrderInput | SortOrder
    typeKey?: SortOrder
    clientId?: SortOrder
    type?: DeviceTypeOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    _relevance?: DeviceOrderByRelevanceInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringFilter<"Device"> | string
    serialNumber?: StringNullableFilter<"Device"> | string | null
    ip?: StringNullableFilter<"Device"> | string | null
    anyDesk?: StringNullableFilter<"Device"> | string | null
    typeKey?: StringFilter<"Device"> | string
    clientId?: StringFilter<"Device"> | string
    type?: XOR<DeviceTypeScalarRelationFilter, DeviceTypeWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    anyDesk?: SortOrderInput | SortOrder
    typeKey?: SortOrder
    clientId?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
    serialNumber?: StringNullableWithAggregatesFilter<"Device"> | string | null
    ip?: StringNullableWithAggregatesFilter<"Device"> | string | null
    anyDesk?: StringNullableWithAggregatesFilter<"Device"> | string | null
    typeKey?: StringWithAggregatesFilter<"Device"> | string
    clientId?: StringWithAggregatesFilter<"Device"> | string
  }

  export type ClientTypeCreateInput = {
    key: string
    name: string
    icon: string
    color: string
    clients?: ClientCreateNestedManyWithoutTypeInput
  }

  export type ClientTypeUncheckedCreateInput = {
    key: string
    name: string
    icon: string
    color: string
    clients?: ClientUncheckedCreateNestedManyWithoutTypeInput
  }

  export type ClientTypeUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    clients?: ClientUpdateManyWithoutTypeNestedInput
  }

  export type ClientTypeUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    clients?: ClientUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type ClientTypeCreateManyInput = {
    key: string
    name: string
    icon: string
    color: string
  }

  export type ClientTypeUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type ClientTypeUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes?: string | null
    createdAt?: Date | string
    type: ClientTypeCreateNestedOneWithoutClientsInput
    licenses?: LicenseCreateNestedManyWithoutClientInput
    devices?: DeviceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes?: string | null
    typeKey: string
    createdAt?: Date | string
    licenses?: LicenseUncheckedCreateNestedManyWithoutClientInput
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ClientTypeUpdateOneRequiredWithoutClientsNestedInput
    licenses?: LicenseUpdateManyWithoutClientNestedInput
    devices?: DeviceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    typeKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUncheckedUpdateManyWithoutClientNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes?: string | null
    typeKey: string
    createdAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    typeKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateInput = {
    id: string
    client: ClientCreateNestedOneWithoutLicensesInput
    type: LicenseTypeCreateNestedOneWithoutLicensesInput
    parent?: LicenseCreateNestedOneWithoutSubLicensesInput
    subLicenses?: LicenseCreateNestedManyWithoutParentInput
  }

  export type LicenseUncheckedCreateInput = {
    id: string
    clientId: string
    typeKey: string
    parentId?: string | null
    subLicenses?: LicenseUncheckedCreateNestedManyWithoutParentInput
  }

  export type LicenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutLicensesNestedInput
    type?: LicenseTypeUpdateOneRequiredWithoutLicensesNestedInput
    parent?: LicenseUpdateOneWithoutSubLicensesNestedInput
    subLicenses?: LicenseUpdateManyWithoutParentNestedInput
  }

  export type LicenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    typeKey?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    subLicenses?: LicenseUncheckedUpdateManyWithoutParentNestedInput
  }

  export type LicenseCreateManyInput = {
    id: string
    clientId: string
    typeKey: string
    parentId?: string | null
  }

  export type LicenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    typeKey?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LicenseTypeCreateInput = {
    key: string
    name: string
    licenses?: LicenseCreateNestedManyWithoutTypeInput
  }

  export type LicenseTypeUncheckedCreateInput = {
    key: string
    name: string
    licenses?: LicenseUncheckedCreateNestedManyWithoutTypeInput
  }

  export type LicenseTypeUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenses?: LicenseUpdateManyWithoutTypeNestedInput
  }

  export type LicenseTypeUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenses?: LicenseUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type LicenseTypeCreateManyInput = {
    key: string
    name: string
  }

  export type LicenseTypeUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseTypeUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceTypeCreateInput = {
    key: string
    name: string
    icon: string
    devices?: DeviceCreateNestedManyWithoutTypeInput
  }

  export type DeviceTypeUncheckedCreateInput = {
    key: string
    name: string
    icon: string
    devices?: DeviceUncheckedCreateNestedManyWithoutTypeInput
  }

  export type DeviceTypeUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    devices?: DeviceUpdateManyWithoutTypeNestedInput
  }

  export type DeviceTypeUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    devices?: DeviceUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type DeviceTypeCreateManyInput = {
    key: string
    name: string
    icon: string
  }

  export type DeviceTypeUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceTypeUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateInput = {
    id?: string
    name: string
    serialNumber?: string | null
    ip?: string | null
    anyDesk?: string | null
    type: DeviceTypeCreateNestedOneWithoutDevicesInput
    client: ClientCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    name: string
    serialNumber?: string | null
    ip?: string | null
    anyDesk?: string | null
    typeKey: string
    clientId: string
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    anyDesk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: DeviceTypeUpdateOneRequiredWithoutDevicesNestedInput
    client?: ClientUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    anyDesk?: NullableStringFieldUpdateOperationsInput | string | null
    typeKey?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateManyInput = {
    id?: string
    name: string
    serialNumber?: string | null
    ip?: string | null
    anyDesk?: string | null
    typeKey: string
    clientId: string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    anyDesk?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    anyDesk?: NullableStringFieldUpdateOperationsInput | string | null
    typeKey?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
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

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientTypeOrderByRelevanceInput = {
    fields: ClientTypeOrderByRelevanceFieldEnum | ClientTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientTypeCountOrderByAggregateInput = {
    key?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    color?: SortOrder
  }

  export type ClientTypeMaxOrderByAggregateInput = {
    key?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    color?: SortOrder
  }

  export type ClientTypeMinOrderByAggregateInput = {
    key?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    color?: SortOrder
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

  export type ClientTypeScalarRelationFilter = {
    is?: ClientTypeWhereInput
    isNot?: ClientTypeWhereInput
  }

  export type LicenseListRelationFilter = {
    every?: LicenseWhereInput
    some?: LicenseWhereInput
    none?: LicenseWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LicenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelevanceInput = {
    fields: ClientOrderByRelevanceFieldEnum | ClientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    address?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    notes?: SortOrder
    typeKey?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    address?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    notes?: SortOrder
    typeKey?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    address?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    notes?: SortOrder
    typeKey?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type LicenseTypeScalarRelationFilter = {
    is?: LicenseTypeWhereInput
    isNot?: LicenseTypeWhereInput
  }

  export type LicenseNullableScalarRelationFilter = {
    is?: LicenseWhereInput | null
    isNot?: LicenseWhereInput | null
  }

  export type LicenseOrderByRelevanceInput = {
    fields: LicenseOrderByRelevanceFieldEnum | LicenseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LicenseCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    typeKey?: SortOrder
    parentId?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    typeKey?: SortOrder
    parentId?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    typeKey?: SortOrder
    parentId?: SortOrder
  }

  export type LicenseTypeOrderByRelevanceInput = {
    fields: LicenseTypeOrderByRelevanceFieldEnum | LicenseTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LicenseTypeCountOrderByAggregateInput = {
    key?: SortOrder
    name?: SortOrder
  }

  export type LicenseTypeMaxOrderByAggregateInput = {
    key?: SortOrder
    name?: SortOrder
  }

  export type LicenseTypeMinOrderByAggregateInput = {
    key?: SortOrder
    name?: SortOrder
  }

  export type DeviceTypeOrderByRelevanceInput = {
    fields: DeviceTypeOrderByRelevanceFieldEnum | DeviceTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DeviceTypeCountOrderByAggregateInput = {
    key?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type DeviceTypeMaxOrderByAggregateInput = {
    key?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type DeviceTypeMinOrderByAggregateInput = {
    key?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type DeviceTypeScalarRelationFilter = {
    is?: DeviceTypeWhereInput
    isNot?: DeviceTypeWhereInput
  }

  export type DeviceOrderByRelevanceInput = {
    fields: DeviceOrderByRelevanceFieldEnum | DeviceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    ip?: SortOrder
    anyDesk?: SortOrder
    typeKey?: SortOrder
    clientId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    ip?: SortOrder
    anyDesk?: SortOrder
    typeKey?: SortOrder
    clientId?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumber?: SortOrder
    ip?: SortOrder
    anyDesk?: SortOrder
    typeKey?: SortOrder
    clientId?: SortOrder
  }

  export type ClientCreateNestedManyWithoutTypeInput = {
    create?: XOR<ClientCreateWithoutTypeInput, ClientUncheckedCreateWithoutTypeInput> | ClientCreateWithoutTypeInput[] | ClientUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTypeInput | ClientCreateOrConnectWithoutTypeInput[]
    createMany?: ClientCreateManyTypeInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ClientCreateWithoutTypeInput, ClientUncheckedCreateWithoutTypeInput> | ClientCreateWithoutTypeInput[] | ClientUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTypeInput | ClientCreateOrConnectWithoutTypeInput[]
    createMany?: ClientCreateManyTypeInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ClientUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ClientCreateWithoutTypeInput, ClientUncheckedCreateWithoutTypeInput> | ClientCreateWithoutTypeInput[] | ClientUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTypeInput | ClientCreateOrConnectWithoutTypeInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutTypeInput | ClientUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ClientCreateManyTypeInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutTypeInput | ClientUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutTypeInput | ClientUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ClientCreateWithoutTypeInput, ClientUncheckedCreateWithoutTypeInput> | ClientCreateWithoutTypeInput[] | ClientUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTypeInput | ClientCreateOrConnectWithoutTypeInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutTypeInput | ClientUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ClientCreateManyTypeInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutTypeInput | ClientUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutTypeInput | ClientUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientTypeCreateNestedOneWithoutClientsInput = {
    create?: XOR<ClientTypeCreateWithoutClientsInput, ClientTypeUncheckedCreateWithoutClientsInput>
    connectOrCreate?: ClientTypeCreateOrConnectWithoutClientsInput
    connect?: ClientTypeWhereUniqueInput
  }

  export type LicenseCreateNestedManyWithoutClientInput = {
    create?: XOR<LicenseCreateWithoutClientInput, LicenseUncheckedCreateWithoutClientInput> | LicenseCreateWithoutClientInput[] | LicenseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutClientInput | LicenseCreateOrConnectWithoutClientInput[]
    createMany?: LicenseCreateManyClientInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutClientInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type LicenseUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<LicenseCreateWithoutClientInput, LicenseUncheckedCreateWithoutClientInput> | LicenseCreateWithoutClientInput[] | LicenseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutClientInput | LicenseCreateOrConnectWithoutClientInput[]
    createMany?: LicenseCreateManyClientInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientTypeUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<ClientTypeCreateWithoutClientsInput, ClientTypeUncheckedCreateWithoutClientsInput>
    connectOrCreate?: ClientTypeCreateOrConnectWithoutClientsInput
    upsert?: ClientTypeUpsertWithoutClientsInput
    connect?: ClientTypeWhereUniqueInput
    update?: XOR<XOR<ClientTypeUpdateToOneWithWhereWithoutClientsInput, ClientTypeUpdateWithoutClientsInput>, ClientTypeUncheckedUpdateWithoutClientsInput>
  }

  export type LicenseUpdateManyWithoutClientNestedInput = {
    create?: XOR<LicenseCreateWithoutClientInput, LicenseUncheckedCreateWithoutClientInput> | LicenseCreateWithoutClientInput[] | LicenseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutClientInput | LicenseCreateOrConnectWithoutClientInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutClientInput | LicenseUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LicenseCreateManyClientInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutClientInput | LicenseUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutClientInput | LicenseUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutClientNestedInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutClientInput | DeviceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutClientInput | DeviceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutClientInput | DeviceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type LicenseUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<LicenseCreateWithoutClientInput, LicenseUncheckedCreateWithoutClientInput> | LicenseCreateWithoutClientInput[] | LicenseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutClientInput | LicenseCreateOrConnectWithoutClientInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutClientInput | LicenseUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LicenseCreateManyClientInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutClientInput | LicenseUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutClientInput | LicenseUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutClientInput | DeviceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutClientInput | DeviceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutClientInput | DeviceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutLicensesInput = {
    create?: XOR<ClientCreateWithoutLicensesInput, ClientUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutLicensesInput
    connect?: ClientWhereUniqueInput
  }

  export type LicenseTypeCreateNestedOneWithoutLicensesInput = {
    create?: XOR<LicenseTypeCreateWithoutLicensesInput, LicenseTypeUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: LicenseTypeCreateOrConnectWithoutLicensesInput
    connect?: LicenseTypeWhereUniqueInput
  }

  export type LicenseCreateNestedOneWithoutSubLicensesInput = {
    create?: XOR<LicenseCreateWithoutSubLicensesInput, LicenseUncheckedCreateWithoutSubLicensesInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutSubLicensesInput
    connect?: LicenseWhereUniqueInput
  }

  export type LicenseCreateNestedManyWithoutParentInput = {
    create?: XOR<LicenseCreateWithoutParentInput, LicenseUncheckedCreateWithoutParentInput> | LicenseCreateWithoutParentInput[] | LicenseUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutParentInput | LicenseCreateOrConnectWithoutParentInput[]
    createMany?: LicenseCreateManyParentInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type LicenseUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<LicenseCreateWithoutParentInput, LicenseUncheckedCreateWithoutParentInput> | LicenseCreateWithoutParentInput[] | LicenseUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutParentInput | LicenseCreateOrConnectWithoutParentInput[]
    createMany?: LicenseCreateManyParentInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutLicensesNestedInput = {
    create?: XOR<ClientCreateWithoutLicensesInput, ClientUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutLicensesInput
    upsert?: ClientUpsertWithoutLicensesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutLicensesInput, ClientUpdateWithoutLicensesInput>, ClientUncheckedUpdateWithoutLicensesInput>
  }

  export type LicenseTypeUpdateOneRequiredWithoutLicensesNestedInput = {
    create?: XOR<LicenseTypeCreateWithoutLicensesInput, LicenseTypeUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: LicenseTypeCreateOrConnectWithoutLicensesInput
    upsert?: LicenseTypeUpsertWithoutLicensesInput
    connect?: LicenseTypeWhereUniqueInput
    update?: XOR<XOR<LicenseTypeUpdateToOneWithWhereWithoutLicensesInput, LicenseTypeUpdateWithoutLicensesInput>, LicenseTypeUncheckedUpdateWithoutLicensesInput>
  }

  export type LicenseUpdateOneWithoutSubLicensesNestedInput = {
    create?: XOR<LicenseCreateWithoutSubLicensesInput, LicenseUncheckedCreateWithoutSubLicensesInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutSubLicensesInput
    upsert?: LicenseUpsertWithoutSubLicensesInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutSubLicensesInput, LicenseUpdateWithoutSubLicensesInput>, LicenseUncheckedUpdateWithoutSubLicensesInput>
  }

  export type LicenseUpdateManyWithoutParentNestedInput = {
    create?: XOR<LicenseCreateWithoutParentInput, LicenseUncheckedCreateWithoutParentInput> | LicenseCreateWithoutParentInput[] | LicenseUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutParentInput | LicenseCreateOrConnectWithoutParentInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutParentInput | LicenseUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: LicenseCreateManyParentInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutParentInput | LicenseUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutParentInput | LicenseUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type LicenseUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<LicenseCreateWithoutParentInput, LicenseUncheckedCreateWithoutParentInput> | LicenseCreateWithoutParentInput[] | LicenseUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutParentInput | LicenseCreateOrConnectWithoutParentInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutParentInput | LicenseUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: LicenseCreateManyParentInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutParentInput | LicenseUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutParentInput | LicenseUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type LicenseCreateNestedManyWithoutTypeInput = {
    create?: XOR<LicenseCreateWithoutTypeInput, LicenseUncheckedCreateWithoutTypeInput> | LicenseCreateWithoutTypeInput[] | LicenseUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutTypeInput | LicenseCreateOrConnectWithoutTypeInput[]
    createMany?: LicenseCreateManyTypeInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type LicenseUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<LicenseCreateWithoutTypeInput, LicenseUncheckedCreateWithoutTypeInput> | LicenseCreateWithoutTypeInput[] | LicenseUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutTypeInput | LicenseCreateOrConnectWithoutTypeInput[]
    createMany?: LicenseCreateManyTypeInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type LicenseUpdateManyWithoutTypeNestedInput = {
    create?: XOR<LicenseCreateWithoutTypeInput, LicenseUncheckedCreateWithoutTypeInput> | LicenseCreateWithoutTypeInput[] | LicenseUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutTypeInput | LicenseCreateOrConnectWithoutTypeInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutTypeInput | LicenseUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: LicenseCreateManyTypeInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutTypeInput | LicenseUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutTypeInput | LicenseUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type LicenseUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<LicenseCreateWithoutTypeInput, LicenseUncheckedCreateWithoutTypeInput> | LicenseCreateWithoutTypeInput[] | LicenseUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutTypeInput | LicenseCreateOrConnectWithoutTypeInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutTypeInput | LicenseUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: LicenseCreateManyTypeInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutTypeInput | LicenseUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutTypeInput | LicenseUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type DeviceCreateNestedManyWithoutTypeInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUpdateManyWithoutTypeNestedInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutTypeInput | DeviceUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutTypeInput | DeviceUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutTypeInput | DeviceUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutTypeInput | DeviceUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutTypeInput | DeviceUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutTypeInput | DeviceUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceTypeCreateNestedOneWithoutDevicesInput = {
    create?: XOR<DeviceTypeCreateWithoutDevicesInput, DeviceTypeUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: DeviceTypeCreateOrConnectWithoutDevicesInput
    connect?: DeviceTypeWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutDevicesInput = {
    create?: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDevicesInput
    connect?: ClientWhereUniqueInput
  }

  export type DeviceTypeUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<DeviceTypeCreateWithoutDevicesInput, DeviceTypeUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: DeviceTypeCreateOrConnectWithoutDevicesInput
    upsert?: DeviceTypeUpsertWithoutDevicesInput
    connect?: DeviceTypeWhereUniqueInput
    update?: XOR<XOR<DeviceTypeUpdateToOneWithWhereWithoutDevicesInput, DeviceTypeUpdateWithoutDevicesInput>, DeviceTypeUncheckedUpdateWithoutDevicesInput>
  }

  export type ClientUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDevicesInput
    upsert?: ClientUpsertWithoutDevicesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDevicesInput, ClientUpdateWithoutDevicesInput>, ClientUncheckedUpdateWithoutDevicesInput>
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

  export type ClientCreateWithoutTypeInput = {
    id?: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes?: string | null
    createdAt?: Date | string
    licenses?: LicenseCreateNestedManyWithoutClientInput
    devices?: DeviceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutTypeInput = {
    id?: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes?: string | null
    createdAt?: Date | string
    licenses?: LicenseUncheckedCreateNestedManyWithoutClientInput
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutTypeInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTypeInput, ClientUncheckedCreateWithoutTypeInput>
  }

  export type ClientCreateManyTypeInputEnvelope = {
    data: ClientCreateManyTypeInput | ClientCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithWhereUniqueWithoutTypeInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutTypeInput, ClientUncheckedUpdateWithoutTypeInput>
    create: XOR<ClientCreateWithoutTypeInput, ClientUncheckedCreateWithoutTypeInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutTypeInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutTypeInput, ClientUncheckedUpdateWithoutTypeInput>
  }

  export type ClientUpdateManyWithWhereWithoutTypeInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutTypeInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    legalName?: StringFilter<"Client"> | string
    taxId?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    city?: StringFilter<"Client"> | string
    latitude?: FloatFilter<"Client"> | number
    longitude?: FloatFilter<"Client"> | number
    notes?: StringNullableFilter<"Client"> | string | null
    typeKey?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type ClientTypeCreateWithoutClientsInput = {
    key: string
    name: string
    icon: string
    color: string
  }

  export type ClientTypeUncheckedCreateWithoutClientsInput = {
    key: string
    name: string
    icon: string
    color: string
  }

  export type ClientTypeCreateOrConnectWithoutClientsInput = {
    where: ClientTypeWhereUniqueInput
    create: XOR<ClientTypeCreateWithoutClientsInput, ClientTypeUncheckedCreateWithoutClientsInput>
  }

  export type LicenseCreateWithoutClientInput = {
    id: string
    type: LicenseTypeCreateNestedOneWithoutLicensesInput
    parent?: LicenseCreateNestedOneWithoutSubLicensesInput
    subLicenses?: LicenseCreateNestedManyWithoutParentInput
  }

  export type LicenseUncheckedCreateWithoutClientInput = {
    id: string
    typeKey: string
    parentId?: string | null
    subLicenses?: LicenseUncheckedCreateNestedManyWithoutParentInput
  }

  export type LicenseCreateOrConnectWithoutClientInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutClientInput, LicenseUncheckedCreateWithoutClientInput>
  }

  export type LicenseCreateManyClientInputEnvelope = {
    data: LicenseCreateManyClientInput | LicenseCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutClientInput = {
    id?: string
    name: string
    serialNumber?: string | null
    ip?: string | null
    anyDesk?: string | null
    type: DeviceTypeCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    serialNumber?: string | null
    ip?: string | null
    anyDesk?: string | null
    typeKey: string
  }

  export type DeviceCreateOrConnectWithoutClientInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput>
  }

  export type DeviceCreateManyClientInputEnvelope = {
    data: DeviceCreateManyClientInput | DeviceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientTypeUpsertWithoutClientsInput = {
    update: XOR<ClientTypeUpdateWithoutClientsInput, ClientTypeUncheckedUpdateWithoutClientsInput>
    create: XOR<ClientTypeCreateWithoutClientsInput, ClientTypeUncheckedCreateWithoutClientsInput>
    where?: ClientTypeWhereInput
  }

  export type ClientTypeUpdateToOneWithWhereWithoutClientsInput = {
    where?: ClientTypeWhereInput
    data: XOR<ClientTypeUpdateWithoutClientsInput, ClientTypeUncheckedUpdateWithoutClientsInput>
  }

  export type ClientTypeUpdateWithoutClientsInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type ClientTypeUncheckedUpdateWithoutClientsInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseUpsertWithWhereUniqueWithoutClientInput = {
    where: LicenseWhereUniqueInput
    update: XOR<LicenseUpdateWithoutClientInput, LicenseUncheckedUpdateWithoutClientInput>
    create: XOR<LicenseCreateWithoutClientInput, LicenseUncheckedCreateWithoutClientInput>
  }

  export type LicenseUpdateWithWhereUniqueWithoutClientInput = {
    where: LicenseWhereUniqueInput
    data: XOR<LicenseUpdateWithoutClientInput, LicenseUncheckedUpdateWithoutClientInput>
  }

  export type LicenseUpdateManyWithWhereWithoutClientInput = {
    where: LicenseScalarWhereInput
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyWithoutClientInput>
  }

  export type LicenseScalarWhereInput = {
    AND?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    OR?: LicenseScalarWhereInput[]
    NOT?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    id?: StringFilter<"License"> | string
    clientId?: StringFilter<"License"> | string
    typeKey?: StringFilter<"License"> | string
    parentId?: StringNullableFilter<"License"> | string | null
  }

  export type DeviceUpsertWithWhereUniqueWithoutClientInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutClientInput, DeviceUncheckedUpdateWithoutClientInput>
    create: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutClientInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutClientInput, DeviceUncheckedUpdateWithoutClientInput>
  }

  export type DeviceUpdateManyWithWhereWithoutClientInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutClientInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    serialNumber?: StringNullableFilter<"Device"> | string | null
    ip?: StringNullableFilter<"Device"> | string | null
    anyDesk?: StringNullableFilter<"Device"> | string | null
    typeKey?: StringFilter<"Device"> | string
    clientId?: StringFilter<"Device"> | string
  }

  export type ClientCreateWithoutLicensesInput = {
    id?: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes?: string | null
    createdAt?: Date | string
    type: ClientTypeCreateNestedOneWithoutClientsInput
    devices?: DeviceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutLicensesInput = {
    id?: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes?: string | null
    typeKey: string
    createdAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutLicensesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutLicensesInput, ClientUncheckedCreateWithoutLicensesInput>
  }

  export type LicenseTypeCreateWithoutLicensesInput = {
    key: string
    name: string
  }

  export type LicenseTypeUncheckedCreateWithoutLicensesInput = {
    key: string
    name: string
  }

  export type LicenseTypeCreateOrConnectWithoutLicensesInput = {
    where: LicenseTypeWhereUniqueInput
    create: XOR<LicenseTypeCreateWithoutLicensesInput, LicenseTypeUncheckedCreateWithoutLicensesInput>
  }

  export type LicenseCreateWithoutSubLicensesInput = {
    id: string
    client: ClientCreateNestedOneWithoutLicensesInput
    type: LicenseTypeCreateNestedOneWithoutLicensesInput
    parent?: LicenseCreateNestedOneWithoutSubLicensesInput
  }

  export type LicenseUncheckedCreateWithoutSubLicensesInput = {
    id: string
    clientId: string
    typeKey: string
    parentId?: string | null
  }

  export type LicenseCreateOrConnectWithoutSubLicensesInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutSubLicensesInput, LicenseUncheckedCreateWithoutSubLicensesInput>
  }

  export type LicenseCreateWithoutParentInput = {
    id: string
    client: ClientCreateNestedOneWithoutLicensesInput
    type: LicenseTypeCreateNestedOneWithoutLicensesInput
    subLicenses?: LicenseCreateNestedManyWithoutParentInput
  }

  export type LicenseUncheckedCreateWithoutParentInput = {
    id: string
    clientId: string
    typeKey: string
    subLicenses?: LicenseUncheckedCreateNestedManyWithoutParentInput
  }

  export type LicenseCreateOrConnectWithoutParentInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutParentInput, LicenseUncheckedCreateWithoutParentInput>
  }

  export type LicenseCreateManyParentInputEnvelope = {
    data: LicenseCreateManyParentInput | LicenseCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutLicensesInput = {
    update: XOR<ClientUpdateWithoutLicensesInput, ClientUncheckedUpdateWithoutLicensesInput>
    create: XOR<ClientCreateWithoutLicensesInput, ClientUncheckedCreateWithoutLicensesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutLicensesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutLicensesInput, ClientUncheckedUpdateWithoutLicensesInput>
  }

  export type ClientUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ClientTypeUpdateOneRequiredWithoutClientsNestedInput
    devices?: DeviceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    typeKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type LicenseTypeUpsertWithoutLicensesInput = {
    update: XOR<LicenseTypeUpdateWithoutLicensesInput, LicenseTypeUncheckedUpdateWithoutLicensesInput>
    create: XOR<LicenseTypeCreateWithoutLicensesInput, LicenseTypeUncheckedCreateWithoutLicensesInput>
    where?: LicenseTypeWhereInput
  }

  export type LicenseTypeUpdateToOneWithWhereWithoutLicensesInput = {
    where?: LicenseTypeWhereInput
    data: XOR<LicenseTypeUpdateWithoutLicensesInput, LicenseTypeUncheckedUpdateWithoutLicensesInput>
  }

  export type LicenseTypeUpdateWithoutLicensesInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseTypeUncheckedUpdateWithoutLicensesInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseUpsertWithoutSubLicensesInput = {
    update: XOR<LicenseUpdateWithoutSubLicensesInput, LicenseUncheckedUpdateWithoutSubLicensesInput>
    create: XOR<LicenseCreateWithoutSubLicensesInput, LicenseUncheckedCreateWithoutSubLicensesInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutSubLicensesInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutSubLicensesInput, LicenseUncheckedUpdateWithoutSubLicensesInput>
  }

  export type LicenseUpdateWithoutSubLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutLicensesNestedInput
    type?: LicenseTypeUpdateOneRequiredWithoutLicensesNestedInput
    parent?: LicenseUpdateOneWithoutSubLicensesNestedInput
  }

  export type LicenseUncheckedUpdateWithoutSubLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    typeKey?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LicenseUpsertWithWhereUniqueWithoutParentInput = {
    where: LicenseWhereUniqueInput
    update: XOR<LicenseUpdateWithoutParentInput, LicenseUncheckedUpdateWithoutParentInput>
    create: XOR<LicenseCreateWithoutParentInput, LicenseUncheckedCreateWithoutParentInput>
  }

  export type LicenseUpdateWithWhereUniqueWithoutParentInput = {
    where: LicenseWhereUniqueInput
    data: XOR<LicenseUpdateWithoutParentInput, LicenseUncheckedUpdateWithoutParentInput>
  }

  export type LicenseUpdateManyWithWhereWithoutParentInput = {
    where: LicenseScalarWhereInput
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyWithoutParentInput>
  }

  export type LicenseCreateWithoutTypeInput = {
    id: string
    client: ClientCreateNestedOneWithoutLicensesInput
    parent?: LicenseCreateNestedOneWithoutSubLicensesInput
    subLicenses?: LicenseCreateNestedManyWithoutParentInput
  }

  export type LicenseUncheckedCreateWithoutTypeInput = {
    id: string
    clientId: string
    parentId?: string | null
    subLicenses?: LicenseUncheckedCreateNestedManyWithoutParentInput
  }

  export type LicenseCreateOrConnectWithoutTypeInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutTypeInput, LicenseUncheckedCreateWithoutTypeInput>
  }

  export type LicenseCreateManyTypeInputEnvelope = {
    data: LicenseCreateManyTypeInput | LicenseCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type LicenseUpsertWithWhereUniqueWithoutTypeInput = {
    where: LicenseWhereUniqueInput
    update: XOR<LicenseUpdateWithoutTypeInput, LicenseUncheckedUpdateWithoutTypeInput>
    create: XOR<LicenseCreateWithoutTypeInput, LicenseUncheckedCreateWithoutTypeInput>
  }

  export type LicenseUpdateWithWhereUniqueWithoutTypeInput = {
    where: LicenseWhereUniqueInput
    data: XOR<LicenseUpdateWithoutTypeInput, LicenseUncheckedUpdateWithoutTypeInput>
  }

  export type LicenseUpdateManyWithWhereWithoutTypeInput = {
    where: LicenseScalarWhereInput
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyWithoutTypeInput>
  }

  export type DeviceCreateWithoutTypeInput = {
    id?: string
    name: string
    serialNumber?: string | null
    ip?: string | null
    anyDesk?: string | null
    client: ClientCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutTypeInput = {
    id?: string
    name: string
    serialNumber?: string | null
    ip?: string | null
    anyDesk?: string | null
    clientId: string
  }

  export type DeviceCreateOrConnectWithoutTypeInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput>
  }

  export type DeviceCreateManyTypeInputEnvelope = {
    data: DeviceCreateManyTypeInput | DeviceCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithWhereUniqueWithoutTypeInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutTypeInput, DeviceUncheckedUpdateWithoutTypeInput>
    create: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutTypeInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutTypeInput, DeviceUncheckedUpdateWithoutTypeInput>
  }

  export type DeviceUpdateManyWithWhereWithoutTypeInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutTypeInput>
  }

  export type DeviceTypeCreateWithoutDevicesInput = {
    key: string
    name: string
    icon: string
  }

  export type DeviceTypeUncheckedCreateWithoutDevicesInput = {
    key: string
    name: string
    icon: string
  }

  export type DeviceTypeCreateOrConnectWithoutDevicesInput = {
    where: DeviceTypeWhereUniqueInput
    create: XOR<DeviceTypeCreateWithoutDevicesInput, DeviceTypeUncheckedCreateWithoutDevicesInput>
  }

  export type ClientCreateWithoutDevicesInput = {
    id?: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes?: string | null
    createdAt?: Date | string
    type: ClientTypeCreateNestedOneWithoutClientsInput
    licenses?: LicenseCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutDevicesInput = {
    id?: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes?: string | null
    typeKey: string
    createdAt?: Date | string
    licenses?: LicenseUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutDevicesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
  }

  export type DeviceTypeUpsertWithoutDevicesInput = {
    update: XOR<DeviceTypeUpdateWithoutDevicesInput, DeviceTypeUncheckedUpdateWithoutDevicesInput>
    create: XOR<DeviceTypeCreateWithoutDevicesInput, DeviceTypeUncheckedCreateWithoutDevicesInput>
    where?: DeviceTypeWhereInput
  }

  export type DeviceTypeUpdateToOneWithWhereWithoutDevicesInput = {
    where?: DeviceTypeWhereInput
    data: XOR<DeviceTypeUpdateWithoutDevicesInput, DeviceTypeUncheckedUpdateWithoutDevicesInput>
  }

  export type DeviceTypeUpdateWithoutDevicesInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceTypeUncheckedUpdateWithoutDevicesInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUpsertWithoutDevicesInput = {
    update: XOR<ClientUpdateWithoutDevicesInput, ClientUncheckedUpdateWithoutDevicesInput>
    create: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDevicesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDevicesInput, ClientUncheckedUpdateWithoutDevicesInput>
  }

  export type ClientUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ClientTypeUpdateOneRequiredWithoutClientsNestedInput
    licenses?: LicenseUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    typeKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyTypeInput = {
    id?: string
    name: string
    legalName: string
    taxId: string
    address: string
    city: string
    latitude: number
    longitude: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type ClientUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUpdateManyWithoutClientNestedInput
    devices?: DeviceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUncheckedUpdateManyWithoutClientNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateManyClientInput = {
    id: string
    typeKey: string
    parentId?: string | null
  }

  export type DeviceCreateManyClientInput = {
    id?: string
    name: string
    serialNumber?: string | null
    ip?: string | null
    anyDesk?: string | null
    typeKey: string
  }

  export type LicenseUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: LicenseTypeUpdateOneRequiredWithoutLicensesNestedInput
    parent?: LicenseUpdateOneWithoutSubLicensesNestedInput
    subLicenses?: LicenseUpdateManyWithoutParentNestedInput
  }

  export type LicenseUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeKey?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    subLicenses?: LicenseUncheckedUpdateManyWithoutParentNestedInput
  }

  export type LicenseUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeKey?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    anyDesk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: DeviceTypeUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    anyDesk?: NullableStringFieldUpdateOperationsInput | string | null
    typeKey?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    anyDesk?: NullableStringFieldUpdateOperationsInput | string | null
    typeKey?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseCreateManyParentInput = {
    id: string
    clientId: string
    typeKey: string
  }

  export type LicenseUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutLicensesNestedInput
    type?: LicenseTypeUpdateOneRequiredWithoutLicensesNestedInput
    subLicenses?: LicenseUpdateManyWithoutParentNestedInput
  }

  export type LicenseUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    typeKey?: StringFieldUpdateOperationsInput | string
    subLicenses?: LicenseUncheckedUpdateManyWithoutParentNestedInput
  }

  export type LicenseUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    typeKey?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseCreateManyTypeInput = {
    id: string
    clientId: string
    parentId?: string | null
  }

  export type LicenseUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutLicensesNestedInput
    parent?: LicenseUpdateOneWithoutSubLicensesNestedInput
    subLicenses?: LicenseUpdateManyWithoutParentNestedInput
  }

  export type LicenseUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    subLicenses?: LicenseUncheckedUpdateManyWithoutParentNestedInput
  }

  export type LicenseUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceCreateManyTypeInput = {
    id?: string
    name: string
    serialNumber?: string | null
    ip?: string | null
    anyDesk?: string | null
    clientId: string
  }

  export type DeviceUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    anyDesk?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    anyDesk?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    anyDesk?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
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