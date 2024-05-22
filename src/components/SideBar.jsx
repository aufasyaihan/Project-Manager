import Button from "./Button";
import ListProjects from "./ListProjects";

export default function SideBar({ onAdd, children }) {
  return (
    <aside className="mt-5 bg-stone-900 text-gray-50 py-14 pl-8 pr-16 rounded-se-3xl ">
      <h1 className="text-xl text-start uppercase font-bold md:text-3xl">
        Your Project
      </h1>
      <div className="mt-8">
        <Button onClick={onAdd}>+Add Project</Button>
      </div>
      <ul className="mt-8 flex flex-col gap-3">{children}</ul>
    </aside>
  );
}
