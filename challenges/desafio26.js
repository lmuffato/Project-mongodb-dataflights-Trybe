db.voos.deleteMany({ $and: [
  { "empresa.nome": "GOL" }, { "passageiros.pagos": { $gt: 4, $lt: 11 } },
] });