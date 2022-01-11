//프로퍼티가 해당 객체에 존재하는지 검사
hasOwnProperty()

//열거할 수 있는 프로퍼티이지 검사
propertyisEnumerable()

//특정 객체 프로토타입 체인에 현재 객체가 존재하는지 검사
var day = new Date(); //Date 객체 생성
document.write(Date.prototype.isPrototypeOf(day)); //true
document.write(Date.prototype.isPrototypeOf(new String())); //false

//새로운 프로퍼티 추가 가능 여부 확인
isExtensible()
var day = new Date(); //Date 객체 생성
var myDay = Object.preventExtensions(day); //추가할 수 없게 설정
document.write(Object.isExtensible(day)); //false

//toString() 메소드는 호출한 객체의 값을 문자열로 반환
var arr = [10, '문자열', true]; //배열
var bool = false; //불리언
function func() {return 0;} //함수
arr.toString(); //10, string, true
bool.toString(); //false
func.toString(); //all source code returned by string

//valueOf() method. return primitive type of object
function func(n) {
  this.number = n;
}
myFunc = new func(4);
document.write(myFunc + 5); //[object Object]5

func.prototype.valueOf = function() { //def valueOf() method
  return this.number;
}
document.write(myFunc + 5); //9

//getter, setter
var gildong = {age: 18};
document.write(gildong.age); //18

//getter
Object.defineProperty(gildong, 'americanAge', {get: function() { return this.age - 1; }});
document.write(gildong.americanAge); //17. 자동으로 getter 호출.

//setter
gildong.age = 20;

Object.defineProperty(gildong. 'changeAge', {set: function(n) {this.age = this.age - n;}});
gildong.changeAge = 5;
document.write(gildong.age); //15. 매개변수 지정. 자동으로 호출.
