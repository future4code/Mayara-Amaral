export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type AuthenticationData = {
    id: string
}

export type Recipe = {
    id: string,
    title: string,
    description: string,
    creation_date: Date,
    posted_by: string
}