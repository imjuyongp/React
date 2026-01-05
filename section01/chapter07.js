// 1, 대입 연산자
let var1 = 1;

// 2. 산술 연산자 : + - / * % ...

// 3. 복합 대입 연산자 (산술 + 대입)
let num7 = 10;
//num7 = num7 + 20;
num7 += 20;

// 4. 증감 연산자
let num8 = 10;
num8++; // 다음 라인에서 연산 결과 적용 (후위연산)
console.log(num8);

++num8; // 현재 라인에서 연산 결과 즉시 적용 (전위연산)

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
console.log(comp1, comp2);