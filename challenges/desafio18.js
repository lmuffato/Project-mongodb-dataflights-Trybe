/* 18 - Retorne o vooId, mes e ano do primeiro voo com mais de 7000 passageiros pagos. */
db.voos.find({ "passageiros.pagos": { $gt: 7000 } },
{
  _id: false,
  vooId: true,
  ano: true,
  mes: true,
}).limit(1);
