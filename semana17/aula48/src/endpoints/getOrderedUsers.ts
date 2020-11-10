import { Request, Response } from "express";
import { orderByType } from "../data/orderByType";

export const getOrderedUsers = async (req: Request, res: Response): Promise<void> => {
    try {

         //pega todos os usuarios ordenados por tipo por pathparams
        const orderedUsersByType = await orderByType(req.params.type as string)

        if(req.params.type.toUpperCase() === "CX" ||
            req.params.type.toUpperCase() === "TEACHER" ||
            req.params.type.toUpperCase() === "OPERATIONS"
        ) {
            res.status(200).send(orderedUsersByType)
        } else {
            throw new Error("Tipo inválido. Tente cx, teacher ou operations.")
        }
             
    } catch (error) {
        res.send({message: error.message})
    }
}