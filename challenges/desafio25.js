db.voos.find({ "empresa.nome": "AZUL",
litrosCombustivel: { $lt: 400, $exists: true } }).count();