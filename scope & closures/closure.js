var fn;

function foo() {
  var a = 2;

  function baz() {
    console.log(a);
  }

  console.log('step - 1');
  console.log('assign our inner baz() function to global variable which is named fn');
  fn = baz;
}

function bar() {
  console.log('step - 2');
  console.log('call our global variable fn which now has reference to inner baz() function of foo() function\'s lexical scope')
  fn();
}

foo();

bar();
