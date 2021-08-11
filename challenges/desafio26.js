db.voos.deleteMany({
  $and: [
    { "empresa.nome": "GOL" },
    { "passageiros.pagos": { $in: [5, 6, 7, 8, 9, 10] } }],
});
