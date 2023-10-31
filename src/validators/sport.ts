import { check } from "express-validator";
import { validateCreate } from "../helpers/validateHelper";
import { Request, Response } from "express";

const validateSportCreate =[
  check('name')
  .exists()
  .notEmpty()
  .isString(),
  check('description')
  .isString()
  .optional({ nullable: true }),
  check('image')
  .isString()
  .optional({ nullable: true }), 
  (req: Request, res: Response, next: any) => {
    validateCreate(req, res, next)  
  }

]

const validateSportUpdate =[ 
    check('name')
    .isString()
    .optional({ nullable: false }),
    check('description')
    .isString()
    .optional({ nullable: true }),
    check('image')
    .isString()
    .optional({ nullable: true }), 
    (req: Request, res: Response, next: any) => {
      validateCreate(req, res, next)  
    }
]

export { validateSportCreate, validateSportUpdate }