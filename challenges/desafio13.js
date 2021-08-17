/**
 * Consultei o repositório do Maycon Felipes para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-dataflights/tree/mayconfelipe-mongodb-dataflights
 */
 db.voos.find({ "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();