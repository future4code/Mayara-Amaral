import { connection } from ".."

export const updateUserById = async (id: string, name: string, nickname: string): Promise<any> => {
    try {
        const result = await connection("users")
            .update({name: name, nickname: nickname})
            .where("id", id)

    } catch (error) {
        return error
    }
}