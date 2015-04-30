var passport = require('passport');
module.exports = function(app){
    app.get('/partials/*',function(req,res){
        var partialPath = req.path
        while(partialPath.charAt(0) === '/')
            partialPath =  partialPath.substr(1);
        partialPath = '../../public/app/'+partialPath
        partialPath = partialPath.replace('partials/','')
        console.log('redirecting to new partials :======> ' + partialPath)
        res.render(partialPath);
    });

    app.post('/login',function(req,res,next){
        var auth = passport.authenticate('local',function(err,user){
            if(err){return next(err);}
            if(!user){res.send({success:false})}
            req.logIn(user,function(err){
                if(err){return next(err);}
                res.send({success:true,user:user})
            })
        });
        auth(req,res,next);
    });

    app.get('*',function(req,res){
        res.render('index');
    });

}