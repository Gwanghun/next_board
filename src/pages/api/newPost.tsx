import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

	const { query, method } = req
	console.log(query);
	console.log(method);

  res.status(200).json({ message: 'Hello from Next.js!' })
}