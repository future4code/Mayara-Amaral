import {connection} from '../index'

export const selectActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = ${id}
    `)

    console.log(result)
    return result[0][0]
}

