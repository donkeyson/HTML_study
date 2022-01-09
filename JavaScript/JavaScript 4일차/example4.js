//배열 생성법
var arrLit = [1, true, 'JavaScript']; //배열 리터럴
var arrObj = Array(1, true, 'JavaScript'); //Array 객체의 생성자
var arrNewObj = new Array(1, true, 'JavaScript'); //new 연산자를 이용한 Array 객체 생성     

//배열의 참조[
var arr = ['JavaScript']; //요소가 하나뿐인 배열 생성
var element = arr[0]; //배열의 첫 번재 요소 읽어서 대입

arr[1] = 10; //배열의 두 번째 요소로 숫자 10을 대입. 배열 길이 2로 늘어남.
arr[2] = element; //배열의 세 번재 요소에 변수 element 값 대입. 길이 3으로 늘어남

document.write(arr); //배열의 모든 요소 출력
document.write(arr.length); //배열의 길이 출력

delete arr[2]; //배열의 세 번째 요소 삭제. 배열의 길이는 변하지 않음.

//배열의 요소 추가
var arr = [1, true, 'Java'];

arr.push('Script'); //push() 메소드
document.write(arr + '<br>'); //1, true, Java, Script

arr[arr.length] = 100; //length 프로퍼티 이용
document.write(arr); //1, true, Java, Script, 100

arr[10] = '자바스크립트'; //특정 인덱스 지정해서 추가
document.write(arr + '<br>'); //1, true, Java, Script, 100,,,,,자바스크립트
document.write(arr[7]); //undefined

//배열의 순회
var arr = [1, true, 'JavaScript'];
var result = '<table><tr>';

for (var idx in arr) {
  result += '<td>' + arr[idx] + '</td>';
}
result += '</tr></table>';

document.write(result);

//Array 객체
var arr = new Array(10, '문자열', false);

document.write((typeof arr) + '<br>'); //object
document.write((typeof arr[0]) + '<br>'); //number
document.write((typeof arr[1]) + '<br>'); //string
document.write(typeof arr[2]); //boolean
