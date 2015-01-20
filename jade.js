var compiler = require('jade-compiler');

exports.runtime = require('jade-compiler/runtime');

exports.translate = function(load) {
  var fn = compiler.compileClient(load.source);
  var runtime = "var jade = requir" + "e('" + module.id + "').runtime;\n\n";
  return runtime + 'module.exports = ' + fn;
};


