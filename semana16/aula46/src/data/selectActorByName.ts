import {connection} from '../index'

export const selectActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name LIKE "%${name}%";
    `)

    console.log(result[0])
    return result   
}