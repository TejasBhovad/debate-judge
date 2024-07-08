"use client";
import { updateTeam } from "@/app/data";
import { Reorder } from "framer-motion";
import React, { useState, useEffect } from "react";
import ProfileHor from "./ProfileHor";
const TeamContainer = ({ initialTeam, color, title }) => {
  const [team, setTeam] = useState([]);

  const textColorClass = color === "blue" ? "text-teamBlue" : "text-teamRed";
  const borderColorClass =
    color === "blue" ? "border-teamBlueBorder" : "border-teamRedBorder";
  const backgroundColorClass =
    color === "blue" ? "bg-teamBlueBackground" : "bg-teamRedBackground";

  useEffect(() => {
    // Ensure initialTeam is an array before mapping
    if (Array.isArray(initialTeam)) {
      const teamWithRank = initialTeam.map((member, index) => ({
        ...member,
        ranking: index + 1,
      }));
      setTeam(teamWithRank);
    }
  }, [initialTeam]);
  return (
    <div className="relative flex h-auto w-full flex-col gap-1 sm:w-1/2">
      <span className={`text-lg font-semibold ${textColorClass}`}>{title}</span>

      <Reorder.Group
        className={`flex h-auto w-full flex-col gap-2 rounded-md border-[1.5px] p-2 ${borderColorClass} ${backgroundColorClass}`}
        layout
        values={team}
        onReorder={(newTeam) => {
          const updatedTeam = newTeam.map((member, index) => ({
            ...member,
            ranking: index + 1, // Update rank based on new position
          }));
          console.log("Updated team:", updatedTeam);
          //   update team in dat.js based on color
          updateTeam(color, updatedTeam);

          setTeam(updatedTeam);
        }}
      >
        {team &&
          team.map((member, index) => (
            <Reorder.Item
              key={member.id}
              value={member}
              className="flex h-20 w-full cursor-grab"
            >
              <div className="flex h-full w-16 items-center justify-center">
                <span
                  className={`rounded-sm bg-clip-text text-xl font-bold text-transparent ${
                    color === "blue"
                      ? "bg-gradient-to-br from-blue-400 to-blue-800"
                      : "bg-gradient-to-br from-red-400 to-red-800"
                  }`}
                >
                  #{index + 1}
                </span>
              </div>
              <ProfileHor
                name={member.name}
                id={member.id}
                picture={member.picture}
              />
            </Reorder.Item>
          ))}
      </Reorder.Group>
      {/* <span>{JSON.stringify(team)}</span> */}
    </div>
  );
};

export default TeamContainer;
