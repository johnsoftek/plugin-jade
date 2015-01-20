console.log('here')
var Jade = require('jade-compiler');
console.log('here2')

exports.runtime = require('jade-compiler/runtime');

exports.translate = function(load) {
console.log('here3')
	var fn = Jade.compileClient(load.source);
  var runtime = "var jade = require('jade').runtime;\n\n";
	return runtime + 'module.exports = ' + fn;
};

