plugin-jade
===========

JADE loader plugin

This plugin will translate Jade templates to Javascript for loading by jspm

To use it, install it with jspm:
```bash
jspm install jade
```
and install Jade runtime:
```bash
jspm install npm:jade-runtime
```
After that you can include Jade templates in your modules:
```bash
var fn = require('template.jade!');
var html = fn(data);
```
# Tests

```bash
jspm install
jspm install npm:jade-runtime
npm install
npm test
```

To test jspm bundling,
```
jspm bundle app
npm test bundle
```

#
Thanks to Vsevolod Strukchinsky. plugin-jade was based on his jsx plugin https://github.com/floatdrop/plugin-jsx. 
