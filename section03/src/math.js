// math module
export function add(a,b) { // ES module 방식으로 내보내기
  return a + b;
}

export function sub(a,b) { // ES module 방식으로 내보내기
  return a - b;
}

export default function multiply(a,b) { // export default는 실행 파일에서 중괄호 없이 import 해야함
  return a * b;
}

// // CJS(common JS) 방식
// module.exports = {
//   add : add,
//   sub : sub,
// };

// ES module 방식
// export{add,sub};