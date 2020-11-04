import { Request, Response } from "express";
import { updateUserById } from "../data/updateUserById";

export const postUserById = async (req: Request, res: Response) => {
    let errorMessage: string = "Unable to update user"
    try {
        if(!req.body.name || !req.body.nickname) {
            errorMessage = "Incomplete fields"
            throw new Error()
        }
       
        await updateUserById(req.params.id, req.body.name, req.body.nickname)
        res.status(200).end("User successfully changed")

    } catch (error) {
        res.status(400).send(errorMessage)
    }
}