import { useEffect } from "react";

const Even = () => { // 짝수일때 나타나는 컴포넌트
  useEffect(()=>{
    // 클린업, 정리함수
    return () => {
      console.log("unmount")
    }
  } ,[]) // 마운트 될때 실행
  return (
    <div>짝수입니다</div>
  )
}

export default Even;