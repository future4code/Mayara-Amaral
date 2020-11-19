import { Request, Response } from "express";
import { createUserBusiness } from "../../business/user/createUserBusiness";

export const postCreateUser = async (
    req: Request, 
    res: Response
): Promise<void> => {

    try {

        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const token = await createUserBusiness(input)

        res.status(200).send({
            token: token, 
            message: "User successfully registered."
        })

    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}