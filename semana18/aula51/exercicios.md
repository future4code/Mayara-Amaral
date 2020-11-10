# Exercícios
## 1.
**a.** O **salt** é uma string aleatória que é adicionada no texto ou senha antes de criar o *hash*.

O **round** está relacionado à segurança da senha ou texto, também é chamado de *cost (custo - numérico)*. Quanto maior o cost maior o tempo de execução do algoritmo e maior a segurança da senha. O recomendado é 12. Eu usei o 12 porque não demora tanto, mas também não é tão rápido.

**b**. 
```ts
export const generateHash = async (text: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST); //algoritmo
    const salt = await bcrypt.genSalt(rounds); //string aleatória
    const result = await bcrypt.hash(text, salt) // criptografia

    return result
}
```
**c.**

```ts

export const compare = async (text: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(text, hash) //compara o texto sem criptografar com o texto criptografado
}
``` 

## 2.

**a.** Devemos modificiar o de cadastro primeiro, se não, não vamos conseguir usar a função compare. Dessa forma não será possível fazer login.

**b.**
```ts
import { Request, Response } from "express";
import {v4} from 'uuid'
import { insertUser } from "../data/insertUser";
import { generateHash } from "../services/generateHash";

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        // gera id aleatório
        const id: string = v4();   

        //desestruturação
        const {name, nickname, email, password, type} = req.body

        if( 
            !name 
            || !nickname 
            || !email 
            || !password 
            || !type
        ){
            throw new Error("Preencha todos os campos.")
        }        

        //criptografa a senha
        const passwordHash: string = await generateHash(password);
        
        //envia as informações para o banco
        const User = await insertUser(id, name, nickname, email, passwordHash, type)
        
        // tratamento de erros

        if(User.includes("type")){
            throw new Error("A chave 'type' deve receber 'ADMIN' ou 'NORMAL'")
        }

        if(User.includes("nickname")){
            throw new Error("Nickname já cadastrado.")
        }

        if(User.includes("email")){
            throw new Error("Email já cadastrado.")
        }

        //console.log(User)

        res.status(200).send({message: "Usuário cadastrado com sucesso."})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}
```

**c.**

```ts
import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authentication";
import { User } from "../types";

export const login = async (req: Request, res: Response): Promise<any> => {
    try {
        // pega as entradas do usuário
        const {email, password} = req.body

        //verifica se o usuário preencheu todos os campos
        if(!email || !password){
            throw new Error("Todos os campos são obrigatórios.")
        }

        //busca pelo email no banco de dados
        const user: User = await selectUserByEmail(email)

        //verifica se a senha é correta
        const passwordIsCorrect = await compare(password, user.password)
        
        //se não for correta lança um erro
        if(!passwordIsCorrect) {
            throw new Error("Usuário ou senha incorretos.")
        }

        //gera um token
        const token: string = generateToken({id: user.id})

        res.status(200).send({
            message: "Usuário logado com sucesso.",
            token
        })
    } catch (error) {
        let {message} = error

        if(error.message === "Illegal arguments: string, undefined"){
            message = "Email de usuário não encontrado!"
        }

        if(message === "Cannot read property 'id' of undefined"){
            message = "Usuário não encontrado ou senha incorreta"
            res.statusCode = 404
        }

        res.status(400).send({message})
    }
}
```

**d.** Não, pois o token e o id continuam sendo gerados do mesmo jeito. Nenhum dos dois foi alterado pela criptografia.