db.resumoVoos.insertOne(
  { empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }) },
  );

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });

// Referências: https://github.com/tryber/sd-010-a-mongodb-dataflights/pull/96
