const { SignJWT, jwtVerify } = require("jose");

export async function createToken(email) {
  const secrat = new TextEncoder().encode(process.env.JWT_SECRET);
  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPAIRATION)
    .sign(secrat);
  return token;
}

export async function verifyToken(token) {
  let secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let decoded = await jwtVerify(token, secret);
  return decoded["payload"];
}
