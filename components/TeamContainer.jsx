"use client";
import { updateMembers } from "@/app/queries";
import CollapsibleCard from "./CollapsibleCard";
import { Reorder, useDragControls } from "framer-motion";
import React, { useState, useEffect } from "react";

const TeamContainer = ({ initialTeam, color, title, fetchTeamData }) => {
  const [team, setTeam] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [stopDragging, setStopDragging] = useState(false);

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
      <span className={`px-2 text-lg font-semibold text-black`}>{title}</span>

      <Reorder.Group
        className={`bg-/0 flex h-auto w-full flex-col gap-2 rounded-md p-2`}
        layout
        values={team}
        onReorder={(newTeam) => {
          const updatedTeam = newTeam.map((member, index) => ({
            ...member,
            ranking: index + 1,
          }));
          console.log("Updated team:", updatedTeam);
          updateMembers(color, updatedTeam);
          setTeam(updatedTeam);
        }}
      >
        {team &&
          team.map((member, index) => (
            <Reorder.Item
              key={member.id}
              value={member}
              className={`flex h-auto w-full select-none rounded-md border-[1px] border-black/0 bg-white shadow-sm ${stopDragging ? "" : "cursor-grab"}`}
              drag={stopDragging ? false : true}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => {
                setTimeout(() => {
                  setIsDragging(false);
                }, 600);
              }}
            >
              <div className="flex h-full w-auto items-start justify-start">
                <span className="text-md rounded-sm p-2 font-semibold text-black">
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
                setStopDragging={setStopDragging}
              />
            </Reorder.Item>
          ))}
      </Reorder.Group>
    </div>
  );
};

export default TeamContainer;
