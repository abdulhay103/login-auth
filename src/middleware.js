import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/dashboard")) {
    try {
      const reqHeaders = new Headers(req.Headers);
      const token = req.cookies.get("token")["value"];
      const key = new TextEncoder().encode(process.env.JWT_SECRET);
      const decodedString = await jwtVerify(token, key);
      let userName = decodedString["payload"]["user"];
      reqHeaders.set("userName", userName);
      return NextResponse.next({
        request: { headers: reqHeaders },
      });
    } catch (error) {
      return NextResponse.json(
        { status: "Fail", massage: "Unauthorized" },
        { status: 401 }
      );
    }
  }
}
