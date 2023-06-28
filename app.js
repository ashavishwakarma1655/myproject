const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./config/routes");
const root = require("path").join(__dirname, "build");

app.use(express.static(root));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors());
app.use(routes);

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server running with port" , port);
})
