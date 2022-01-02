import { nanoid } from "nanoid";
import { SignJWT, jwtVerify } from "jose";
const USER_TOKEN = "user-token";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function verifyAuth(request) {
  const token = request.cookies[USER_TOKEN];

  if (!token) {
    return { error: { message: "Missing user token" } };
  }

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET_KEY)
    );
    return verified.payload;
  } catch (err) {
    return { error: { message: "Your token has expired." } };
  }
}

/**
 * Adds the user token cookie to a response.
 */
export async function setUserCookie(data, response) {
  if (!data) {
    return response.json({ error: { msg: "User data not avaliable" } });
  }
  const token = await new SignJWT(data)
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(JWT_SECRET_KEY));
  response.cookie(USER_TOKEN, token, { httpOnly: true });
  return response;
}
