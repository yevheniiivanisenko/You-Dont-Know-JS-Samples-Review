function Foo() {
  
}

Foo.prototype; // {}

Foo.prototype.a = 5;
// a gets internal [[PROTOTYPE]] 
// link to the object that Foo.prototype is pointing at.
var a = new Foo();
console.log(a);

// Another variation to reproduce such behaviour
var a = Object.create(Foo.prototype);
console.log(a);

Object.getPrototypeOf( a ) === Foo.prototype; // true
console.log(Object.getPrototypeOf( a ) === Foo.prototype);