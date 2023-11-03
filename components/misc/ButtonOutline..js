import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-gold-500 text-gold-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-gold-500 hover:text-white transition-all hover:shadow-gold ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
