// Retorne o total de voos em que o país de origem não seja BRASIL
db.voos.find({ "aeroportoOrigem.pais": { $nin: ["BRASIL"] } }).count();
