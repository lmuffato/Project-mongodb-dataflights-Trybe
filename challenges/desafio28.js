const companhiaAerea = "LATAM AIRLINES BRASIL";

db.resumoVoos.insert({
    empresa: companhiaAerea,
    totalVoosDomesticos: db.voos.find(
        {
          "empresa.nome": companhiaAerea,
          natureza: "Doméstica",
        },
    ).count() });

db.resumoVoos.find({ empresa: companhiaAerea },
 { empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1);
