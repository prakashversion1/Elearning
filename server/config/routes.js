
module.exports = function(app){
    app.get('/partials/*',function(req,res){
        var partialPath = req.path
        while(partialPath.charAt(0) === '/')
            partialPath = partialPath.substr(1);
        partialPath = '../../public/app/'+partialPath
        partialPath = partialPath.replace('partials/','')
        console.log('redirecting to new partials :======> ' + partialPath)
        res.render(partialPath);
    });

    app.get('*',function(req,res){
        res.render('index');
    });

}