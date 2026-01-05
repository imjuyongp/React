// 1. Number Type
let num1 =27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // 수치연산이 실패했을 때의 결과 값으로 사용

console.log(1 * "hello"); // NaN 번환

// 2. String Type
let myName = "parkjuyong"
let myLocation = "seoul"
console.log(myName + " " + myLocation);

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 백틱을 사용하면 변수에 값을 동적으로 주압 가능
console.log(introduceText);

// 템플릿 리터럴 문법 : 변수에 동적으로 값을 주입하는 기법

// 3. Boolean Type (주로 상태를 나타냄)
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type
let empty = null; // 어떠한 변수에 아무런 값도 담겨있지 않음을 나타냄

// 5. Undefined Type
let none;
console.log(none);

// null과 undefined의 차이점 : null은 개발자가 직접 값이 없음을 할당함