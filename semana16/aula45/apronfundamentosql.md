# EXERCÍCIOS APROFUNDAMENTO SQL
## Exercício 1: 

**A.** 
> `ALTER TABLE Actor DROP COLUMN salary;`

Deleta a coluna salário da tabela Actor.

**B.**

> `ALTER TABLE Actor CHANGE gender sex VARCHAR(6);`

Altera o nome da coluna de gender para sex e coloca o número máximo de memória como 6.

**C.**
> `ALTER TABLE Actor CHANGE gender gender VARCHAR(255);`

Altera o nome da coluna de gender para gender e coloca o número de memória como 255.

**D.**
> `ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`

## Exercício 2:

**A.**

> `UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003";`

**B.**
> `UPDATE Actor
SET name = "Juliana Pães"
WHERE name = "Juliana Paes";`

>`UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "Juliana Pães";`

**C.**
> `UPDATE Actor
    SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";`

## Exercício 3:

**A.** 
> `DELETE FROM Actor WHERE name = "Fernanda Montenegro";`

**B.**
> `DELETE FROM Actor WHERE (gender = "male") AND (salary > 1000000); `

## Exercício 4:
**A.**
> `SELECT MAX(salary) FROM Actor;`

**B.**
> `SELECT MIN(salary) FROM Actor WHERE gender = "female"`

**C.**
> `SELECT COUNT(*) FROM Actor WHERE gender = "female";`

**D.**
> `SELECT SUM(salary) FROM Actor;`

## Exercício 5:
**A.** A query agrupa os itens da tabela de acordo com o "gender", como há apenas dois gêneros, feminino e masculino, ele agrupa a quantidade de mulheres e a quantidade de homens.

