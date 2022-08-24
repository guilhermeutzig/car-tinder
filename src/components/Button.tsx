import { FC } from "react";

const btnClasses =
  "block items-center w-fit mt-4 text-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

const Button: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={btnClasses} onClick={onClick}>
      Rounder
    </button>
  );
};

export default Button;
