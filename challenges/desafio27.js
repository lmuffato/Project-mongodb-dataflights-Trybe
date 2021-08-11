const queryResult = db.voos.find({
  $and: [
    { natureza: "Doméstica" },
    { "empresa.nome": "PASSAREDO" },
  ],
}).count();

db.resumoVoos.insertOne({ 
  empresa: "PASSAREDO", totalVoosDomesticos: queryResult, 
});

db.resumoVoos.find({}, { _id: 0 });
