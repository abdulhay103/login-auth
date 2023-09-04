import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/dashboard")) {
    try {
      const reqHeaders = new Headers(req.headers);
      const token = reqHeaders.get("token");
      const key = new TextEncoder().encode(process.env.JWT_SECRET);
      // const decodedString = await jwtVerify(token, key);

      console.log(token);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.json(
        { status: "Fail", massage: "Unauthorized" },
        { status: 401 }
      );
    }
  }
}
