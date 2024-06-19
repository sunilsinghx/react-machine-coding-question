import { useEffect, useState } from "react";
import "../style.css";

function DisplayTodos() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const [pageSize] = useState(10);
  const [currIndex, setCurrIndex] = useState(1);

  const [todoId, setTodoId] = useState(null);
  const [inputText, setInputText] = useState();
  const [completed, setCompleted] = useState();

  const totalPages = todos.length / pageSize;

  const URL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  //when edit we set todoid,todotext, completed
  function handleEdit(todo) {
    setTodoId(todo.id);
    setInputText(todo.title);
    setCompleted(todo.completed);
  }

  //when click on done we update input Text, completed feild in todos array
  function handleDone(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, title: inputText, completed: completed }
          : todo
      )
    );

    setTodoId(null);
  }

  let startIndex = (currIndex - 1) * pageSize;
  let endIndex = pageSize * currIndex;

  const filterTodo = todos.filter((todo) =>
    todo.title.toLowerCase().includes(text.toLowerCase())
  );
  const paginatedTodo = filterTodo.slice(startIndex, endIndex);



  return (
    <div>
      <input
        placeholder="Search Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTodo.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>
                {todoId === todo.id ? (
                  <input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                ) : (
                  todo.title
                )}
              </td>
              <td>
                {todoId === todo.id ? (
                  <select
                    value={completed}
                    onChange={(e) => setCompleted(e.target.value === "true")}
                  >
                    <option value="true">YES</option>
                    <option value="false">NO</option>
                  </select>
                ) : todo.completed ? (
                  "YES"
                ) : (
                  "NO"
                )}
              </td>
              {todoId ? (
                <button onClick={() => handleDone(todo.id)}> Done</button>
              ) : (
                <button onClick={() => handleEdit(todo)}> Edit</button>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => setCurrIndex(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DisplayTodos;
