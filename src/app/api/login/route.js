import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JsonBody = await req.json();
  let user = JsonBody["user"];
  let userId = JsonBody["userId"];

  if (user === "ABC" && userId === "123") {
    const payload = { user: user };
    const key = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setIssuer(process.env.JWT_ISSUER)
      .setExpirationTime(process.env.JWT_EXPAIRATION)
      .sign(key);
    return NextResponse.json(
      { status: "Success", massage: "Login Success", token: token },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${token}; path=/; httpOnly`,
        },
      }
    );
  } else {
    return NextResponse.json(
      { status: "Fail", massage: "Invalid User" },
      { status: 401 }
    );
  }
}
