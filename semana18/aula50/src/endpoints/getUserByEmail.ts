import { Request, Response } from "express";
import { getUser } from "../data/getUser";
import { User } from "../types";

export async function getUserByEmail(req: Request, res: Response): Promise<any> {
    try {
        const user = await getUser(req.body.email)
       
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}