var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var path = require('path');
var passport = require('passport');
var session = require('express-session')

module.exports = function(app,config){
    function compile(str,path){
        return stylus(str).set('filename',path);
    }
    app.set('views', path.join(config.rootPath, '/server/views'));
    app.set('view engine', 'jade');
    app.use(favicon( config.rootPath + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(session({secret:'multi vision unicorns'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));
    //server static contents from the public directory
    app.use(express.static(path.join(config.rootPath, 'public')));
}