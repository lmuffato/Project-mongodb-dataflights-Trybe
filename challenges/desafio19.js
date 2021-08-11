/* 19 - Retorne o vooId do primeiro voo em que o campo litrosCombustivel exista. */
db.voos.findOne({ litrosCombustivel: { $exists: 1 } }, { _id: 0, vooId: 1 });
