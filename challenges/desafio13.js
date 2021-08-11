db.voos.count(
   
  { $nor: [ 
    { "aeroportoDestino.continente": "EUROPA" },
    
    { "aeroportoDestino.continente": "ÁSIA" },
   
    { "aeroportoDestino.continente": "OCEANIA" },
  ] },
);
