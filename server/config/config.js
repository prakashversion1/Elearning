var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development:{
        db:'mongodb://localhost/multivision',
        rootPath:rootPath,
        port:process.env.PORT || 3030
    },
    production:{
        db:'mongodb://root:root@ds031962.mongolab.com:31962/multivision',
        rootPath:rootPath,
        port: process.env.PORT || 80
    }
}