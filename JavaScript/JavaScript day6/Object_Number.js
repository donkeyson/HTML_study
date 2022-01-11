//number error
var x = 9999999999999999; // 16자리 정수부
var y = 0.1 + 0.2
x; //10000000000000000
y; //0.30000000000000004

var z = (0.2 * 10 + 0.1 * 10) / 10; //0.3

//notation
var x = 0xAB; //decimal 171
var y = 29; //decimal 29
x + y; //decimal 200

var num = 256;
num.toString(2); //decimal to binary : 1000000000
num.toString(8); //decimal to octal : 400
num.toString(10); //decimal to decimal : 256
num.toString(16); //decimal to hexa : 100

//infinity
var x = 10 / 0; //divde by 0 --> infinity
var y = Infinity * 1000; //return infinity
var z = 1 / Infinity; //return 0

//NaN
var x = 100 - '10'; //automatically '10' turned to number
var y = 100 - 'string'; //'string' can not be number. return NaN.
var z = 0 / 0; // 0 can not be divided by 0. return 0

