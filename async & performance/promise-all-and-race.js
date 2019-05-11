var p1 = Promise.resolve( 42 );
var p2 = Promise.resolve( "Hello World" );
var p3 = Promise.reject( "Oops" );

Promise.race([ p1, p2, p3 ])
	.then( function(msg) {
		console.log( msg ); // 42
	} );

Promise.all([ p1, p2, p3 ])
	.catch( function(err) {
		console.log( err ); // "Oops"
	} );

Promise.all([ p1, p2, p3 ])
	.then( function() {
		console.log(  ); // "Uncaught (in promise) Oops"
	} );

Promise.all([ p1, p2 ])
	.then( function(msgs) {
		console.log( msgs ); // [42, "Hello World"]
	} );