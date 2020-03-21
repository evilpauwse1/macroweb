var express = require('express')
 
// create express application instance
var app = express()
// express route
var routes = require('./route/route');  
routes.configure(app);  
// start server
app.use('/pages', express.static('pages'))
var server = app.listen(3000)