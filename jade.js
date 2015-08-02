var Jade = require('jade-compiler');
var P_runtime_loc = System.normalize('jade-compiler/lib/runtime', module.id );

exports.translate = function(load) {
  var template_fn = Jade.compileClient(load.source);
  return Promise.resolve(
		P_runtime_loc.then(function(runtime_loc) {
			// Note: mask "require" by separating from  left parenthesis to prevent
      // dependency processing on module load.
      //
      return "var jade = require" + "('" + runtime_loc + "');\n\n" +
        'module.exports = ' + template_fn;
    })
  );

};

