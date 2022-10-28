import React, { useState } from "react";
import { useDispatch } from "react-redux";
import clickImage from "../asset/images/double-tick.png";
import notesImage from "../asset/images/notes.png";
import plusImage from "../asset/images/plus.png";
import { added,completedAll,clearCompleted } from "../Redux/todos/actions";
const Header = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("");
  const handleSetInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmitInput = (e) => {
    e.preventDefault();
    dispatch(added(input))
    setInput("")
  };
  const handleAllCompleted = (e) => {
    dispatch(completedAll())
  }
  const handleClearCompleted = (e) => {
    dispatch(clearCompleted())
  }
  return (
    <div>
      <form onSubmit={handleSubmitInput} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={notesImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={handleSetInput}
          value={input}
          required
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={handleAllCompleted}>
          <img className="w-4 h-4" src={clickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearCompleted}>Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;
