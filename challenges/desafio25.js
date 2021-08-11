db.voos.deleteMany({ litrosCombustivel: { $lt: 400 } }).count();
