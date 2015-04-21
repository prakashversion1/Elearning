var express = require('express');
var path = require('path');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str,path){
	return stylus(str),set('filename',path);
}


app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/favicon.ico'));
//server static contents from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(
	{
      src: __dirname + '/public',
      compile: compile
    }
));

app.get('*',function(req,res){
	res.render('index');
});

var port = 3030;
app.listen(port);
console.log("Application starting on port : " + port);