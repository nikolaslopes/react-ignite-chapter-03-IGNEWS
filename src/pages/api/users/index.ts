import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query)

  const users = [{ id: 1, name: 'Nikolas' }]

  return response.json(users)
}
