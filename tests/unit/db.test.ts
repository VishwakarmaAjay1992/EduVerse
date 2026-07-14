// @vitest-environment node
import type { PrismaClient } from "@prisma/client";
import { describe, expect, it, vi } from "vitest";
import { pingDatabase } from "@/core/db/health";
import { withTransaction } from "@/core/db/transaction";

describe("withTransaction", () => {
  it("runs the callback via the client's $transaction and returns its result", async () => {
    const tx = {} as never;
    const fake = {
      $transaction: vi.fn((fn: (t: never) => Promise<unknown>) => fn(tx)),
    } as unknown as PrismaClient;

    const result = await withTransaction(async () => "done", fake);
    expect(result).toBe("done");
    expect(fake.$transaction).toHaveBeenCalledTimes(1);
  });
});

describe("pingDatabase", () => {
  it("returns true when the query succeeds", async () => {
    const fake = { $queryRaw: vi.fn(async () => [{ ok: 1 }]) } as unknown as PrismaClient;
    expect(await pingDatabase(fake)).toBe(true);
  });

  it("returns false when the query throws", async () => {
    const fake = {
      $queryRaw: vi.fn(async () => {
        throw new Error("down");
      }),
    } as unknown as PrismaClient;
    expect(await pingDatabase(fake)).toBe(false);
  });
});
