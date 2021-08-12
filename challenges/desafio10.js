db.voos.find({
  "empresa.nome": "AZUL",
  "ano": 2017},
  {"_id": false}
).limit(10);
