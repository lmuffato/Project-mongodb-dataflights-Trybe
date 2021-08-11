db.voos.find(
  { "empresa.nome": /^gol/gi, ano: 2017 },
  {
    _id: false,
vooId: true,
"empresa.nome": true,
"aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
ano: true,
mes: true,
  },
).limit(10);
