# COKENU - rede social de receitas.

## Modelagem do banco de dados

1. Tabela de usuários

```sql
CREATE TABLE user_cokenu(
	id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```
2. Tabela de receitas
   
```sql
CREATE TABLE recipe_cokenu(
	id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL, 
    creation_date DATE NOT NULL,
    posted_by VARCHAR(255) NOT NULL,
    FOREIGN KEY (posted_by) REFERENCES user_cokenu(id)    
);
```
3. Tabela de relação entre usuários/seguidores.

```sql
CREATE TABLE followers_relationship(
    id_followed_user VARCHAR(255) NOT NULL,
    id_follower VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_followed_user) REFERENCES user_cokenu(id),
    FOREIGN KEY (id_follower) REFERENCES user_cokenu(id)
);

```

## Caminhos

1. Cadastro de usuários

    ``` /signup ```  

2. Login
   
   ```/login ```

3. Feed

    ```/feed```

4. Criar Receitas
    
    ```/recipe```

5. Pegar receita

    ```/recipe/:id```

6. Perfil
   
   ```/user/profile```

7. Perfil de outro usuário
   
   ```/user/:id```