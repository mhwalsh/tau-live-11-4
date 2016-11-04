console.log('test');

var theNumber = 1;

//function declaration
function michelangelo2(pizzas) { // local var called pizzas
  pizzas = (pizzas * 2);
  return pizzas;
}

// function expression
var michelangelo1 = function(numchucks){ // local var numchucks
    numchucks = (numchucks * 2);
    return numchucks;
};

//In your email, tell me what the answer to this expression would be:
console.log(michelangelo2(theNumber));
console.log(8);
