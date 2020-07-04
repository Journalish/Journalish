const express = require("express");
const app = express();
app.disable('x-powered-by')

app.use(express.static("public"));


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});


const listener = app.listen(process.env.PORT, () => {
  console.log("MyJournal is runnning on port " + listener.address().port);
});
