db.resumoVoos.insertOne({
empresa: "PASSAREDO",
totalVoosDomesticos: 4187
});

db.resumoVoos.find({}, {_id: 0 });
