db.voos.find(
  { "empresa.nome": "GOL", ano: 2017 },
  {
    vooId: true,
    "empresa.nome": true,
    "aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
    mes: true,
    ano: true,
    _id: false,
  },
).limit(10);
