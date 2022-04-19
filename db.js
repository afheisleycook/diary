var sqlite = require("sqlite3");
var db = new sqlite.Database("notes.db");
db.exec()