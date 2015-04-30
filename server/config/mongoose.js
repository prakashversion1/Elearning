var mongoose = require('mongoose');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error',console.error.bind(console,'connection error .........'));
    db.once('open',function callback(){
        console.log('multivision db opened');
    });

    var userSchema = mongoose.Schema({
        firstName:String,
        lastName:String,
        userName: String
    });

    var User = mongoose.model('User',userSchema);

    User.find({}).exec(function(err,collection){
        if(collection.length === 0){
            User.create({firstName:'Prakash',lastName:'Joshi',userName:'prakashjoshiversion1@gmail.com'});
            User.create({firstName:'Lalit',lastName:'Joshi',userName:'lallujoshi@gmail.com'});
            User.create({firstName:'Hari',lastName:'Prashad',userName:'hprashad@gmail.com'});
        }
    });
}