db.voos.find({ "passageiros.pagos": { $gt: 7000 } },
{
  _id: false,
  vooId: true,
  ano: true,
  mes: true,
}).limit(1);
