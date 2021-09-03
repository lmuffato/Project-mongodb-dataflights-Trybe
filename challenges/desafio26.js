db.voos.deleteMany({
  "empresa.nome": "GOL",
  $and: [
    { "passageiros.pagos": { $gte: 5 } },
    { "passageiros.pagos": { $lte: 10 } },
  ],
});