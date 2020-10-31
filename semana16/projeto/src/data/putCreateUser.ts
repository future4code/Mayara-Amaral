import {connection} from '../index'

export const putCreateUser = async (
    id: number,
    name: string,
    nickname: string,
    email: string
) => {
    try {
        await connection
        .insert({
            id: id,
            name: name,
            nickname: nickname,
            email: email
        })
        .into("users")
        
        console.log("user successfully inserted!")
          
    } catch (error) {
        console.log(error)
    }
}