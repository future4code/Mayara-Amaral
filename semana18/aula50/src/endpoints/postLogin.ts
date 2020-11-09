import { Request, Response } from "express";
import { login } from "../data/login";
import { getData } from "../services/getData";
import { tokenGenerate } from "../services/tokenGenerate";

export async function postLogin(req: Request, res: Response):Promise<any> {
    try {
        if(!req.body.email || !req.body.password){
            throw new Error("Insira o email e a senha.")
        }

        if(req.body.email.indexOf("@") === -1){
            throw new Error("Email inválido!")
        }

        if(req.body.password.length < 6) {
            throw new Error("Senha inválida!");
            
        }

        const {email, password} = req.body

        const result = await login(email, password)

        const user = result[0]

        if(!user){
            throw new Error("Usuário ou senha incorretos.")
        }

        const token = tokenGenerate({id: user.id})

        res.status(200).send({token})      
        
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}