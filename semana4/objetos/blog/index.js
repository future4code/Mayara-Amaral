const titulo = document.getElementById("titulo-post")
const autor = document.getElementById("autor-post")
const conteudo = document.getElementById("conteudo-post")
const container = document.getElementById("container-de-posts")
let arrayDePosts = []
let post = {
    titulo:"",
    autor:"",
    conteudo:""
}


function adicionarPost() { 
    let tituloDigitado = titulo.value
    let autorDigitado = autor.value
    let conteudoDigitado = conteudo.value  

    post.titulo = tituloDigitado
    post.autor = autorDigitado
    post.conteudo = conteudoDigitado
    
    container.innerHTML += `<p><h2> ${post.titulo} </h2><br> ${post.autor} <br> ${post.conteudo} </p>`  
    

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""

    arrayDePosts.push(post)       
}



