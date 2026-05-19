const fs = require('node:fs');

exports.loggerMiddleWare = function(req, res, next){
    const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
    fs.appendFileSync('logx.txt', log, 'utf-8');
    next();
}