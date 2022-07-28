import React from "react";
import "./style.css";

const Form = ({ ClickToChange, title, setTitle, content, setContent }) => {
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  // const handleContent = (e) => {
  //   {value, name} = e.target;
  //   setContent(e.target.value);
  // };
  // State가 적은게 좋다.(많으면, 브라우저의 과부화 발생)

  return (
    <div className="formContainer">
      <div>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={handleTitle}
        />
        <label htmlFor="content">내용</label>
        <input
          id="content"
          type="text"
          name="content"
          placeholder="내용을 입력하세요."
          value={content}
          onChange={handleContent}
        />
      </div>
      <div>
        <button onClick={ClickToChange}>추가하기</button>
      </div>
    </div>
  );
};

export default Form;
