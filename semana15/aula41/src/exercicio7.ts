//EXERCICIO 7

    type produto = {
        nome: string, 
        preco: number,
        classificacao: string
    }

  

    export const recebeProdutos = (produtos: Array<produto>, classificacao: string): void => {
        let desconto: number

        const produtosFiltrados = produtos.filter((produto) => {       

            switch(produto.classificacao) {
                case "verao":
                    desconto = 0.95
                    break
                case "inverno":
                    desconto = 0.9
                    break
                case "banho":
                    desconto = 0.96
                    break
                case "intimas":
                    desconto = 0.93
                    break
                
                default: 
                    console.log("classificacao não encontrada!")
                
            }

           return produto.classificacao === classificacao
        })

        produtosFiltrados.map((produto) => {
           console.log(produto.preco = produto.preco * desconto)
        })
    }
