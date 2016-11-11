console.log('sourced');

// global variable
var theNumber = 1;

var michelangelo = function(pizzas){
    console.log('pizzas before - ', pizzas);
    pizzas = (pizzas * 2);
    console.log('pizzas after - ', pizzas);
    return pizzas;
};

var donatello = function(value, anotherValue){
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
};

var leonardo = function(value){ // value = 1
    var anotherValue = value; // anotherValue = 1
    value *= 4; // value = value * 4; value = 4
    theNumber = value / 2;  // global var theNumber = 2
    return (value + anotherValue);
};

var raphael = function(value, anotherValue, yetAnotherValue){ // 3, 2, 4
    value = value * anotherValue + yetAnotherValue;
    console.log('the value in raphael - ', value);
    return yetAnotherValue; // 4
};

//In your email, tell me what the answer to this expression would be:
console.log('The first part: ', michelangelo(theNumber) + leonardo(theNumber));

theNumber = theNumber * 2; //theNumber = 2 and * 2
// final value of theNumber = 4

//In your email, tell me what the answer to this expression would be:
console.log('The second part: ', (donatello(theNumber, 2)) - (raphael(3, 2, theNumber)));
