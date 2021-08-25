// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";
import validator from "email-validator";

mail.setApiKey(process.env.SENDGRID_KEY!);

type Data = {
  success: boolean;
  msg: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body;
  
  if (!validator.validate(email))
    return res.status(200).json({ success: false, msg: 'Please enter a valid email' });

  const messageToSend = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;

  const data = {
    to: process.env.EMAIL!,
    from: process.env.EMAIL!,
    subject: "New site message",
    text: messageToSend,
    html: messageToSend.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ success: true, msg: 'Email successfully sent!' });
}
