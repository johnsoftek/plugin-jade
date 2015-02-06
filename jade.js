var Jade = require('jade-compiler');
var P_normalized_runtime = System.normalize('jade-runtime', module.id );

exports.translate = function(load) {
	var template_fn = Jade.compileClient(load.source);
	return Promise.resolve(
		P_normalized_runtime.then(function(normalized_runtime) {
			// Note: mask "require" by separating from  left parenthesis to prevent
			// dependency processing at template translation time.
			//
			return "var jade = require" + "('" + normalized_runtime + "');\n\n" +
				'module.exports = ' + template_fn;
		})
	);

};

