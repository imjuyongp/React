const Controller = ({onClickButton}) => { // 이벤트 헨들러 함수를 props로 받는 형태 (구조분해할당을 통해 props에서 함수 추출)
  return (
    <div>
      <button onClick={() => {
        onClickButton(-1)
      }}>-1</button>
      <button onClick={() => {
        onClickButton(-10)
      }}>-10</button>
      <button onClick={() => {
        onClickButton(-100)
      }}>-100</button>
      <button onClick={() => {
        onClickButton(100)
      }}>+100</button>
      <button onClick={() => {
        onClickButton(10)
      }}>+10</button>
      <button onClick={() => {
        onClickButton(1)
      }}>+1</button>
    </div>
  )
}

export default Controller;