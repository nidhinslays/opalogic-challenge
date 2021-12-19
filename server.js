const express = require("express");
const mongodb = require("mongodb");

const MongoClinent = mongodb.MongoClient;
const connectionUrl = "mongodb://127.0.0.1:27017";
const dataBaseName = "arrayStore";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/api", (req, res) => {
  const data = req.body;
  console.log(data);
  // data.forEach((d) => {
  //   MongoClinent.connect(
  //     connectionUrl,
  //     { useNewUrlParser: true },
  //     (error, client) => {
  //       if (error) {
  //         return console.log("unable to connect");
  //       }
  //       const db = client.db(dataBaseName);
  //       db.collection("values").insertOne(d);
  //     }
  //   );
  // });
});

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
