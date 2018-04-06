module.exports = {

    add: function(num1, num2) {
      let sum = num1 + num2;
      console.log (`${num1} + ${num2} = ${sum}`);
      return sum;
    },
    multiply: function(num1, num2) {
      let product = num1 * num2;
      console.log(`${num1} * ${num2} = ${product}`);
      return product;
    },
    square: function(num) {
      let square = num * num;
      console.log(`${num} * ${num} = ${square}`);
      return square;
    },
    random: function(num1, num2) {
        let rand = Math.floor((Math.random() * num2) + num1);
      console.log(`Random number between ${num1} and ${num2} is ${rand}`);
      return rand;
    }

};
