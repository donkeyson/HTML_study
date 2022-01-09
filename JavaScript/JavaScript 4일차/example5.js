//희소 배열
var arr = new Array(); // 빈 배열 객체
arr[99] = 'JavaScript' // 배열 arr의 100번째 위치에 문자열 삽입
// 100번째 요소를 삽입했기에 길이 100으로 늘어남

//다차원 배열
var arr = new Array(3); //3개의 요소를 가지는 배열 
for (var row = 0; roe < 3; row++) {
  arr[row] = new Array(4); // 각각의 요소마다 4개의 요소를 가지는 배열 삽입
  for (var column = 0; column < 4; column++) {
    arr[row][column] = '[' + row + ',' + column + ']'; //각각의 배열 요소 생성
    document.write(arr[row][column] + ' '); //각 배열 요소에 접근
  }
}

//연관 배열
var arr = []; //빈 배열 생성
arr['하나'] = 1; //문자열을 인덱스로 배열 요소 추가
arr['참'] = true;
arr['자바스크립트'] = 'JavaScript';
document.write(arr['참']); //문자열 인덱스로 요소에 접근
document.write(arr.length); //연관 배열은 Array 객체가 아니므로 length 프로퍼티 값이 
document.write(arr[0]); //undefined

//문자열 배열처럼 접근
var str = '안녕하세요!'; //문자열 생성
document.write(str.charAt(2)); //charAt() 이용해서 '하' 출력
document.write(str[2]); //같은 결과 출력
str[0] = ''; //문자열은 읽기 전용이므로, 오류 발생

//배열 여부 확인
document.write(Array.isArray(arr)); //true: Array 클래서에서 isArray() 메서드 활용
document.write(Array.isArray(str)); //false: str은 array가 아님
document.write(arr instanceof Array); //true: instanceof 연산자 활용해서 확인

//toString() 메소드와 indexOf() 메소드 활용
function isArray(a) {
  return a.constructor.toString().indexOf('Array') > -1;
}

var arr = [1, true, 'JavaScript']; //배열 생성
document.write(arr.constructor); //constructor 프로퍼티의 값 출력
document.write(arr.constructor.toString()); //function Array() {[native code]}
document.write(arr.constrcutor.toString().indexOf('Array')); //10
document.write(isArray(arr)) //true
