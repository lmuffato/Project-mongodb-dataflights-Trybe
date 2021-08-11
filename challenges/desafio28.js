const LAB = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ 
    empresa: LAB, 
    totalVoosDomesticos: db.voos.count({ $and: [
      { "empresa.nome": LAB },
      { natureza: "Doméstica" },
    ],
    }),
});
  
db.resumoVoos.findOne({ empresa: LAB }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
