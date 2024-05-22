import { useRef, forwardRef } from "react";

const UserInput = forwardRef(function UserInput({ label, type }, ref) {
  const style = `bg-stone-200 border-b-2 border-stone-400 p-2 focus:outline-none focus:border-2 focus:border-stone-600 focus:rounded ${
    type === "textarea" ? "h-24" : "h-10"
  }`;

  const title = useRef();
  const desc = useRef();
  const date = useRef();

  return (
    <div className="flex flex-col">
      <label htmlFor="title" className="uppercase font-semibold text-stone-600">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={style}
          name={label}
          id={label}
          ref={desc}
        ></textarea>
      ) : (
        <input
          className={style}
          type={type}
          name={label}
          id={label}
          ref={label === "title" ? title : date}
        />
      )}
    </div>
  );
})

export default UserInput
