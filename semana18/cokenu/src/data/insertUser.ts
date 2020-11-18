import { connection } from "..";
import { User } from "../types";

export const insertUser = async (user: User): Promise<void> => {
    try {
        console.log(user)
        
        await connection
        .insert({
            id: user.id,
            name: user.name, 
            email: user.email, 
            password: user.password
        })
        .into("user_cokenu")

    } catch (error) {
        return error.message
    }
}