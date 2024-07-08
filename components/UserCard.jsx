import React from "react";

const UserCard = ({ picture, name, id, hide = false }) => {
  return (
    <div
      //   className="w-1/3 bg-secondary"
      //   style in aspect ratio of 5:7
      //    hide is true then add class name hidden and sm:flex
      className={`w-1/3 bg-secondary ${hide ? "hidden sm:flex" : ""}`}
      style={{ aspectRatio: "5/7" }}
    >
      UserCard
    </div>
  );
};

export default UserCard;
