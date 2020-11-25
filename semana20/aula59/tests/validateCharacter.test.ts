import { validateOutput, Character, validateCharacter } from "../src/characterValidate"

describe("Testing the function characterValidade", () => {

    test("testing function behavior with a character with an empty name", () => {
        expect.assertions(1)

        const validatorMock = jest.fn((input: any): validateOutput => {
            return {isValid: false}
        })

        try {
            const myObj: Character = {
                name: "",
                life: 1500,
                defense: 1000,
                force: 1000
            }
            
            const result = validateCharacter(myObj, validatorMock as any)

            console.log(result)

        } catch (error) {
            expect(error.message).toBe("Missing Properties")
        }
    });

    test("Must return false if life is zero", () => {

        const myObj: Character = {
                name: "Cão Covarde",
                life: 0,
                defense: 1000,
                force: 1000
        }

        const validatorMock = jest.fn((input: any): validateOutput => {
            return {isValid: true}
        })    

        const result = validateCharacter(myObj, validatorMock as any)

        expect(result).toBe(false)       

    });

    test("Must return false if the force is at zero", () => {
        const myObj: Character = {
            name: "Cão Covarde",
            life: 1500,
            defense: 1000,
            force: 0
        }

        const validatorMock = jest.fn((input: any): validateOutput => {
            return {isValid: true}
        })

        const result = validateCharacter(myObj, validatorMock as any)

        expect(result).toBe(false)
    });

    test("Must return false if the defense is at zero", () => {
        const myObj: Character = {
            name: "Cão Covarde",
            life: 1500,
            defense: 0,
            force: 1000
        }

        const validatorMock = jest.fn((input: any): validateOutput => {
            return {isValid: true}
        })

        const result = validateCharacter(myObj, validatorMock as any)

        expect(result).toBe(false)
    })

    test("Must return false if defense or strength or life is less than zero", () => {
        const myObj: Character = {
            name: "Cão Covarde",
            life: -1500,
            defense: 0,
            force: 1000
        }

        const validatorMock = jest.fn((input: any): validateOutput => {
            return {isValid: true}
        })

        const result = validateCharacter(myObj, validatorMock as any)

        expect(result).toBe(false)
    })

    test("Must return true with all valid data", () => {
        const myObj: Character = {
            name: "Cão Covarde",
            life: 1500,
            defense: 1000,
            force: 1000
        }

        const validatorMock = jest.fn((input: any): validateOutput => {
            return {isValid: true}
        })

        const result = validateCharacter(myObj, validatorMock as any)

        expect(result).toBe(true)
    });

});