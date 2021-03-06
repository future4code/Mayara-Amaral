import { User } from "../../model/User"
import { connection } from "../connection"

export const insertUser = async (user: User): Promise <any> => {
    try {
        //console.log(user)

        const result = await connection
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
        .into("labook_users")

        return result

    } catch (error) {
        return error.message
    }
}