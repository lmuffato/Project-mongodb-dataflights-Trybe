// use("dataFlights");
// db.voos.find();

db.voos.find({ ano: { $gt: 2016 } }).count();
