import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

const List = ({ todos, setTodos }) => {
  return (
    <div>
      <h2 className="sectionTitle">Working.. 🔥</h2>
      <ul className="lists">
        {todos.map((todo) =>
          todo.isDone === false ? (
            <Todo
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
              id={todo.id}
              title={todo.title}
              content={todo.content}
              isDone={todo.isDone}
            />
          ) : null
        )}
      </ul>
      <h2 className="sectionTitle">Done..! 🎉</h2>
      <ul className="lists">
        {todos.map((todo) =>
          todo.isDone === true ? (
            <Todo
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
              id={todo.id}
              title={todo.title}
              content={todo.content}
              isDone={todo.isDone}
            />
          ) : null
        )}
      </ul>
    </div>
  );
};

export default List;
