  System.import('./test.jade!')
    .then(function(fn) {
    document.body.innerHTML = fn({local: 'no'});
    })
    .catch(function(err) {
      console.log('ERROR: ', err);
    });
