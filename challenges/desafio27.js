const qtyTotalPassaredoDomestica = db.voos.count({ 
  natureza: "Doméstica",
  "empresa.nome": "PASSAREDO" });

db.resumoVoos.insertOne({ 
  empresa: "PASSAREDO",
  totalVoosDomesticos: qtyTotalPassaredoDomestica });

db.resumoVoos.find({},
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
