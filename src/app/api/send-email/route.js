import { Resend } from "resend";
import ContactNotification from "../../../../react-email-starter/emails/ContactNotifications";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing fields" }), { status: 400 });
    }

    const from = `${process.env.FROM_NAME || "Portfolio"} <onboarding@resend.dev>`;
    const to = process.env.TO_EMAIL;

    const res = await resend.emails.send({
      from,
      to,
      subject: subject || "New portfolio contact",
      replyTo: email,
      react: ContactNotification({ name, email, subject, message }),
    });

    return new Response(JSON.stringify({ success: true, id: res.id || null }), { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), { status: 500 });
  }
}


