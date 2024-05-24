import React, { DialogHTMLAttributes, useContext, useEffect } from "react";
import { ValueContext } from "./OverallContainer";

const Dialog = () => {
  const users = useContext<string[]>(ValueContext);
  useEffect(() => {
    (
      document.getElementById("dialog-element") as HTMLDialogElement
    ).showModal();
  }, []);
  let newUsers = users;
  function showParticipants() {
    //newUsers = users.filter((item) => item != args.target.value);
    document.getElementsByClassName("hidden")[0].classList.remove("hidden");
  }
  return (
    <>
      <dialog id="dialog-element">
        <label>Choose the person who spent the money:</label>
        <select name="cars" id="cars">
          {users.map((user) => (
            <option onMouseDown={showParticipants} value={user}>
              {user}
            </option>
          ))}
        </select>
        <select className="hidden" name="cars1" id="cars1" multiple>
          {newUsers.map((newUser) => (
            <option value={newUser}>{newUser}</option>
          ))}
        </select>
      </dialog>

      <button>Show the dialog</button>
    </>
  );
};

export default Dialog;
