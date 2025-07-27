const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// ---------------------------
// Serve frontend build
// ---------------------------
const __dirname1 = path.resolve(); // required in ES modules
app.use(express.static(path.join(__dirname1, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname1, "./client/build/index.html"));
});

// ---------------------------

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
