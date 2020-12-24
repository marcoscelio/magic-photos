# Portfólio

Magic Photos, portfólio genérico de fotos e gestão destas e de suas categoris!

>

## Stacks

- ReactJS
- Typescript
- CSS
- NodeJS
- Knex
- SqLite

>

## Instruções

### Fron-End: Scripts

#### yarn start:

Roda o app na porta 3000 no modo desenvolvimento

#### yarn build:

Minifica o projeto em um build na pasta .\

#### yarn eject:

Ejeta o build do projeto

### Migration: scripts

#### yarn knex:migrate

Faz a migrate do app, constrói todas as tabelas do banco

#### yarn knex:rollback

Retorna o banco ao estado anterior ao da última migration

### Back-End: Scripts

#### yarn dev

Roda o app no modo desenvolvedor sem a necessidade de buildar

#### yarn build

Builda o projeto, faz toda a conversão com o Babel para JS

#### yarn start

Roda o app buildado em js

### Configuração AWS - Variáveis de ambiente

A ideia é criar variáveis de ambiente na raiz do projeto, com o .env, e desta forma acessá-las por meio do proces.env.`nome-da-variável`

#### REACT_APP_REGION = region

export REACT_APP_REGION = [valor]

#### REACT_APP_API_VERSION = apiVersion

export REACT_APP_API_VERSION = [valor]

#### REACT_APP_ACCESS_KEY_ID = accessKeyId

REACT_APP_ACCESS_KEY_ID = [valor]

#### REACT_APP_SECRET_ACCESS_KEY = secretAccessKey

REACT_APP_SECRET_ACCESS_KEY = [valor]
