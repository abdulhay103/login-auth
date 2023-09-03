import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const secrat = new TextEncoder().encode(process.env.JWT_SECRET);
  const payload = { email: "abc@abc.com", user_id: "123ABC" };

  let token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime("2h")
    .sign(secrat);
  return NextResponse.json({ Token: token });
}

export async function GET(req, res) {
  let secrat = new TextEncoder().encode(process.env.JWT_SECRET);
  const payload = { email: "abc@abc.com", user_id: "123ABC" };
  let token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime("2h")
    .sign(secrat);
  let decoded = await jwtVerify(token, secrat);
  return NextResponse.json({ Token: decoded["payload"] });
}
