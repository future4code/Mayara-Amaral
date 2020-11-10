import { connection } from "..";

export async function getUserById(id: string): Promise<any> {

    try {
        const result = await connection
          .select("*")
          .from("userTable")
          .where({ id });
    
        return result[0];
        
    } catch (error) {
        return error.message
    }
  }
