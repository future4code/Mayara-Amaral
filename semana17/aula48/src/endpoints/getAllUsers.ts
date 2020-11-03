import selectAllUsers from "../data/selectAllUsers"
import {Request, Response} from "express"
import { orderByName } from "../data/orderByName"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        //pega todos os usuários sem ordem  
        const users = await selectAllUsers()

        // pega todos os usuários ordenados por nome
        const orderedUsers = await orderByName(req.query.order as string)

         
        if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
        }

        if(!req.query.order) {
           res.status(200).send(users)
        }

        if(req.query.order !== "name"){
           throw new Error("Ordenação inválida")
        }       

        res.status(200).send(orderedUsers)
 
       
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
 }