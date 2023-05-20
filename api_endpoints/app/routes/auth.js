const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const currentUser = {
"firstName": "Stellah",
"lastName": "Chepchumba",
"email": "stellachepchumbah@gmail.com",
"password": "password"
}

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });
    currentUser = newUser;
    res.status(200).json(currentUser); // Sending the user and token as a response
  } catch (err) {
    res.status(400).json("Incorrect parameters passed.");
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    // Extract token from header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SEC);
        const userEmail = req.body.email
        const userPassword = req.body.password
        
        if (currentUser.email == userEmail && currentUser.password === userPassword) {
          res.status(200).json(`Welcome ${currentUser.firstName}`);
        } else {
          res.status(400).json("Bad request.");
        }
       } catch (err) {
        res.status(403).json("Forbidden request.");
       }
    } else {
      res.status(403).json("Forbidden request.")
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
const mysql = require('mysql');
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'stellah',
  password: '37031956@stella',
  database: 'Gdldata'
});
 
connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database!');
});