# EXERCÍCIOS

## Exercício 1
**A.** Uma chave estrangeira é a referencia a uma primary key de outra tabela.

**B.** 
```sql
    INSERT INTO Rating (id, comment, rate, movie_id)
    VALUES (
	    "001",
        "Filme muito bom, retrata a triste realidade brasileira",
        8.5,
        "005"
    );
```

**C.** 
>Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-mayara-araujo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Não foi possível adicionar uma avaliação pois a adição de avaliação depende da existência do filme, que é representada pelo id.

**D.** 
```sql
ALTER TABLE Movie DROP COLUMN rating;
```

**E.**

>Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-mayara-araujo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Não é possível excluir um filme que possua avaliações, pois primeiro deve-se excluir as avaliações.

## Exercício 2.

