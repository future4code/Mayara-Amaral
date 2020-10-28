import { Request, Response } from "express";
import { getActor } from "../data/getActor";

export const getActorFromId = async (req: Request, res: Response) => {
    try {
        const actor = await getActor(req.params.id)
        res.status(200).send(actor)
    } catch (error) {
        res.send(error)
    }
}