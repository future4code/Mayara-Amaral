import { connection } from ".."


export const AverageByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")    
    .avg("salary as average")
    .where({gender})

    const average = `${result[0].average}`
    
    return average
}