import { Router } from "express";
import { createCity, deleteCity, getCitys, updateCity } from "../controller/city";
import { validateCityCreate } from "../validators/city";

const router = Router()


router.get('/',getCitys )
router.post('/', validateCityCreate, createCity)
router.patch('/:id',validateCityCreate, updateCity)
router.delete('/:id', deleteCity)


export { router }