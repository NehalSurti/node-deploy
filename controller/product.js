// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
const model = require("../model/productmd");
// const mongoose = require("mongoose");
const Product = model.Product;
// console.log(mongoose.models.Product);
// console.log(model.Product);

exports.createProduct = (req, res) => {
  // console.log(req.body);
  // products.push(req.body);

  const product = new Product(req.body);
  // product.title = "iPhone 14";
  // product.price = 9898;
  // product.rating = 5;
  product
    .save()
    .then((product) => {
      console.log("Doc saved:", product);
      res.json(product);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.json(error);
    });  
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  const product = await Product.findById(id);
  res.json(product);
};

exports.replaceProduct = async (req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  const result = await Product.findOneAndReplace({_id:id}, req.body ,{returnDocument :'after'})  
  res.json(result);
};

exports.updateProduct = async(req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  // const productIndex = products.findIndex((p) => id == p.id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1, { ...product, ...req.body });
  const result = await Product.findOneAndUpdate({_id:id}, req.body ,{returnDocument :'after'})
  res.json(result);
};

exports.deleteProduct = async (req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  // const productIndex = products.findIndex((p) => id == p.id);
  // products.splice(productIndex, 1);
  const result = await Product.findOneAndRemove({_id:id})
  res.json(result);
};
