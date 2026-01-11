import "./Main.css"
// JSX 주의 사항
// 1. 중괄호 내부에서는 자바스크립트 표현식만 넣을 수 있다. (조건문, 반복문 등 사용 불가능)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. (boolean, 객체 등 렌더링 안됨)
// 3. 모든 태그는 닫혀있어야 함.
// 4. 최상위 태그는 반드시 하나여야만 함. (여기선 main 태그, 빈 태그로 최상위 태그를 묶어도 괜찮음)
const Main = () => {
  // const number = 10;
  const user = {
    name : "parkjuyong",
    isLogin : true,
  }

  if(user.isLogin) {
    return <div className="logout">logout</div>
  } else {
    return <div>login</div>
  }

  // return (
  //   <>
  //     {user.isLogin ? (
  //       <div>logout</div>
  //      ) : (
  //      <div>login</div>)
  //      }
  //   </>
  // )
}

export default Main;