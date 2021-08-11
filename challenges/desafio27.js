const companyNameKey = "empresa.nome";
const totalFlights = db.voos.count({ natureza: /doméstica/gi, [companyNameKey]: /passaredo/gi });

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: totalFlights,
});

db.resumoVoos.find({}, { _id: 0 });
