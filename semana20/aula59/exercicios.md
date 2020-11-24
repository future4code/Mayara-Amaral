# Exercícios

## Exercício 1.
**A.**
```ts
interface Character {
    name: string,
    life: number,
    defense: number,
    force: number
}
```

**B.**
```ts
export const validateCharacter = (input: Character) => {
    if(
        !input.name || 
        !input.life === undefined ||
        !input.defense === undefined ||
        !input.force === undefined
    ){
        return false
    }

    if(input.life < 0){
        return false
    }

    if(input.defense < 0){
        return false
    }

    if(input.force < 0){
       return false
    }

    return true
}
```

## Exercício 2
**A.**
```ts
```