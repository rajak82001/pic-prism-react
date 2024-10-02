// 4 steps procedure to make server
// Express ko bulana hoga ish file mai
const express = require("express");
// dotenv ko bulana hoga
const dotenv = require("dotenv");
// route folder ke subfiles ko read ke liye require hota hai fs
const { readdirSync } = require("fs");
const { connectDb } = require("./connection");
const cors = require("cors");

// import the route here
// const authRoute = require("./routes/authRoutes");  

//binding this new i.e jodenge .env file ko server se
dotenv.config();
// express ko call karna padega ek variable mai.
const app = express();
// server ko listen karna hoga
const port = process.env.PORT || 5000;

connectDb();

//making routes
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("<center><h1>Server Running Dude...</h1><center>")
})

// How to use routes
// app.use("/api", authRoute);

// importing and using routes dynamically
readdirSync("./routes").map((route) => {
    app.use("/api", require(`./routes/${route}`));
});
// console.log(readdirSync("./routes"))

// types of requests
// 1. GET -> To get the data from the server
// 2. POST -> To post th data  to the server
// 3. PUT -> To update the data from the server
// 4. DELETE -> To delete the data from the server


// server ko listen karna hoga
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})