//eval
//문자열로 표현된 코드 실행하는 함수
var x = 10, y = 20;
var a = eval('x + y'); //30

//isFinite()
//숫자가 아니라면, 숫자로 변환하여 검사
isFinite(123); //true
isFinite(false); //true
isFinite(''); //true

isFinite('문자열'); //false
isFinite(undefined); //false
isFinite(NaN); //false

//isNaN()
//숫자가 아니라면 숫자로 강제 변환
isNaN(NaN); //true
isNaN('문자열'); //true
isNaN(underfined); //true

//parseFloat()
//문자열 파싱해서 부동 소수점 수로 반환
parseFloat('123.000'); //123
parseFloat('12 34 56'); //12
parseFloat('초콜릿 123'); //NaN

//parseInt()
//문자열 파싱하여 정수로 반환
parseInt('123.000'); //123
parseInt('12 34 56'); //12
parseInt('초콜릿 123'); //NaN

//encodeURI(), encodeURIComponent()
//URI 부호화
var uri = 'http://google.com/search.php?name=홍길동&city=서울';
var enc1 = encodeURI(uri);
var enc2 = encodeURIComponent(uri);

var dec1 = decodeURI(enc1);
var dec2 = decodeURIComponent(enc2);

//escape()와 unescape()
var str = 'Hello! World ?#$';

var esc = escape(str); //Hello%21%09World%20%3F%23%24
var une = unescape(esc); //Hello! World ?#$

//Number()
//전달받은 객체의 값을 숫자로 변경

Number(true); //1
Number(false); //0
Number(new Date()); //현재 날짜 숫자]
Number(null); //0

//String()
String(new Date()); //현재 날짜에 해당하는 문자열 반환
String(Boolean(1)); //true
String(Boolean(0)); //false
