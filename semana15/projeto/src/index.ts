import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

// TYPES
type conta = {
    nome: string,
    cpf: number,
    dataDeNascimento: Date,
    saldo: number
}

type gastos = {
    valor: number,
    data: Date,
    descricao: string
}

type usuario = {
    conta: conta,
    extrato: Array<gastos>,
}

// GUARDAR CONTAS
let contas: Array<conta> = []

// GUARDAR USUARIOS
let usuarios: Array<usuario> = []


// PEGA TODAS AS CONTAS

app.get("/contas", (req: Request, res: Response) => {
    console.log(contas)
})

// CRIA UMA CONTA

app.post("/criarConta", (req: Request, res: Response) => {
    
    const nome = req.body.nome
    const cpf = req.body.cpf
    const data = req.body.dataDeNascimento

    const [dia, mes, ano] = data.split("/") //transforma em array e já desestrutura
    
    const diaDeNascimento: Date = new Date(`${ano}-${mes}-${dia}`) // muda para o formato data

    const cadastro = {
        nome: nome,
        cpf: cpf,
        dataDeNascimento: diaDeNascimento,
        saldo: 0
    }

    // verifica idade
    const hoje: Date = new Date()
    
    const idade: number = hoje.getTime() - diaDeNascimento.getTime()

    const idadeEmAnos: number = idade/1000/60/60/24/365

    // smensagem de erro customizada
    let errorMessage: string = "Não foi possível criar usuário, revise os dados."


    try {
        const filtragem = contas.filter(conta => conta.cpf === cpf)

        if(!req.body.nome || !req.body.cpf || !req.body.dataDeNascimento){
            errorMessage = "Preencha todos os campos"
            throw new Error()
        }
       
        if(filtragem.length > 0) {
            errorMessage = "Usuário já cadastrado"
            throw new Error()
        }

        if(idadeEmAnos < 18) {
            errorMessage = "Você precisa ter mais de 18 anos"
            throw new Error()
        }

        contas.push(cadastro)
        res.send("Usuário criado com sucesso!")
        
    } catch (error) {
        
        res.status(400).send(errorMessage)

    }

})

app.get("/verificaSaldo", (req: Request, res: Response) => {
    try {
        const usuarioFiltrado = contas.filter(conta => conta.cpf === Number(req.query.cpf))
        console.log(usuarioFiltrado[0].saldo)
    } catch (error) {
        
    }
})

app.listen(3003, ()=> {console.log("servidor rodando..")})