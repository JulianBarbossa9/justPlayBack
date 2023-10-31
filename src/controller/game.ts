
import { getAllGames, getGamesByCity, getGamesBySport, getRecentlyUpdatedGames, insertGame, removeGame, updateGameData } from "../service/game";
import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";


const getGames = async (req: Request, res: Response) => {
  try {
    const games = await getAllGames();
    res.send(games)
  } catch (error) {
    handleHttpError(res, 'Error to get games', error)
  }
}

const createGame = async (req: Request, res: Response) => {
  try {
    const games = await insertGame(req.body);
    res.send(games)
  } catch (error) {
    handleHttpError(res, 'Error to create a game', error)
  }
}

const updateGame = async (req: Request, res: Response) => {
  try {
    const games = await updateGameData(+req.params.id, req.body);
    res.send(games)
  } catch (error) {
    handleHttpError(res, 'Error to update a game', error)
  }
}

const deleteGame = async (req: Request, res: Response) => {
  try {
    const games = await removeGame(+req.params.id);
    res.send(games)
    res.send({ message : 'Game deleted'})
  } catch (error) {
    handleHttpError(res, 'Error to delete a game', error)
  }
}

const getCityGames = async (req: Request, res: Response) => {
  try {
    const games = await getGamesByCity(+req.params.cityId);
    res.send(games)
  } catch (error) {
    handleHttpError(res, 'Error to get games by city', error)
  }
}

const getDateGames = async (req: Request, res: Response) => {
  try {
    const games = await getRecentlyUpdatedGames(+req.params.limit);
    
    res.send(games)
  } catch (error) {
    handleHttpError(res, 'Error to get games by date', error)
  }
}

const getSportGames = async (req: Request, res: Response) => {
  try {
    const games = await getGamesBySport(+req.params.sportId);
    
    res.send(games)
  } catch (error) {
    handleHttpError(res, 'Error to get games by sport', error)
  }
}

export { getGames, createGame, updateGame, deleteGame, getCityGames, getDateGames, getSportGames }


