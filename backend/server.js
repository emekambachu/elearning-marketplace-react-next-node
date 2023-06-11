import express from "express";
import cors from "cors";
import fs from "fs"; // Import filesystem
const morgan = require("morgan");

// For .env environmental variables
require("dotenv").config();

// Create Express App
const app = express();

// Apply Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
    console.log("This is my own middleware");
    next();
});

// Route


// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));