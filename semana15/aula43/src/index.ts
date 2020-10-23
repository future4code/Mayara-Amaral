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
    //b.
    
        app.get("/user", (req: Request, res: Response) => {
            const busca: string = String(req.query.name).toLowerCase()
            try {
                const userByName = users.filter(user => user.name.toLowerCase().includes(busca))

                if(!userByName.length){
                    throw new Error()
                }
                
                res.status(200).send(userByName)
            } catch (error) {
                res.status(404).send({message: "Não foi encontrado nenhum usuário"})
            }           
           
        
        })

    
    



app.listen(3003, () => {console.log("Servidor rodando...")})