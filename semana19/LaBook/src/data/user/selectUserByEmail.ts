import { User } from "../../model/User"
import { connection } from "../connection"

export const selectUserByEmail = async (email: string): Promise<User> => {
    try {
        const result = await connection("labook_users")
        .select("*")
        .where("email", email)

        return result[0]
    } catch (error) {
        return error.message
    }
}