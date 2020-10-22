import express,{Express, Request, Response} from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app: Express = express()

app.use(express.json())
app.use(cors())

// pega todos os países

app.get("/countries/all", (req: Request, res:Response) => {
    const result: Array<object> = countries.map((country, index) => {
        return {id: index, name: country.name}
    })

    res.status(200).send(result)
})

app.get("/countries/search", (req:Request, res:Response) => {
    let errorCode: number = 400
    let errorMessage: string = "Coloque um parametro de pesquisa"
  
    try {
        
        if(!req.query.name){
            throw new Error()
        }

        let result: country[] = countries

        if (req.query.name) {
           result = result.filter(
              country => country.name.includes(req.query.name as string)
           )
        }

        if (req.query.capital) {
           result = result.filter(
              country => country.capital.includes(req.query.capital as string)
           )
        }

        if (req.query.continent) {
           result = result.filter(
              country => country.continent.includes(req.query.continent as string)
           )
        }

        res.status(200).send(result)
      

    } catch (error) {
        res.status(errorCode).end(errorMessage)
    }
    
})
app.get("/countries/:id", (req:Request, res:Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )

    res.status(200).send(result)
})


app.listen(3003, () => console.log("Servidor rodando..."))