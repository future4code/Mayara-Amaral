import { connection } from ".."
import { user } from "../types/user"

export const orderByType = async (type: string): Promise<user[]> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio 
            WHERE type LIKE "%${type}%";
            `)

        if(!result[0]) {
            throw new Error("Nada foi encontrado")
        }        
        
        return result[0]
    } catch (error) {
        return error
    }

}