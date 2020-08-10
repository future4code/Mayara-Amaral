// DESCONSIDERE OS OUTROS DOIS ARQUIVOS VAZIOS.

//LISTA DE EXERCÍCIOS 

/* ~~~~~~~~~~~~ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ~~~~~~~~~~~ 

EXERCÍCIO 1.
    No código é declarada uma função que recebe como parâmetro o valor em dólar e recebe do usuário pelo prompt a cotação do dólar, retornando o valor em reais armazenado na constante meuDinheiro, e por fim, imprime no console.

EXERCÍCIO 2.
    O código declara uma função que tem como objetivo calcular o valor após o investimento, recebendo como parâmetro o tipo de investimento e o valor. Por meio do switch ele calcula o montante de acordo com o tipo de investimento. Caso não seja nenhum, ou diferente das opções, a função retorna um alerta para o usuário. Após isso, a chamada da função é feita dentro de uma constante, armazenando o retorno dela.

EXERCÍCIO 3.
    No código, há três constantes que armazenam arrays. O loop for, faz com que para cada elemento (numero) do array (numeros), tenha uma verificação se o número é par. Caso seja par, ele acrescenta no array1. Caso não seja, acrescenta no array2. Ou seja, separa os números impares dos pares. Depois é impresso no console a "Quantidade total de números 12" e a quantidade de números pares e impares.

EXERCÍCIO 4.
    O código verifica se os números do array numeros é positivo ou negativo. Caso seja negativo, ele atribui a variável numero1 o número presente no indice atual do array. Caso seja positivo ele atribui a variável numero2 o valor do numero presente no atual indice do array. E depois imprime no console, o número1 e número2.

*/



/* ~~~~~~~~~~~~ EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO ~~~~~~~~~~~ */



// EXERCÍCIO 1.
    const lista = [1, 2, "bananinha", "batmanDandoPirueta", 5, 7, 20, "Labenu"]

    for(let i = 0; i < lista.length; i++){
        console.log(lista[i])
    }

    console.log("segunda maneira:")
    for(item of lista) {
        console.log(item)
    }

    console.log("terceira maneira:")
    let elemento = 0
    while(elemento < lista.length) {
        console.log(lista[elemento])
        elemento += 1
    }

// EXERCÍCIO 2.

/*     
    a) false.
    b) false.
    c) true.
    d) true.
    e) true.
*/

// EXERCÍCIO 3.

    /* 
        O código não funciona porque i inicializa com 0 e não há incremento, como i == 0, todo número multiplicado por 0 é zero. Logo só será   impresso no console o número zero. 
    */

    let quantidadeDeNumerosPares = Number(prompt("Digite um número"))
    let i = 1
    console.log(`0`)
    while(i <= quantidadeDeNumerosPares){
        console.log(i*2)
        i++
    }   

// EXERCÍCIO 4.

    const tipoTriangulo = (a, b, c) => {
        let triangulo
        if(a === b && b === c && a === c) {
            return triangulo = "equilátero"
        } else if (a === b || b === c || a === c) {
            return triangulo = "isósceles"
        } else {
            return triangulo = "escaleno"
        }
    }

    console.log(`O triângulo é ${ tipoTriangulo(2,1,2) }`)

// Exercício 5.

    const numeroEhDivisivel = (a, b) => {    
    if(a % b === 0 || b % a === 0) {
       return verificaDivisao = "divisíveis"
    } else {
       return verificaDivisao = "não divisiveis"
    }
    }

    const verificaNumero = (a, b) => {
        let diferencaDosNumeros
        let verificacaoDoNumero
        let verificaDivisao
        if(a > b){
            verificacaoDoNumero = ` ${a} é maior que ${b}`
            diferencaDosNumeros = a - b
        } else if (b > a) {
            verificacaoDoNumero = `${b} é maior que ${a}`
            diferencaDosNumeros = b - a
        } else {
            verificacaoDoNumero = `${a} e ${b} são iguais`
            diferencaDosNumeros = 0
        }

        verificaDivisao = numeroEhDivisivel(a, b)

        return `${verificacaoDoNumero}, a diferenca entre eles é ${diferencaDosNumeros} e são ${verificaDivisao} entre si`
    }

    console.log(verificaNumero(20, 20))
    


/* ~~~~~~~~~~~~ EXERCÍCIOS DE FUNÇÕES ~~~~~~~~~~~ */



// EXERCÍCIO 1.

    let listaDeNumeros = [0, 3, 15 , 25 , 1 , 4 , 6 , 2 , 70, 10]

    function recebeArray(array) {
        let arrayOrdenado = []
        let numero = 0
        while(numero <= 70){            
            for(item of array){            
                if(item === numero) {
                    arrayOrdenado.push(item)
                }
            }
            numero++
        }      

        return ` ${arrayOrdenado} o segundo menor numero ${arrayOrdenado[1]} e o penúltimo maior número ${arrayOrdenado[8]}`
    }
    
    console.log(recebeArray(listaDeNumeros))
    
// EXERCÍCIO 2.
    const darHello = (texto) => {
        alert(`${texto}`)
    }

    darHello("Hello Future4!")


/* ~~~~~~~~~~~~ EXERCÍCIOS DE OBJETOS ~~~~~~~~~~~ */

//EXERCÍCIO 1.
    /*
         Arrays e objetos são usados para armazenar varias coisas em uma única variavel. No caso dos arrays, ele armazena elementos. Em objetos ele armazena os elementos e suas propriedades. Os dois facilitam a escrita de código.
    */

//EXERCÍCIO 2.
    
    const criaRetangulo = (lado1, lado2) => {
        let retangulo = {
            largura: lado1,
            altura: lado2,
            perimetro: 2*(lado1 + lado2),
            area: lado1*lado2
        }

        return retangulo
    }

    console.log(criaRetangulo(50,20))

//EXERCÍCIO 3.
    
    const filmeFavorito = {
        titulo: `Extraordinário`,
        ano: 2017,
        diretor: `Stephen Chbosky`,
        atores: [`Julia Roberts`,`Owen Wilson`, `Jacob Tremblay`]
    }

    console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}`)

//EXERCICIO 4.

    const pessoa = {
        nome: `Geovana`,
        idade: 12,
        email: `geovana@gmail.com`,
        endereco: `Cuiabá, MT`
    }

    const ficarAnonimo = (pessoa) => {
        pessoa.nome = `ANÔNIMO`
        console.log(pessoa)
    }

ficarAnonimo(pessoa)

/* ~~~~~~~~~~~~ EXERCÍCIOS DE FUNÇÃO DE ARRAY ~~~~~~~~~~~ */

    let arrayDePessoas = [
    	{ nome: "Pedro", idade: 20 },
    	{ nome: "João", idade: 10 },
    	{ nome: "Paula", idade: 12 },
    	{ nome: "Artur", idade: 89 } 
    ]

//EXERCÍCIO 1    
    let adultos = []
    let criancas = []

    const callback = (elemento, index, array) => {
        if(elemento.idade >= 20){
            adultos.push(elemento)
        } else {
            criancas.push(elemento)
        }
    }

    arrayDePessoas.forEach(callback)

    console.log('Os adultos:')
    console.log(adultos)
    console.log('As crianças:')
    console.log(criancas)

// EXERCÍCIO 2
    const array = [1, 2, 3, 4, 5, 6]

    //a.      
        const novoArray = []
        const retorno = (elemento, index, array) => {
            novoArray.push(elemento*2)
        }

        array.forEach(retorno)
        console.log(novoArray)

    //b.
        const outroArray = []
        const retornoString = (elemento, index, array) => {
            let resultado = elemento*3
            let resultadoEmString = resultado.toString()
            outroArray.push(resultadoEmString)
        }

        array.forEach(retornoString)
        console.log(outroArray)

    //c.
        let verificaSeONumeroEhPar = []
        const verificaONumero = (elemento, index, array) => {
            if(elemento % 2 === 0){
                verificaSeONumeroEhPar.push(`${elemento} é par`)
            } else {
                verificaSeONumeroEhPar.push(`${elemento} é ímpar`)
            }
        }

        array.forEach(verificaONumero)
        console.log(verificaSeONumeroEhPar)

//EXERCÍCIO 3.  

    const pessoas = [
    	{ nome: "Paula", idade: 12, altura: 1.8},
    	{ nome: "João", idade: 20, altura: 1.3},
    	{ nome: "Pedro", idade: 15, altura: 1.9},
    	{ nome: "Luciano", idade: 22, altura: 1.8},
    	{ nome: "Artur", idade: 10, altura: 1.2},
    	{ nome: "Soter", idade: 70, altura: 1.9}
    ]

    //a.

        const pessoasQuePodemBrincar = pessoas.filter((elemento, index, array) => {
            if(elemento.idade > 14 && elemento.idade < 60 && elemento.altura > 1.5){
                return true
            } 
            return false
        })

        console.log(pessoasQuePodemBrincar)

    //b. 
        const pessoasQueNaoPodemBrincar = pessoas.filter((elemento, index, array) => {
            if(elemento.idade > 14 && elemento.idade < 60 && elemento.altura > 1.5){
                return false
            } 
            return true
        })

        console.log(pessoasQueNaoPodemBrincar)

//EXERCÍCIO 04.

    const consultas = [
    	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ]
 
    const email = consultas.map((elemento, index, array) => {
       
        if(elemento.cancelada === false) {
            if(elemento.genero === 'feminino'){
                return `Olá, Sra. ${elemento.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${elemento.dataDaConsulta}.Por favor, acuse o recebimento deste e-mail`
            } else {
                return `Olá, Sr. ${elemento.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${elemento.dataDaConsulta}.Por favor, acuse o recebimento deste e-mail`
            }            
        } else {
            if(elemento.genero === 'feminino'){
                return `Olá, Sra. ${elemento.nome}. Infelizmente, sua consulta marcada
                para o dia ${elemento.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
                contato conosco para remarcá-la`
            } else {
                return  `Olá, Sr. ${elemento.nome}. Infelizmente, sua consulta marcada
                para o dia ${elemento.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
                contato conosco para remarcá-la`
            }
        }
    })

    console.log(email)


//EXERCICIO 05.

    const contas = [
    	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]

    const atualizaSaldo = (elemento, index, array) => {
        for(item of elemento.compras) {
            elemento.saldoTotal = elemento.saldoTotal - item
        }
    }


    contas.forEach(atualizaSaldo)
    console.log(contas)

  


    


    

    
