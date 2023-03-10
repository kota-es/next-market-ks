import type { NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import { ExtendedNextApiRequestAuth, DecodedType, ResMessageType } from "@/utils/types"

const secret_key = "nextmarket"

const auth = (handler: Function) => {
  return async(req: ExtendedNextApiRequestAuth, res: NextApiResponse<ResMessageType>) => {
    if(req.method === "GET") {
      return handler(req, res)
    }

    const token = req.headers.authorization.split(" ")[1]

    if(!token) {
      return res.status(401).json({message: " トークンがありません"})
    }

    try {
      const decoded = jwt.verify(token, secret_key)
      req.body.email = (decoded as DecodedType).email
      return handler(req, res)
    } catch (err) {
      return res.status(400).json({message: " トークンが正しくないので、ログインしてください"})
    }
  }
}

export default auth