const Keyv = require('keyv');
function find (id){
  db[id]
}
function create (text, id){
  var id = Math.floor((Math.random() * 1000000) + 1);
  database.set(id, text);
  return id
}
console.log(create("lol"))

