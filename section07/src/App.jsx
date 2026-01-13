import './App.css'
import { useState, useEffect } from 'react'
import Viewer from "./components/Viewer"
import Controller from './components/Controller'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`count:${count} / input:${input}`)
  }, [count, input]) // 의존성 배열(deps)에 담긴 count의 state가 바뀔 때마다 첫번째 인수인 콜백함수 실행

  const onClickButton = (value) => {
    setCount(count + value) // 비동기로 동작 -> 이후의 작업은 다음 호출 전에 완료됨
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    
    </div>
  )
}

export default App
