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

e.

