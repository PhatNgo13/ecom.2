// import express from "express";
// import mysql from "mysql";
// import cors from "cors";
// import path from "path"

const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

//MAKING CONNECTION WITH MYSQL DATABASE
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "ecomv2",
  password: "1878",
  database: "ecom",
});
//TEST MYSQL CONNECTION
db.connect((err) => {
  if (err) {
    console.log(`Can't connect to database`, err);
    return;
  }
  console.log(`Connected to database`);
});

//USING CORS TO MAKE CROSS ORIGIN REQUEST. USE FOR FETCHING DATA FROM DIFFERENT DOMAINS.
app.use(express.json());
app.use(cors());

//TEST SEND
// app.get("/", (req, res) => {
//   res.send("Connected to the server");
// });

//SEND DATA TO THE FRONTEND
app.get("/albums", (req, res) => {
  const q = "SELECT * FROM album";
  db.query(q, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.use(express.static(path.join(__dirname, "./client", "./build")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "./client", "./build", "index.html"));
});

// app.get("/rap", (req, res) => {
//   const q = "SELECT albumName FROM album WHERE albumGenre = 'Hip-Hop/Rap'";
//   db.query(q, (err, data) => {
//     if (err) console.log(err);
//     res.send(data);
//   });
// });
// app.get("/pop", (req, res) => {
//   const q = "SELECT albumName FROM album WHERE albumGenre = 'Pop'";
//   db.query(q, (err, data) => {
//     if (err) console.log(err);
//     res.send(data);
//   });
// });
// app.get("/r&b", (req, res) => {
//   const q = "SELECT albumName FROM album WHERE albumGenre = 'R&B/Soul'";
//   db.query(q, (err, data) => {
//     if (err) console.log(err);
//     res.send(data);
//   });
// });
// app.get("/alternative", (req, res) => {
//   const q = "SELECT albumName FROM album WHERE albumGenre = 'Alternative'";
//   db.query(q, (err, data) => {
//     if (err) console.log(err);
//     res.send(data);
//   });
// });

//PORT
app.listen(4000, () => {
  console.log("App running on port 4000");
});
