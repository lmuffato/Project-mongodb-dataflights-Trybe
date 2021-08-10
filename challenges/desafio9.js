// 9 - Retorne a quantidade de voos entre os anos de 2017 e 2018.

db.voos.find({ ano: { $gte: 2017, $lte: 2018 } }).count();

// Outra forma de fazer a mesma query:
// db.voos.find({ $and: [{ ano: { $gte: 2017, $lte: 2018 } }] }).count();
