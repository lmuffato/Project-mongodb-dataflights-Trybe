db.voos
  .deleteMany(
    { $and: [
      { "passageiros.pagos": { $in: [5, 10] } },
      { "empresa.nome": "GOL" },
    ] },
);
