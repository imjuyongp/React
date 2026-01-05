// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 배열의 원소들을 하나씩 분해해서 할당함
let [one, two, three, four=4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name : "parkjuyong",
  age : 25,
  hobby : "soccer",
};

let {name, age, hobby} = person; // 객체는 중괄호 이용
console.log(name, age, hobby);

// 3. 객체 구조 분해 할당을 이용해서 함수와 매개변수를 받는 방법
const func = ({name, age, hobby}) => {
  console.log(name, age, hobby);
};

func(person)