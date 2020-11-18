import { Request, Response } from "express";
import { insertPost } from "../../data/posts/insertPost";
import { getTokenData } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const createPost = async (
    req: Request, 
    res: Response
): Promise<void> => {

    let errorMessage: string = "Bad Request"
    let errorCode: number = 400

    try {
        const token: string = req.headers.authorization as string

        if(!token){
            errorCode = 401
            errorMessage = "Unauthorized user."
            throw new Error(errorMessage)
        }

        const userData = getTokenData(token)

        const id = generateId()

        const {photo, description, type} = req.body

        if(
            !photo ||
            !description ||
            !type
        ) {
            errorMessage = "Fill in all fields."
            errorCode = 400
            throw new Error(errorMessage)
        }

        const author_id = userData.id

        const created_at = new Date()

        const result = await insertPost({id, photo, description, type, created_at, author_id})

        if(!result.length){
            throw new Error()
        }
        
        res.status(200).send("Published successfully.")

    } catch (error) {
        res.status(errorCode).send(errorMessage || error.sqlMessage)
    }
}