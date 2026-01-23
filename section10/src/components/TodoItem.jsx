import "./TodoItem.css"
import { memo } from "react";

const TodoItem = ({id,isDone,content,date,onUpdate,onDelete}) => {

  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onDeleteButton = () => {
    onDelete(id);
  }

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onDeleteButton}>삭제</button>
    </div>
  )
}

// 고차 컴포넌트(HOC-Higher Order Component)
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라, props가 비뀌었는지 안바뀌었는지 판단
  // T -> props가 바뀌지 않음 -> 리렌더링 X
  // F -> props가 바뀜 -> 리렌더링 O

  if(prevProps.id !== nextProps.id) {
    return false;
  }

  if(prevProps.isDone !== nextProps.isDone) {
    return false;
  }

  if(prevProps.content !== nextProps.content) {
    return false;
  }

  if(prevProps.date !== nextProps.date) {
    return false;
  }

  return true;
}); // 얕은 비교(주소값 비교)