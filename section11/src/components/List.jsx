import { TodoStateContext } from "../App";
import "./List.css"
import TodoItem from "./TodoItem"
import { useState, useMemo, useContext} from "react"

const List = () => { // 부모 컴포넌트인 App.jsx에서 props로 전달받는 Todo항목 배열인 todos를 가져옴

  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState(""); // 검색어 저장 상태

  const onChangeSearch = (e) => {
    setSearch(e.target.value); // 입력할 때마다 search state 업데이트 -> 리렌더링
    // console.log(e.target.value);
  }

  const getFilteredData = () => {
    if(search == "") { // 검색어 없는 경우 todos배열 전체 반환
      return todos;
    }
    return todos.filter((todo) => // 화살표 함수에서 {}를 빼면 암묵적으로 값을 return 함
      todo.content.toLowerCase().includes(search.toLowerCase()) 
    );
  };

  const filteredData = getFilteredData(); // 필터링된 결과를 filteredData 변수에 저장

  // 의존성 배열 : deps
  const {totalCount, doneCount, notDoneCount} = 
    useMemo(() => {
      console.log("getAnalyzedData 호출");
      const totalCount = todos.length;
      const doneCount = todos.filter((todo)=>todo.isDone).length; // todos에서 isDone가 true인 것들의 길이 저장
      const notDoneCount = totalCount - doneCount;

      // 객체 리턴
      return {
        totalCount,
        doneCount,
        notDoneCount,
      };
    }, [todos])

  return (
    <div className="List">
      <h4>🌱 Todo List</h4>
      <div>total : {totalCount}</div>
      <div>done : {doneCount}</div>
      <div>not done : {notDoneCount}</div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredData.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />
        })}
      </div>
    </div>
  )
}

export default List;