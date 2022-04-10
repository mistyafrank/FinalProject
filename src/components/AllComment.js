import React, { useState } from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";

//function to save and post comments
function AllComment() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [allComment, setAllComment] = useState("");
  const [isCreated, setIsCreated] = useState("");

  const saveName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const saveContent = (event) => {
    setContent(event.target.value);
    console.log(content);
  };

  const saveComment = (event) => {
    event.preventDefault();
    const id = Date.now();
    setAllComment([...allComment, { name, content, id }]);
    setName("");
    setContent("");
    toggleButton();
  };

  const toggleButton = () => {
    setIsCreated(!isCreated);
  };

  if (!isCreated) {
    return (
      <>
        <CreateComment
          saveName={saveName}
          saveContent={saveContent}
          saveComment={saveComment}
        />
      </>
    );
  }
  return (
    <>
      <h1>All Comments</h1>
      {allComment.map((comment) => {
        return (
          <Comment
            id={comment.id}
            key={comment.id}
            name={comment.name}
            content={comment.content}
          />
        );
      })}
      <button onClick={toggleButton}>Create Comment</button>
    </>
  );
}

export default AllComment;
