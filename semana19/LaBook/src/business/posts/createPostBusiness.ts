import { insertPost } from "../../data/posts/insertPost"
import { getTokenData } from "../../services/authenticator"
import { generateId } from "../../services/idGenerator"

export const createPostBusiness = async (input: any): Promise<string> => {
    let errorMessage: string = "Bad Request"
    let errorCode: number = 400

    try {
        const token: string = input.token

        if(!token){
            errorCode = 401
            errorMessage = "Unauthorized user."
            throw new Error(errorMessage)
        }

        const userData = getTokenData(token)

        const id = generateId()

        const photo = input.photo
        const description = input.description
        const type = input.type

        if(
            !photo ||
            !description ||
            !type
        ) {
            errorMessage = "Fill in all fields."
            errorCode = 400
            throw new Error(errorMessage)
        }

        const author_id = userData.id

        const created_at = new Date()

        const result = await insertPost({id, photo, description, type, created_at, author_id})

        if(!result.length){
            throw new Error()
        }

        return "Published successfully."
        
    } catch (error) {

        return error.message
    }
}