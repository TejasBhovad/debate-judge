import React from "react";

const Header = ({ title, icon }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-1">
        {icon}
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
