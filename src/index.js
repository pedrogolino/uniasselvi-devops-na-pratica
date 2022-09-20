const app = require("express")();
const http = require("http");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
const cors = require("cors")();

http.createServer(app).listen(80);
console.log("Listening at:// port:%s (HTTP)", 80);
app.use(cors);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((req, res, next) => {
  // console.log("Url:", req.originalUrl);
  // console.log("Request Type:", req.method);
  // console.log("Time:", Date.now());
  next();
});
require(`./endpoint`)(app);