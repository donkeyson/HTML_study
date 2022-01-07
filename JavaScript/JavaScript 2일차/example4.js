//자바스크립트에는 원시 타입과 객체 타입이 있다. 

//원시 타입은 숫자, 문자열, 불리언, 심볼, undefined

//객체 타입
var num = 10; //숫자
var myName = '홀길동'; //문자열
var str; //underfined

//불리언
var firstNum = 10;
var secondNum = 11;
document.getElementByld('result').innerHTML = (firstNum == secondNum); //출력 결과 false

//심볼
//변경할수 없는 타입. 객체의 프로퍼티를 위한 식별자로 활용
var sym = Symbol('javascript'); //symbol 타입
var symObj = Object(sym); //object 타입

//typeof 연산자는 피연산자의 타입을 반환
typeof 10; //number 타입
typeof '문자열'; //string 타입

//null과 undefined
var num; //underfined 값 반환
var str = null; //object 타입의 null 값
typeof secondNum; //정의되지 않은 변수는 undefined 값을 반환

//null과 undefined는 동등하지만, 일치하진 않는다! 
null == undefined;
null === underfined; //false

//객체 생성
var dog = {name: '해피', age:3 }; //객체 생성하기 
document.getElementByld('result').innerHTML = '강아지의 이름은' + dog.name + '이고, 나이는' + dog.age + '살 입니다.';
