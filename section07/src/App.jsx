import './App.css'
import { useState, useEffect, useRef } from 'react'
import Viewer from "./components/Viewer"
import Controller from './components/Controller'
import Even from './components/Even'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);
  
  // 1. 마운트 : 탄생
  useEffect(()=>{ // 렌더링 시점에 한번만 실행
    console.log("mount")
  }, []) // deps를 빈배열로 선언하면 마운트 될때마다 실행

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{ // 리렌더링 될때마다 실행
    if(!isMount.current){
      isMount.current = true
      return;
    }
    console.log("update")
  }) // deps를 선언하지 않으면 리렌더링 될때마다 계속 실행

  // 3, 언마운트 : 죽음


  // useEffect(() => {
  //   console.log(`count:${count} / input:${input}`)
  // }, [count, input]) // 의존성 배열(deps)에 담긴 count의 state가 바뀔 때마다 첫번째 인수인 콜백함수 실행

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
        {count%2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    
    </div>
  )
}

export default App
