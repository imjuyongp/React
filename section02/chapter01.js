// javascript에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다.
// 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이라고 평가하면 Truthy, 거짓으로 평가하면 falsy
// javascript의 모든 값은 Truthy하거나 Falsy하다.

// 1 .Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if(!f1) {
  console.log("falsy");
}

// 2. Truthy한 값
// Falsy한 값들을 제외한 나머지 값
let t1 = "hello"
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
  if (!person) { // person === undefined || person === null
    console.log("person has no value");
    return;
  }
  console.log(person.name);
}

let person = {name : "parkjuyong"};
printName(person);