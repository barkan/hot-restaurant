// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
app.get('/', function(req, res){
    //res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname + '/app/public/home.html'));
})
app.get('/tables', function(req, res){
    //res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname + '/app/public/tables.html'));
})
app.get('/reserve', function(req, res){
    //res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname + '/app/public/reserve.html'));
})

app.get('/wait', function(req, res){
    res.json(waiting_list);
})
app.get('/table', function(req, res){
    res.json(table_data);
})
}
  // Add some routes to get the three HTML files
};

