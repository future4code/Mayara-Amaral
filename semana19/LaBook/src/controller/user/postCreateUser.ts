import { Request, Response } from "express";
import { insertUser } from "../../data/user/insertUser";
import { generateToken } from "../../services/authenticator";
import { hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";
import { User } from "../../types";

export const postCreateUser = async (
    req: Request, 
    res: Response
): Promise<void> => {

    let errorCode: number = 400
    let errorMessage: string = "Bad Request"

    try {
        const id: string = generateId()

        const {name, email, password} = req.body

        if(!name || !email || !password) {
            errorMessage = "Fill in all fields."
            throw new Error(errorMessage)
        }

        const passwordHash: string = await hash(password)

        const user: User = {id: id, name: name, email: email, password: passwordHash}

        const result = await insertUser(user)

        if(result.includes("Duplicate")){
            throw new Error("Email already registered.")
        }

        const token = generateToken({id: id})

        res.status(200).send({
            token: token, 
            message: "User successfully registered."
        })

    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}