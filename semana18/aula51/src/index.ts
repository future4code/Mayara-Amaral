import express, {Express} from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { signUp } from './endpoints/signUp'
import { login } from './endpoints/login'

const app: Express = express()

app.use(express.json())
app.use(cors())

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT) || 3306
    }
})

app.post("/signup", signUp)
app.post("/login", login)

app.listen(3003, () => console.log("Servidor rodando na porta 3003"))