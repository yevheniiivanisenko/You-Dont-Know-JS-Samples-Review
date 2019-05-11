function *main() {
	var x = yield "Hello World";

	// never gets here
	console.log(x);
}

var it = main();

it.next();

try {
	// will `*main()` handle this error? we'll see!
	debugger;
	it.throw( "Oops" );
}
catch (err) {
	// nope, didn't handle it!
	console.error( err ); // Oops
}
