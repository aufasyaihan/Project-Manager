export default function ListProjects({ title, onClickProject }) {
  function handleClick() {
    onClickProject();
  }

  return (
    <li className=" rounded text-stone-300 hover:bg-stone-700">
      <button className="w-full h-full p-2 text-start" onClick={handleClick}>
        {title}
      </button>
    </li>
  );
}
