db.voos.find(
  {
    decolagens: {
      $gt: 20,
    },
  },
)
.pretty()
.count();
