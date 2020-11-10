import express, {Express} from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { postSignUp } from './endpoints/postSignUp'
import { getUserByEmail } from './endpoints/getUserByEmail'
import { postLogin } from './endpoints/postLogin'
import { getProfile } from './endpoints/getProfile'

const app: Express = express()

app.use(express.json())
app.use(cors())

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

app.post("/signup", postSignUp)

app.get("/user", getUserByEmail)

app.post("/login", postLogin)

app.get("/user/profile", getProfile)

app.listen(3003, () => {console.log("Servidor rodando na porta 3003")})