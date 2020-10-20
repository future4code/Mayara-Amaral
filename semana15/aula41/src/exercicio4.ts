//EXERCICIO 4

//a. 
    // No terminal, eu digitaria o comando tsc nome-do-arquivo.ts

    type pokemon = {
        name: string,
        types: string,
        healthPoints: number
    }

    const pokemon1: pokemon = {
        name: "Charmander",
        types: "Fire",
        healthPoints: 28
    }

    const pokemon2: pokemon = {
        name: "Bulbasaur",
        types: "Grass/Poison",
        healthPoints: 31
    }

    const pokemon3: pokemon = {
        name: "Squirtle",
        types: "Water",
        healthPoints: 35
    }

//b. 
    // Se esse arquivo estivesse na pasta src, o processo seria digitar o comando tsc ./src/nome-do-arquivo.ts

//c. 
    // Sim. No terminal podemos iniciar um arquivo de configuração do ts, através do comando tsc --init, lá nós podemos descomentar a chave "outDir" e "rootDir", colocando "./build" e "./src", dessa forma, quando dermos o comando tsc no terminal serão transpilados todos os arquivos .ts