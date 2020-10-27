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

    app.get("/users/search/:type", (req: Request, res: Response) => {
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
    
        app.get("/users/query", (req: Request, res: Response) => {
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

//EXERCÍCIO 4.
    
        app.post("/add", (req: Request, res: Response) => {
            const novoUsuario: user = { 
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                type: req.body.type,
                age: req.body.age
            }

            try {
                if(!req.body.id || !req.body.name || !req.body.email || !req.body.type || !req.body.age) {
                    throw new Error()
                }

                users.push(novoUsuario)    

                res.status(200).send("Usuário criado com sucesso!")            
            } catch (error) {
                res.status(400).send({message: "Não foi possível adicionar usuário. Corrija os dados."})
            }
        })

        //a. Nada mudou, continuou dando sucesso na requisição.
        //b. não, pois o método put serve para alterar dados, e não adicionar novos usuarios.

//EXERCÍCIO 5

    app.put("/users/search/:name/alterar", (req: Request, res: Response) => {
        const usuarioAlterado: user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        }

        users.filter((user, index) => {
            if(user.name === req.params.name){
                users.slice(index, 1)            
            }
        })

        try {
            users.push(usuarioAlterado)
            res.status(200).send("Usuário alterado com sucesso!")
        } catch (error) {
            res.status(400).send({message: "Não foi possível alterar o usuário, verifique todos os campos."})
        }


    })
        



app.listen(3003, () => {console.log("Servidor rodando...")})