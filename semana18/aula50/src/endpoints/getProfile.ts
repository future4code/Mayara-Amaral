import { Request, Response } from "express";
import { getData } from "../services/getData";
import { getUserById } from "./getUserById";

export async function getProfile(req: Request, res: Response): Promise<any> {
    try {
        const token = req.headers.authorization as string;

        const autenticationData = getData(token)

        const user = await getUserById(autenticationData.id)

        res.status(200).send({
            id: user.id,
            email: user.email
        })

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}