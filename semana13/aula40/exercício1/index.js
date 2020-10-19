console.log("hello world")

// EXERCÍCIO 1
//a. usando o process.arvg[index]

    const nome = process.argv[2]
    const idade = Number(process.argv[3])

//b.

    console.log(`Olá, ${nome}! Você tem ${idade} anos`)
    // npm run start "Mayara" 22

//c.
    const novaIdade = idade + 7

    console.log(`Olá, ${nome}! Daqui 7 anos você terá ${novaIdade} anos`)

