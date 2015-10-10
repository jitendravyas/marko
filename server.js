var template = require('./src/index.marko');
var out = require('fs').createWriteStream('index.html', {encoding: 'utf8'});
template.render({ name: 'Frank' }, out);
