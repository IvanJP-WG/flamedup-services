import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Temporary dev stub
  return NextResponse.json({ url: "/pricing?success=1" });
}
