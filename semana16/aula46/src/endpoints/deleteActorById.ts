import { Request, Response } from "express"
import { deleteActor } from "../data/deleteActor"

export const deleteActorById = async (req: Request, res: Response) => {
    try {
        const result = deleteActor(req.params.id)

        res.status(200).send("Ator deletado com sucesso!")
    } catch (error) {
        res.send(error)
    }
}