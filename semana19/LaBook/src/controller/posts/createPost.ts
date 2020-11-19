import { Request, Response } from "express";
import { stringify } from "querystring";
import { createPostBusiness } from "../../business/posts/createPostBusiness";
import { insertPost } from "../../data/posts/insertPost";
import { createPostInput, stringToPostRole } from "../../model/Post";
import { getTokenData } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

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