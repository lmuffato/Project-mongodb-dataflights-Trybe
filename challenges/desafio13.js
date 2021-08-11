/* 13 - Retorne a quantidade de documentos em que o campo 
aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA. */

db.voos.count({ "aeroportoDestino.pais": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } });
