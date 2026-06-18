import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getRedirectUrl(request, status) {
  const url = new URL("/", request.url);
  url.searchParams.set("contact", status);
  url.hash = "contact";
  return url;
}

function cleanValue(value) {
  return String(value ?? "").trim();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request) {
  const formData = await request.formData();
  const name = cleanValue(formData.get("name"));
  const email = cleanValue(formData.get("email"));
  const company = cleanValue(formData.get("company"));
  const message = cleanValue(formData.get("message"));
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  if (!name || !email || !message) {
    return NextResponse.redirect(getRedirectUrl(request, "invalid"), 303);
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpSecure = String(process.env.SMTP_SECURE || "true") === "true";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = String(process.env.SMTP_PASS || "").replace(/\s+/g, "");
  const contactToEmail = process.env.CONTACT_TO_EMAIL || smtpUser;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !contactToEmail || !contactFromEmail) {
    return NextResponse.redirect(getRedirectUrl(request, "config-error"), 303);
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  try {
    await transporter.sendMail({
      from: `"Infopyx Contact Form" <${contactFromEmail}>`,
      to: contactToEmail,
      replyTo: email,
      subject: `New Infopyx inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Message:",
        message
      ].join("\n"),
      html: `
        <div style="font-family: Georgia, serif; color: #241a18; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">New Infopyx inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `
    });
  } catch {
    return NextResponse.redirect(getRedirectUrl(request, "error"), 303);
  }

  return NextResponse.redirect(getRedirectUrl(request, "success"), 303);
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
