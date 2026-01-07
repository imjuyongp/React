// 5가지 배열 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  {name : "박주용", hobby : "테니스"},
  {name : "홍길동", hobby : "테니스"},
  {name : "김효빈", hobby : "독서"},
];

const tennisPeople = arr1.filter((item => {
  if(item.hobby === "테니스") return true;
}));
console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백 함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item,idx,aee) => {
  console.log(idx,item);
  return item * 2;
});
console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전 순으로 정렬
let arr3 = ["b","a","c"]; 
arr3.sort()
console.log(arr3);

// 사전 순 정렬이기 때문에 숫자는 정상적으로 동작하지 않음 -> 콜백 함수 정의 필요
let arr = [10,3,5];
arr.sort((a,b) => {
  if(a>b) {
    // b가 a앞으로 와야함
    return 1; // 양수 반환 -> 둘중 작은 값이 앞으로 오게됨
  } else if(a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr);

// 4. toSorted
// 정렬된 새로운 배열을 반환
let arr4 = ["c","a","b"];
const sorted = arr4.toSorted();

console.log(arr4);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi","im","winterlood"];
const joined = arr6.join(' ');
console.log(joined);