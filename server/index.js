// package imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("colors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// file imports
const connectDB = require("./config/db");
const router = require("./routes/index");
const { app, socket } = require("./socket/index");

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true }));
app.use(morgan("dev"));

// variables
const port = process.env.PORT || 5000;
const mode = process.env.MODE || "production";

// database connection
connectDB();

// routes
app.use("/api", router);

// server listening
app.listen(port, () => {
  console.log(
    `Server is running in ${mode} mode on http://localhost${port}`.bgMagenta
      .white
  );
});
