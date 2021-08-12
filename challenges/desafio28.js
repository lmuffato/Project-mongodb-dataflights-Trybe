db.resumoVoos.insert({
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: db.voos.find(
        {
          "empresa.nome": "LATAM AIRLINES BRASIL",
          natureza: "Doméstica",
        },
    ).count() });

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" },
 { empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1);
