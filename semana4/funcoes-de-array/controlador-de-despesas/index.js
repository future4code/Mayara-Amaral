let despesas = []

function criarObjeto() {
    let valor = document.getElementById("valor")
    let descricao = document.getElementById("descricao")
    let tipoDeDespesa = document.getElementById("tipo-despesa")

    const despesaIndividual = {
        valor: valor.value,
        tipoDeDespesa: tipoDeDespesa.value,
        descricao: descricao.value
    }

    despesas.push(despesaIndividual)       
    console.log(despesas)    
}

function limparCampos() {
        if(valor.value !== "" && descricao.value !== ""){       
            criarObjeto()
            inserirNaPagina()
        } else {
            alert("preencha todos os campos")
        }   
        valor.value = ""
        descricao.value = ""
}

function inserirNaPagina() {
        let paragrafoDeDespesa = document.getElementById("gastos") 
        despesas.forEach(
        
        for (let item of despesas){
        paragrafoDeDespesa.innerHTML += criarParagrafo(item)
        }
}

function criarParagrafo(item) {
    return `    <p>${item.tipoDeDespesa}</p> 
                <p>${item.valor}</p>
                <p>${item.descricao}</p>                
            ` 
}







