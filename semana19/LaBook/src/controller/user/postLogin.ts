import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { selectUserByEmail } from "../../data/user/selectUserByEmail";
import { generateToken } from "../../services/authenticator";

export const postLogin = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    let errorMessage: string = "Password is invalid."

    try {
        const {email, password} = req.body

        if(!email || !password){
            errorMessage = "Fill in all fields."
            throw new Error(errorMessage)
        }

        const user = await selectUserByEmail(email)

        if(!user){
            errorMessage = "User not found."
            throw new Error(errorMessage)
        }

        const passwordIsCorrect = await compare(password, user.password)

        console.log(passwordIsCorrect)

        if(!passwordIsCorrect){
            errorCode = 401
            throw new Error(errorMessage)
        }

        const token = generateToken({id: user.id})

        res.status(200).send({
            token: token, 
            message: "User successfully logged in!"
        })
    } catch (error) {
        res.status(errorCode).send(errorMessage || error.sqlMessage)
    }
}