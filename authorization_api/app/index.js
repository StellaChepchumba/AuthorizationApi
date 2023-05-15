const express = require("express");
const app = express();
const authorizationRoute = require("./routes/authorization");
require('dotenv').config();

const PORT = 4000
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/authorization", authorizationRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Authorization API server is running on port ${PORT}!`);
});
