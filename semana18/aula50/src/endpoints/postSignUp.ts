import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { idGenerate } from "../services/idGenerate";
import { tokenGenerate } from "../services/tokenGenerate";

export async function postSignUp(req: Request, res:Response): Promise<any> {
    try {
        if(!req.body.email || req.body.email.indexOf("@") === -1 ){
            throw new Error("Email inválido")
        }

        if(!req.body.password || req.body.password.length < 6 ){
            throw new Error("Coloque uma senha a partir de 6 caracteres")
        }

        const id:string = idGenerate()
        const email: string = req.body.email
        const password: string = req.body.password

        await createUser(id, email, password)

        const token = tokenGenerate({id})

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}