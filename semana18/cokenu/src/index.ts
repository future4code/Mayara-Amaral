import express, {Express} from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { postNewUser } from './endpoints/postNewUser'
import { postLoginUser } from './endpoints/postLoginUser'
import { postNewRecipe } from './endpoints/postNewRecipe'
import { getRecipeById } from './endpoints/getRecipeById'
import { getProfile } from './endpoints/getProfile'
import { getProfileById } from './endpoints/getProfileById'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

export const connection = knex({
    client: "mysql", 
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306
    }
})

app.post("/signup", postNewUser)
app.post("/login", postLoginUser)
app.post("/recipe", postNewRecipe)

app.get("/recipe/:id", getRecipeById)
app.get("/user/profile", getProfile)
app.get("/user/:id", getProfileById)

app.listen(3003, () => console.log('Server running on port 3003!'))