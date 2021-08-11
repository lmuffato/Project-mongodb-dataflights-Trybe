const queryCountOfDomesticFlightsFrom = (name) => 
  (db.voos.count(
  { natureza: "Doméstica",
    "empresa.nome": name },
  ));

db.resumoVoos.insert({
  empresa: "PASSAREDO",
  totalVoosDomesticos: queryCountOfDomesticFlightsFrom("PASSAREDO"),
  });

db.resumoVoos.find({}, { _id: 0 }).limit(1); 
