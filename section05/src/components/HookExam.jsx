import useInput from "../../hooks/useInput"

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없음 -> 조건문, 반복문 안에서 호출 안됨
// 3. 나만의 훅(custom hook)을 만들 수 있음


const HookExam = () => {
  const [input, onChange] = useInput()

  return (
    <div>
      <input value={input} onChange={onChange}></input>
    </div>
  )
}

export default HookExam;