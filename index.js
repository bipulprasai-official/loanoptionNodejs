const express = require("express");
const app = express();
const port = 4000 || 8000;
const cors = require("cors");
const fetchRoutes = require("./src/routes/fetchApiRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/api/", fetchRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
