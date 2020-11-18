import * as bcrypt from 'bcryptjs'

// criptografa a senha definida pelo usuário, retorna ela encripitada.
// Esse é usado no cadastro.

export const hashGenerator = async (password: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(password, salt)
}

// compara a senha enviada pelo usuário, com a que tem no banco de dados, criptografada.
// Esse é usado no login.

export const compare = async (password: string, cypherText: string): Promise<boolean> => {
    return bcrypt.compare(password, cypherText)
}