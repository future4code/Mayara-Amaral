import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { selectUser } from "../data/selectUser";
import { generateToken } from "../services/authenticator";

export const postLoginUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    let errorMessage = "Bad Request"

    try {

        const {email, password} = req.body

        if(!email || !password){
            errorMessage = "Fill in all the fields."
            throw new Error(errorMessage)
        }

        if(!email.includes("@") || !email.includes(".")){
            errorMessage = "Invalid email."
            throw new Error(errorMessage)
        }

        const user = await selectUser(email)
        
        if(!user){
            errorMessage = "User not found."
            throw new Error(errorMessage)
        }

        const passwordIsCorrect = await compare(password, user.password)

        if(!passwordIsCorrect){
            errorCode = 401
            errorMessage= "Username or password is invalid."
            throw new Error(errorMessage)
        }

        const token: string = generateToken({id: user.id})

        res.status(200).send({
            message: "User successfully connected!", 
            token: token
        })

    } catch (error) {
        res.status(errorCode).send(errorMessage || error.sqlMessage)
    }
}