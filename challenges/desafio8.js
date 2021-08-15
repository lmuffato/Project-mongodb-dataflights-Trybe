/* use("dataFlights") */
db.voos.count({
  ano: { $gt: 2016 },
});
