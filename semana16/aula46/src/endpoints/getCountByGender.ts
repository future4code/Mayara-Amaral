import { Request, Response } from "express";
import { selectCountByGender } from "../data/selectCountByGender";

export const getCountByGender = async (req: Request, res: Response) => {
    try {
        const count = await selectCountByGender(req.params.gender)

        res.status(200).send(count)
    } catch (error) {
        res.send(error)
    }
}