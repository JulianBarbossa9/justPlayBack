import { Response } from "express";

const handleHttpError = (res: Response, error: String, erroRaw?: any) => {
  res.status(500).json({ error: error, raw: erroRaw });
  res.send({error})
  console.log(erroRaw)
}

export { handleHttpError }