db.voos.deleteMany({
  "empresa.nome": "GOL",
  "passageiros.pagos": { $lte: 10, $gte: 5 },
});