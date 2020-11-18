import { Request, Response } from "express";
import { insertRecipe } from "../data/insertRecipe";
import { getTokenData } from "../services/authenticator";
import { IdGenerate } from "../services/IdGenerate";
import { AuthenticationData } from "../types";

export const postNewRecipe = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    let errorMessage = "Bad Request"

    try {
        const token: string = req.headers.authorization as string

        const tokenData: AuthenticationData = getTokenData(token)
        
        if(!token || !tokenData){
            errorMessage = "Unauthorized user."
            errorCode = 401
            throw new Error(errorMessage)
        }

        const id: string = IdGenerate()

        if(!id) {
            errorMessage = "Could not generate an id."
            errorCode = 500
            throw new Error(errorMessage)
        }

        const {title, description} = req.body

        if(!title || !description){
            errorMessage = "Title and description are mandatory."
            throw new Error(errorMessage)
        }

        const creation_date: Date = new Date()

        if(!creation_date){
            errorMessage = "The date was not created."
            errorCode = 500            
            throw new Error(errorMessage)
        }

        const posted_by: string = tokenData.id

        if(!posted_by) {
            errorMessage = "It is necessary to pass an 'id'."
            throw new Error(errorMessage)
        }

        await insertRecipe({id, title, description, creation_date, posted_by})

        res.status(200).send({
            message: "Recipe successfully created.",
            id: id
        })
    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}