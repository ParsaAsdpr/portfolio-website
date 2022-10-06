import React from "react";

const Input = ({error, name, value, touched, onChange, type, expected, perc ,placeholder}) => {
  const [isError, setError] = React.useState(false);

  React.useEffect(() => {
    error && touched ? setError(true) : setError(false);
  }, [error, touched]);

  return (
    <div className="w-full">
      <input
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        type={type}
        className={`border-b ${
          isError
            ? "border-red-400 text-red-400"
            : "border-stone-500 text-stone-800"
        } w-full py-3 px-2 outline-none duration-700 ${
          perc > expected
            ? "translate-x-0 opacity-1"
            : "-translate-x-full opacity-0"
        }`}
        placeholder={placeholder}
      />
      {isError ? (
        <p
          className={`text-xs pt-2 leading-3 text-red-400 duration-700 ${
            perc > expected
              ? "translate-x-0 opacity-1"
              : "-translate-x-full opacity-0"
          }`}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
