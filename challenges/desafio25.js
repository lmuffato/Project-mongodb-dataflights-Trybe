db.voos.deleteMany({
  $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $exists: true, $lt: 400 } }] });