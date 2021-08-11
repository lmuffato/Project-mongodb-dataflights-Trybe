const companyName = "empresa.nome";
db.voos.find(
  { [companyName]: /^gol/gi, ano: 2017 },
  {
    _id: false,
    vooId: true,
    [companyName]: true,
    "aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
    ano: true,
    mes: true,
  },
).limit(10);
