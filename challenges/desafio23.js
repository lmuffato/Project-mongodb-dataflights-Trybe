// 23 - Retorne o vooId e litrosCombustivel do primeiro voo em que o campo litrosCombustivel não seja maior do que 1000 e o campo litrosCombustivel exista.
db.voos.findOne(
    { litrosCombustivel: { $lt: 1000 } },
    { litrosCombustivel: 1, vooId: 1, _id: 0 },
  );