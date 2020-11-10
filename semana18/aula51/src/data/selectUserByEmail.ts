import { connection } from "..";
import { User } from "../types";

export const selectUserByEmail = async (email: string): Promise<User> => {
    try {
        const result = await connection("usuarios")
        .select("*")
        .where("email", email)

        if(!result.length){
            throw new Error("Usuário não encontrado")
        }

        return ({
            id: result[0].id,
            name: result[0].name,
            nickname: result[0].nickname,
            email: result[0].email,
            password: result[0].password,
            role: result[0].role
        })
    } catch (error) {
        console.log(error)
        return error
    }
}