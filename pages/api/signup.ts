import { NextApiRequest, NextApiResponse } from "next";
import * as mongoose from "mongoose";
import {
  DB_CONNECTION_PRODUCTION,
  DB_CONNECTION_DEVELOPMENT
} from "../../server/config/config";

mongoose.connect(
  process.env.NODE_ENV === "development"
    ? DB_CONNECTION_DEVELOPMENT
    : DB_CONNECTION_PRODUCTION,
  { useNewUrlParser: true }
);

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(404).send("Not Found");
    return;
  }
  const body = req.body;
  res.status(200).json({ body });
};
