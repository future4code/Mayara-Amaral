import { Request, Response } from "express";
import { selectActorById } from "../data/selectActorById";

export const getActorById = async (req: Request, res: Response) => {
    try {
        const actor = await selectActorById(req.params.id)
        res.status(200).send(actor)
    } catch (error) {
        res.send(error)
    }
}