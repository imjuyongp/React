// promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 내장객체
// 바동가 작업 실행, 상태관리, 결과 저장, 병렬실행, 다시 실행 ...

// promise의 3가지 상태 : 대기(pending), 성공(Fulfilled), 실패(Rejected)

// 대기(pending) : 아직 작업이 완료되지 않은 상태
// 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
// 실패(Rejected) : 비동기 작업이 실패한 상태 

function add10(num) {
  const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행 함수 : executor
    setTimeout(() => {

      // const num = null;

      if(typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num is not number");
      }
    },2000);
  });

  return promise;
}

add10(0).then((result) => {
  console.log(result);

  return add10(result);
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});


// // then 메소드 : 그 후에
// promise
//   .then((value) => { // resolve의 결과 값을 매개변수로 가짐
//   console.log(value);
//   })
//   .catch((error) => {
//   console.log(error);
//   });