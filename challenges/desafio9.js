// use("dataFlights");
// db.voos.find();

db.voos.find({ ano: { $in: [2017,2018] } }).count();
