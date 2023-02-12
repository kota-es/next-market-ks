// import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const secret_key = "nextmarket"

const authUser = (req, res) => {
  const token = req.headers.authorization.split(" ")[1]

  if(!token) {
    return res.status(401).json({message: "トークンがありません"})
  }

  try {
    const decoded = jwt.verify(token, secret_key)
    return res.status(200).json({message: "認証成功", email: decoded.email})
  } catch (error) {
    return res.status(401).json({message: "有効なトークンではありません"})
  }
}

export default authUser
