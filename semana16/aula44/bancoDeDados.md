## Exercício 1

**A**. 
O comando `CREATE TABLE` cria a tabela, o comando `VARCHAR(255)` cria uma coluna do tipo string com tamanho máximo de 255. O comando `DATE` cria uma coluna com o tipo data, e o comando` NOT NULL` não deixa que aquele campo seja nulo.

**B**. O comando `SHOW DATABASES` me mostrou o banco de dados em que estou e o comando `SHOW TABLES` mostrou a tabela Actor que criei.

**C**. O comando `DESCRIBE Actor` me mostrou todas as colunas e suas especificações da tabela Actor.

## Exercício 2

**A**. 
>`INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23","female");`


**B**. 
>Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' // Código de erro: 1062. Duplicado entrada '002' para a chave 'PRIMÁRIA'. 

Esse erro aconteceu porque o comando PRIMARY KEY define o dado da coluna como único, ou seja, não pode haver repetição.

**C**. 
>Código de erro: 1136. Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1.

Esse erro ocorreu porque não foi passado todas as colunas no comando INSERT INTO.

**D**. 
>Código de erro: 1364. O campo 'nome' não tem um valor padrão.

Colocar o "nome" não é opcional, por não existir um valor pordefault, é obrigatório colocar o nome. Por isso o erro.

**E**. 
>Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1. 

A coluna birth_date não aceita número, somente o formato data como string.

**F**. Adicionei Fernanda Souza e Caio Castro.

## Exercício 3

**A**. `SELECT * FROM Actor WHERE gender = "female";`

**B**. `SELECT salary FROM Actor WHERE name = "Tony Ramos";`

**C**. `SELECT * FROM Actor WHERE gender = "invalid";`

 >Retornou todos os campos que estão NULL, no caso a última linha da tabela, provavelmente, porque são inválidos.

**D**. `SELECT id, name, salary FROM Actor WHERE salary <= 500000;`

**E**. `Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'. `

> Na tabela, nome está em inglês, e foi passado em português.

## Exercício 4

**A**. `SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;`

>Selecione todos os atores, onde o nome comece com a letra A ou com a letra J e que o salário seja maior que trezentos mil reais.

**B**.` SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;`

**C**.` SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";`

**D**. `SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%A%" OR name LIKE "%a%") AND (salary BETWEEN 350000 AND 900000);`

## Exercício 5

**A**. `CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Data DATE NOT NULL,
    rating INT NOT NULL
);`

>O tipo TEXT não tem tamanho definido de memória.

**B**. `INSERT INTO Movies (id, name, synopsis, release_data, rating)
VALUES("002","Se eu fosse você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006/01/06", 7);`

**C**. `INSERT INTO Movies (id, name, synopsis, release_data, rating)
VALUES("003","Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012/12/27", 10);`

**D**. `INSERT INTO Movies (id, name, synopsis, release_data, rating)
VALUES("004","Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017/11/02", 8);`

**E**.` INSERT INTO Movies (id, name, synopsis, release_data, rating)
VALUES("005","Tropa de Elite", "O capitão da força especial da Polícia Militar do Rio de Janeiro treina dois recrutas novatos para que possam sucedê-lo.", "2007/10/05", 9);`

## Exercício 6

**A**. `SELECT id, name, rating FROM Movies WHERE id = "002";`

**B**. `SELECT * FROM Movies WHERE name = "Tropa de Elite";`

**C**.` SELECT id, name, synopsis FROM Movies WHERE rating > 7;`

## Exercício 7

**A**. `SELECT * FROM Movies WHERE name LIKE "%vida%";`

**B**. `SELECT * FROM Movies WHERRE name LIKE "%elite%" OR synopsis LIKE "%feliz%";`

**C**. `SELECT * FROM Movies WHERE release_Data < "2020-01-01";`

**D**.` SELECT * FROM Movies WHERE (release_Data < "2020-01-01") AND (name LIKE "%elite%" OR synopsis LIKE "%dona%") AND (rating > 7);`

