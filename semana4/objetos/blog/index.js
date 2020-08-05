let titulo = document.getElementById("titulo-post")
let autor = document.getElementById("autor-post")
let conteudo = document.getElementById("conteudo-post")
let posts = document.getElementById("container-de-posts")
let container = []

function capturarInput(){   
    post.titulo = titulo.value
    post.autor = autor.value
    post.conteudo = conteudo.value    
    container.push(post)
    console.log(container)
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}

const post = {
    titulo: "",
    autor: "",
    conteudo: "",
    adicionar: capturarInput
}



console.log(post)











