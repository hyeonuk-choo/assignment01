import React, { useState } from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import Layout from "../layout/Layout";
import List from "../list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    // 초기선언시 초기값을 넣어주는게 좋다. Key별로 타입을 컴퓨터가 알게 할 수있음.
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const ClickToChange = (e) => {
    e.preventDefault(); // ??

    let newTodo = {
      // key에 [name]와 같이 []치면 사용하면 동적으로 바뀌는 위치에 따라 동적으로 바뀜
      id: Date.now(),
      title: title,
      content: content,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    // setTodos((todos) => [...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <Layout>
      <Header />
      <Form
        ClickToChange={ClickToChange}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
