import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat", "Shower", "walk a dog"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTasks((t) => [...t, newTask]);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index: number) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index: number) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button className="btn btn-success" onClick={addTask}>
          Add
        </button>
        <ol className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{task}</span>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button className="btn" onClick={() => moveTaskUp(index)}>
                  UP
                </button>
                <button className="btn" onClick={() => moveTaskDown(index)}>
                  DOWN
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
