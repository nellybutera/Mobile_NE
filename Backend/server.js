// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const tokenRoutes = require("./routes/tokenRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/tokens", tokenRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
