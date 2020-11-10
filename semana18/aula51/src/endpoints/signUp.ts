import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateHash } from "../services/generateHash";
import { idGenerator } from "../services/idGenerator";

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        // gera id aleatório
        const id: string = idGenerator();   

        //desestruturação
        const {name, nickname, email, password, type} = req.body

        if( 
            !name 
            || !nickname 
            || !email 
            || !password 
            || !type
        ){
            throw new Error("Preencha todos os campos.")
        }        

        //criptografa a senha
        const passwordHash: string = await generateHash(password);
        
        //envia as informações para o banco
        const User = await insertUser(id, name, nickname, email, passwordHash, type)
        
        // tratamento de erros

        if(User.includes("type")){
            throw new Error("A chave 'type' deve receber 'ADMIN' ou 'NORMAL'")
        }

        if(User.includes("nickname")){
            throw new Error("Nickname já cadastrado.")
        }

        if(User.includes("email")){
            throw new Error("Email já cadastrado.")
        }

        //console.log(User)

        res.status(200).send({message: "Usuário cadastrado com sucesso."})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}