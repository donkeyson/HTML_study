//Number.parseFloat()
Number.parseFloat('12'); //12

//Number.parsint()
Number.parseint('12.34'); //12

//Number.isNaN()
Number.isNaN(0 / 0); //true

//Number.isFinite()
Number.isFinite(infinity); //false
Number.isFinite(NaN); //false

//Number.isInteger()
Number.isinteger(0); //true

//Number.isSafeInteger()
Number.isSafeInteger(Math.pow(2, 53)); //false

//Number.prototype 메소드
//toExponential(), toFixed(), toPrecision(), toString(), valueOf()

//toExponential()
var num = 12.3456; //Number 인스턴스 생성
num.toExponential(2); //1.23e+1 문자열로 반환

//toFixed()
var num = 3.14159265;
num.toFixed(2); //3.14 문자열로 반환

//toPrecision()
num.toPrecision(2); //3.1

//toString()
var num = 255;
num.toString(); //255 문자열 반환

//valueOf()
var numObj = new Number(123);
typeof numObj; //object
var num = numObj.valueOf();
typeof num; //number
