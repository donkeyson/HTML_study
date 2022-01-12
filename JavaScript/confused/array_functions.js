//push()
var ourArray = ['Stimpson', 'j', 'cat'];
ourArray.push(['happy', 'joy']);
//ourArray == ['Stimpson', 'j', 'cat', ['happy', 'joy']]

//pop()
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
//ourArray now equals [1, 2]

//shift() and unshift()
var ourArray = ['Stimpson', 'J', ['cat']];
var removedFromOurArray = ourArray.shift();
//ourArray now equals ['J', ['cat']];
ourArray.unshift('Happy'); //['Happy', 'J', 'cat']
