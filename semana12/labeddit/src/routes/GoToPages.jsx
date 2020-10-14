export const goFeedPage = (history) => {
    history.push("/")
}

export const goToLoginPage = (history) => {
    history.push("/Login")
}

export const goToPostPage = (history) => {
    history.push("/Post")
}

export const goToPostDetailsPage = (history, id) => {
    history.push(`/Post/${id}`)
}

export const goToSingUpPage = (history) => {
    history.push("/Cadastro")
}