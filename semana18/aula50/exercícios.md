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