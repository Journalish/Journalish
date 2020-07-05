const express = require("express");
const app = express();
var randomstring = require("randomstring");
const config = require("./config.js");
const Keyv = require("keyv");
const title = new Keyv(config.dburl, { namespace: config.prefix + "title" });
const body = new Keyv(config.dburl, { namespace: config.prefix + "body" });
const date = new Keyv(config.dburl, { namespace: config.prefix + "date" });
app.disable("x-powered-by");

app.use(express.static("public"));

app.get("/", (request, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.post("/create", (req, res) => {
  var text = req.query.text;
  var body = req.query.body;
  if (!text || !body) {
    res
      .status(403)
      .end(
        '{"success": false, "error": "All FIelds are Required.", "code": "ALL_FIELDS_REQUIRED", "result": ""}'
      );
  } else if (req.query.password !== config.password) {
    res
      .status(403)
      .end(
        '{"success": false, "error": "Wrong Password.", "code": "INCORRECT_PASSWORD", "result": ""}'
      );
  } else {
    res.status(200); 
    
    res.end('{"success": true, "error": "", "code": "OK", "result": ""}');
  }
});
const listener = app.listen(process.env.PORT, () => {
  console.log("MyJournal is runnning on port " + listener.address().port);
});
