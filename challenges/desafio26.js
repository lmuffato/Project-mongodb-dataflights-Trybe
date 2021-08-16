db.voos.deleteMany({ "empresa.nome": "GOL", "passageiros.pagos": { $in: [5, 10] } });
