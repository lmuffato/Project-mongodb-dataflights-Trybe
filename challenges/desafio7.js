/* use("dataFlights") */
db.voos.count({
  ano: { $lt: 2017 },
});
