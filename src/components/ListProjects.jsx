export default function ListProjects({ title, onSelectedProject, ...props}) {
  return (
    <li {...props}>
      <button
        className="w-full h-full p-2 text-start"
        onClick={onSelectedProject}
      >
        {title}
      </button>
    </li>
  );
}
