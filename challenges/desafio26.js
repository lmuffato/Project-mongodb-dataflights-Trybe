db.voos
  .deleteMany(
    { "empresa.nome": "GOL" },
    { "passageiros.pagos": { $lte: 5, $gte: 10 } },
  );
