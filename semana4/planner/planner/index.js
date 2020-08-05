function adicionarTarefa() {
    let tarefa = document.getElementById("tarefa")
    let tarefaValor = tarefa.value
    
    let diasSemanas = document.getElementById("dias-semana")
    let diaDaSemana = diasSemanas.value

    let horarios = document.getElementById("horarios")
    let horarioValor = horarios.value

    if(tarefaValor !== ""){ 
        let diaDaTarefa = document.getElementById(`${diaDaSemana}`)
        diaDaTarefa.innerHTML += `<p onclick="riscarTarefa()" class="items"><strong>${horarioValor}</strong><br>${tarefaValor}</p>`
        tarefa.value = ""                                
    } else {
        alert("Digite uma tarefa válida!")
    }     
        
}

/* INCOMPLETO
    function riscarTarefa() {
        let paragrafos = document.getElementsByClassName("items")     

        paragrafos.item(i).style = "text-decoration: line-through"   
    }
*/

function limparTodasAsTarefas() {
    let arraySemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"]

    for(let elemento of arraySemana){
        let tarefaDia = document.getElementById(`${elemento}`)
        tarefaDia.innerHTML = ""
    }
}

