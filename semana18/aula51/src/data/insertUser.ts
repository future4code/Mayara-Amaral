import { connection } from ".."
import { USER_ROLE } from "../types"

export const insertUser = async (
    id: string,
    name: string, 
    nickname: string, 
    email: string, 
    password: string,
    role: USER_ROLE
    ): Promise<any> => {
        try {
            await connection
            .insert({id, name, nickname, email, password, role})
            .into("usuarios")            
        } catch (error) {
            return error.sqlMessage
        }
    } 