db.voos.count({ $nor: [{ "aeroportoDestino.pais": "ESTADOS UNIDOS" }] });
