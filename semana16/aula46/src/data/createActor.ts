import { connection } from ".."


export const createActor = async (
    id: string,
    name: string,
    salary: number,
    birth_date: Date,
    gender: string
): Promise<void> => {
    const newActor = await connection
    .insert({id, name, salary, birth_date, gender})
    .into("Actor")
}