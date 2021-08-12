/* 19 - Retorne o vooId do primeiro voo em que o campo litrosCombustivel exista. */
db.voos.find({
  litrosCombustivel: { $exists: true } },
  {
    _id: false,
    vooId: true,
  }).limit(1);
