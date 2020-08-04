function adicionarTarefa(){
    let tarefa = document.getElementById("tarefa")
    let tarefaValor = tarefa.value
    
    let diasSemanas = document.getElementById("dias-semana")
    let diaDaSemana = diasSemanas.value

    let horarios = document.getElementById("horarios")
    let horarioValor = horarios.value

    if(tarefaValor !== ""){ 
        let tarefaDia = document.getElementById(`${diaDaSemana}`)
        tarefaDia.innerHTML += `<p onclick="riscarTarefa()"><strong>${horarioValor}</strong> <br> ${tarefaValor}</p>`
        tarefa.value = ""             
    } else {
        alert("Digite uma tarefa válida!")
    }   
}

function riscarTarefa(){
 
}

function limparTodasAsTarefas() {
    let arraySemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"]

    for(let elemento of arraySemana){
        let tarefaDia = document.getElementById(`${elemento}`)
        tarefaDia.innerHTML = ""
    }
}

