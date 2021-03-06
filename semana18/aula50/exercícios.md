# Exercícios

**1.**

**a.** Sim, pois há uma maior combinação de caracteres.
**b.** 
```ts
import {v4} from 'uuid'

export function idGenerate():string {
    const id = v4()
    return id
}

```

**2.**

**a.** O código está fazendo a conexão com o banco de dados e a função createUser está recebendo um id, um email e uma password e inserindo na tabela userTableName, no banco de dados.

**b.**
```sql
    CREATE TABLE userTable (
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
);

```

**c.**
```ts
import {connection} from '../index'

export async function createUser(
    id: string,
    email: string, 
    password:string
):Promise<void>{
    try {
        await connection
        .insert({id, email, password})
        .into("userTable")
    } catch (error) {
        console.log(error.sqlMessage || error.message)
    }
}
```

**3.**

**a.** O "as string" garante que o token ali é uma string.

**b.** 
```ts
import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = "2min"

export const tokenGenerate = (input: AuthenticationData): string => {
    const token = jwt.sign(
    {
        id: input.id
    },
    process.env.JWT_KEY as string,
    {
        expiresIn
    });

    return token
}

type AuthenticationData = {
    id: string
}
```

**4.**

**a, b e c.**

```ts
import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { idGenerate } from "../services/idGenerate";
import { tokenGenerate } from "../services/tokenGenerate";

export async function postSignUp(req: Request, res:Response): Promise<any> {
    try {
        if(!req.body.email || req.body.email.indexOf("@") === -1 ){
            throw new Error("Email inválido")
        }

        if(!req.body.password || req.body.password.length < 6 ){
            throw new Error("Coloque uma senha a partir de 6 caracteres")
        }

        const id:string = idGenerate()
        const email: string = req.body.email
        const password: string = req.body.password

        await createUser(id, email, password)

        const token = tokenGenerate({id})

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}
```

**5.**
```ts
    import { connection } from "..";

    export async function getUser(email: string): Promise<any> {
    try {
        const result = await connection
        .select("*")
        .from("userTable")
        .where("email", email)      

       return result[0]
    } catch (error) {
        return error.sqlMessage || error.message
    }
}
```

**6.**

**a e b.**

```ts
import { Request, Response } from "express";
import { login } from "../data/login";
import { tokenGenerate } from "../services/tokenGenerate";

export async function postLogin(req: Request, res: Response):Promise<any> {
    try {
        if(!req.body.email || !req.body.password){
            throw new Error("Insira o email e a senha.")
        }

        if(req.body.email.indexOf("@") === -1){
            throw new Error("Email inválido!")
        }

        if(req.body.password.length < 6) {
            throw new Error("Senha inválida!");
            
        }

        const {email, password} = req.body

        const result = await login(email, password)

        const user = result[0]

        if(!user){
            throw new Error("Usuário ou senha incorretos.")
        }

        const token = tokenGenerate({id: user.id})

        res.status(200).send({token})

        
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}
```

**7.**

**a.** A linha "as any" verifica os dados do token com a JWT_KEY.
**b.**

```ts
import * as jwt from "jsonwebtoken"

export const getData = (token: string) => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: payload.id
    };
    return result
}   
```

**8.**