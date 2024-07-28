// 4 steps procedure to make server
// Express ko bulana hoga ish file mai
const express = require("express");
// dotenv ko bulana hoga
const dotenv = require("dotenv");
//binding this new i.e jodenge .env file ko server se
dotenv.config();
// express ko call karna padega ek variable mai.
const app = express();
// server ko listen karna hoga
const port = process.env.PORT || 2000;
//making routes
app.get("/", (req, res) => {
    res.send("<center><h1>Server Running Dude...</h1><center>")
})
// server ko listen karna hoga
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})