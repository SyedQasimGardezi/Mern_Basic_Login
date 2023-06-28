const express = require("express");
const cors = require("cors");
const server = express();

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo");
  console.log("db connected");
}

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.post("/demo", async (req, res) => {
  let user = new User();
  user.username = req.body.form.username;
  user.password = req.body.form.password;
  const doc = await user.save();
  console.log(doc);
  res.json(doc);
});

server.get("/demo", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
  console.log(docs);
});

const port = 8000;

server.listen(port, () => {
  console.log("serverstarted");
});
