import { NextApiRequest, NextApiResponse } from "next";

export default async function handlerAdd(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = req.body;
  const response = await fetch(`${process.env.PUBLIC_API_URL}/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  res.status(200).json(responseData);
}
