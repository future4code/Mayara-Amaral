import { performPurchase } from "../src/performPurchase"
import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src/verifyAge"

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
            age: 17,
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


    test("verify brazilians allowed in EUA", () => { 
        const result = verifyAge(Casino1, users)

        expect(result.brazilians.allowed).toHaveLength(1)
    })

    test("verify american allowed in Brazil", () => {
        const result = verifyAge(Casino2, users)

        expect(result.americans.allowed).toHaveLength(1)
    })

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
})