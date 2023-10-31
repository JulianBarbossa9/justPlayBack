import { getAllSports, insertSport, removeSport, updateSportData } from "../service/sport";
import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";

const getSports = async (req: Request, res: Response) => {  
  try {
    const sports = await getAllSports();
    res.send(sports)
  } catch (error) {
    handleHttpError(res, 'Error to get sports', error)
  }
}

const createSport = async (req: Request, res: Response) => {
  try {
    const sports = await insertSport(req.body);
    res.send(sports)
  } catch (error) {
    handleHttpError(res, 'Error to create a sport', error)
  }
}

const updateSport = async (req: Request, res: Response) => {
  try {
    const sports = await updateSportData(+req.params.id , req.body);
    res.send(sports) 
  } catch (error) {
    handleHttpError(res, 'Error to update a sport', error)
  } 
}

const deleteSport = async (req: Request, res: Response) => {
  try {
    const sportDelete = await removeSport(+req.params.id);
    res.send(sportDelete)
  } catch (error) {
    handleHttpError(res, 'Error to delete a sport', error)
  }
}


export { getSports, createSport, updateSport, deleteSport }