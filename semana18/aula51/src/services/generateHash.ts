import * as bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export const generateHash = async (text: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST); //algoritmo
    const salt = await bcrypt.genSalt(rounds); //string aleatória
    const result = await bcrypt.hash(text, salt) // criptografia

    return result
}

export const compare = async (text: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(text, hash) //compara o texto sem criptografar com o texto criptografado
}