import React from "react";
import Image from "next/image";
const UserCard = ({ picture, name, id, hide = false, ranking }) => {
  return (
    <div
      className={`w-1/2 rounded-sm bg-secondary sm:w-1/3 md:rounded-md lg:rounded-lg ${hide ? "hidden sm:block" : ""}`}
      style={{ aspectRatio: "5/7" }}
    >
      <div className="absolute">{ranking}</div>
      <div className="flex items-center justify-center bg-red-300 py-2">
        <div className="aspect-square w-4/5">
          <Image
            src={picture}
            alt={name}
            className="h-full w-full rounded-md"
            width={200}
            height={280}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
