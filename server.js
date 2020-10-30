var express = require("express");
var exphbs  = require('express-handlebars');
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();
var usuarios = [];

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req,res){
  res.send("You are on the homepage")
})

app.post('/post', function (req,res) {
    var newUser = req.body;
    console.log(newUser)
    usuarios.push(newUser)
    return res.send(`Welcome ${newUser.user}`)
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  app.delete('/delete', function (req,res) {
      var taskId = req.body;
      return res.json({delete:true})
  })

  app.put('/put/:id', (req,res) => {
    var id = req.params.id
    res.send(`Task ${id} has been updated`)
  })