"use client";
import UserCard from "./UserCard";
import React, { useState, useEffect } from "react";
const CardContainer = ({ initialTeam, color, title, fetchTeamData }) => {
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
    <div className="relative flex h-auto w-full flex-col gap-1">
      <span
        className={`w-full text-center text-lg font-semibold ${textColorClass}`}
      >
        {title}
      </span>
      <div className="flex flex-wrap justify-center gap-2">
        {team.length <= 2 ? (
          team.map((member) => <UserCard key={member.id} {...member} />)
        ) : (
          <>
            <div className="flex w-full justify-center gap-2">
              {team.slice(0, 2).map((member) => (
                <UserCard
                  key={member.id}
                  {...member}
                  fetchTeamData={fetchTeamData}
                />
              ))}

              {team.slice(2).map((member) => (
                <UserCard
                  key={member.id}
                  {...member}
                  hide={true}
                  fetchTeamData={fetchTeamData}
                />
              ))}
            </div>
            <div className="flex w-full justify-center gap-2 sm:hidden">
              {team.slice(2).map((member) => (
                <UserCard
                  key={member.id}
                  {...member}
                  fetchTeamData={fetchTeamData}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
