import { NextResponse } from "next/server";
import { headers } from "next/headers";

export function GET() {
  const allHeader = headers();
  let userName = allHeader.get("userName");
  return NextResponse.json({
    msg: userName,
  });
}
