import { useRef } from "react";
import UserInput from "./UserInput";

export default function CreateProject({ onCancel, onAddProjects }) {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  function handleSave() {
    const titleInput = title.current.value;
    const descInput = desc.current.value;
    const dueDateInput = dueDate.current.value;
    if (!(titleInput === "" || descInput === "" || dueDateInput === "")) {
      onAddProjects({
        title: titleInput,
        description: descInput,
        date: dueDateInput,
      });
    } else alert("Please fill all the fields");
  }

  return (
    <main className="mx-auto my-auto h-3/4 w-3/5 p-5">
      <div className="flex flex-col gap-5">
        <div className="flex justify-end gap-3">
          <button className="text-stone-800" onClick={onCancel}>
            Cancel
          </button>
          <button
            className="bg-stone-800 text-stone-300 px-5 py-2 rounded hover:bg-stone-900 hover:text-stone-200"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <UserInput ref={title} type="text" label="title" />
        <UserInput ref={desc} textarea label="description" />
        <UserInput ref={dueDate} type="date" label="Due date" />
      </div>
    </main>
  );
}
