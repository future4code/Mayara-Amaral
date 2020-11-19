enum POST_ROLE {
    NORMAL = "NORMAL",
    EVENTO = "EVENTO"
}

export type Post = {
    id: string,
    photo: string,
    description: string,
    created_at: Date,
    type: POST_ROLE,
    author_id: string
}

export function stringToPostRole(role: string): POST_ROLE {
    if(role.toUpperCase() === POST_ROLE.NORMAL){
        return POST_ROLE.NORMAL
    } else if (role.toUpperCase() === POST_ROLE.EVENTO){
        return POST_ROLE.EVENTO
    } else {
        throw new Error("Submit a valid post role. Valid values ​​are NORMAL and EVENTO.")
    }
}