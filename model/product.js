var mongoose=require("mongoose");

var productSchema=mongoose.Schema({

    name:String,
    price:String,
    members:String,
    country:String
});

var Product=mongoose.model("member",productSchema);
module.exports=Product;