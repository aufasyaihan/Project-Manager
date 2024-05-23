import { useState } from "react";

export default function Task({ onAddTask, onDeleteTask, tasks }) {
  const [newTask, setNewTask] = useState("");

  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function handleNewTask() {
    onAddTask(newTask);
    setNewTask("");
  }

  return (
    <section className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          className="bg-stone-200 p-2 rounded w-1/3 h-8 focus:outline-none focus: border-2 focus:border-stone-400"
          type="text"
          onChange={handleInput}
          value={newTask}
        />
        <button onClick={handleNewTask}>Add Task</button>
      </div>
      {tasks.length === 0 && (
        <p className="text-stone-800 mt-4">No Task were added</p>
      )}
      {tasks.length > 0 && (
        <ul className="bg-stone-200 p-4 mt-8 rounded-md">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between my-2"
            >
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
