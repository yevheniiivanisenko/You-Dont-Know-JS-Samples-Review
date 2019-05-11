var p = new Promise( function(resolve, reject){
  foo.bar(); // `foo` is not defined, so erro!
  resolve(42); // never gets here :(
} );

p.then(
  function fullfilled(){
    // never gets here :(
  },
  function rejected(err){
    // `err` will be a `TypeError` exception object
    // from the `foo.bar` line.
    console.log(err);
  }
);



// var p = new Promise( function(resolve,reject){
//   resolve( 42 );
// } );
// 
// p.then(
//   function fulfilled(msg) {
//     foo.bar();
//     console.log( msg ); // never gets here :(
//   },
//   function rejected(err){
//     // never gets here either :(
//   }
// );