import './App.css'
import Header from "./components/Header"
import Editor from './components/Editor'
import List from './components/List'

import { useState, useRef, useReducer, useCallback, createContext, useMemo} from 'react'

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE' : return [action.data, ...state] 
    case 'UPDATE' : return state.map(
      (item)=>item.id === action.targetId
      ? {...item, isDone: !item.isDone} 
      : item
    );
    case 'DELETE' : return state.filter((item)=> item.id !== action.targetId)
    default : return state;
  }

}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  // const [todos, setTodos] = useState([]) // Todo 목록 배열
  const [todos, dispatch] = useReducer(reducer, []); // todos배열의 상태변화는 reducer함수에서 관리 (초기 값은 빈 배열 => 상태를 배열로 저장함)
  const idRef = useRef(0)

  const onCreate = useCallback((content) => { // 새 Todo 객체 생성 후 목록 맨 앞에 추가
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime(),
      }
    })
  }, [])

  const onUpdate = useCallback((targetId) => { // 체크박스가 클릭된 TodoItem의 id를 받아옴
    dispatch({
      type : "UPDATE",
      targetId : targetId,
    })
  }, []);

  // useCallback에 의해서 컴포넌트가 마운트 되었을때 1번만 생성(함수도 객체타입이기 때문에 주소값이 이제 변하지 않음)
  const onDelete = useCallback(
    (targetId) => { // 삭제된 todoItem을 제외한 새로운 배열을 반환
      dispatch({
        type : "DELETE",
        targetId : targetId,
      })
    }, []
  )

  // TodoDispatch에서 공급하는 객체는 이제 바뀌지 않음
  const memoizedDispatch = useMemo(() => {
    return {onCreate, onDelete, onUpdate}
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor/> 
          <List/>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
