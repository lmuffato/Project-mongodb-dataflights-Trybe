db.voos.findOne(
  {
    $and: [
      {
        $or: [
          { "empresa.nome": { $not: /gol/i } },
          { "empresa.nome": { $not: /azul/i } },
        ],
      },
      { litrosCombustivel: { $lt: 600 } },
    ],
  },
  { vooId: 1, _id: 0, "empresa.nome": 1, litrosCombustivel: 1 },
);
