const express = require("express");
const app = express();
var randomstring = require("randomstring");
const config = require("./config.js");
const Keyv = require("keyv");
const title = new Keyv(config.dburl, { namespace: config.prefix + "title" });
const body = new Keyv(config.dburl, { namespace: config.prefix + "body" });
app.disable("x-powered-by");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/find", (req, res) => {
  if (!req.query.title || !req.query.body) {
    res
      .status(403)
      .json(
        '{"success": false, "error": "All FIelds are Required.", "code": "ALL_FIELDS_REQUIRED", "result": null}'
      );
  } else if (req.query.password !== config.password) {
    res
      .status(403)
      .json(
        '{"success": false, "error": "Wrong Password.", "code": "INCORRECT_PASSWORD", "result": null}'
      );
  } else {
    async function find (id){
     var title2 = await title.get(id); 
    var body2 = await body.get(id); 
res.json('{"title": "'+ title2 +'", "body"')
      
    }
    find(req.query.id)
  }
});
app.post("/create", (req, res) => {
  if (!req.query.title || !req.query.body) {
    res
      .status(403)
      .json(
        '{"success": false, "error": "All FIelds are Required.", "code": "ALL_FIELDS_REQUIRED", "result": null}'
      );
  } else if (req.query.password !== config.password) {
    res
      .status(403)
      .json(
        '{"success": false, "error": "Wrong Password.", "code": "INCORRECT_PASSWORD", "result": null}'
      );
  } else {
    res.status(200);
    var id = randomstring.generate({
      length: config.idlength || 7,
      charset: config.idtype
    });
    async function create(title, text) {
      await title.set(id, title);
      await body.set(id, text);
      return id;
    }
    var idgen = create(req.query.title, req.query.body);
    res.json(
      '{"success": true, "error": null, "code": "OK", "result": "' + id + '"}'
    );
  }
});
const listener = app.listen(process.env.PORT, () => {
  console.log("MyJournal is runnning on port " + listener.address().port);
});
