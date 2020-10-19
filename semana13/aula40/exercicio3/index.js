// EXERCICIO 3

const task = process.argv[2]

const arrayTasks = [];

arrayTasks.push(task)

const fs = require("fs");

fs.appendFile("arrayTasks.txt", `,${task}`, function (err) { 
    if(err) throw err
});

let tarefas = "";

fs.readFile("arrayTasks.txt", "utf-8", function(err, data) {
    tarefas = data
    let arr = tarefas.split(",")

    console.log(arr)
})
