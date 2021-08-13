db.voos
  .deleteMany(
    { $and: [
      { "passageiros.pagos": { $lte: 5, $gte: 10 } },
      { "empresa.nome": "GOL" },
    ] },
);
