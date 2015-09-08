// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');    // call body-parser
var productsjson = require('./public/models/products.json');  //read 
var productslistjson = require('./public/models/productslist.json');  //read
var productsgroupsjson = require('./public/models/productgroups.json');  //read

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

//Mounts middleware functions at specified path
app.use(express.static(__dirname + '/public'));


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


var port = process.env.PORT || 8080;        // set our port


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

router.get('/productgroups', function(req, res){

    res.json(productsgroupsjson);

});

router.get('/productslist', function(req, res){

    res.json(productslistjson);

});


/*
app.get('/', function(req, res){

    console.log("Requsted Get /");
    res.send("Hello World!");
});
*/

app.listen(port);
console.log('Magic happens on port ' + port);



