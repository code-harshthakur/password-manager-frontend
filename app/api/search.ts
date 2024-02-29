type SearchRequestBody = {
  searchBody: string;
};

import { NextApiRequest, NextApiResponse } from "next";

export default async function handlerSearch(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { searchBody }: SearchRequestBody = req.body;
  const response = await fetch(`${process.env.PUBLIC_API_URL}/search`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ body: searchBody }),
  });

  const responseData = await response.json();
  res.status(200).json(responseData);
}
