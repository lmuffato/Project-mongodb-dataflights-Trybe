const LAB = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ 
    empresa: LAB, 
    totalVoosDomesticos: db.voos.count({ $and: [
      { "empresa.nome": LAB },
      { natureza: "Doméstica" },
    ],
    }),
  });
  
db.resumoVoos.find({ empresa: LAB });