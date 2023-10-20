"use client";

import { useState } from "react";
import CreateTodoForm from "./createTodoForm";

export default function TodoComponent({ todo }) {
  const [editMode, setEditMode] = useState(false);
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }

  function handleEditMode() {
    setEditMode(!editMode);
  }

  return (
    <div className="card mb-3 p-3 is-rounded">
      {/* id */}
      <span className="mr-2">#{todo.id}</span>

      {/* Status */}
      <span className={todo.complete ? "has-text-success" : "has-text-danger"}>
        {todo.complete ? "Complete" : "Draft"}
      </span>

      {/* Content */}
      <span className="ml-2 is-size-6">
        {showMore ? todo.content : todo.content.substring(0, 100) + "..."}

        {/* Show more and less */}
        <button
          className="button is-small ml-2 is-rounded"
          onClick={handleShowMore}
        >
          
          {showMore ? 'Show less' : 'Show more'}
        </button>

        {/* Show edit form */}
        <button
          className="button is-small ml-2 is-rounded"
          onClick={handleEditMode}
        >
          {editMode ? 'Close Edit' : 'Edit'}
        </button>
      </span>

      {editMode && <CreateTodoForm todo={todo} />}
    </div>
  );
}
