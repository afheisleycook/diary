const express = require("express");
app = express();
app.set('views', ".//views")
app.use(express.static('public'));
app.set('view engine', 'pug');
var sqlite = require("sqlite3");
const {render} = require("pug");
var db = new sqlite.Database("notes.db");

app.engine('pug', require('pug').__express);

app.all("/",function(req,res) {
   res.render("home.pug")
});
app.get("/auth",function(req,res) {
   res.render("login.pug");
});
app.post("/post",function(req,res,data) {

});
app.get("/notes",function(req,res)
{
   let notelist = []

   let notes = db.all("select * from NOTES");

   for(let index=0;index<=notes.length;index++) {
      notelist.push(notes[index]);
   }
   render("notes.pug",notes)
});
app.listen(8082)
