function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
}

function Bar(name, label) {
  Foo.call( this, name );
  this.label = label;
}

// here, we make a new `Bar.prototype`
// linked to `Foo.prototype`
Bar.prototype = Object.create( Foo.prototype );

// Beware! Now `Bar.prototype.constructor` is gone,
// and we might need to be manually "fixed" if you're
// in the habit of relying on such properties!
Bar.prototype.constructor = Bar;

Bar.prototype.myLabel = function() {
  return this.label;
}

var a = new Bar( "a", "obj a" );
a.myName(); // "a"
a.myLabel(); // "obj a"

console.log(a);

var c = {};
console.log(c);