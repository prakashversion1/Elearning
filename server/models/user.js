var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
        firstName:{type:String,required:'{PATH} is required'},
        lastName:{type:String,required:'{PATH} is required'},
        userName: {type:String,required:'{PATH} is required',unique:true},
        salt:{type:String,required:'{PATH} is required'},
        hash_pwd:{type:String,required:'{PATH} is required'},
        roles:[String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch){
        return encrypt.hashPwd(this.salt,passwordToMatch) === this.hash_pwd
    },
    hasRole: function(role){
        return this.roles.indexOf(role) > -1;
    }
};

var User = mongoose.model('User',userSchema);

function createDefaultUsers(){
    User.find({}).exec(function(err,collection){
        if(collection.length === 0){
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt,'Prakash');
            User.create({firstName:'Prakash',lastName:'Joshi',userName:'prakashjoshiversion1@gmail.com',salt:salt,hash_pwd:hash,roles:['ADMIN']});
            User.create({firstName:'Lalit',lastName:'Joshi',userName:'lallujoshi@gmail.com',salt:salt,hash_pwd:hash,roles:[]});
            User.create({firstName:'Hari',lastName:'Prashad',userName:'hprashad@gmail.com',salt:salt,hash_pwd:hash});
        }
    })
};

exports.createDefaultUsers = createDefaultUsers;