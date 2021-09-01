const companyName = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: companyName,
  totalVoosDomesticos: db.voos.count({ $and: [
    { natureza: "Doméstica" },
    { "empresa.nome": companyName },
  ],
  }),
});

db.resumoVoos.findOne({ empresa: companyName }, { _id: 0 });
