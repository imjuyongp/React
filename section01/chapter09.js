// if문
let num = 7;

if(num >= 10) {
  console.log("num은 10이상 입니다.");
  console.log("참 입니다.");
} 
else if(num >= 5) {
  console.log("num은 5 이상입니다.")
} 
else {
  console.log("거짓 입니다.")
}

// switch문 : 다수의 조건을 처리할 때 if문 보다 직관적

let animal = "cat";

switch(animal) {
  case "cat": {
    console.log("고양이")
    break;
  }
  case "dog": {
    console.log("강아지")
    break;
  }
  case "bear": {
    console.log("곰")
    break;
  }
  default: {
    console.log("없음")
  }
}