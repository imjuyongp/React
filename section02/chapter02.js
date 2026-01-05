// 단락 평가 : and와 같은 논리 연산식에서 첫번째 피연산자의 값만으로도 연산의 값을 확정 지을 수 있다면 그 다음 연산자는 접근하지 않음
// 특정 조건에 맞춰서 함수를 아예 호출하지 않도록 방지할 수 있음
function returnFalse() {
  console.log("False function")
  return false;
}

function returnTrue() {
  console.log("True function")
  return true;
}

// returnTrue 함수는 아예 호출이 안되는 것처럼 보임 -> 단락 평가 
console.log(returnFalse() && returnTrue);

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name; // 자바스크립트에서 &&은 ture/false를 반환하지 않고 마지막으로 평가된 값을 그대로 전달함
  console.log(name || "person has no value");
}

printName();
printName({name : "parkjuyong"});