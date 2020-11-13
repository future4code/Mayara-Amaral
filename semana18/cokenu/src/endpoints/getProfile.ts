import { Request, Response } from "express";
import { selectProfile } from "../data/selectProfile";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";

export const getProfile = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    let errorMessage = "Bad Request"

    try {
        const token: string = req.headers.authorization as string

        if(!token){
            errorCode = 401
            throw new Error("Unauthorized. Please enter a token.")
        }

        const user_id: AuthenticationData = getTokenData(token)

        if(!user_id){
            errorCode = 500
            errorMessage = "Error fetching id through token."
            throw new Error(errorMessage)
        }

        const user = await selectProfile(user_id.id)

        if(!user) {
            errorCode = 404
            errorMessage = "Could not find user."
            throw new Error(errorMessage)
        }

        res.status(200).send(user)

    } catch (error) {
        res.status(errorCode).send(errorMessage || error.sqlMessage)
    }
}