//변수의 선언과 초기화
var month; //변수의 선언
var date = 25; //변수의 선언과 동시에 초기화
month = 12; //변수의 초기화

//여러 변수
var month, date; //여러 변수를 한 번에 선언
var hours = 7, minutes = 15; //여러 변수를 선언과 동시에 초기화
month = 10, date = 5; //여러 변수를 한 번에 초기화

//변수의 재선언
var num = 10; //변수 선언과 함께 초기화
num = [10, 20, 30]; //배열 대입으로 변수 타입 변경
var num; //재선언문은 무시

//연산자 예시
var x = 10, y = 4;
document.write(x + y + '<br>'); //14 <br>은 줄바꿈
document.write(x - y + '<br>'); //6
document.write(x * y + '<br>'); //40
document.write(x / y + '<br>'); //2.5
document.write(x % y); //2 (나머지)
