import express from 'express'
import { createPost } from '../../controller/posts/createPost'
import { getPostById } from '../../controller/posts/getPostById'

export const postRoutes = express.Router()

postRoutes.post("/create", createPost)
postRoutes.get("/:id", getPostById)