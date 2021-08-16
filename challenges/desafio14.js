db.voos.find({ "aeroportoOrigens.pais": 
    { $ne: "BRASIL" },
}).count();
