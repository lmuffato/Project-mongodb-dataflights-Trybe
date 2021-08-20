db.voos.deleteMany(
    { $and: [{ "empresa.nome": "GOL" },
     { "passageiros.pagos": { $gt: 5 } },
      { "passageiros.pagos": { $lt: 10 } }] },
      );
