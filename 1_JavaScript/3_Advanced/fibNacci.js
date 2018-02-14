function fib() {

    var num1 = 0;
    var num2 = 0;
    var sum;

    function nacci() {
        if (num2 == 0){
            sum = 1;
        }
        else {
            sum = num1 + num2;
        }
        console.log(sum);
        num1 = num2;
        num2 = sum;
    }

    return nacci
}

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
