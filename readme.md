# Solução para o teste da vaga de estágio back-end

## Primeiro desafio
Os exercícios do primeiro desafio foram resolvidos no codesandbox: (https://codesandbox.io/s/teste-estagio-template-forked-2p47f)

## Desafio de back-end
O sistema proposto foi desenvolvido utilizando o framework Koa, com as bibliotecas Objection e Knex para abstração da camada de dados. O banco de dados foi criado usando SQLite3, para facilitar e agilizar a instalação e os testes do sistema. Toda a aplicação se encontra na pasta "teste-backend".

O projeto já possui um banco de dados SQLite3 com as tabelas criadas e sem registros, portanto, não é necessário realizar as migrations do Knex.

### APIs
Disponibilizei as configurações do Insomnia para testar as APIs no arquivo "APIs-Insomnia.json", pronto para ser importado.

Segue o link para a documentação: (https://probbc.github.io/teste-estagio-naveteam/)

### Instruções
As dependências utilizadas para desenvolver o sistema estão no arquivo "package.json"

Para instalar as dependências e iniciar o servidor:
- **npm install**
- **npm run server**

A aplicação está configurada para ouvir na porta 3000, mas pode ser alterada no arquivo "server.js".

## Exercícios Bônus de Banco de Dados
As soluções dos exercícios estão na pasta "Exercícios de Bando de Dados (BÔNUS)". Utilizei o MySQL para desenvolver e testar as queries.
