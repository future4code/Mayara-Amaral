import { connection } from ".."
import { user } from "../types/user"

export const selectUsersByNameOrType = async (order: string, type: string): Promise<user[]> => {
    try {
        const result = connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE ${type} LIKE "%${order}%"
            ORDER BY ${type} DESC;
        `)

        return result
    } catch (error) {
        return error
    }
}