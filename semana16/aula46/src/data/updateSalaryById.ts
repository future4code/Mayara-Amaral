import { connection } from ".."

export const updateSalaryById = async (
    id: string,
    salary: number
): Promise<void> => {
    const result = await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id)
}