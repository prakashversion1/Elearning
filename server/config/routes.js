var auth = require('./auth');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var users = require('../controller/users');

module.exports = function(app){

    app.get('/api/users',auth.requiresRole('ADMIN'),users.getUsers);

    app.post('/api/users',users.createUser);

    app.get('/partials/*',function(req,res){
        var partialPath = req.path;
        while(partialPath.charAt(0) === '/')
            partialPath =  partialPath.substr(1);
        partialPath = '../../public/app/'+partialPath;
        partialPath = partialPath.replace('partials/','');
        res.render(partialPath);
    });

    app.post('/login',auth.authenticate);

    app.post('/logout',function(req,res){
        req.logout();
        res.end();
    });

    app.get('*',function(req,res){
        res.render('index',{
            bootstrappedUser:req.user
        });
    });

}