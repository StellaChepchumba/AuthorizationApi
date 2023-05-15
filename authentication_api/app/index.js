const express = require("express");
const app = express();
const verificationRoute = require("./routes/verification");
require('dotenv').config();

const PORT = 4001
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/verification", verificationRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Authorization API server is running on port ${PORT}!`);
});
