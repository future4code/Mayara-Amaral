import { Request, Response } from "express";
import { updateSalaryById } from "../data/updateSalaryById";

export const patchSalaryById = async (req: Request, res: Response) => {
    try {
        const salary = req.body.salary

        const result = updateSalaryById(req.params.id, Number(salary))
        
        res.status(200).send("Salário atualizado com sucesso!")
    } catch (error) {
        res.send(error)
    }
}