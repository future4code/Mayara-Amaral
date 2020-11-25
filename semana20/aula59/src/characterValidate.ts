export interface Character {
    name: string,
    life: number,
    defense: number,
    force: number
}

export interface validateOutput {
    isValid: boolean
}

export const validateCharacter = (
    input: Character, 
    validator: (input: any) => validateOutput
) => {
    const validationResult = validator(input)

    if (!validationResult.isValid) {
        throw new Error("Missing Properties");
    }

    if(
        !input.name || 
        !input.life === undefined ||
        !input.defense === undefined ||
        !input.force === undefined
    ){
        throw new Error("Invalid name.")
    }

    if(input.life <= 0){
        return false
    }

    if(input.defense <= 0){
        return false
    }

    if(input.force <= 0){
       return false
    }

    return true
}
