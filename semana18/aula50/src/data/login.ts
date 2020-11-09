import { connection } from "..";

export async function login(email: string, password: string):Promise<any> {
    try {
        const user = await connection
        .select("id")
        .from("userTable")
        .where("email", email).andWhere("password", password)

        return user
    } catch (error) {
        return error.sqlMessage || error.message
    }
}