import { check } from "express-validator";
import { Request, Response } from "express";
import { validateCreate } from "../helpers/validateHelper";



const validateCityCreate = [
  check('name')
  .exists()
  .notEmpty()
  .isString(),
  check('description')
  .isString()
  .optional({ nullable: true }),
  (req: Request, res: Response, next: any) => {
    validateCreate(req, res, next)  
  }
]

export { validateCityCreate }