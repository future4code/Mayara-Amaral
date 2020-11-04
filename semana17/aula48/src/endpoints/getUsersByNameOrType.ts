import {Request, Response} from 'express'
import { selectUsersByNameOrType } from '../data/selectUsersByNameOrType'

export const getUsersByNameOrType = async(req: Request,res: Response): Promise<void> => {
    try {
       const users = await selectUsersByNameOrType(req.query.name as string, "name")

       const usersByType = await selectUsersByNameOrType(req.query.type as string, "type")
        
       if(req.query.name) {
           res.status(200).send(users)
       }

       if(req.query.type) {
        res.status(200).send(usersByType)
       }
       /*if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }*/
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }