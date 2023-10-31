import { db } from "../config";
import { SportInteface } from "../interface/sport.interface";

const insertSport = async (sport: SportInteface) => {
  const newSport = await db.sport.create({ data: sport });
  return newSport;
};

const getAllSports = async (): Promise<SportInteface[]> => {
  const sports = await db.sport.findMany();
  return sports;
};

const updateSportData = async (
  id: number,
  sport: SportInteface
): Promise<SportInteface> => {
  const sportUpdated = await db.sport.update({ where: { id }, data: sport });
  return sportUpdated;
};

const removeSport = async (id: number): Promise<SportInteface> => {
  const sportExist = await db.sport.findUnique({ where: { id } });
  if (!sportExist) throw new Error("Sport not found");
  return await db.sport.delete({ where: { id } });
};

export { insertSport, getAllSports, updateSportData, removeSport };
