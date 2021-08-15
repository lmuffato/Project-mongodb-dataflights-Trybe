// use("dataFlights")
db.voos.count({
  decolagens: { $gt: 20 },
});
