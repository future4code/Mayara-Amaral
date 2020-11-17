import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";

export const getProfileById = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    let errorMessage = "Bad request"
    let sucessMessage: string = "Searched successfully."

    try {
        const token: string = req.headers.authorization as string

        if(!token){
            errorCode = 401
            throw new Error("Unauthorized. Please enter a token.")
        }

        const loggedUser_id: AuthenticationData = getTokenData(token)

        const user_id: string = req.params.id

        let followUser: boolean | string = req.body.follow

        if(!req.body.follow){
            sucessMessage = "Searched successfully."
            followUser = "bananinha"
        }

        const userProfile = await selectUserById(user_id, loggedUser_id, followUser)

        if(followUser){
            sucessMessage = "User successfully followed."
        }

        if(!followUser){
            sucessMessage = "User successfully unsubscribed."
        }

       

        res.status(200).send({userProfile, sucessMessage})


    } catch (error) {
        res.status(400).send(errorMessage || error.message || error.sqlMessage)
    }
}