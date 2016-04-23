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

Basic Use
---
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
