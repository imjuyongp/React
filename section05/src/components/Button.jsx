// 이벤트 객체
const Button = ({children, text, color="black"}) => {

  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  }

  return <button 
    onClick={onClickButton} // 마우스 클릭
    // onMouseEnter={onClickButton} // 마우스 갖다댐
    style = {{color : color}}>
        {text} - {color}
        {children}
  </button>
}

export default Button;