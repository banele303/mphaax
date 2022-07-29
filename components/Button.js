import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button
        className="outline outline-none font-semibold 
       border-2 border-blue-300 rounded-[18px] py-[4px]
       px-[14px] hover:bg-blue-300 transition-all duration-75"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
