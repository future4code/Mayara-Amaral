import express from 'express'
import { createPost } from '../../controller/posts/createPost'

export const postRoutes = express.Router()

postRoutes.post("/create", createPost)