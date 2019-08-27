import { NextApiRequest, NextApiResponse } from "next";
import * as JWT from "jsonwebtoken";
import { User } from "../models/user";
import { JWT_SECRET, JWT_ISSUER } from "../config/config";

function signToken<T>(sub: T) {
  const payload = {
    iss: JWT_ISSUER,
    sub,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  };

  return JWT.sign(payload, JWT_SECRET);
}

export async function signUp(req: NextApiRequest, res: NextApiResponse) {
  const user = await new User(req.body).save();
  const token = signToken(user.id);
  return res.status(200).json({ token });
}

export async function signIn(req: NextApiRequest, res: NextApiResponse) {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });
  if (!user || !(await user.isValidPassword(password))) {
    return res.status(401).json({ auth: "error" });
  }
  const token = signToken(user.id);
  return res.status(200).json({ token });
}
