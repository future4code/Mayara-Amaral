import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { createUserBusiness } from "../../business/user/createUserBusiness";
import { selectUserByEmail } from "../../data/user/selectUserByEmail";
import { generateToken } from "../../services/authenticator";

export const postLogin = async (
    req: Request, 
    res: Response
): Promise<void> => {

    try {

        const input = {
            email: req.body.email,
            password: req.body.password
        }

        const token = createUserBusiness(input)        

        res.status(200).send({
            token: token, 
            message: "User successfully logged in!"
        })
        
    } catch (error) {
        res.status(400).send(error.message|| error.sqlMessage)
    }
}