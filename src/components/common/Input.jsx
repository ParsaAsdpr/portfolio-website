import React from "react";

const Input = (props) => {
  const [isError, setError] = React.useState(false);

  React.useEffect(() => {
    props.error && props.touched ? setError(true) : setError(false);
  }, [props.error, props.touched]);

  return (
    <div className="w-full">
      <input
        name={props.name}
        id={props.name}
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        className={`border-b ${
          isError
            ? "border-red-400 text-red-400"
            : "border-stone-500 text-stone-800"
        } w-full py-3 px-2 outline-none duration-700 ${
          props.perc > props.expected
            ? "translate-x-0 opacity-1"
            : "translate-x-full opacity-0"
        }`}
        placeholder={props.placeholder}
      />
      {isError ? (
        <p className="text-xs p-0 leading-3 text-red-400">
          {props.error}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
