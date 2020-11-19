import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { createUserBusiness } from "../../business/user/createUserBusiness";
import { loginUserBusiness } from "../../business/user/loginUserBusiness";
import { selectUserByEmail } from "../../data/user/selectUserByEmail";
import { loginUserInput } from "../../model/User";
import { generateToken } from "../../services/authenticator";

export const postLogin = async (
    req: Request, 
    res: Response
): Promise<void> => {

    try {

        const input: loginUserInput = {
            email: req.body.email,
            password: req.body.password
        }

        const token = await loginUserBusiness(input) 
        
        //console.log(token)

        res.status(200).send({
            token: token, 
            message: "User successfully logged in!"
        })
        
    } catch (error) {
        res.status(400).send(error.message|| error.sqlMessage)
    }
}