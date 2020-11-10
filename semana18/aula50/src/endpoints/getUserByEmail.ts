import { Request, Response } from "express";
import { getUser } from "../data/getUser";

export async function getUserByEmail(req: Request, res: Response): Promise<any> {
    try {
        if(!req.body.email || req.body.email.indexOf("@") === -1){
            throw new Error("Digite um email válido.")
        }

        const user = await getUser(req.body.email)
       
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}