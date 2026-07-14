import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Liveness/readiness probe. Returns service status and uptime.
 */
export function GET(): NextResponse {
  return NextResponse.json({
    status: "ok",
    service: "eduverse",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
}
