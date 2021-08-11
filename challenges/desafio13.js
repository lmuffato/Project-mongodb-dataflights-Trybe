db.voos.count({ $and: [
   { "aeroportoDestino.continente": {$ne:  "EUROPA" } }, 
   { "aeroportoDestino.continente": {$ne: "ÁSIA" } },
   { "aeroportoDestino.continente": {$ne: "OCEANIA" } }],
  });
