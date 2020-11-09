import { connection } from "..";

export async function getUser(email: string): Promise<any> {
    try {
        const result = await connection
        .select("*")
        .from("userTable")
        .where("email", email)      

       return result[0]
    } catch (error) {
        return error.sqlMessage || error.message
    }
}