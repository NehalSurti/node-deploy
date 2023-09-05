const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const productRouter = require("./routes/product");
const path = require("path");
// const userRouter = require("./routes/user");
// const taskRouter = require("./routes/task");

require("dotenv").config();
const DB_PASSWORD = process.env.DB_PASSWORD;
console.log("DB_PASSWORD :", DB_PASSWORD);

const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect(`mongodb+srv://nehal:${DB_PASSWORD}@cluster0.x4e32rd.mongodb.net/ecommerceDatabase?retryWrites=true&w=majority`);
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected");
}

const index = fs.readFileSync("index.html", "utf-8");



const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)));
server.use("/products", productRouter);
server.use("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "build", "index.html"));
});
// server.use("/users", userRouter);
// server.use("/tasks", taskRouter);

// server.use((req, res, next) => {
//   console.log(
//     req.get("User-Agent"),
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date()
//   );
//   next();
// });

const auth = (req, res, next) => {
  console.log(req.body.password);
  // if(req.query.password=='123'){
  // next();
  // }else{
  //     res.sendStatus(401);
  // }
  if (req.body.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

// server.use(auth);

// server.get('/demo', auth,(req,res)=>{
//   console.log(req.query);
//   res.send(req.query);
// });
// server.get('/demo/:name/:age/:subject', auth,(req,res)=>{
//   console.log(req.params);
//   res.send(req.params);
// });

server.listen(process.env.PORT, () => {
  console.log("Server Started");
});
