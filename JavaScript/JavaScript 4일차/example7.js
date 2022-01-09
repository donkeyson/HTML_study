//지역 변수(local varibale) = 함수 내에서 선언된 변수
function localNum() {
  var num = 10; //지역변수 num
  document.write(typeof num); //number
}
localNum(); //함수 localNum()을 호출
document.write(typeof num); //undefined (함수 외부에서 정의되지 않음)

//전역 변수(global varibale)
var num = 10; //전역 변수 num 선언
function globalNum() {
  document.write(num); // 10
  num = 20; //전역 변수 num의 값을 함수 내부에서 변경
}
globalNum(); //함수 호출
document.write(num); //20 전역 변수의 값이 바뀜. 파이썬과 다름.

//함수 내에서 var 키워드를 사용하지 않는 경우
function globalNum() {
  num = 10; //var 키워드 사용x 전역변수로 선언됨
  document.write(num); //10  
}
globalNum(); //함수 선언
document.write(num); //10 외부에서 출력됨

//전역 변수를 선언하고 별도의 지역 변수를 선언하는 경우
var num = 10; //전역 변수 num 선언
function globalNum() {
  var num = 20; //같은 이름의 지역 변수 num 선언
  document.write(num); //지역변수 20 출력
}
globalNum(); //함수 호출
document.write(num); //전역변수 10 출력
