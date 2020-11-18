import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";

export const getProfileById = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    let errorMessage = "Bad request"

    try {
        const token: string = req.headers.authorization as string

        if(!token){
            errorCode = 401
            throw new Error("Unauthorized. Please enter a token.")
        }

        const loggedUser: AuthenticationData = getTokenData(token)

        const user_id: string = req.params.id
        const followUser: boolean | undefined = req.body.follow 

        const userProfile = await selectUserById(user_id, loggedUser, followUser)

        res.status(200).send({
            userProfile
        })
    } catch (error) {
        res.status(400).send("sucess")
    }
}