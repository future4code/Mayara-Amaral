import { connection } from ".."

export const selectUser = async (email: string): Promise<any> => {
    try {
        const result = await connection("user_cokenu")
        .select("*")
        .where("email", email)
        
        return result[0]
    } catch (error) {
        return error.message
    }
}