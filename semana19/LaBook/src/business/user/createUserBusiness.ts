import { insertUser } from "../../data/user/insertUser"
import { generateToken } from "../../services/authenticator"
import { CustomError } from "../../services/customError"
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator"
import { User } from "../../types"

export const createUserBusiness = async (input: any): Promise<string> => {
    
    let errorMessage: string = "Bad Request"

    try {
        
        if(!input.name || !input.email || !input.password) {
            errorMessage = "Fill in all fields."
            throw new Error(errorMessage)
        }
    
        const id: string = generateId()
    
        const passwordHash: string = await hash(input.password)
    
        const user: User = {id: id, name: input.name, email: input.email, password: passwordHash}
    
        const result = await insertUser(user)
    
        if(result.includes("Duplicate")){
            throw new CustomError(406, "Email already registered.")
        }
    
        const token = generateToken({id: id});
    
        return token
        
    } catch (error) {

        if(error.code === 1048){
            throw new Error("Email already registered.")
        }

        return error.message
    }
}