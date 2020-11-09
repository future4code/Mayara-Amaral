import {v4} from 'uuid'

export function idGenerate():string {
    const id = v4()
    return id
}
