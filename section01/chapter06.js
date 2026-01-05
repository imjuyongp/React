// 1. 묵시적 형변환 : 자바스크립트 엔진이 알아서 형 변환을 해주는 것

let num = 10;
let str = "20";

const result = num + str; // 묵시적으로 num이 String타입으로 형변환 됨
console.log(result);

// 2. 명시적 형 변환 : 개발자가 내장함수 등을 이영해서 직접 형변환을 명시
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2); // 숫자가 앞에 나와 있어야 앞쪽 숫자로 변환됨
console.log(strToNum2)

let num1 = 20;
let numTostr1 = String(num1);

console.log(numTostr1 + "입니다.");