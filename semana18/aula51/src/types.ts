export enum USER_ROLE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
    id: string,
    name: string, 
    nickname: string, 
    email: string, 
    password: string,
    type: USER_ROLE
}

export type authenticationData = {
    id: string
}