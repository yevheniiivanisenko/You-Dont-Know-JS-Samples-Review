function foo(a, b) {
  console.log( 'a: ' + a + ', b:' + b );
}

//our DMZ empty object

var ø = Object.create( null );

// spreading out array as parameters
foo.apply( ø, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( ø, 2 );
bar( 3 ); // a:2, b:3

var emptyObject = {};

console.log(ø);
console.log(emptyObject);