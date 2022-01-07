//<script> 태그를 사용하면 HTML 문서 안에 자바스크립트 코드를 삽입할 수 있다.
<script>
  document.getElementByld('text').innerHTML = '여러분을 환영합니다!';
</script>

//HTML 문서의 <head>태그에 자바스크립트 코드를 삽입한 예제
/*
<head>
  <meta charset='UTF-8'>
  <title>JavaScript Apply</title>
  <script>
    function printDate() {
      document.getElementByld('date').innerHTML = Date();
    }
  </script>
</head>
*/

//HTML 문서의 <body>태그에 자바스크립트 코드를 삽입한 예제
/*
<body>
  <p>자바스크립트를 이용하면 현재 날짜와 시간 정보에도 손쉽게 접근할 수 있어요!</p>
  <button onclick='printDate()'>현재 날짜와 시간 표시하기!</button>
  <p id='date></p>
  <script>
    function printDate() {
      document.getElementByld('date').innerHTML = Date();
    }
  </script>
</body>
*/

