const express = require("express");
const routes = require("./routes");

require("./database"); //mesmo caminho que ./database/index

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
