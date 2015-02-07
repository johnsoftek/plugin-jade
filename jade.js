var Jade = require('jade-compiler');
var P_jade_loc = System.normalize('jade-compiler', module.id );

exports.translate = function(load) {
  var template_fn = Jade.compileClient(load.source);
  return Promise.resolve(
    P_jade_loc.then(function(jade_loc) {
      // Note: mask "require" by separating from  left parenthesis to prevent
      // dependency processing on module load.
      //
      return "var jade = require" + "('" + jade_loc + "/lib/runtime');\n\n" +
        'module.exports = ' + template_fn;
    })
  );

};

