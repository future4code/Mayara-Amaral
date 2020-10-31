import express, {Express} from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import knex from 'knex'
import { createUser } from './endpoints/createUser';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
})

app.put("/user", createUser)

app.listen(3003, () => {console.log("Servidor funcionando")})