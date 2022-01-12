//Math.min()
Math.min(); //infinity
Math.min(1, 10, -100); //-100
Math.min(1, 10, -100, '-1000'); //-1000
Math.min(1, '문자열'); //NaN. 비교 불가능

//Math.max()
Math.max(); //-infinity
Math.max(1, 10, 100); //100
Math.max(1, 10, '1000'); //1000
Math.max(1, 10, '문자열'); //NaN

//Math.random()
var min = 10, max = 20;
Math.random(); //0보다 크거나 같고 1보다 작은 무작위 숫자 [0, 1)
Math.random() * (max - min) + min; //[min, max)

//Math.round(). 첫째 자리에서 반올림.
Math.round(10.49); //10
Math.round(10.5); //11
Math.round(-10.51); //-11

//Math.floor() 전달받은 값과 같거나 작은 수 중에서 가장 큰 정수 반환
Math.floor(10.95); //10
Math.floor(-10.95); //-11
Math.floor(-11.01); //-12

//Math.ceil() 같거나 큰 수 중에서 가장 작은 정수 반환
Math.ceil(10.95); //11
Math.ceil(11.01); //12
Math.ceil(-10.95); //-10
Math.ceil(-11.01); //-11

//Math.sin() 전달받은 값의 사인 함숫값 반환
Math.sin(0); //0
Math.sin(Math.Pi / 2); //1
