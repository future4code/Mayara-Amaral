import express, {Express} from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { getAllUsers } from './endpoints/getAllUsers'

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: (Number(process.env.DB_PORT) || 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

export const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/users", getAllUsers)

app.listen(3003, () => console.log("Servidor rodando na porta 3003"))