import { createContext, useContext, useState } from "react";
import { ValueContext } from "./OverallContainer";

function FirstPage({ callBack }: any) {
  const users = useContext<string[]>(ValueContext);
  // let [participants, setParticipats] = useState<string[]>([]);
  // function onAdd() {
  //   let inputElement = document.getElementById(
  //     "tripuserinput"
  //   ) as HTMLInputElement;
  //   setParticipats([...participants, inputElement.value]);
  //   callBack(participants);
  //   inputElement.value = "";
  // }
  function onAdd() {
    let inputElement = document.getElementById(
      "tripuserinput"
    ) as HTMLInputElement;
    callBack(inputElement.value);
    inputElement.value = "";
  }
  return (
    <>
      <h2>Enter the participants in the trip.</h2>
      <input
        id="tripuserinput"
        placeholder="Enter the name"
        type="text"
      ></input>
      <button onClick={onAdd}>Add</button>
      <ul>
        {users.map((user, index) => (
          <li>{user}</li>
        ))}
      </ul>
    </>
  );
}
export default FirstPage;
