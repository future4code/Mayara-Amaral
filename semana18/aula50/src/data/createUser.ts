import {connection} from '../index'

export async function createUser(
    id: string,
    email: string, 
    password:string
):Promise<void>{
    try {
        await connection
        .insert({id, email, password})
        .into("userTable")
    } catch (error) {
        console.log(error.sqlMessage || error.message)
    }
}