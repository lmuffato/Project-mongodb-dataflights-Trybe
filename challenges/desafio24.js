db.voos.findOne(
  { 
    $and: 
      [
        {
          litrosCombustivel: { 
          $exists: true, 
          $lte: 600,
        },
      },
      {
        "empresa.sigla": {
          $nin: ["GOL", "AZUL"],
        },
      },
    ],
  }, { 
    vooId: 1, 
    litrosCombustivel: 1,
    "empresa.nome": 1,
    _id: 0,
  },
);