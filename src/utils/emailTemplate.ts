import type { Schema } from "@/validation/schema";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMessage(message: string): string {
  return escapeHtml(message).replace(/\n/g, "<br />");
}

export function buildContactEmailText(data: Schema): string {
  return [
    "New message from your portfolio contact form",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Subject: ${data.subject}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export function buildContactEmailHtml(data: Schema): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const subject = escapeHtml(data.subject);
  const message = formatMessage(data.message);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Contact</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Open Sans', Arial, sans-serif; color: #333;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color: #ffffff; border: 1px solid #333333; border-radius: 0;">
            <tr>
              <td style="height: 8px; background-color: #f8e179; font-size: 0; line-height: 0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding: 28px 28px 8px 28px;">
                <p style="margin: 0 0 8px 0; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #777777; font-weight: 700;">
                  Portfolio Contact Form
                </p>
                <h1 style="margin: 0; font-size: 28px; line-height: 1.2; font-weight: 700; color: #333333; font-family: 'Bebas Neue', 'Open Sans', Arial, sans-serif;">
                  New Message
                </h1>
                <p style="margin: 12px 0 0 0; font-size: 16px; line-height: 1.6; color: #777777; font-style: italic;">
                  Someone reached out through your website.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 28px 28px 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                  <tr>
                    <td style="padding: 14px 0; border-bottom: 1px solid #eeeeee;">
                      <p style="margin: 0 0 4px 0; font-size: 13px; font-weight: 700; color: #333333;">Name</p>
                      <p style="margin: 0; font-size: 16px; color: #333333;">${name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 0; border-bottom: 1px solid #eeeeee;">
                      <p style="margin: 0 0 4px 0; font-size: 13px; font-weight: 700; color: #333333;">Email</p>
                      <p style="margin: 0; font-size: 16px;">
                        <a href="mailto:${email}" style="color: #333333; text-decoration: underline;">${email}</a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 0; border-bottom: 1px solid #eeeeee;">
                      <p style="margin: 0 0 4px 0; font-size: 13px; font-weight: 700; color: #333333;">Subject</p>
                      <p style="margin: 0; font-size: 16px; color: #333333;">${subject}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 0;">
                      <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 700; color: #333333;">Message</p>
                      <div style="margin: 0; padding: 16px; background-color: #fafafa; border: 1px solid #333333; font-size: 16px; line-height: 1.7; color: #333333;">
                        ${message}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 28px 24px 28px;">
                <table role="presentation" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="border: 1px solid #333333; background-color: #f8e179; padding: 10px 18px;">
                      <a href="mailto:${email}?subject=${encodeURIComponent(`Re: ${data.subject}`)}" style="display: inline-block; font-size: 14px; font-weight: 700; color: #333333; text-decoration: none;">
                        Reply to ${name}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 28px 24px 28px; border-top: 1px solid #eeeeee; background-color: #ffffff;">
                <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #777777; text-align: center;">
                  Sent from your portfolio contact form
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
