import UserInput from "./UserInput";

export default function CreateProject({onCancel}) {
  return (
    <main className="mx-auto my-auto h-3/4 w-3/5 p-5">
      <div className="flex flex-col gap-5">
        <div className="flex justify-end gap-3">
          <button className="text-stone-800" onClick={onCancel}>Cancel</button>
          <button className="bg-stone-800 text-stone-300 px-5 py-2 rounded hover:bg-stone-900 hover:text-stone-200">Save</button>
        </div>
        <UserInput type="text" label="title"/>
        <UserInput type="textarea" label="description"/>
        <UserInput type="date" label="date"/>
      </div>
    </main>
  );
}
