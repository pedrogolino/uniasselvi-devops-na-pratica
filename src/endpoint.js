module.exports = function (app) {
    app.get("/cidades", (req, res) => {
      // #swagger.tags = ['Cidades']
      // #swagger.description = 'Endpoint para obter todas as cidades'

          res.json({ data: [{name: `Blumenau`}] });
    });
  };