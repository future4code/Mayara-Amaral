import { Post } from "../../types";
import { connection } from "../connection";

export const insertPost = async (post: Post): Promise<any> => {
    try {
        const result = await connection
        .insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            created_at: post.created_at,
            author_id: post.author_id
        })
        .into("labook_posts")
        
        return result
    } catch (error) {
        return error.message
    }
}