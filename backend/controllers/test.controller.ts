import { RequestHandler } from "express";

export const getMessage: RequestHandler = async (req, res) => {
  return res.status(200).json({
    message: "ok",
  });
};
