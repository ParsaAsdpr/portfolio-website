import React from "react";

const TextArea = ({
  name,
  value,
  onChange,
  perc,
  error,
  expected,
  placeholder,
  touched,
}) => {
  const [isError, setError] = React.useState(false);

  React.useEffect(() => {
    error && touched ? setError(true) : setError(false);
  }, [error, touched]);
  return (
    <div>
      <textarea
        name={name}
        onChange={onChange}
        value={value}
        className={`border-b mt-7 py-3 w-full max-w-full min-w-full max-h-[140px] min-h-[140px] duration-700 outline-none ${
          perc > 0.6 ? "translate-x-0 opacity-1" : "-translate-x-full opacity-0"
        }  ${
          isError
            ? "border-red-400 text-red-400"
            : "border-stone-500 text-stone-800"
        }`}
        placeholder="Your Message"
      ></textarea>
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

export default TextArea;
