import "./Header.css"
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>🗓️오늘은</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

const memoizedHeader = memo(Header); // props가 변경되지 않는한 리렌더링 되지 않음

export default memoizedHeader;