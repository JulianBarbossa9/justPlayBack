import { insertCity, removeCity, showAllCities, updateCityData } from "../service/city";
import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";


const getCitys= async (req: Request, res: Response) => {
  try {
    const cities = await showAllCities();
    res.send(cities)
  } catch (error) {
    handleHttpError(res, 'Error to get cities', error)
  }
}

const createCity = async (req: Request, res: Response) => {
    try {
        const city = await insertCity(req.body);
        res.send(city);
    }
    catch (error) {
        handleHttpError(res, 'Error to create a city', error);
    }
}

const updateCity = async (req: Request, res: Response) => {
  try {
    const city = await updateCityData(+req.params.id, req.body);
    res.send(city)  
  } catch (error) {
    handleHttpError(res, 'Error to update a city', error)
  }
}

const deleteCity = async (req: Request, res: Response) => { 
  try {
    const city = await removeCity(+req.params.id);
    res.send(city);
  } catch (error) {
    handleHttpError(res, 'Error to delete a city', error)
  }
}

export { getCitys, createCity, updateCity, removeCity, deleteCity }