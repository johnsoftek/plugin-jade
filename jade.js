var Jade = require('./jade-compiler.min');

exports.translate = function(load) {
	var fn = Jade.compileClient(load.source);
  var runtime = "var jade = require('./jade-runtime.min');\n\n";
	return runtime + 'module.exports = ' + fn;
};

