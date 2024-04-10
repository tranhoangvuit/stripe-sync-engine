export interface JsonSchema {
  readonly $id: string

  readonly type: 'object'
  readonly properties: Record<string, unknown>
  required: readonly string[]
}

export interface ConfigType {
  /** Postgres database URL including authentication */
  DATABASE_URL: string

  NODE_ENV: string

  /** Database schema name. */
  SCHEMA: string

  /** Stripe secret key used to authenticate requests to the Stripe API. Defaults to empty string */
  STRIPE_SECRET_KEY: string

  /** Webhook secret from Stripe to verify the signature of webhook events. */
  STRIPE_WEBHOOK_SECRET: string

  /** API_KEY is used to authenticate requests to the sync-engine. */
  API_KEY: string

  /** Stripe API version for the webhooks, defaults to 2020-08-27 */
  STRIPE_API_VERSION: string

  /** Port number the API is running on, defaults to 8080 */
  PORT: number

  /**

   * Stripe limits related lists like invoice items in an invoice to 10 by default.
   * By enabling this, sync-engine automatically fetches the remaining elements before saving
   * */
  AUTO_EXPAND_LISTS: boolean
}
