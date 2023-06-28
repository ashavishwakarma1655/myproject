require("../config/db");
let  mongoose = require("mongoose");
let ProductSchema = mongoose.Schema({
      
    title : String,
    price : String,
    category : String,
    detail : String,
    discount : Number,
    quantity  :Number
 })
 
 module.exports = mongoose.model("product", ProductSchema) 
 
 