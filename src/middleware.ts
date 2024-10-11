import { NextResponse, NextRequest as res } from "next/server";

export function middleware(req: res) {
  const lastSent = req.cookies.get("lastSentEmail")?.value;
  const now = Date.now();
  const COOLDOWN_DURATION = 5 * 60 * 1000;

  if (lastSent && now - Number(lastSent) < COOLDOWN_DURATION) {
    return NextResponse.json(
      { error: "Please wait before sending another email." },
      { status: 429 }
    );
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: "/api/mail",
};
