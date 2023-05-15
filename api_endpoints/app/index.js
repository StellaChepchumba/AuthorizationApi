const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
require("dotenv").config()

const PORT = 3000;
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`API ENDPOINTS server is running on port ${PORT}!`);
});
