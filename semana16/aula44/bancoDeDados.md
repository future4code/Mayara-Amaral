Exercício 1

a. O comando CREATE TABLE cria a tabela, o comando VARCHAR(255) cria uma coluna do tipo string com tamanho máximo de 255. O comando DATE cria uma coluna com o tipo data, e o comando NOT NULL não deixa que aquele campo seja nulo.

b. O comando SHOW DATABASES me mostrou o banco de dados em que estou e o comando SHOW TABLES mostrou a tabela Actor que criei.

c. O comando DESCRIBE Actor me mostrou todas as colunas e suas especificações da tabela Actor.

Exercício 2

a. INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");

b. Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' // Código de erro: 1062. Duplicado entrada '002' para a chave 'PRIMÁRIA'. Esse erro aconteceu porque o comando PRIMARY KEY define o dado da coluna como único, ou seja, não pode haver repetição.

c. Código de erro: 1136. Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1. Esse erro ocorreu porque não foi passado todas as colunas no comando INSERT INTO.

d. Código de erro: 1364. O campo 'nome' não tem um valor padrão. Colocar o "nome" não é opcional, por não existir um valor por default, é obrigatório colocar o nome. Por isso o erro.

e. Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1. A coluna birth_date não aceita número, somente o formato data como string.

f. Adicionei Fernanda Souza e Caio Castro.

Exercício 3

a. SELECT * FROM Actor WHERE gender = "female";

b. SELECT salary FROM Actor WHERE name = "Tony Ramos";

c. SELECT * FROM Actor WHERE gender = "invalid"; Retornou todos os campos que estão NULL, no caso a última linha da tabela, provavelmente, porque são inválidos.

d. SELECT id, name, salary FROM Actor WHERE salary <= 500000;

e. Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'. Na tabela, nome está em inglês, e foi passado em português.


