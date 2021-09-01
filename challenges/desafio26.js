db.voos.find(
  {
    "empresa.nome": "GOL",
    "passageiros.pagos": {
      $in: [5, 10],
    },
  },
).count();