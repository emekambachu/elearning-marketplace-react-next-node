import express from "express";
import cors from "cors";
import {readdirSync} from "fs";// Import filesystem
import mongoose from "mongoose";
const morgan = require("morgan");

// For .env environmental variables
require("dotenv").config();

// Create Express App
const app = express();

// Mongo DB Connection
mongoose
    .connect(process.env.DATABASE, {})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error => ", err));

// Apply Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
    console.log("This is my own middleware");
    next();
});

// Route
// Load all route files in routes folder, to avoid manual importation
readdirSync('./routes').map((r) =>
    app.use('/api', require(`./routes/${r}`))
);

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));