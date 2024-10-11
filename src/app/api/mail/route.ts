import schema from "@/validation/schema";
import { NextRequest, NextResponse as res } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validatedBody = schema.safeParse(body);
  if (!validatedBody.success) {
    return res.json({ error: validatedBody.error.issues }, { status: 400 });
  }

  return res.json({ message: "Email Sent" }, { status: 200 });
};
