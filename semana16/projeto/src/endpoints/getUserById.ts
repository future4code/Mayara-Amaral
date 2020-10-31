import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";

export const getUserById = async (req: Request, res: Response): Promise<any> => {
    let errorMessage: string = "User not found"
    let errorCode: number = 400

    try {
        const user = await selectUserById(req.params.id);
       
        if(!user){
            throw new Error()
        }

        res.status(200).send(user);
        
    } catch (error) {
        res.status(errorCode).send(errorMessage);        
    }
}