import Redis from "ioredis";
import { getConfig } from "@/core/config";

const globalForRedis = globalThis as unknown as { redis?: Redis };

/** Lazily construct and memoize the Redis client. */
export function getRedis(): Redis {
  if (globalForRedis.redis) return globalForRedis.redis;

  const client = new Redis(getConfig().REDIS_URL, {
    maxRetriesPerRequest: 3,
    lazyConnect: true,
  });

  if (getConfig().NODE_ENV !== "production") {
    globalForRedis.redis = client;
  }
  return client;
}
