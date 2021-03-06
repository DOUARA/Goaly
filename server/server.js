const express = require("express");
const connectDB = require("./config/db.js");

const app = express();

// Database Connect
connectDB();

// MiddleWares
app.use(express.json({ extended: true }));

// API Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/categories", require("./routes/api/categories"));
app.use("/api/goals", require("./routes/api/goals"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
