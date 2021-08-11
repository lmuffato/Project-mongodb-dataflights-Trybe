db.voos.deleteMany({ $and: [
{ "empresa.nome": { $eq: "GOL" } }, 
{ "passageiros.pagos": { $gte: 5, $lte: 10 } }] });
