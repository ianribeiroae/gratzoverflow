import { NextResponse } from "next/server";

const bypassPages = [
  "/api/login",
  "/api/auth/google/callback",
]

export async function middleware(req, ev) {
  const { origin, pathname } = req.nextUrl;
  const hasCookie = !!req.headers.get("cookie")
  const bypass = bypassPages.includes(pathname)
  if (!hasCookie && !bypass) {
    return NextResponse.redirect(origin + "/api/login");
  }
  return NextResponse.next();
}
