import { NextResponse, NextRequest as res } from "next/server";

export function middleware(req: res) {
  const lastSent = req.cookies.get("lastSentEmail")?.value;
  const now = Date.now();
  const COOLDOWN_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

  if (lastSent) {
    const elapsed = now - Number(lastSent);
    const remainingTime = Math.ceil((COOLDOWN_DURATION - elapsed) / 1000); // Convert to seconds

    if (elapsed < COOLDOWN_DURATION) {
      return NextResponse.json(
        { error: `Please wait ${remainingTime} seconds before sending another email.` },
        { status: 429 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/mail",
};
