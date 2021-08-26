const qtyTotalPassaredoDomestica = db.voos.count({ 
  natureza: "Doméstica",
  "empresa.nome": "LATAM AIRLINES BRASIL" });

db.resumoVoos.insertOne({ 
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: qtyTotalPassaredoDomestica });

db.resumoVoos.find({},
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
