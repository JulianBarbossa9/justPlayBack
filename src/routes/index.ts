import express, { Router } from "express";
import {readdirSync} from 'fs'


const PATH_ROUTER = `${__dirname}` //With this, return the path of the file exam: src/router
// console.log(PATH_ROUTER)//D:\Documentos\ProyectoSB19\api-rest-ts\src\routes

const router = Router()

const cleanFileName = (fileName: string) => {
  const file = fileName.split('.').shift()// ['item', 'js'] => return ['item']
  return file
}

//A function read how many files exist into the routes (PATH_ROUTER)
readdirSync(PATH_ROUTER).filter((fileName) => { 
  
  // console.log(fileName)//index.ts -- item.ts
  const cleanName = cleanFileName(fileName)

  if(cleanName !== 'index'){
    // console.log(cleanFileName(fileName))// index, item
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`The route is loading... /${cleanName}`)
      router.use(`/${cleanName}`, moduleRouter.router)//This is a dynamic import 
    })
    
  }
})

export { router }