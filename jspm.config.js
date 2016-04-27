SystemJS.config({
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.38"
  },
  packages: {
    "plugin-jade": {
      "format": "esm",
      "main": "jade.js"
    }
  },
  meta: {
    "*.jade": {
      "loader": "jade.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jade-compiler": "npm:jade@1.11.0",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "traceur": "github:jmcriffey/bower-traceur@0.0.90",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.90",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.2.1"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:acorn-globals@1.0.9": {
      "map": {
        "acorn": "npm:acorn@2.7.0"
      }
    },
    "npm:acorn@1.2.2": {
      "map": {}
    },
    "npm:acorn@2.7.0": {
      "map": {}
    },
    "npm:align-text@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.0.2",
        "longest": "npm:longest@1.0.1",
        "repeat-string": "npm:repeat-string@1.5.4"
      }
    },
    "npm:amdefine@1.0.0": {
      "map": {}
    },
    "npm:asap@1.0.0": {
      "map": {}
    },
    "npm:async@0.2.10": {
      "map": {}
    },
    "npm:babel-runtime@5.8.38": {
      "map": {}
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:center-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4",
        "lazy-cache": "npm:lazy-cache@1.0.4"
      }
    },
    "npm:clean-css@3.4.12": {
      "map": {
        "commander": "npm:commander@2.8.1",
        "source-map": "npm:source-map@0.4.4"
      }
    },
    "npm:cliui@2.1.0": {
      "map": {
        "center-align": "npm:center-align@0.1.3",
        "right-align": "npm:right-align@0.1.3",
        "wordwrap": "npm:wordwrap@0.0.2"
      }
    },
    "npm:commander@2.6.0": {
      "map": {}
    },
    "npm:commander@2.8.1": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:constantinople@3.0.2": {
      "map": {
        "acorn": "npm:acorn@2.7.0"
      }
    },
    "npm:core-js@1.2.6": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.1"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:css@1.0.8": {
      "map": {
        "css-parse": "npm:css-parse@1.0.4",
        "css-stringify": "npm:css-stringify@1.0.5",
        "systemjs-json": "github:systemjs/plugin-json@0.1.1"
      }
    },
    "npm:falafel@1.2.0": {
      "map": {
        "acorn": "npm:acorn@1.2.2",
        "foreach": "npm:foreach@2.0.5",
        "isarray": "npm:isarray@0.0.1",
        "object-keys": "npm:object-keys@1.0.9"
      }
    },
    "npm:graceful-readlink@1.0.1": {
      "map": {}
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:inline-process-browser@2.0.1": {
      "map": {
        "falafel": "npm:falafel@1.2.0",
        "through2": "npm:through2@0.6.5"
      }
    },
    "npm:is-buffer@1.1.3": {
      "map": {}
    },
    "npm:isarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.1"
      }
    },
    "npm:jade@1.11.0": {
      "map": {
        "character-parser": "npm:character-parser@1.2.1",
        "clean-css": "npm:clean-css@3.4.12",
        "commander": "npm:commander@2.6.0",
        "constantinople": "npm:constantinople@3.0.2",
        "jstransformer": "npm:jstransformer@0.0.2",
        "mkdirp": "npm:mkdirp@0.5.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.1",
        "transformers": "npm:transformers@2.1.0",
        "uglify-js": "npm:uglify-js@2.6.2",
        "void-elements": "npm:void-elements@2.0.1",
        "with": "npm:with@4.0.3"
      }
    },
    "npm:jstransformer@0.0.2": {
      "map": {
        "is-promise": "npm:is-promise@2.1.0",
        "promise": "npm:promise@6.1.0"
      }
    },
    "npm:kind-of@3.0.2": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.3"
      }
    },
    "npm:lazy-cache@1.0.4": {
      "map": {}
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:optimist@0.3.7": {
      "map": {
        "wordwrap": "npm:wordwrap@0.0.2"
      }
    },
    "npm:promise@2.0.0": {
      "map": {
        "is-promise": "npm:is-promise@1.0.1"
      }
    },
    "npm:promise@6.1.0": {
      "map": {
        "asap": "npm:asap@1.0.0"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.1.0": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "inline-process-browser": "npm:inline-process-browser@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "unreachable-branch-transform": "npm:unreachable-branch-transform@0.5.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:recast@0.11.5": {
      "map": {
        "ast-types": "npm:ast-types@0.8.16",
        "esprima": "npm:esprima@2.7.2",
        "private": "npm:private@0.1.6",
        "source-map": "npm:source-map@0.5.4"
      }
    },
    "npm:right-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:source-map@0.1.43": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:source-map@0.5.4": {
      "map": {}
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.0"
      }
    },
    "npm:stream-http@2.2.1": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:through2@0.6.5": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:transformers@2.1.0": {
      "map": {
        "css": "npm:css@1.0.8",
        "promise": "npm:promise@2.0.0",
        "uglify-js": "npm:uglify-js@2.2.5"
      }
    },
    "npm:uglify-js@2.2.5": {
      "map": {
        "optimist": "npm:optimist@0.3.7",
        "source-map": "npm:source-map@0.1.43"
      }
    },
    "npm:uglify-js@2.6.2": {
      "map": {
        "async": "npm:async@0.2.10",
        "source-map": "npm:source-map@0.5.4",
        "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
        "yargs": "npm:yargs@3.10.0"
      }
    },
    "npm:uglify-to-browserify@1.0.2": {
      "map": {}
    },
    "npm:unreachable-branch-transform@0.5.1": {
      "map": {
        "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
        "recast": "npm:recast@0.11.5"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:void-elements@2.0.1": {
      "map": {}
    },
    "npm:window-size@0.1.0": {
      "map": {}
    },
    "npm:with@4.0.3": {
      "map": {
        "acorn": "npm:acorn@1.2.2",
        "acorn-globals": "npm:acorn-globals@1.0.9"
      }
    },
    "npm:yargs@3.10.0": {
      "map": {
        "camelcase": "npm:camelcase@1.2.1",
        "cliui": "npm:cliui@2.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "window-size": "npm:window-size@0.1.0"
      }
    }
  }
});
