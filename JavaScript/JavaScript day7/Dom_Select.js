//tag name을 이용한 선택
var selectedItem = document.getElementsByTagName('li'); //모든 <li> 요소를 선택
for (var i = 0; i < selectedItem.length; i++) {
  selectedItem.item(i).style.color = 'red'; //선택한 모든 요소 텍스트 색상 변경
}

//id를 이용한 선택
var selectedItem = document.getElementById('even'); //아이디가 'even'인 요소 선택
selectedItem.style.color = 'red'; //선택 요소 색상 변경

//class를 이용한 선택
var selectedItem = document.getElementsByClassName('odd'); //클래스가 'odd'인 모든 요소 선택
for (var i = 0; i < selectedItem.length; i++){
  selectedItem.item(i).style.color = 'red';
}

//name을 이용한 선택
var selectedItem = document.getElementsByName('first');
for (var i = 0; i < selectedItem.length; i++) {
  selectedItem.item(i).style.color = 'red';
}

//css selector를 이용한 선택
var selectedItem = document.querySelectorAll('li.odd'); //클래스가 odd인 요소 중 <li>요소만 선택
for (var i = 0; i < selectedItem.length; i++) {
  selectedItem.item(i).style.color = 'red';
}

//HTML object collection을 이용한 선택.
var title = document.title; // <title> 요소 선택.
document.write(title);

//DOM 요소의 내용 변경
var str = document.getElementById('text');
str.innerHTML = 'Sentence is changed!';

var link = document.getElementById('link'); //아이디가 link인 요소 선택
link.href = '/javascript/intro'; //해당 요소 href 속성값 변경
link.innerHTML = 'go to JavaScript Lucture'; //해당 요소 내용 변경

//DOM 요소의 스타일 변경
var str = document.getElementById('text'); //아이디가 'str'인 요소를 선택
function changeRedColor() {str.style.color = 'red';} //해당 요소의 글자색 빨간색으로 변
function changeBlackColor() {str.style.color = 'black';}
