// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, res: NextApiResponse) => {
  console.log(request.query)

  const users = [
    {id:1, name: 'Richard'},
    {id:2, name: 'Felipe'},
    {id:3, name: 'Richard'},
  ]

  return res.json(users)
}
