import React from "react";
import { useState, useEffect } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div col-9>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className="form-control"
      />
      </div>
      <div className="col-3">
      <button className="btn btn-primary btn-sm">Save task</button>

      </div>
    </form>
  );
};
