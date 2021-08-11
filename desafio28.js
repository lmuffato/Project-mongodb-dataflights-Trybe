// 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
// Para isso, escreva no arquivo desafio28.js duas queries, nesta ordem:

// 1- Conte quantos voos da empresa LATAM AIRLINES BRASIL cujo campo natureza possua valor igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).
const resumoVoos = db.voos.count({
  $and: [{
    natureza: "Doméstica",
  }, {
    "empresa.nome": "LATAM AIRLINES BRASIL",
  }],
});

db.resumoVoos.insertMany([{
  "empresa.nome": "PASSAREDO",
}, {
  totalVoosDomesticos: resumoVoos,
}]);

// 2- Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente na coleção resumoVoos em que a empresa seja LATAM AIRLINES BRASIL.

db.resumoVoos.find({
  "empresa.nome": "LATAM AIRLINES BRASIL",
}, {
  "empresa.nome": 1,
  totalVoosDomesticos: 1,
}).limit(1);