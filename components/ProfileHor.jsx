import React from "react";
import Image from "next/image";

const ProfileHor = ({ name, id, picture }) => {
  return (
    <div className="border-utility flex w-full rounded-sm border-[1px] bg-secondary p-2">
      <div className="aspect-square h-full">
        <Image
          className="h-full w-full rounded-sm object-cover"
          src={picture}
          alt="Profile picture"
          width={100}
          draggable={false}
          height={100}
        />
      </div>
      <div className="flex w-full flex-col px-2">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-sm text-gray-400">ID: {id}</span>
      </div>
    </div>
  );
};

export default ProfileHor;
