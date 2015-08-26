// node args.js -link http://somesite.com
var r = require('rethinkdb');
var args = process.argv.slice(2);
var link = args[1];
var connection = null;

var connection = null;
// connect to the database
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
    conn.addListener('error', function(e) {
        processNetworkError(e);
    });

    conn.addListener('close', function() {
        cleanup();
    });
    // call to insert link function
    insertLink(conn);
});

// define what my database and table are
var myDB = r.db("links").table("href");

// inser the link into the database
function insertLink() {
  myDB.insert({
    "link" : link
  }).run(connection);
  process.exit()
};