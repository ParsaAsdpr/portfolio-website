import schema from "@/validation/schema";
import { cookies } from "next/headers";
import { NextRequest, NextResponse as res } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const smtpConfig: SMTPTransport.Options = {
  host: "sandbox.smtp.mailtrap.io",
  port: parseInt(process.env.MAIL_PORT!),
  secure: process.env.NODE_ENV === "production",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
};

const COOLDOWN_DURATION = 5 * 60 * 1000;

export const POST = async (req: NextRequest) => {
  const cookieStore = cookies();
  const body = await req.json();
  const validatedBody = schema.safeParse(body);
  if (!validatedBody.success) {
    return res.json({ error: validatedBody.error.issues }, { status: 400 });
  }

  const lastSent = cookieStore.get('lastSentEmail')?.value;
  const now = Date.now();

  if (lastSent && now - Number(lastSent) < COOLDOWN_DURATION) {
    return res.json({ error: "Please wait before sending another email." }, { status: 429 });
  }

  const transporter = nodemailer.createTransport(smtpConfig);

  const mail = await transporter.sendMail({
    from: `${validatedBody.data.name}: ${validatedBody.data.email}`,
    to: "parsaasadpour.1999@gmail.com",
    subject: validatedBody.data.subject,
    text: validatedBody.data.message,
  });

  cookieStore.set('lastSentEmail', now.toString(), { maxAge: COOLDOWN_DURATION });

  return res.json({ messageId: mail.messageId }, { status: 200 });
};
