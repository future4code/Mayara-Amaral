import { selectPostById } from "../../data/posts/selectPostById";
import { getPostInput, Post } from "../../model/Post";

export const getPostBusiness = async (input: getPostInput):Promise<Post | undefined> => {
    try {
        if(!input.token){
            throw new Error("Not authorized.")
        }

        if(!input.id){
            throw new Error("You need to pass an id.")
        }

        const post = await selectPostById(input)

        if(!post){
            throw new Error('Post not found');
        }

        return post
    } catch (error) {
        return error.message
    }
}