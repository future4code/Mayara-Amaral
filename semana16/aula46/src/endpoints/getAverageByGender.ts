import { Request, Response } from "express";
import { AverageByGender } from "../data/AverageByGender";


export const getAverageByGender = async (req: Request, res: Response) => {
    try {
        const result = await AverageByGender(req.params.gender)
        
        res.status(200).send(result)
    } catch (error) {
        res.send(error)
    }
}