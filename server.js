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
  if (!req.query.title || !req.query.body) {
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
    async function create(title, text) {
      var id = randomstring.generate({ length: 12, charset: config.idtype });
      await title.set(id, title);
      await body.set(id, text);
      return id
    }
    var idgen = create(req.query.title, req.query.body)
    res.end('{"success": true, "error": "", "code": "OK", "result": ""}');
  }
});
const listener = app.listen(process.env.PORT, () => {
  console.log("MyJournal is runnning on port " + listener.address().port);
});
