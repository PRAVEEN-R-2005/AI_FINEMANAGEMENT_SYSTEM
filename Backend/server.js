require("dotenv").config();

const express = require("express");

const app = express();


// =======================
// Database Connection
// =======================
require("./config/db");


// =======================
// Import Routes
// =======================
const studentRoutes = require("./routes/studentRoutes");

const violationRoutes = require("./routes/violationRoutes");

const fineRoutes = require("./routes/fineRoutes");

const authRoutes = require("./routes/authRoutes");

const aiRoutes = require("./routes/aiRoutes");

const aiFineRoutes = require("./routes/aiFineRoutes");

const mlRoutes = require("./routes/mlRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");

const emailRoutes = require("./routes/emailRoutes");
const cors = require("cors");

// =======================
// Middleware
// =======================
app.use(cors());

app.use(express.json());


// =======================
// Static Folder
// =======================
app.use("/uploads", express.static("uploads"));


// =======================
// Routes
// =======================
app.use("/students", studentRoutes);

app.use("/violations", violationRoutes);

app.use("/fines", fineRoutes);

app.use("/auth", authRoutes);

app.use("/ai", aiRoutes);

app.use("/ai-fine", aiFineRoutes);

app.use("/ml", mlRoutes);

app.use("/dashboard", dashboardRoutes);

app.use("/email", emailRoutes);


// =======================
// Home Route
// =======================
app.get("/", (req, res) => {

    res.send("Server Running....");

});


// =======================
// Start Server
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});