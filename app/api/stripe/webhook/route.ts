import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Temporary dev stub
  console.log("[DEV] Stripe webhook received (stub).");

  // Always respond 200 to prevent Stripe retrying
  return NextResponse.json({ received: true });
}
