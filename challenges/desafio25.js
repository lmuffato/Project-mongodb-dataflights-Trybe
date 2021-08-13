db.voos
  .deleteMany(
    { $and: [
      { "empresa.nome": "AZUL" },
      { litrosCombustivel: { $lt: 400, $exists: 1 } },
    ] },
);
