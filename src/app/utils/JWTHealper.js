const { SignJWT, jwtVerify } = require("jose");

export async function createToken(email) {
  const secrat = new TextEncoder().encode(process.env.JWT_SECRET);
  let token = await new SignJWT({ email: email }).setProtectedHeader({
    alg: "HS256",
  });
}
