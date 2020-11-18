export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

enum POST_TYPE {
    NORMAL = "normal",
    EVENTO = "evento"
}

export type Post = {
    id: string,
    photo: string,
    description: string,
    created_at: Date,
    type: POST_TYPE,
    author_id: string
}