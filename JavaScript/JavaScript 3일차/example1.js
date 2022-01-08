//타입 변환 하기
var num = 20;
num = '이십';

//명시적 타입 변환
Number('10'); //숫자 10
String(true); // 문자열 'true'
Boolean(0); //불리언 false
Object(3); //숫자 3

//숫자를 문자열로 변환하는 메서드
toExponential() //정수 한자리, 소수는 e 표기법으로 표시, type은 스트링
toFixed() //소수 부분 입력받은 만큼 사용해서 문자열로 변환
toPrecision() //입력받은 수만큼 유효 자릿수를 사용해서 변환(수의 길이를 제한)

//불리언 값을 문자열로 변환하기
String(true);
false.toString();

//날짜 숫자로 반환
getDate() //일자 숫자로 반환 (1~31)
getDay() //요일을 숫자로 반환 (0~6)
getFullYear() //연도를 4자리 숫자로 반환 (yyyy)
getMonth() //월을 숫자로 반환 (0~11)
getTime() //1970년 1월 1일부터 현재까지 숫자를 밀리초 단위의 숫자로 반환
getHours() //현재 시각을 숫자로 반환 (0~23)
getMinutes() //분을 숫자로 반환 (0~59)
getSeconds() //초를 숫자로 반환 (0~59)
getMilliseconds() //초를 밀리초 단위의 숫자로 반환 (0~999)

//날짜 변환 예제
String(Date()); //요일 달 날짜 년도 시각 GMT
Date().toString(); //위와 동일
var date = new Date(); //Date 객체 생성
date.getFullYear(); //2022
date.getTime(); //밀리초 단위 숫자 반환

//문자열을 숫자로 변환하기 
parselnt(); //문자열을 특정 진법의 정수로 반환
parseFloat(); //문자열을 부동 소수점 수로 반환

//불리언 값을 숫자로 변환하기
Number(true); //숫자 1
Number(false); //숫자 0
