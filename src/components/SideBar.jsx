import ListProjects from "./ListProjects";

export default function SideBar({ onAdd }) {
  return (
    <aside className="mt-5 bg-stone-900 text-gray-50 py-14 pl-8 pr-16 rounded-se-3xl ">
      <h1 className="text-xl text-start uppercase font-bold md:text-3xl">
        Your Project
      </h1>
      <button
        onClick={onAdd}
        className="mt-10 px-3 py-2 bg-stone-700 rounded-md text-stone-300 hover:text-stone-200 hover:bg-stone-600"
      >
        <span className="pr-2">+</span>Add Project
      </button>
      <ul>
        <ListProjects />
      </ul>
    </aside>
  );
}
