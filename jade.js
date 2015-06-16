/* */
"format cjs";
var Jade = require('jade-compiler');
var P_jade_loc = 'npm:jade@1.11.0/runtime';

exports.translate = function(load) {
	var template_fn = Jade.compileClient(load.source);
	return "var jade = require" + "('" + P_jade_loc + "');\n\n" + 'module.exports = ' + template_fn;
};



