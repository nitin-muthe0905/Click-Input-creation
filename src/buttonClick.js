import { useState } from "react";

const ButtonClick = () => {
  let [clickCount, setClickCount] = useState(0);

  const clickHandler = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <>
      <div>
        {Array.from(Array(clickCount)).map((c) => {
          return <input key={c} type="text" />;
        })}
        <button onClick={clickHandler}>Click Me</button>
      </div>
    </>
  );
};

export default ButtonClick;
