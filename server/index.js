import express from "express";
import mysql from "mysql";
import cors from "cors";

//MAKING CONNECTION WITH MYSQL DATABASE
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "ecomv2",
  password: "1878",
  database: "ecom",
});

//USING CORS TO MAKE CROSS ORIGIN REQUEST. USE FOR FETCHING DATA FROM DIFFERENT DOMAINS.
app.use(express.json());
app.use(cors());

//SEND DATA TO THE FRONTEND
app.get("/albums", (req, res) => {
  const q = "SELECT * FROM album";
  db.query(q, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
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
