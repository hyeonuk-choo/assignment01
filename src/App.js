import React, { useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState();
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  function titleOnChangeHandler(e) {
    setTitle(e.target.value);
  }

  function contentOnChangeHandler(x) {
    setContent(x.target.value);
  }

  function ClickToChange() {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: title, content: content, isDone: false },
    ]);
    setTitle("");
    setContent("");
    setId(id + 1);
    console.log(isDone);
  }
  function DoneHandler() {
    setIsDone(true);
    console.log(isDone, id);
  }
  return (
    <div>
      <div className="header">
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div>
        <div className="header2">
          <span className="input_box">
            <span>
              제목{" "}
              <input
                type="text"
                value={title}
                onChange={titleOnChangeHandler}
              ></input>
            </span>
            <span className="input_box">
              내용{" "}
              <input
                type="text"
                value={content}
                onChange={contentOnChangeHandler}
              ></input>
            </span>
          </span>
          <button onClick={ClickToChange}>추가하기</button>
        </div>
      </div>

      <div className="mainBody">
        <div>
          <p>Working..</p>
          <div className="todos-container">
            {todos.map((todo) => {
              if (todo.isDone === false) {
                return (
                  <div className="todo" key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.content}</p>
                    <button>삭제하기</button>
                    <button onClick={DoneHandler}>완료</button>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>

        <div>
          <p>Done..!</p>
          <div className="todos-container">
            {todos.map((todo) => {
              if (todo.isDone) {
                return (
                  <div className="todo" key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.content}</p>
                    <button>삭제하기</button>
                    <button>취소</button>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
