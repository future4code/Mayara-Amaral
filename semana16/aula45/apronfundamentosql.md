# EXERCÍCIOS APROFUNDAMENTO SQL
## Exercício 1: 

**A.**
```sql
ALTER TABLE Actor DROP COLUMN salary;
``` 

Deleta a coluna salário da tabela Actor.

**B.**
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

Altera o nome da coluna de gender para sex e coloca o número máximo de memória como 6.

**C.**
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

Altera o nome da coluna de gender para gender e coloca o número de memória como 255.

**D.**
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercício 2:

**A.**
```sql
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003";
```


**B.**
```sql
UPDATE Actor
SET name = "Juliana Pães"
WHERE name = "Juliana Paes";
```
```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "Juliana Pães";
```


**C.**
```sql
UPDATE Actor
    SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";
```


## Exercício 3:

**A.**
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
``` 

**B.**
```sql
DELETE FROM Actor WHERE (gender = "male") AND (salary > 1000000);
```
## Exercício 4:
**A.**
```sql
SELECT MAX(salary) FROM Actor;
```

**B.**
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```

**C.**
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

**D.**
```sql
SELECT SUM(salary) FROM Actor;
```

## Exercício 5:
**A.** A query agrupa os itens da tabela de acordo com o "gender", como há apenas dois gêneros, feminino e masculino, ele agrupa a quantidade de mulheres e a quantidade de homens contidos na tabela.

**B.**
```sql 
SELECT id, name FROM Actor ORDER BY name DESC;
```
**C.** 
```sql
SELECT * FROM Actor ORDER BY salary ASC;
```

**D.**
```sql
    SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

**E.**
```sql
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

## Exercício 6:

**A.**
```sql
ALTER TABLE Movies 
ADD playing_limit_data VARCHAR(255);
```

**B.**
```sql
ALTER TABLE Movies CHANGE rating rating FLOAT;
```

**C.**
```sql 
UPDATE Movies SET playing_limit_data = "2020-01-02" WHERE id = "002";


UPDATE Movies SET playing_limit_data = "2020-11-06" WHERE id = "001";
```

**D.**
```sql 
 DELETE FROM Movies WHERE id = "001";
```

```sql
UPDATE Movies 
SET synopsis = "nova sinopse"
WHERE id = "001";
```

*Resultado:
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0*

Foi possível fazer a mudança da sinopse, mesmo não tendo mais a linha com o id "001".

## Exercício 7:

**A.** 3 filmes.

**B.** A média de avaliações é 9.

**C.** Somente 1 filme ainda está em cartaz.

**D.** Nenhum. Todos já foram lançados.

**E.** a maior nota é 10.

**F.** a menor nota é 7.


## Exercício 8:

**A.**

```sql
SELECT * FROM Movies ORDER BY name ASC;
```

**B.**
```sql
SELECT * FROM Movies ORDER BY name DESC LIMIT 5;
```

**C.**
```sql
SELECT * FROM Movies WHERE release_Data < CURDATE() ORDER BY release_Data DESC LIMIT 3;
```

**D.**
```sql
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```

