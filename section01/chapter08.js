// 1. null 병합 연산자 : 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // var1과 var2 중 undefined가 아닌 값을 찾아서 var4에 저장
console.log(var4);

let var5 = var1 ?? var3;
console.log(var5);

let var6 = var2 ?? var3; // undefined나 null이 없다면 그냥 앞에 값 출력
console.log(var6);

// 2. typeof 연산자 : 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello" // 자바스크립트는 코드 실행에 따라서 동적으로 타입을 넣게됨

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자 : 항을 3개 사용하는 연산자
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
console.log(typeof res);