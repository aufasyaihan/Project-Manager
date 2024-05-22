import { forwardRef } from "react";

const UserInput = forwardRef(function UserInput(
  { label, textarea, ...props },
  ref
) {
  const style = `bg-stone-200 border-b-2 border-stone-400 p-2 focus:outline-none focus:border-stone-600 ${
    textarea ? "h-24" : "h-10"
  }`;

  return (
    <div className="flex flex-col">
      <label htmlFor="title" className="uppercase font-semibold text-stone-600">
        {label}
      </label>
      {textarea ? (
        <textarea
          className={style}
          name={label}
          id={label}
          ref={ref}
          required
          {...props}
        />
      ) : (
        <input
          className={style}
          name={label}
          id={label}
          ref={ref}
          required
          {...props}
        />
      )}
    </div>
  );
});

export default UserInput;
