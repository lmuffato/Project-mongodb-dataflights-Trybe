db.voos.find({ $nor: [{ "aeroportoDestino.pais": "ESTADOS UNIDOS" }] });
