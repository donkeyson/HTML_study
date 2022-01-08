//논리 연산자
var x = true, y = false;
document.write((x && y) + '<br>'); // false (and 연산)
document.write((x || y) + '<br>'); // true (or 연산)
document.write(!x); //false(not 연산)

//비트 연산자
var x = 15, y = 8, z = 15;
document.write((x << 1) + '<br>'); //곱하기 2와 같다. 
document.write((y >> 1) + '<br>'); //나누기 2와 같다.
document.write(~z); //1의 보수와 같다. -(15+1)=-16

//문자열 결합 연산자
var x = 3 + 4; //둘 다 숫자이기 때문에 덧셈 연산을 수행
var y = '좋은' + '하루 되세요!' //둘 다 문자열이기 때문에 문자열 결합 연산 수행
var z = 12 + '월' //하나라도 문자열이면 문자열 결합 연산 수행

//삼항 연산자
var x = 3, y = 5;
var result = (x > y) ? x : y //x가 더크면 x를, 그렇지 않으면 y를 반환
document.write('둘 중에 더 큰 수는' + result + '입니다.');

//쉼표 연산자, for문에서 활용
for (var i = 0, j = 9; i <= j; i++, j--) {   //i, j 둘 동시에 운용
  document.write('i의 값은' + i + '이고, j의 값은' + j + '입니다.<br>');
}

//delete 연산자
var arr = [1, 2, 3]; //배열 생성
delete arr[2]; //인덱스가 2인 요소 삭제.
document.write(arr + '<br>'); // [1, 2, ]
//배열의 요소가 삭제됐을 뿐 배열의 길이는 줄어들지 않았다.
document.write(arr.length); // 3

//typeof 연산자
typeof '문자열' //string
typeof 10 //number
typeof NaN //number
typeof false //boolean
typeof undefined //undefined
typeof new Date() //object
typeof null //object

//instanceof 연산자
var str = new String('이것은 문자열입니다.');

str instanceof Object; //true(객체임)
str instanceof String; //true(문자열)
str instanceof Array; //false(배열 아님)
str instanceof Number; //false(숫자 아님)
str instanceof Boolean; //false(불린 아님)

//void 연산자
javascript.void(0) //동작하지 않는다. undefined 반환
