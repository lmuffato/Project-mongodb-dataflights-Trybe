const companyNameKey = "empresa.nome";
const totalFlights = db.voos.count({ 
  natureza: /doméstica/gi,
  [companyNameKey]: /latam airlines brasil/gi });

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: totalFlights,
});

db.resumoVoos.find({}, { _id: 0 });
