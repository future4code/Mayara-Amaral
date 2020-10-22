import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { users } from './users'

const app: Express = express()
app.use(express.json())
app.use(cors())

//EXERCÍCIO 1
    //a.  Utilizaria o método get.
    //b. indicaria como /users

//EXERCÍCIO 2
    //a. Através de path params.
    //b. Todas as coisas que pensei não deram certo. :(

    enum userType {
        ADMIN = "ADMIN",
        NORMAL = "NORMAL"
    }

    type user = {
        id: number,
        name: string, 
        email: string,
        type: userType,
        age: number
    }

    app.get("/users/:type", (req: Request, res: Response) => {
        try {
            const listOfUsers = users.filter((user) => user.type === req.params.type)          

            res.status(200).send(listOfUsers)

        } catch (error) {

            res.status(400).send({
                message: "Error searching for users"
            })
        }
    })

//EXERCÍCIO 3.
    //a. query params.
    
        app.get("/users", (res: Response, req: Request) => {
            console.log("afffff")

            const usersByName = users.filter(user => user.name.includes(req.query.name as string))

            res.status(200).send(usersByName)
        
        })

    //b.
    



app.listen(3002, () => {console.log("Servidor rodando...")})