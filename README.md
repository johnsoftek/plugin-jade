jade
====

Systemjs Jade loader plugin. Jade source code is processed by the Jade compiler and returned as a Javascript function. Includes are handled (first level only).

Installing
---
For SystemJS use, locate `jade.js` in the application, and then locate it with map configuration:

```javascript
System.config({
  map: {
    jade: 'path/to/jade.js'
  }
});
```
For installing with jspm, run `jspm install jade`.

Basic use
---------
```javascript
var fn = require('template.jade!');
var html = fn(data);
```

If you add a loader definition, you can dispense with the ! e.g. `var fn = require('template.jade');`
```
SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
...
  },
  meta: {
    "*.jade": {
      "loader": "jade"
    }
  }
});
```

Module use
----------
For esm usage, the plugin exports two named exports: fn and html. Usage:
```javascript
import { html } from 'template.jade'
```
or:
```javascript
import { fn } from 'template.jade'
let html = fn(locals)
```
The default export is the template function:
```javascript
import fn from 'template.jade'
let html = fn(locals)
```


jspm versions
-------------
This version is compatible with jspm version 0.17

Tests
---

```
jspm install
npm install
npm test
```

To test jspm bundling,
```
jspm bundle app
npm test bundle
```

<sub>
* Thanks to Vsevolod Strukchinsky. plugin-jade was based on his jsx plugin https://github.com/floatdrop/plugin-jsx.
 </sub>
