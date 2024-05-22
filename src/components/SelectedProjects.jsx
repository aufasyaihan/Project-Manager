export default function Projects({ project }) {
  const formattedDate = new Date(project.dueDate).toDateString();
  return (
    <main className="flex flex-col mx-8 my-auto h-3/4 w-3/5 p-5">
      <header className="flex flex-row justify-between items-center">
        <h2 className="text-3xl text-stone-700 font-bold">
          {project.title}
        </h2>
        <button className="text-stone-700">Delete</button>
      </header>
      <div className="my-4">
        <p className="text-stone-400">{formattedDate}</p>
      </div>
      <div className="my-2">
        <p className="text-stone-700">{project.desc}</p>
      </div>
      <hr className="border-stone-500 mt-4" />
      <div className="my-4">
        <h2 className="text-2xl text-stone-700 font-bold">Tasks</h2>
      </div>
    </main>
  );
}
