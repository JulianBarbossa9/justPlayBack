import { Router } from "express";
import { createGame, deleteGame, getCityGames, getDateGames, getGames, getSportGames, updateGame } from "../controller/game";
import { validateGameCreate, validateGameUpdate } from "../validators/game";

const router = Router()


router.get('/', getGames)
router.post('/', validateGameCreate, createGame)
router.patch('/:id', validateGameUpdate, updateGame)
router.delete('/:id', deleteGame)

router.get('/:cityId', getCityGames)
router.get('/date/:limit', getDateGames)
router.get('/sports/:sportId', getSportGames)

export { router }
