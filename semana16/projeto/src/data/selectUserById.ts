import { connection } from ".."

export const selectUserById = async (id: string): Promise<any> => {
    try {
        const result = await connection
            .select("id", "name")
            .from("users")
            .where("id", "LIKE", `${id}`);

        return result[0]
    } catch (error) {
        console.log(error)
    }
}