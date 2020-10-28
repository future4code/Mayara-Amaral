import { Request, Response } from "express";
import { selectActorByName } from "../data/selectActorByName";

export const getActorByName = async (req: Request, res: Response) => {
    try {
        const actorByName = await selectActorByName(req.params.name)
        res.status(200).send(actorByName)
    } catch (error) {
        res.send(error)
    }
}