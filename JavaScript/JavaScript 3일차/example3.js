//대입 연산자
var x = 10, y = 10, z = 10;
x = x - 5;
y-= 5; //y = y - 5와 같은 표현
z=-5; //z = -5와 같은 표현 

//증감 연산자
var x=10, y=10;
++x; //x 값 1 증가
y++; //y 값 1 증가(늦게)

document.write((++x - 3) + '<br>'); //x의 값 먼저 증가시킨 후 3을 뺌
document.write((y++ - 3) + '<br>'); //먼저 3을 뺀 후에 y의 값을 1 증가

//즉 증감 연산자의 위치에 따라 연산 순서가 달라짐

//비교 연산자
var x = 3, y = 5;
var a = 'abc', b = 'bcd';
document.write((x>y) + '<br>'); //y의 값이 x보다 크므로 false
document.write((a<=b) + '<br>'); //'a'가 'b'보다 먼저 나오기 때문에 a가 b보다 더 작음
document.write(x < a); //숫자와 문자열은 비교 불가능

//동등 연산자
//동등 연산자는 타입이 달라도 자동 변환 일치 연산자는 타입이 다르면 false
var x = 3, y = '3', z = 3;
document.write((x == y) + '<br>'); //타입 같게 한 후 비교 true
document.write((x === y) + '<br>'); //x와 y 타입이 서로 다르므로 false
document.write((x === z); //true
