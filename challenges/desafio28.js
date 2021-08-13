// 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
// Para isso, escreva no arquivo desafio28.js duas queries, nesta ordem:

// Conte quantos voos da empresa LATAM AIRLINES BRASIL cujo campo natureza possua valor igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente na coleção resumoVoos em que a empresa seja LATAM AIRLINES BRASIL.
const empresaName = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: empresaName,
  totalVoosDosmesticos: db.voos.count({ natureza: "Doméstica", "empresa.nome": empresaName }),
});

db.resumoVoos.find(
  { empresa: empresaName },
  { _id: 0, empresa: 1, totalVoosDosmesticos: 1 },
).limit(1);
