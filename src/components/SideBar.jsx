import Button from "./Button";
import ListProjects from "./ListProjects";

export default function SideBar({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  return (
    <aside className="mt-5 bg-stone-900 text-gray-50 py-14 pl-8 pr-16 rounded-se-3xl ">
      <h1 className="text-xl text-start uppercase font-bold md:text-3xl">
        Your Project
      </h1>
      <div className="mt-8">
        <Button onClick={onStartAddProject}>+Add Project</Button>
      </div>
      <ul className="mt-8 flex flex-col gap-3">
        {projects.map((project) => {
          const style = "rounded text-stone-300 hover:bg-stone-700";
          if (project.id === selectedProjectId) {
            style += " bg-stone-700";
          }

          return (
            <ListProjects
              key={project.id}
              title={project.title}
              onSelectedProject={() => onSelectedProject(project.id)}
              className={style}
            />
          );
        })}
      </ul>
    </aside>
  );
}
