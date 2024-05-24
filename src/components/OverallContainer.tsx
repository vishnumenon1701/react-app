import React, { createContext, useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

export const ValueContext = createContext<string[]>([]);

const OverallContainer = () => {
  let [isFirstPageVisible, setFirstPageVisible] = useState<boolean>(true);
  let [participants, setParticipats] = useState<string[]>([]);
  function onNextBtnClick() {
    setFirstPageVisible((i) => !i);
  }
  function onAdd(value: any) {
    setParticipats([...participants, value]);
  }
  return (
    <>
      <ValueContext.Provider value={participants}>
        {isFirstPageVisible && <FirstPage callBack={onAdd}></FirstPage>}
        {isFirstPageVisible && <button onClick={onNextBtnClick}>Next</button>}
        {!isFirstPageVisible && <SecondPage></SecondPage>}
      </ValueContext.Provider>
    </>
  );
};

export default OverallContainer;
