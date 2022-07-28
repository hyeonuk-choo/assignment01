import React from "react";
import "./style.css";

const Todo = ({ todos, setTodos, id, title, content, isDone }) => {
  const handleDelete = (id) => {
    let newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const handleCompleted = (id) => {
    let newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodo);
  };

  if (isDone === true) {
    return (
      <div className="todo-box">
        <h2>{title}</h2>
        <p>{content}</p>
        <button
          className="redBtn"
          onClick={() => {
            handleDelete(id);
          }}
        >
          삭제하기
        </button>
        <button
          className="greenBtn"
          onClick={() => {
            handleCompleted(id);
          }}
        >
          취소
        </button>
      </div>
    );
  } else {
    return (
      <div className="todo-box">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="mybtn">
          <button
            className="redBtn"
            onClick={() => {
              handleDelete(id);
            }}
          >
            삭제하기
          </button>
          <button
            className="greenBtn"
            onClick={() => {
              handleCompleted(id);
            }}
          >
            완료
          </button>
        </div>
      </div>
    );
  }
};

export default Todo;
