import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const contactFormData = await req.json();
    console.log("Contact form data in route: ", contactFormData)
    const { data } = await resend.emails.send({
      from: contactFormData.from,
      to: 'olibhia0712@gmail.com',
      subject: contactFormData.subject,
      html: `<div><p>${contactFormData.content}</p></div>`,
    //   react: React.createElement(EmailTemplate, { content: contactFormData.content }),
      // react: EmailTemplate({ Content: contactFormData.message }),
    });
    return Response.json(data);
  } catch (error: any) {
    console.error("Error sending email:", error);
    return Response.json({ error: error?.message || "Internal Server Error" }, { status: 500 });
  }
}