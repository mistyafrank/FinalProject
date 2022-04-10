import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

//comment form
function CreateComment({ saveName, saveContent, saveComment }) {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Leave a Comment!</h1>
        <div className="create_comments">
          <form onSubmit={saveComment} className="form-inline">
            <label>Name:</label>
            <input
              className="comment_input"
              type="text"
              onChange={saveName}
              placeholder="Enter Name"
              required
            />
            <br />
            <br />
            <label>Comment:</label>
            <textarea
              type="text"
              onChange={saveContent}
              placeholder="Write a Comment"
              required
            ></textarea>
            <br />
            <br />
            <button>Save Post</button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default CreateComment;
