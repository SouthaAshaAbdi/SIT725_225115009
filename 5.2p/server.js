const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const bookRoutes = require("./routes/route");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});