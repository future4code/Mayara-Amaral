import { User } from "../../types"
import { connection } from "../connection"

export const createUser = async (user: User): Promise <any> => {
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