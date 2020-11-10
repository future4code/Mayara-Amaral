import { connection } from ".."
import { user } from "../types/user"

export default async function selectAllUsers():Promise<user[]> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }