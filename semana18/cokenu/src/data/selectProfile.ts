import { connection } from "..";
import { User } from "../types";

export const selectProfile = async (id: string): Promise<User | undefined> => {
    try {

        const result = await connection("user_cokenu")
        .select("id", "name", "email")
        .where("id", id)

        return result[0]

    } catch (error) {
        return error
    }
}