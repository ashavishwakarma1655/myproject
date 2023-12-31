const routes = require("express").Router();
const User = require("../models/User")
const sha1 = require("sha1");
routes.post("/", async(req, res)=>{
       
       delete req.body.repass;
       
       req.body.password = sha1(req.body.password);
       
       // console.log(req.body);
       await User.create(req.body)
       res.send({ success : true });
})

module.exports = routes;