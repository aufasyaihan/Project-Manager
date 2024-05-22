import image from "../assets/no-projects.png";

export default function Content({onAdd}) {
  return (
    <main className="mx-auto my-auto flex flex-col gap-4 text-center">
      <img className="w-20 mx-auto" src={image} alt="project" />
      <h2 className="text-xl font-bold text-stone-700 mt-4">
        No Project Selected
      </h2>
      <p className="text-stone-400">
        Select a project or get started with a new one
      </p>
      <button onClick={onAdd} className="py-2 px-3 mt-3 mx-auto bg-stone-800 text-stone-400 rounded-md hover:text-stone-300 hover:bg-stone-950">Create New Project</button>
    </main>
  );
}
