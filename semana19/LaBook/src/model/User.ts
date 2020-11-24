export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type createUserInput = {
    name: string,
    email: string,
    password: string
}

export type createUserOutput = {
    token: string
}

export type loginUserInput = {
    email: string,
    password: string
}