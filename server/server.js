require("dotenv").config();
const express = require("express");
const app  =  express ();
const port = process.env.Port;
const cors = require("cors");
require("./db/db");
const route = require("./route");

app.use(cors({
    origin:["http://localhost:3000","http://127.0.0.1:5501/"]
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(route);

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});