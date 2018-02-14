// Assignment: JavaScript Basics I
// Complete the following challenges using JavaScript. After each challenge, comment out the code you wrote and move onto the next challenge. Submit your answers in an HTML document.
//
// Basic 1
// • Create a variable x as an empty array []. Log this array to your console.

x = [];
console.log(x);

// • Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.

x.push('coding');
x.push('dojo');
x.push('rocks');

// • Use .pop() to remove the final element of your array.

x.pop();

// • Log the final value of x, what is it?

console.log(x);
output:
[]
["coding", "dojo"]

// Basic 2
// • Create a const called y, and store an empty array there. Log this to your console.

const y = [];
console.log(y);

// • Use .push() to add the number 88 to array y.

y.push(88);
console.log(y);

// • What happened?

[88]

// Basic 3
// • Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2]

z = [9, 10, 6, 5, -1, 20, 13, 2]

// • Print every element to the console.

for (var i = 0; i < z.length; i++){
  console.log(z[i]);
}

// • Now print every element except the final number.

for (var i = 0; i < z.length - 1; i++){
  console.log(z[i]);
}

// Basic 4
// • Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

// • Print the length of all names to the console.

for (var i = 0; i < names.length; i ++){
  var str = names[i];
  var count = 0;
  for (var x = 0; x < str.length; x++){
    count++;
  }
  console.log(names[i] + ": " + count);
}

// • Now modify your code so only names with a length of 5 print.

for (var i = 0; i < names.length; i ++){
  var str = names[i];
  var count = 0;
  for (var x = 0; x < str.length; x++){
    count++;
  }
  if (count == 5){
    console.log(names[i] + ": " + count);
  }

}

// Basic 5
// • Create a function yell that takes one parameter called string.
//
// • Make yell return that string in all uppercase.

function yell(string){
  return string.toUpperCase();
};

console.log(yell("hello"));

// • Where could you look to find out more about uppercasing strings in JavaScript?

w3 schools
