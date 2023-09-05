const mongoose = require("mongoose");
const { Schema } = mongoose;
// console.log(mongoose.models);
// let productSchema = {};
productSchema = new Schema({
    title: {type:String, required:true, unique:true},
    description: String,
    price: {type:Number, min:[0,'Wrong Min Price'], required:true},
    discountPercentage: {type:Number, min:[0,'Wrong Min Discount'], max:[50,'Wrong Max Discount']},
    rating: {type:Number, min:[0,'Wrong Min Rating'], max:[5,'Wrong Max Rating']},
    brand: {type:String, required:true},
    category: {type:String, required:true},
    // thumbnail: {type:String, required:true},
    thumbnail: {type:String},
    images: [String]
  });
  
  // mongoose.models = { };
  // console.log(mongoose.models);

  exports.Product = mongoose.models.Product
  ? mongoose.model('Product')
  : mongoose.model('Product', productSchema);
  console.log(mongoose.models.Product);

//   exports.Product = mongoose.model('Product', productSchema);

// module.exports = Product;

