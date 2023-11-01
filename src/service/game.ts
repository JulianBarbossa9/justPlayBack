import { db } from "../config";
import { GameInterface, GameShowAllInterface } from "../interface/game.interface";
//This is the logic business


const insertGame = async (game: GameInterface): Promise<GameShowAllInterface> => {
  const newGame = await db.game.create({
    data: {
      name: game.name,
      description: game.description,
      startTime: game.startTime,
      endTime: game.endTime,
      sport: {
        connect: {
          id: game.sportId
        }
      },
      city: {
        connect: {
          id: game.cityId
        }
      }
    },
    select: {
      id: true,
      name: true,
      description: true,
      startTime: true,
      endTime: true,
      city: {
        select: {
          id: true,
          name: true,
          description: true,
          createdAt: true,
          updatedAt: true
        }
      },
      sport: {
        select: {
          id: true,
          name: true,
          image: true,
          description: true,
          team: true,
          createdAt: true,
          updatedAt: true
        }
      }
    }
  });
  return newGame;
}

const getAllGames = async (): Promise<GameShowAllInterface[]> => {
  const games = await db.game.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      startTime: true,
      endTime: true,
      city: {
          select: {
          id: true,
          name: true,
          description: true,
          createdAt: true,
          updatedAt: true
        }
      },
      sport: {
        select: {
          id: true,
          name: true,
          image: true,
          description: true,
          team: true,
          createdAt: true,
          updatedAt: true
        }
      }
    }
  });
  return games;
};


const updateGameData = async (id: number, game: GameInterface): Promise<GameInterface> => {
  const gameUpdated = await db.game.update({where: {id}, data: game});
  return gameUpdated;
}

const removeGame = async (id: number): Promise<GameInterface> => {
  // const gameDeleted = await db.game.delete({where: {id}});
  const gameExist = await db.game.findUnique({where: {id}});
  if(!gameExist) throw new Error('Game not found');
  return await db.game.delete({where: {id}});
}

const getNameGame = async (game: GameInterface): Promise<GameInterface | null> => {
  const nameGame = game.name;
  const getNameGame = await db.game.findFirst({where: {name: nameGame}});
  return getNameGame
}

const getGamesByCity = async (cityId: number): Promise<GameShowAllInterface[]> => {
  const games = await db.game.findMany({
    where: {
      cityId: cityId
    },
    select: {
      id: true,
      name: true,
      description: true,
      startTime: true,
      endTime: true,
      city: {
        select: {
          id: true,
          name: true,
          description: true,
          createdAt: true,
          updatedAt: true
        }
      },
      sport: {
        select: {
          id: true,
          name: true,
          image: true,
          description: true,
          team: true,
          createdAt: true,
          updatedAt: true
        }
      }
    }
  });
  return games;
};


const getRecentlyUpdatedGames = async (limit: number): Promise<GameShowAllInterface[]> => {
  const games = await db.game.findMany({
    orderBy: {
      startTime: 'desc',
    },
    take: limit,
    // limit: limit,
    select: {
      id: true,
      name: true,
      description: true,
      startTime: true,
      endTime: true,
      city: {
        select: {
          id: true,
          name: true,
          description: true,
          createdAt: true,
          updatedAt: true,
        }
      },
      sport: {
        select: {
          id: true,
          name: true,
          image: true,
          description: true,
          team: true,
          createdAt: true,
          updatedAt: true,
        }
      }
    }
  });
  return games;
};

const getGamesBySport = async (sportId: number): Promise<GameShowAllInterface[]> => {
  const games = await db.game.findMany({  
    where: {  
      sportId: sportId
    },
    select: {
      id: true,
      name: true,
      description: true,
      startTime: true,
      endTime: true,
      city: {
        select: {
          id: true,
          name: true,
          description: true,
          createdAt: true,
          updatedAt: true
        }
      },
      sport: {
        select: {
          id: true,
          name: true,
          image: true,
          description: true,
          team: true,
          createdAt: true,
          updatedAt: true
        }
      }
    }
  });
  return games;
}




export { getAllGames, insertGame, updateGameData, removeGame, getNameGame, getGamesByCity, getRecentlyUpdatedGames, getGamesBySport }

