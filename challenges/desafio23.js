// 23 - Retorne o vooId e litrosCombustivel do primeiro voo em que o campo litrosCombustivel não seja maior do que 1000 e o campo litrosCombustivel exista.
db.voos.find(
  { $and:
    [{ litrosCombustivel: { $lt: 1000 } },
    { litrosCombustivel: { $exists: true } }] },
  { _id: 0, vooId: 1, litrosCombustivel: 1 },
).limit(1);
