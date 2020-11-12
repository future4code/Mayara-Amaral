import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hashGenerator } from "../services/hashManager";
import { IdGenerate } from "../services/IdGenerate";

export const postNewUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    let errorMessage = "Bad Request"
 
    try {
        const id: string = IdGenerate()

        const {name, email} = req.body

        const password: string = await hashGenerator(req.body.password)

        if(!req.body.name || !req.body.email || !req.body.password){
            errorMessage = "Fill in all fields."
            throw new Error(errorMessage)
        }

        if(req.body.password < 6){
            errorMessage = "Your password must be longer than six characters."
            throw new Error(errorMessage)
        }

        if(!req.body.email.includes("@")){
            errorMessage = "Invalid email."
            throw new Error(errorMessage)
        }

        await insertUser({id, name, email, password})

        const token: string = generateToken({id})

        res.status(200).send({
            message: "User successfully registered.", 
            token: token 
        })
        
    } catch (error) {
        res.status(errorCode).send(errorMessage || error.sqlMessage)
    }
}