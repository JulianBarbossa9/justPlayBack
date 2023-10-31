import { db } from "../config";
import { CityInterface } from "../interface/city.interface";


const showAllCities = async (): Promise<CityInterface[]> => {
  const cities = await db.city.findMany();
  return cities;
} 

const insertCity = async (city: CityInterface): Promise<CityInterface> => {
  const newCity = await db.city.create({ data: city });
  return newCity;
};

const updateCityData = async (id: number, city: CityInterface): Promise<CityInterface> => { 
  const cityUpdated = await db.city.update({ where: { id }, data: city });  
  return cityUpdated;
}

const removeCity = async (id: number): Promise<CityInterface> => {  
  const cityExist = await db.city.findUnique({ where: { id } });  
  if (!cityExist) throw new Error('City not found');  
  return await db.city.delete({ where: { id } });
}



export { insertCity, showAllCities, updateCityData, removeCity };
