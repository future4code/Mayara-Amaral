import { Request, Response } from "express";
import { insertAddress } from "../data/insertAddress";
import { getTokenData } from "../services/authenticator";
import { address, getAddressByCep } from "../services/getAdressByCep";
import { generateId } from "../services/idGenerator";

export const registerAddress = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400

    try {
        // pega os dados através do token
        const tokenData = getTokenData(
            req.headers.authorization as string
        )

        if(!tokenData){
            throw new Error("Usuário não tem permissão para acessar essa página.");
        }

        const cep: number = req.body.cep

        const numero: number = req.body.numero

        // bate na API para pegar o endereço através do cep
        const address: address = await getAddressByCep(cep)

        const {logradouro, bairro, cidade, estado} = address

        //gera um id do endereço
        const id: string = generateId()

        //pega o id do usuário que foi adicionado o endereço
        const user_id: string = tokenData.id
        
        //insere na tabela de endereços
        await insertAddress(id, logradouro, numero, bairro, cidade, estado, user_id)
        
        res.status(200).send("Endereço cadastrado com sucesso.")
    } catch (error) {
        if(error.message === "jwt must be provided"){
            error.message = "Usuário não tem permissão para acessar essa página"
            errorCode = 401
        }
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}