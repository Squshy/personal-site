// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body;
  console.log("Body:",req.body)
  res.status(200).json({ name: JSON.stringify(req.body) })
}
