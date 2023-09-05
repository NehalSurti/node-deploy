const model = require("../model/user");
const User = model.User;

exports.createUser = (req, res) => {
  const user = new User(req.body);
 
  user
    .save()
    .then((user) => {
      console.log("Doc saved:", user);
      res.json(user);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.json(error);
    });  
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUser = async (req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  const user = await User.findById(id);
  res.json(user);
};

exports.replaceUser = async (req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  const result = await User.findOneAndReplace({_id:id}, req.body ,{returnDocument :'after'})  
  res.json(result);
};

exports.updateUser = async(req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  // const productIndex = products.findIndex((p) => id == p.id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1, { ...product, ...req.body });
  const result = await User.findOneAndUpdate({_id:id}, req.body ,{returnDocument :'after'})
  res.json(result);
};

exports.deleteUser = async (req, res) => {
  id = req.params.id;
  console.log(req.params.id);
  // const productIndex = products.findIndex((p) => id == p.id);
  // products.splice(productIndex, 1);
  const result = await User.findOneAndRemove({_id:id})
  res.json(result);
};
