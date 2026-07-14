import { PrismaClient } from "@prisma/client";
import { getConfig } from "@/core/config";

// Reuse a single PrismaClient across hot reloads in development to avoid
// exhausting database connections.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

/** Lazily construct and memoize the Prisma client. */
export function getPrisma(): PrismaClient {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;

  const config = getConfig();
  const client = new PrismaClient({
    log: config.NODE_ENV === "development" ? ["query", "warn", "error"] : ["warn", "error"],
  });

  if (config.NODE_ENV !== "production") {
    globalForPrisma.prisma = client;
  }
  return client;
}
