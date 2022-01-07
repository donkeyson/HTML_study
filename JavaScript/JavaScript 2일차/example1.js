//자바스크립트의 실행문은 세미콜론으로 구분
var x = 10;

//식별자 작성시 두 가지 방식이 있다.
var firstVar = 10; //Camel Case
function my_first_func { //Underscore Case 방식
  var firstLocalVar = 20; //Camel Case
}

//자바 스크립터는 몇몇 단어들을 특별한 용도로 사용하기 위해 키워드와 예약어로 활용한다. 
var firstVar = 10; //var은 변수의 정의를 위해 예약된 키워드
function myFirstFunc { //function은 함수의 정의를 위해 예약된 키워드
  var secondVar = 20;
}

//자바스크립터에서 데이트를 출력할 수 있는 방법 window.alert() 메소드
<script>
  function alertDialogBox() {
  alert('확인을 누를 때까지 다른 작업을 할 수 없어요!'); //window 생략 가능
}
</script>

//가장 많이 사용하는 방법은 HTML DOM요소를 이용한 innerHTML 프로퍼티
<script>
  var str = document.getElementByld('text'); //HTML 요소 선택
  str.innerHTML = '이 문장으로 바뀌었습니다!'; //요소의 내용이나 속성 값 변경
</script>

//document.write() 메소드는 웹 페이지에 가장 먼저 데이터를 출력
//테스트나 디버깅에 활용
<script>
  document.write(4 * 5);
</script>

//console.log() 메소드는 웹 브라우저의 콘솔을 통해 데이터를 출력
//F12 누른 후 메뉴에서 콘솔을 클릭하면 활용 가능.
<p>F12를 눌러서 콘솔 화면을 열면 결과를 확인할 수 있습니다.</p>
<script>
  console.log(4 * 5);
</script>
