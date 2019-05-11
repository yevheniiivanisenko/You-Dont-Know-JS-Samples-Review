var foo = {
  somethingssss: function() {
    console.log( "Tell me something good..." );
  }
}

var bar = Object.create( foo );

bar.something(); // Tell me something good...

// Partial pre ES5 polyfill

if (!Object.create) {
  Object.create = function(o) {
    function F(){}
    F.prototype = o;
    return new F();
  };
}