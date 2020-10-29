import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { getActorById } from './endpoints/getActorById'
import { getActorByName } from './endpoints/getActorByName'
import { getCountByGender } from './endpoints/getCountByGender'
import { patchSalaryById } from './endpoints/patchSalaryById'
import { deleteActorById } from './endpoints/deleteActorById'
import { getAverageByGender } from './endpoints/getAverageByGender'
import { putNewActor } from './endpoints/putNewActor'

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/getActorById/:id", getActorById);

app.get("/getActorByName/:name", getActorByName);

app.get("/getCountByGender", getCountByGender)

app.patch("/salaryUpdate/:id", patchSalaryById)

app.delete("/deleteActor/:id", deleteActorById)

app.get("/getAverage/:gender", getAverageByGender)

app.put("/NewActor", putNewActor)

app.listen(3003, () => {console.log("Servidor rodando...")})
