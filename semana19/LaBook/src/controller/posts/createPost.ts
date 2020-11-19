import { Request, Response } from "express";
import { createPostBusiness } from "../../business/posts/createPostBusiness";
import { createPostInput, stringToPostRole } from "../../model/Post";

export const createPost = async (
    req: Request, 
    res: Response
): Promise<void> => {

    try {
        const input: createPostInput = {
            token: req.headers.authorization as string,
            photo: req.body.photo,
            description: req.body.description,
            type: stringToPostRole(req.body.type) 
        }

        const result = await createPostBusiness(input)     
        
        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}