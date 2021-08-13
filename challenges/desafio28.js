const COMPANY_NAME = "LATAM AIRLINES BRASIL";
const FLIGHT_NATURE = "Doméstica";

const countCompanyFlightsByNature = (companyName, flightNature) => (
  db.voos
    .count(
      {
        "empresa.nome": companyName,
        natureza: flightNature,
      },
    )
);

db.resumoVoos.insert({
  empresa: COMPANY_NAME,
  totalVoosDomesticos: countCompanyFlightsByNature(COMPANY_NAME, FLIGHT_NATURE),
});

db.resumoVoos.find({ empresa: COMPANY_NAME }, { _id: 0 }).limit(1);
