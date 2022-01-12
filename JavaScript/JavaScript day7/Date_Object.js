var date = new Date(); //Date 객체 생성

new Date('December 14, 1977 13:30:00'); //날짜를 나타내는 문자열
new Date(80000000); //1970 1월 1일 0시부터 해당 밀리초만큼 지난 날짜
new Date(16, 5, 25); //3개의 숫자로 나타내는 날짜. 시간은 0시 0초로 설정됨.
new Date(16, 5, 25, 15, 40, 0); //7개의 숫자로 나타내는 날짜
new Date(2016, 5, 25, 15, 40, 0); //2000년대 표기를 위해서는 연도를 전부 표기

//date format
//YYYY-MM-DDTHH:MM:SS
//입력하지 않으면 시간은 09:00:00으로 초기화. 일과 월은 1로 초기화.
new Date('1977-12-14T13:30:00'); //날짜와 시간까지 표현

//Long format
//MMM DD YYYY
//DD MMM YYYY
new Date('Feb 19 1982'); //MMM DD YYYY
new Date('19 Feb 1982');
new Date('February 19 1982'); //단어도 인식
         
//Short format
//MM/DD/YYYY
new Date('02/19/1982'); //MM/DD/YYYY

//Full format
new Date('Wed May 25 2016 17:00:00 GMT +0900 (Seoul Time)');
