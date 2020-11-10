import { connection } from ".."
import { typeUser } from "../types"

export const insertUser = async (
    id: string,
    name: string, 
    nickname: string, 
    email: string, 
    password: string,
    type: typeUser
    ): Promise<any> => {
        try {
            await connection
            .insert({id, name, nickname, email, password, type})
            .into("usuarios")            
        } catch (error) {
            return error.sqlMessage
        }
    } 