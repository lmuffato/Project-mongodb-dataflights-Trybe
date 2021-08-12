db.voos.find({ $nor: 
  [
    { "aeroportoDestino.continente": "EUROPA" },
     { "aeroportoDestino.continente": "ÁSIA" }, 
     { "aeroportoDestino.continente": "OCEANIA" }] })
     .count();
