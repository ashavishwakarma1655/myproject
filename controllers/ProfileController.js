const routes = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

routes.get("/:a", async (req, res)=>{
     let x = req.params.a;
     let obj = jwt.decode(x, "the stepping ston");
     let id = obj.id;
     let result = await User.find({ _id : id });
     res.send(result[0]);
})


module.exports = routes;