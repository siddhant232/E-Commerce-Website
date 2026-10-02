const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authroutes = require("./routes/authroutes");
const profilerouter = require("./routes/profileRoutes");

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

app.use(cookieParser());  // BEFORE your routes


app.use('/auth',authroutes);
app.use('/profile',profilerouter);

module.exports = app;