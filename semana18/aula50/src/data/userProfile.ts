import { connection } from "..";

export async function userProfile(authorization: string): Promise<any> {
    try {
        await connection 
            .select("*")
            .from("userTable")
            .where("id", authorization)
    } catch (error) {
        return error.sqlMessage || error.message
    }
}