function adicionarTarefa(){
    let tarefa = document.getElementById("tarefa")
    let tarefaValor = tarefa.value
    
    let diasSemanas = document.getElementById("dias-semana")
    let diaDaSemana = diasSemanas.value

    if(tarefaValor !== ""){ 
        let tarefaDia = document.getElementById(`${diaDaSemana}`)
        tarefaDia.innerHTML += `<p>${tarefaValor}</p>`
        tarefa.value = ""             
    } else {
        alert("Digite uma tarefa válida!")
    }   
}