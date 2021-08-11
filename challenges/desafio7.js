// 7 - Retorne a quantidade de voos em que o ano seja menor do que 2017.
// $lt => menor
db.voos.count({ ano: { $lt: 2017 } });