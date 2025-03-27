import "server-only";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

// IMPORTANT: JWT_SECRET should not have NEXT_PUBLIC_ prefix as it's a server-side secret
const secretKey = process.env.NEXT_PUBILC_JWT_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  
  if (!token) return null;
  
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error("Failed to verify session:", error);
    return null;
  }
}

export async function isAuthenticated() {
  const session = await getSession();
  return !!session;
}

// Get user information from the session
export async function getUserFromSession() {
  const session = await getSession();
  if (!session) return null;
  
  return {
    id: session.id,
    email: session.email,
    name: session.name,
    role: session.role
  };
}