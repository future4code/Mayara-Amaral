import { Request, Response } from "express";
import { selectRecipe } from "../data/selectRecipe";
import { Recipe } from "../types";

export const getRecipeById = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    let errorMessage = "Bad Request"

    try {
        const token: string = req.headers.authorization as string
        const id: string = req.params.id
        const recipe: Recipe | undefined = await selectRecipe(id)

        if(!token){
            errorCode = 401
            throw new Error("Unauthorized. Please enter a token.")
        }

        if(!recipe){
            errorMessage = "Invalid id. No recipes were found."
            throw new Error(errorMessage)
        }

        const year = recipe.creation_date.getFullYear()
        const month = recipe.creation_date.getMonth()
        const day = recipe.creation_date.getDate()

        res.status(200).send({
            id: recipe.id, 
            title: recipe.title, 
            description: recipe.description,
            creation_date: `${day}-${month}-${year}`
        })
    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}