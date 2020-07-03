/* Do some fancy databasing*/
let jsoning = require('jsoning');
let database = new jsoning(__dirname + "/notes.json");
let all = database.all();
var db1 = JSON.stringify(all);
var db = JSON.parse(db1)

function find (id){
  db[id]
}
function create (text){
  var id = Math.floor((Math.random() * 1000000) + 1);
  database.set(id, text);
  return id
}
console.log(create("lol"))

