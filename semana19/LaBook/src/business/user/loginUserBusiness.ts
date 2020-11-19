import { selectUserByEmail } from "../../data/user/selectUserByEmail"
import { generateToken } from "../../services/authenticator"
import { compare } from "../../services/hashManager"

export const loginUserBusiness = async (input: any): Promise<string> => {

    let errorCode: number = 400
    let errorMessage: string = "Password is invalid."
        
    try {
        if(!input.email || !input.password){
            errorMessage = "Fill in all fields."
            throw new Error(errorMessage)
        }

        const user = await selectUserByEmail(input.email)

        if(!user){
            errorMessage = "User not found."
            throw new Error(errorMessage)
        }

        const passwordIsCorrect = await compare(input.password, user.password)

        console.log(passwordIsCorrect)

        if(!passwordIsCorrect){
            errorCode = 401
            throw new Error(errorMessage)
        }

        const token = generateToken({id: user.id})

        return token
    } catch (error) {
        return error.message
    }
}