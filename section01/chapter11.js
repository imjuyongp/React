// 함수 선언
function greeting() {
  console.log("hello")
}

console.log("호출 전")
greeting(); // 함수 호출
console.log("호출 후")

// function getArea() {
//   let width = 10;
//   let height = 20;
//   let area = width * height;

//   console.log(area);
// }

// getArea();

function getArea(width, height) {
  function another() { // 중첩 함수
    console.log("another")
  }
  another(); // 중첩 함수 호출
  let area = width * height;

  // console.log(area);
  return area; // return 이후 코드 실행 안됨 (메서드 종료)
  console.log("hello"); // 출력 x
}

let area1 = getArea(10,20);
console.log(area1);


// 호이스팅 : 끌어올리다
// 함수 선언 위치에 상관 없이 호출문은 정상 작동됨