db.voos.deleteMany(
  { litrosCombustivel: { $lt: 400 },
    "empresa.nome": "AZUL",
  },
  { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 },
  );