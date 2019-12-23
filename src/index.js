var appPath = require('app-root-path').path;
var path = require('path');
var DEFAULT_OPTIONS = { target: 'dependencies', exclude: /!(.*)/ };

module.exports = function(inRegexp, inOptions) {
  var pkg = require(path.join(appPath, 'package.json'));
  var options = Object.assign({}, DEFAULT_OPTIONS, inOptions);
  var names = pkg[options.target];
  var result = [];
  for (var name in names) {
    if (inRegexp.test(name) && !options.exclude.test(name)) {
      result.push(name);
    }
  }
  return result;
};
