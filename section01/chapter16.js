// 1. 상수 객체
const animal = {
  type : "cat",
  name : "navy",
  color : "black",
};

animal.age = 2; // 추가
animal.name = "haru" // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티

const person = {
  name : "parkjuyong",
  sayHi() {
    console.log("hi");
  },
};

person.sayHi();