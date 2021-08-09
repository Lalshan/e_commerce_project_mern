const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConfig");
const productsRoutes = require("./routes/productsRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.json());

dotenv.config();
connectDb();

app.get("/", (req, res) => {
  res.send("Welcome to Node server");
});

app.use("/api", productsRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
