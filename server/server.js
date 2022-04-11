require("dotenv").config();
const express = require("express");
const app  =  express();
const port = process.env.Port;
const cors = require("cors");
require("./db/db");
const route = require("./route");

app.use(cors());
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(route);

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});

