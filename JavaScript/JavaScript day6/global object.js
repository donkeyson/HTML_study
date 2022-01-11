//wrapper object
var str = '문자열'; //문자열 리터럴
var strObj = new String(str); //문자열 객체
str.length; //내부적으로 래퍼 객체 생성 후 length 프로퍼티 참조
str == strObj; //동등 연산자는 객체와 리터럴 동일하게 봄 true
str === strObj; //일치 연산자는 객체와 리터럴 구별 false
typeof str; //string
typeof strObj; //object

//Standard Object
//Number, Math, Date, String, Array
