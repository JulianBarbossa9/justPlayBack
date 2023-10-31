import { Router } from "express";
import { createSport, deleteSport, getSports, updateSport } from "../controller/sport";
import { validateSportCreate, validateSportUpdate } from "../validators/sport";

const router = Router()


router.get('/', getSports)
router.post('/', validateSportCreate, createSport)
router.patch('/:id',validateSportUpdate, updateSport)
router.delete('/:id', deleteSport)

export { router }