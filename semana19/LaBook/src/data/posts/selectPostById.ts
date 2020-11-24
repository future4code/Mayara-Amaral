import { getPostInput, Post } from "../../model/Post";
import { connection } from "../connection";

export const selectPostById = async (id: getPostInput): Promise<Post | undefined> => {
    try {
        const result = await connection("labook_posts")
        .select("*")
        .where("id", id.id)

        return result[0]
    } catch (error) {
        return error.message
    }
}