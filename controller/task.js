// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
const model = require("../model/task");
// const mongoose = require("mongoose");
const Task = model.Task;
// console.log(mongoose.models.Product);
// console.log(model.Product);

exports.createTask = (req, res) => {
  // console.log(req.body);
  // products.push(req.body);

  const task = new Task(req.body);
  // product.title = "iPhone 14";
  // product.price = 9898;
  // product.rating = 5;
  task
    .save()
    .then((task) => {
      console.log("Doc saved:", task);
      res.json(task);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.json(error);
    });  
};

exports.getAllTask = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.getTask = async (req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  const task = await Task.findById(id);
  res.json(task);
};

exports.replaceTask = async (req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  const result = await Task.findOneAndReplace({_id:id}, req.body ,{returnDocument :'after'})  
  res.json(result);
};

exports.updateTask = async(req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  // const productIndex = products.findIndex((p) => id == p.id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1, { ...product, ...req.body });
  const result = await Task.findOneAndUpdate({_id:id}, req.body ,{returnDocument :'after'})
  res.json(result);
};

exports.deleteTask = async (req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  // const productIndex = products.findIndex((p) => id == p.id);
  // products.splice(productIndex, 1);
  const result = await Task.findOneAndRemove({_id:id})
  res.json(result);
};
