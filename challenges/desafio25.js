db.voos.deleteMany(
  { litrosCombustivel: { $lt: 400 }, "empresa.nome": { $eq: "AZUL" } },
);