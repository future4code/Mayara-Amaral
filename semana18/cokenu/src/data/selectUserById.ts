import { connection } from "..";
import { AuthenticationData, User } from "../types";

export const selectUserById = async (id: string, loggedUser: AuthenticationData, followUser?: boolean): Promise<User | undefined> => {
    try {

        const result = await connection("user_cokenu")
        .select("name", "email")
        .where("id", id)

        if(followUser){
            await connection("followers_relationship")
            .insert({
                id_followed_user: result[0].id,
                id_follower: loggedUser.id
            })
        }

    } catch (error) {
        return error
    }
}