// desafio 28
const company = "LATAM AIRLINES BRASIL";

const queryResults = db.voos.find({
  "empresa.nome": company, natureza: "Doméstica",
}).count();

db.resumoVoos.insertOne({
  empresa: company,
  totalVoosDomesticos: queryResults,
});

db.resumoVoos.find({ empresa: company }, { _id: 0 });
