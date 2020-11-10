import { connection } from ".."
import { user } from "../types/user"

export const orderByName = async (order: string): Promise<user[]> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio 
            ORDER BY name ASC
            `)
        if(!order) {
            throw new Error()
        }
        
        return result[0]
    } catch (error) {
        return error
    }

}