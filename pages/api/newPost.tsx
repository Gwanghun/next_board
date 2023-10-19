// import { connectDB } from "@/util/database";
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  /*let client = await connectDB;
  console.log(client);*/
  /*const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result);*/

  if (req.method === 'POST') {
    const {title, content} = req.body;
    // Process a POST request
    console.log(req.body);
    console.log(title);
    console.log(content);
    // returnData["method"] = 'POST';
  } else {
    // Handle any other HTTP method
  }

  const returnData = {
    message: 'POST request received'
  };
  res.status(200).json(returnData);
}