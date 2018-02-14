function outer() {
  var prev = 0;
  var curr = 1;

  function inner() {
    console.log(curr);
    var temp = prev;
    prev = curr;
    curr = curr + temp;

  }
  return inner
}
var fib = outer(); //fib is now equal to the inner function
fib() // should console.log "1"
fib() // should console.log "1"
fib() // should console.log "2"
fib() // should console.log "3"
fib() // should console.log "5"
fib() // should console.log "8"
