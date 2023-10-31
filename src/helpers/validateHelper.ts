import { Request, Response } from "express"
import { validationResult } from "express-validator"

const validateCreate = (req: Request, res: Response, next: any) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (error: any) {
    res.status(403)
    res.send({ error: error.array() })
  }
}

export { validateCreate }
  