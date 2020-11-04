import { Request, Response } from "express";
import { putCreateUser } from "../data/putCreateUser";

export const createUser = async (req: Request, res: Response) => {
   let statusCode = 400
   let errorMessage = "unable to insert user"

   try {
        if(!req.body.name){
            errorMessage = "fill in all fields"
            throw new Error()
        }

        if(!req.body.nickname) {
            errorMessage = "fill in all fields"
            throw new Error()
        }

        if(!req.body.email) {
            errorMessage = "fill in all fields"
            throw new Error()
        }

        await putCreateUser(
            req.body.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

       res.status(200).send({message: "user successfully inserted"})
   } catch (error) {
       res.status(statusCode).send(errorMessage)
   }
}