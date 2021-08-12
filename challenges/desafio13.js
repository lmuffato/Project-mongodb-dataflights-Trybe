db.voos.find({ "aeroportoDestino.continente": 
{ $not: { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } } }).count();
