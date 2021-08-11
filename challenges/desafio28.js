const COMPANY_NAME = "LATAM AIRLINES BRASIL";

const queryCountOfDomesticFlightsFrom = (name) => 
  (db.voos.count(
  { natureza: "Doméstica",
    "empresa.nome": name },
  ));

db.resumoVoos.insert({
  empresa: COMPANY_NAME,
  totalVoosDomesticos: queryCountOfDomesticFlightsFrom(COMPANY_NAME),
  });

db.resumoVoos.find({}, { _id: 0 }).limit(1); 
