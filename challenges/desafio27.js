/* 27 - Retorne a quantidade total de voos de natureza Doméstica que a empresa PASSAREDO
possui, via uso de uma nova coleção chamada resumoVoos. Ou seja, a coleção resumoVoos
conterá documentos onde cada um indica para cada empresa a quantidade total de voos
que ela possui de natureza Doméstica.

Para isso, escreva no arquivo desafio27.js duas queries, nesta ordem:

1. Conte quantos voos da empresa PASSAREDO cujo campo natureza possua valor igual a Doméstica
e crie uma query que insira na coleção resumoVoos um documento com os campos:
empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

2. Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento
presente na coleção resumoVoos em que a empresa seja PASSAREDO. */

const voosDomesticosPassaredo = db.voos.find({
  $and: [{ natureza: "Doméstica" }, { "empresa.nome": "PASSAREDO" }],
}).count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: voosDomesticosPassaredo });

db.resumoVoos.find({}, { _id: false });
