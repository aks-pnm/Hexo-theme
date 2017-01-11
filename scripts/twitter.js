var path = require('path');
var Promise = require('bluebird');
var nunjucks = require('nunjucks');


var libBase = path.normalize('twitter/')

nunjucks.configure(libBase, {watch: false});

hexo.extend.tag.register('twitter', function(args) {
  var user = args[0];
 console.log(user);
var payload = {
  user: user
};

  return new Promise(function (resolve, reject) {
    nunjucks.render('twitter.html', payload, function (err, res) {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });
}, {async: true});
