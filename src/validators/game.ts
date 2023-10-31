import { check } from "express-validator"
import { Request, Response } from "express";
import { validateCreate } from "../helpers/validateHelper";

const validateGameCreate = [
  check('name')
  .exists()
  .notEmpty()
  .isString(),
  check('description')
  .isString()
  .optional({ nullable: true }),
  check('startTime')
  .exists()
  .isISO8601().toDate(),
  check('endTime')
  .exists()
  .isISO8601().toDate(),
  // .isISO8601().toDate(),
  check('cityId')
  .exists()
  .isNumeric(),
  check('sportId')
  .exists()
  .isNumeric(),
  (req : Request, res: Response, next: any) => {
    validateCreate(req, res, next)
  }
]

const validateGameUpdate = [
  check('name')
  .isString()
  .optional({ nullable: false }),
  check('description')
  .isString()
  .optional({ nullable: true }),
  check('startTime')
  .isISO8601().toDate()
  .optional({ nullable: false }),
  check('endTime')
  .isISO8601().toDate()
  .optional({ nullable: false }),
  check('cityId')
  .isNumeric()
  .optional({ nullable: false }),
  check('sportId')
  .isNumeric()
  .optional({ nullable: false }),
  (req : Request, res: Response, next: any) => {
    validateCreate(req, res, next)
  }
]


export { validateGameCreate, validateGameUpdate }