import { Request, Response } from "express";
import { createActor } from "../data/createActor";

export const putNewActor = async (req: Request, res: Response) =>  {
    try {
        const id = req.body.id
        const name = req.body.name
        const salary = req.body.salary
        const birth_date = new Date (req.body.birth_date)
        const gender = req.body.gender  
        
        await createActor(id, name, salary, birth_date, gender)

        res.status(200).send("Ator adicionado com sucesso!")
        
    } catch (error) {
        res.send(error)
    }
}