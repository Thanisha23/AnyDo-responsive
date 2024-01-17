import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/display-name, react/prop-types
const Card = ({ cardName, classAdd, action, todoNum }) => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [currentTodo, setCurrentTodo] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing,setIsEditing] = useState(false);
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };
  useEffect(() => {
    const currentTodo = todoNum;
    const storedTodos =
      JSON.parse(localStorage.getItem(`todos${currentTodo}`)) || [];
    setTodos(storedTodos);
  }, [todoNum]);
  //  ==============\
  const deleteTodo = (todoNum, index) => {
    const currentTodosKey = `todos${todoNum}`;
    const currentTodos =
      JSON.parse(localStorage.getItem(currentTodosKey)) || [];
    const updatedTodos = currentTodos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem(currentTodosKey, JSON.stringify(updatedTodos));
  };
  // =========
  const updateTodo = (todoNum, index) => {
    const currentTodosKey = `todos${todoNum}`;
    const currentTodos = JSON.parse(localStorage.getItem(currentTodosKey));
    setCurrentTodo(currentTodos[index]);
    setEditIndex(index);
    setTask(currentTodos[index]);
    setIsEditing(true);
  };
  // ============
  const addTodo = (todoNum) => {
    if (task.trim() != "") {
      if (editIndex != null) {
        // console.log("hi");
        // todos[editIndex] = task;
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = currentTodo;
        console.log(currentTodo);
        setCurrentTodo(currentTodo);
        // setTodos(updatedTodos);
        setEditIndex(null);
      }
      const updatedTodos = [...todos, task];
      setTodos(updatedTodos);
      localStorage.setItem(`todos${todoNum}`, JSON.stringify(updatedTodos));
      setTask("");

      setCurrentTodo(null);
    }
  };

  // ============
  //addTodo ka h
  // if(task.trim() != ''){
  //   const updatedTodos = [...todos,task];
  //   setTodos(updatedTodos);
  //   localStorage.setItem(`todos${todoNum}`,JSON.stringify(updatedTodos));
  //   setTask('');
  // }
  //  =========
  // if(task.trim() != ''){
  //   const updatedTodos = [...todos,task];
  //   setTodos(updatedTodos);
  //   localStorage.setItem(`todos${todoNum}`,JSON.stringify(updatedTodos));
  //   setTask('');
  // }
  // ============
  //  const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   console.log(task);
  //   setTask('');
  //  }

  return (
    <div
      onClick={action}
      className={`${classAdd} card card-1 bg-purple-300 h-[22rem] md:h-97 w-[19rem] md:w-96 rounded-3xl text-center font-crisis pt-[0.5rem]`}
    >
      <div>
        <h3 className="font-semibold text-lg">{cardName}</h3>
      </div>
      <div
        id="newtask"
        className="relative items-center flex flex-wrap p-5 md:p-7 pt-2 md:pt-1"
      >
        <input
          value={task}
          onChange={handleInputChange}
          type="text"
          className="w-[14rem] md:w-72 h-9 md:h-10 text-xl border-2 border-[#d1d3d4] rounded-3xl pl-3 relative focus:outline-none focus:border-[#A971B3]"
          placeholder="Task to be done...."
        />

        <div id="push" className="cursor-pointer">
          <span
            className="material-symbols-outlined md:text-4xl "
            onClick={() => addTodo(todoNum)}
          >
            add_circle
          </span>
        </div>

        {/* <!-- TASKS --> */}
        <div
          id="tasks"
          className="cursor-pointer items-center justify-start h-64 w-full bg-purple-300 mt-2 overflow-x-auto pt-[10px] pb-[10px] pl-[5px] pr-[5px]"
        >
          {todos.map((todo, index) => (
            <div
              key={index}
              className="task h-3 mb-1 pt-5 pb-5 pl-3 pr-3 items-center flex justify-between cursor-pointer bg-white rounded-3xl"
            >
              <span id="taskname" className="font-normal">
                {todo}
              </span>

              <div>
                <button onClick={() => deleteTodo(todoNum, index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                  className="pl-[1rem]"
                  onClick={() => updateTodo(todoNum, index)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
