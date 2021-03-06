import { connection } from ".."

export async function createUser(
    id: string,
    email: string, 
    password:string
):Promise<void>{
    try {
        await connection
        .insert({id, email, password})
        .into("userTable")
    } catch (error) {
        return (error.sqlMessage || error.message)
    }
}