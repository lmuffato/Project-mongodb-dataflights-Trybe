db.voos.deleteMany({ $and: [
    { "passageiros.pagos": { $gte: 5, $lte: 10 } },
    { "empresa.nome": "GOL" },
  ],
});
