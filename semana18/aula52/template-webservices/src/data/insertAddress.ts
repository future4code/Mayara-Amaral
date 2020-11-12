import { connection } from ".."

export const insertAddress = async (
        id: string, 
        logradouro: string, 
        numero: number,
        bairro: string, 
        cidade: string | undefined, 
        estado: string, 
        user_id: string
    ): Promise<void> => {

        try {

            await connection("usersAddress")
            .insert({
                id,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                user_id
            })


        } catch (error) {
        
        return (error.message || error.sqlMessage)
    }
}