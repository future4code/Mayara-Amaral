import express from 'express'
import { postCreateUser } from '../../controller/user/postCreateUser'
import { postLogin } from '../../controller/user/postLogin'

export const userRoutes = express.Router()

userRoutes.post("/signup", postCreateUser)
userRoutes.post("/login", postLogin)