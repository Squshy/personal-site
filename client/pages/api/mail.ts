// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_KEY!)

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body;

  const messageToSend = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;

  console.log(messageToSend)

  const data = {
    to: process.env.EMAIL!,
    from: process.env.EMAIL!,
    subject: 'New site message',
    text: messageToSend,
    html: messageToSend.replace(/\r\n/g, '<br>')
  }

  // mail.send(data)

  res.status(200).json({ name: JSON.stringify(req.body) })
}
