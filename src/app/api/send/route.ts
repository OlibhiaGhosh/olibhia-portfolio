import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:any, res:any) {
  try {
    const  emailData = req.body
    const { data, error } = await resend.emails.send({
      from: emailData.from,
      to: ['olibhia0712@gmail.com'],
      subject: emailData.subject,
      react: EmailTemplate({ Content: emailData.Content }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}