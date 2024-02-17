/**
 * The NodeJS namespace is used to declare special collections of definitions
 * that are globally available in a JavaScript or TypeScript project.
 *
 * This file extends the NodeJS namespace with a custom interface for the
 * process environment variables (ProcessEnv). This can be useful when you
 * want to strongly type your environment variables.
 */
declare namespace NodeJS {
  /**
   * The ProcessEnv interface can be extended to describe the shape of your
   * environment variables. For example, if you have an environment variable
   * named 'API_KEY', you can add it to this interface as follows:
   *
   * export interface ProcessEnv {
   *   readonly API_KEY: string;
   * }
   *
   * This way, TypeScript can help you with autocompletion and it can catch
   * potential typos when you try to access your environment variables.
   */
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly PORT: number;
  }
}
