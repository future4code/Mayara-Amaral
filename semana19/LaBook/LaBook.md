## LaBook
post_role = "evento" ou "normal"
comentar
curtir

## endpoints

signup 
login
create post
search post by id
make friendship
undo friendship
see the whole feed
see only one type of post in the feed

## observações

deve ser analisado quais endpoints necessitam do token
prever a maior parte dos erros

## desafios

like post
deslike post
comment post
feed page

## database

```sql
CREATE TABLE labook_users(
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE labook_posts(
	id VARCHAR(255) PRIMARY KEY,
	photo VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	type ENUM("normal","event") DEFAULT "normal",
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	author_id VARCHAR(255),
	FOREIGN KEY (author_id) REFERENCES labook_users (id)
);
```