const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/v1", require("./routes/product.routes"));
app.use("/api/v1", require("./routes/search.routes"));

module.exports = app;
