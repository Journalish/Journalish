const express = require("express");
const app = express();
const config = require("./config.js");
const Keyv = require('keyv');
const title = new Keyv('redis://user:pass@localhost:6379', { namespace: 'users' });
const body = new Keyv('redis://user:pass@localhost:6379', { namespace: 'users' });

app.disable("x-powered-by");

app.use(express.static("public"));

app.get("/", (request, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.post("/create", (req, res) => {
  var text = req.query.text
});
const listener = app.listen(process.env.PORT, () => {
  console.log("MyJournal is runnning on port " + listener.address().port);
});
