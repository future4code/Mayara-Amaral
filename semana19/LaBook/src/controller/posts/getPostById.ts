import { Request, Response } from "express";
import { getPostBusiness } from "../../business/posts/getPostBusiness";
import { getPostInput} from "../../model/Post";

export const getPostById = async (req: Request, res: Response): Promise<void> => {
    try {
        const input: getPostInput = { 
            token: req.headers.authorization as string,
            id: req.params.id 
        }

        const post = await getPostBusiness(input)

        res.status(200).send(post)

    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}