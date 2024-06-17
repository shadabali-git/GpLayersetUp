const express = require('express');
const cors =require('cors');
const app = express();

const db = require("./db/db");
const User = require("./model/user");
const encryptionUtils = require("./utils/encryption.utils");
const verifyUser = require("./middleware/auth");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide an email and a password",
    });
  }

  const existing = await User.findOne({
    email,
  });

  if (existing) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashPassword = await encryptionUtils.hashPassword(password);

  const user = new User({
    email,
    password: hashPassword,
  });

  await user.save();

  return res.status(201).json({
    message: "User created successfully",
    user,
  });
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide an email and a password",
    });
  }

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(400).json({
      message: "User does not exist",
    });
  }

  const match = await encryptionUtils.comparePasswords(password, user.password);

  if (!match) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = encryptionUtils.generateToken(user);

  return res.status(200).json({
    message: "Login successful",
    token,
    user,
  });
});



const port=3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})