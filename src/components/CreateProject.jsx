import { useRef } from "react";
import UserInput from "./UserInput";
import Modal from "./Modal";

export default function CreateProject({ onCancel, onAddProjects }) {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const titleInput = title.current.value;
    const descInput = desc.current.value;
    const dueDateInput = dueDate.current.value;
    if (
      titleInput.trim() === "" ||
      descInput.trim() === "" ||
      dueDateInput.trim() === ""
    ) {
      modal.current.open();
      return;
    } else {
      onAddProjects({
        title: titleInput,
        description: descInput,
        date: dueDateInput,
      });
    }
  }

  return (
    <>
      <Modal ref={modal}>
        <div className="h-full p-4 flex flex-col justify-between">
          <div className="flex flex-col justify-between ">
            <h1 className="text-3xl font-bold text-red-600 py-2 text-start">
              Invalid Input
            </h1>
            <p className="mt-2">Please enter all the input</p>
          </div>
          <form method="dialog" className="flex justify-end">
            <button className="mt-3 bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700">
              Back
            </button>
          </form>
        </div>
      </Modal>
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
    </>
  );
}
