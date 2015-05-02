var mongoose = require('mongoose');
var crypto = require('crypto');
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
        userName: String,
        salt:String,
        hash_pwd:String,
        roles:[String]
    });

    userSchema.methods = {
        authenticate: function(passwordToMatch){
            return hashPwd(this.salt,passwordToMatch) === this.hash_pwd
        }
    }

    var User = mongoose.model('User',userSchema);

    User.find({}).exec(function(err,collection){
        if(collection.length === 0){
            var salt, hash;
            salt = createSalt();
            hash = hashPwd(salt,'Prakash');
            User.create({firstName:'Prakash',lastName:'Joshi',userName:'prakashjoshiversion1@gmail.com',salt:salt,hash_pwd:hash,roles:['ADMIN']});
            User.create({firstName:'Lalit',lastName:'Joshi',userName:'lallujoshi@gmail.com',salt:salt,hash_pwd:hash,roles:[]});
            User.create({firstName:'Hari',lastName:'Prashad',userName:'hprashad@gmail.com',salt:salt,hash_pwd:hash});
        }
    });
}

function createSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt,pwd){
    var hmac = crypto.createHmac('sha1',salt);
    return hmac.update(pwd).digest('hex');
}