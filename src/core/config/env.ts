import { z } from "zod";

/**
 * Environment schema. The application fails fast at startup if configuration
 * is missing or malformed. Secrets are length-checked; TTLs are coerced to
 * positive integers with production-safe defaults.
 */
export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  APP_URL: z.string().url().default("http://localhost:3000"),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"]).default("info"),

  // Phase 1 (the static content site) does not touch these at runtime, so they
  // are optional. When Phase 2 lands (DB/Redis/auth actually wired up), any
  // code path that calls getPrisma/getRedis/JWT helpers should assert these
  // are set — tighten this schema back to required at that point.
  DATABASE_URL: z.string().min(1).optional(),
  REDIS_URL: z.string().min(1).optional(),

  JWT_ACCESS_SECRET: z
    .string()
    .min(16, "JWT_ACCESS_SECRET must be at least 16 characters")
    .optional(),
  JWT_REFRESH_SECRET: z
    .string()
    .min(16, "JWT_REFRESH_SECRET must be at least 16 characters")
    .optional(),
  JWT_ACCESS_TTL: z.coerce.number().int().positive().default(900),
  JWT_REFRESH_TTL: z.coerce.number().int().positive().default(2_592_000),

  RATE_LIMIT_WINDOW_SECONDS: z.coerce.number().int().positive().default(60),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().int().positive().default(120),
});

export type Env = z.infer<typeof envSchema>;

let cached: Env | null = null;

/**
 * Load and validate configuration once, memoized. Throws a ZodError with all
 * problems if the environment is invalid.
 */
export function getConfig(): Env {
  if (cached) return cached;
  cached = envSchema.parse({
    NODE_ENV: process.env.NODE_ENV,
    APP_URL: process.env.APP_URL,
    LOG_LEVEL: process.env.LOG_LEVEL,
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_URL: process.env.REDIS_URL,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    JWT_ACCESS_TTL: process.env.JWT_ACCESS_TTL,
    JWT_REFRESH_TTL: process.env.JWT_REFRESH_TTL,
    RATE_LIMIT_WINDOW_SECONDS: process.env.RATE_LIMIT_WINDOW_SECONDS,
    RATE_LIMIT_MAX_REQUESTS: process.env.RATE_LIMIT_MAX_REQUESTS,
  });
  return cached;
}

/** Clear the memoized config. Intended for tests that stub the environment. */
export function resetConfigForTesting(): void {
  cached = null;
}
