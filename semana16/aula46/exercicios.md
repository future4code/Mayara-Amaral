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