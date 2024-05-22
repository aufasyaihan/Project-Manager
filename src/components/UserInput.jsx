export default function UserInput({ label, type }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="title" className="uppercase font-semibold text-stone-600">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="bg-stone-200 border-b-2 border-stone-400 h-24 p-2"
          name={label}
          id={label}
        ></textarea>
      ) : (
        <input
          className={"bg-stone-200 border-b-2 border-stone-400 h-10 p-2"}
          type={type}
          name={label}
          id={label}
        />
      )}
    </div>
  );
}
