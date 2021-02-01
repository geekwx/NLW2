---
date: 30/01/2021
title: estudo node+react
---

# Nlw2

## Parametro de envio na api

* Request body: dados para a criação ou atualização de um registro 

* Route Params: identificar qual recurso eu quero atualiza ou deletar

* Query Params: Paginação, filtros, ordenação


## Comandos Yarn

yarn tsc --init -> arquivo de configuração do typescript, nele é bom ,mudar o target para es2017 para melhor compatibilidade entre node e ract



## pacotes node

pacote knex permite realizar os comando de banco de daod em linguagem de javascript


ˋˋˋ
import path from 'path';

filenam: path.resolve(__dirname, 'nome_arquivo)
ˋˋˋ

o path acaba resolvendo o caminho na aplicação resolvendo problema de difença entre linux e windows

**CORS** - ele permite que aja comunição na mesma maquina em porta diferente, por exemplo frontend nna (3333) e backend na (3000)




## Relação ao banco

**Migrations** - controlam a versão do banco de dados 

**transertion** - ele é utilizado para quando acontece um erro na inserção de algum item no banco de dados ele deleta toda as inserção daquela cadeia. 


o knew para utilizad where de comparação utiliza o whereRaw -> ele é bem complexo no qual mostr uma tipagem meio sql de comparação

