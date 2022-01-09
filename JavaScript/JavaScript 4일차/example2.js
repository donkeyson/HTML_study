//while문
var i = 1;
while (i < 10) { //변수 i가 10보다 작을 동안 반복
  document.write(i + '<br>');
  i++; //
}

//do while 문
var i = 1, j = 1;
while (i > 3) { //변수 i의 초기값이 1이기 때문에 while문 실행x
  document.write('i:' + (i++) + '<br>');
}
do { //변수 j의 초기값이 1이기 때문에 do while문 한 번만 실행
  document.write('j:' + (j++) + '<br>');
} while (j > 3);

  
//for문

for (var i = 1; i < 10; i++) { //초기식; 표현식; 증감식
  document.write(i + '<br>');
}

//for/in 문
var arr = [3, 4, 5];
for (var i = 0; i < arr.length; i++) { //배열 arr의 모든 요소의 인덱스 출력 0 1 2
  document.write(i + ' ');
}
for (var i in arr) { //위와 같은 동작을 수행 0 1 2
  document.write(i + ' ');
}
//응용
var obj = { name : '이순신', age : 20 };

for (var i in obj) {
  document.write(i + '<br>'); //name <br> age
}

//for / of 문
var arr = [3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  document.write(arr[i] + ' '); //3 4 5
}
for (var value of arr) { //위와 같은 동작을 수행 3 4 5
  document.write(value + ' ');
}
//응용
var arr = new Set([1, 1, 2, 2, 3, 3]); //중복값x
for (var value of arr) {
  document.write(value + ' '); //1 2 3
}
