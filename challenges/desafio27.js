const COMPANY_NAME = "PASSAREDO";
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

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0 }).limit(1);
