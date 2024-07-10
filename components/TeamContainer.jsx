"use client";
import { updateTeam } from "@/app/data";
import { updateMembers } from "@/app/queries";
import CollapsibleCard from "./CollapsibleCard";
import { Reorder, useDragControls } from "framer-motion";
import React, { useState, useEffect } from "react";

const TeamContainer = ({ initialTeam, color, title, fetchTeamData }) => {
  const [team, setTeam] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const textColorClass = color === "blue" ? "text-teamBlue" : "text-teamRed";
  const borderColorClass =
    color === "blue" ? "border-teamBlueBorder" : "border-teamRedBorder";
  const backgroundColorClass =
    color === "blue" ? "bg-teamBlueBackground" : "bg-teamRedBackground";

  useEffect(() => {
    if (Array.isArray(initialTeam)) {
      const teamWithRank = initialTeam.map((member, index) => ({
        ...member,
        ranking: index + 1,
      }));
      setTeam(teamWithRank);
    }
  }, [initialTeam]);

  const dragControls = useDragControls();

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
            ranking: index + 1,
          }));
          console.log("Updated team:", updatedTeam);
          // updateTeam(color, updatedTeam);
          updateMembers(color, updatedTeam);
          setTeam(updatedTeam);
        }}
      >
        {team &&
          team.map((member, index) => (
            <Reorder.Item
              key={member.id}
              value={member}
              className="flex h-auto w-full cursor-grab"
              dragControls={dragControls}
              onDragStart={() => setIsDragging(true)} // Set isDragging to true when drag starts
              onDragEnd={() => {
                setTimeout(() => {
                  setIsDragging(false); // Set isDragging to false after a delay when drag ends
                }, 600); // Adjusted delay to match the comment
              }}
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
              <CollapsibleCard
                name={member.name}
                id={member.id}
                picture={member.picture}
                isDragging={isDragging}
                debateScoreInit={member.debateScore}
                platformScoreInit={member.platformScore}
                feedbackInit={member.feedback}
                fetchTeamData={fetchTeamData}
              />
            </Reorder.Item>
          ))}
      </Reorder.Group>
    </div>
  );
};

export default TeamContainer;
