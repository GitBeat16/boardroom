/**
 * Server-only env access. Import `serverEnv` instead of reading
 * `process.env` directly in route handlers or server-side lib code, so a
 * missing variable fails immediately with a clear message instead of
 * surfacing as a confusing downstream error (e.g. a 401 from the AI
 * provider three files away from where the key was actually missing).
 *
 * This file must never be imported from a Client Component — it will
 * throw at import time if required variables are absent, which is the
 * point, but that means it belongs in route handlers / `lib/server`
 * only.
 */

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. Copy .env.example to .env.local and fill it in.`,
    );
  }
  return value;
}

function optionalEnv(name: string): string | undefined {
  return process.env[name];
}

export const serverEnv = {
  /** Anthropic API key powering every AI executive persona. Get one at https://console.anthropic.com */
  get anthropicApiKey() {
    return requireEnv("ANTHROPIC_API_KEY");
  },
  /** Database connection string — shape depends on which DB you wire up in lib/db.ts. */
  get databaseUrl() {
    return requireEnv("DATABASE_URL");
  },
  /** Optional: only needed if you add file/deck uploads via an object store. */
  get blobReadWriteToken() {
    return optionalEnv("BLOB_READ_WRITE_TOKEN");
  },
} as const;
