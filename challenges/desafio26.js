db.voos.deleteMany(
  {
    $and: [
      {
        "empresa.nome": "GOL",
        "passageiros.pagos": { $lte: 10 },
      },
      {
        "empresa.nome": "GOL",
        "passageiros.pagos": { $gte: 5 },
      },
    ],
  },
);