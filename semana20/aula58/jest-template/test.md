# EXERCÍCIOS

## Exercício 1:

```ts
interface User {
    name: string,
    balance: number
}

export function performPurchase(user: User, value: number): User | undefined {
    if(user.balance >= value){
        return {
            ...user,
            balance: user.balance - value
        }
    }

    return undefined
}

```

## Exercício 2:

```ts
import { performPurchase } from "../src/performPurchase"

describe("Perform purchase teste", () => {

    test("balance > value", () => {
        
        const result = performPurchase({
            name: "teste", 
            balance: 300
        }, 200)

        expect(result.balance).toEqual(100)
    })

    test("balance = value", ()=> {

        const result = performPurchase({
            name: "teste", 
            balance: 200
        }, 200)

        expect(result.balance).toEqual(0)
    })

    test("balace < value", () => {

        const result = performPurchase({
            name: "teste", 
            balance: 100
        }, 200)

        expect(result).toEqual(undefined)
    })

})

```

## Exercício 3:

**A.** Leitura feita.
**B.** 
```ts
export function verifyAge(casino: Casino, users: User[]): Result {
    let resultBrazilians: ResultItem = {
        allowed: [],
        unallowed: []
    }

    let resultAmericans: ResultItem = {
        allowed: [],
        unallowed: []
    }

    users.map((user => {
        if(casino.location === LOCATION.BRAZIL){

            if(user.nacionality === NACIONALITY.BRAZILIAN){
    
                if(user.age >= 18 ){
                    resultBrazilians.allowed.push(user.name)
                } else {
                    resultBrazilians.unallowed.push(user.name)
                }

            } else if (user.nacionality === NACIONALITY.AMERICAN){

                if(user.age >= 18){
                    resultAmericans.allowed.push(user.name)
                } else {
                   resultAmericans.unallowed.push(user.name)
                }
    
            }
        }

        if(casino.location === LOCATION.EUA){

            if(user.nacionality === NACIONALITY.BRAZILIAN){
    
                if(user.age >= 18 ){
                    resultBrazilians.allowed.push(user.name)
                } else {
                    resultBrazilians.unallowed.push(user.name)
                }

            } else if (user.nacionality === NACIONALITY.AMERICAN){

                if(user.age >= 18){
                    resultAmericans.allowed.push(user.name)
                } else {
                   resultAmericans.unallowed.push(user.name)
                }
    
            }
        }
        
    }))

    let Result: Result = {
        brazilians: resultBrazilians,
        americans: resultAmericans
    }

    return Result;
}
```
**C.** O mais difícil foi implementar a função. A parte lógica principalmente.

## EXERCÍCIO 4
**A.**

```ts
describe("verifyAge", ()=> {
    // mocks

    const users: User[] = [
        {
            name: "teste",
            age: 25,
            nacionality: NACIONALITY.BRAZILIAN
        },

        {
            name: "teste1",
            age: 24,
            nacionality: NACIONALITY.AMERICAN
        },

        {
            name: "teste2",
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }
    ]

    const Casino1: Casino = {
        name: "testeCasino",
        location: LOCATION.EUA
    }

    const Casino2: Casino = {
        name: "testeCasino2",
        location: LOCATION.BRAZIL
    }


    test("verify brazilians allowed", () => { 
        const result = verifyAge(Casino1, users)

        expect(result.brazilians.allowed).toHaveLength(1)
    })
})

```

**B.**
```ts
    test("verify american allowed in Brazil", () => {

        const result = verifyAge(Casino2, users)

        expect(result.americans.allowed).toHaveLength(1)

    })
```

**C.**
```ts
    test("verify age americans and brazilians", () => {

        const result = verifyAge(Casino1, [
            {
                name: "joão",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "jhon",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Ana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Anna",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }
        ])

        expect(result.americans.unallowed).toHaveLength(2)
        expect(result.brazilians.unallowed).toHaveLength(2)

    })
```

**D.**
```ts
test("verify age americans and brazilians", () => {

        const result = verifyAge(Casino1, [
            {
                name: "joão",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "jhon",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Ana",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Anna",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }
        ])

        expect(result.americans.allowed).toHaveLength(2)
        expect(result.brazilians.unallowed).toHaveLength(2)

    })
```