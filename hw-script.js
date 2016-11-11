console.log('sourced');

// global variable
var theNumber = 1;

var michelangelo = function(pizzas){ // creates a local var called pizzas
    console.log('pizzas before - ', pizzas);
    pizzas = (pizzas * 2);
    console.log('pizzas after - ', pizzas);
    return pizzas;
};

var donatello = function(value, anotherValue){ // creates 2 local vars called value and anotherValue
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
};

var leonardo = function(value){ // value = 1
    var anotherValue = value; // anotherValue = 1
    value *= 4; // value = value * 4; value = 4
    theNumber = value / 2;  // global var theNumber = 2, never returned or used
    return (value + anotherValue);
};

var raphael = function(value, anotherValue, yetAnotherValue){ // 3, 2, 4
    value = value * anotherValue + yetAnotherValue; // never returned or used
    console.log('the value in raphael - ', value);
    return yetAnotherValue; // 4
};

//In your email, tell me what the answer to this expression would be:
console.log('The first part: ', michelangelo(theNumber) + leonardo(theNumber));

theNumber = theNumber * 2;
//theNumber = 2 and then * 2
// final value of theNumber = 4

//In your email, tell me what the answer to this expression would be:
console.log('The second part: ', (donatello(theNumber, 2)) - (raphael(3, 2, theNumber)));
