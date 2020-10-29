# EXERCÍCIOS 
## Exercício 1:
**A.** A resposta da query quando usamos raw vem o que solicitamos mais o metadados.

**B.** 
```ts
import {connection} from '../index'

export const selectActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name LIKE "%${name}%";
    `)

    console.log(result[0])
    return result   
} 
```

**C.**
```ts
import {connection} from '../index'

export const selectCountByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender LIKE "${gender}"
    `);

   
    const count: string = `"${result[0][0].count}"`
  
    return count
}

```

## Exercício 2

**A.**
```ts
    export const updateSalaryById = async (
        id: string,
        salary: number
    ): Promise<void> => {
        const result = await connection("Actor")
            .update({
                salary: salary,
            })
            .where("id", id)
    }
```

**B.**
```ts
    export const deleteActor = async (id: string): Promise<void> => {
        await connection("Actor")
        .delete()
        .where("id", id)
    }
```

**C.**

```ts

import { connection } from ".."


export const AverageByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")    
    .avg("salary as average")
    .where({gender})

    const average = `${result[0].average}`
    
    return average
}
    
```

## Exercício 3

**A.** 
```ts
import { Request, Response } from "express";
import { selectActorById } from "../data/selectActorById";

export const getActorById = async (req: Request, res: Response) => {
    try {
        const actor = await selectActorById(req.params.id)
        res.status(200).send(actor)
    } catch (error) {
        res.send(error)
    }
}
```

**B.**
```ts
import { Request, Response } from "express";
import { selectCountByGender } from "../data/selectCountByGender";

export const getCountByGender = async (req: Request, res: Response) => {
    try {
        const count = await selectCountByGender(req.query.gender as string)

        res.status(200).send(count)
    } catch (error) {
        res.send(error)
    }
}
```