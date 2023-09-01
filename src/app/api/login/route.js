import { NextResponse } from "next/server";

// login methods
export function POST() {
  return NextResponse.json({
    msg: "Hello",
  });
}

// logout methods
export function GET() {}
