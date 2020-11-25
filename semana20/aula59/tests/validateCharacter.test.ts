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

    test("You should return an error saying that the character is dead.", () => {

        expect.assertions(1)

        const myObj: Character = {
                name: "Cão Covarde",
                life: 0,
                defense: 1000,
                force: 1000
        }

        const validatorMock = jest.fn((input: any): validateOutput => {
            return {isValid: true}
        })

        try {
            const result = validateCharacter(myObj, validatorMock as any)

        } catch (error) {            
            expect(error.message).toBe('The character is dead.')
        }

    });

});