import { NextRequest, NextResponse } from "next/server";

// Dev-safe POST stub for leads
export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "[DEV] Lead submitted successfully" });
}
