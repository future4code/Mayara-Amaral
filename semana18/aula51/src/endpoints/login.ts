import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authentication";
import { User } from "../types";

export const login = async (req: Request, res: Response): Promise<any> => {
    try {
        // pega as entradas do usuário
        const {email, password} = req.body

        //verifica se o usuário preencheu todos os campos
        if(!email || !password){
            throw new Error("Todos os campos são obrigatórios.")
        }

        //busca pelo email no banco de dados
        const user: User = await selectUserByEmail(email)

        //verifica se a senha é correta
        const passwordIsCorrect = await compare(password, user.password)
        
        //se não for correta lança um erro
        if(!passwordIsCorrect) {
            throw new Error("Usuário ou senha incorretos.")
        }

        //gera um token
        const token: string = generateToken({id: user.id})

        res.status(200).send({
            message: "Usuário logado com sucesso.",
            token
        })
    } catch (error) {
        let {message} = error

        if(error.message === "Illegal arguments: string, undefined"){
            message = "Email de usuário não encontrado!"
        }

        if(message === "Cannot read property 'id' of undefined"){
            message = "Usuário não encontrado ou senha incorreta"
            res.statusCode = 404
        }

        res.status(400).send({message})
    }
}