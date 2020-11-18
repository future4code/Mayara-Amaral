import { connection } from "..";
import { AuthenticationData, User } from "../types";

export const selectUserById = async (user_id: string, loggedUser: AuthenticationData, followUser?: boolean | string): Promise<User | undefined> => {

    try {

        const result = await connection("user_cokenu")
        .select("name", "email")
        .where("id", user_id)

        //seguir 
        if(followUser){
            await connection("followers_relationship")
            .insert({
                id_followed_user: user_id,
                id_follower: loggedUser.id
            })
            
        }

        //deixar de seguir
        if(!followUser){
            await connection("followers_relationship")
            .delete("1")
            .where("id_followed_user", user_id)
        }

        return result[0]
    } catch (error) {
        return error
    } 

}