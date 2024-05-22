export default function ListProjects({ projects }) {
  return projects.map((project, index) => (
    <li className=" rounded text-stone-300 hover:bg-stone-700" key={index}>
      <button className="w-full h-full p-2 text-start">{project.title}</button>
    </li>
  ));
}
