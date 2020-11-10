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