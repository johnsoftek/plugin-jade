var Jade = require('jade');

exports.runtime = require('runtime');

exports.translate = function(load) {
	var fn = Jade.compileClient(load.source);
  var runtime = "var jade = require('jade').runtime;\n\n";
	return runtime + 'module.exports = ' + fn;
};

