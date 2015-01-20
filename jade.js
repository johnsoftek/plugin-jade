var compiler = require('jade-compiler');

exports.runtime = require('jade-compiler/runtime');

exports.translate = function(load) {
  var fn = compiler.compileClient(load.source);
  var runtime = "var jade = require('jade').runtime;\n\n";
  return runtime + 'module.exports = ' + fn;
};

