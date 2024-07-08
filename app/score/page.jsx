"use client";
import CardContainer from "@/components/CardContainer";
import React from "react";
import Header from "@/components/Header";
import Score from "@/components/logos/Score";
import { getTeamData } from "../data";
import { useEffect, useState } from "react";

const page = () => {
  const [teamData, setTeamData] = useState({});
  const [redTeam, setRedTeam] = useState([]);
  const [blueTeam, setBlueTeam] = useState([]);
  const fetchTeamData = async () => {
    const data = await getTeamData(); // Assuming this fetches the array of teams
    const redTeam = data.find((team) => team.team === "red");
    if (redTeam) {
      setRedTeam(redTeam.members);
    }
    const blueTeam = data.find((team) => team.team === "blue");
    if (blueTeam) {
      setBlueTeam(blueTeam.members);
    }
  };
  useEffect(() => {
    fetchTeamData();
  }, []);
  return (
    <div className="flex h-full w-full justify-center text-base">
      <div className="bg-red flex h-full w-full max-w-7xl flex-col gap-6 bg-green-500 px-8 py-4">
        <Header title="Ranking Teams" icon={<Score />} />
        <div className="flex w-full flex-col gap-2">
          <CardContainer initialTeam={redTeam} color="red" title="Team #1" />
          <CardContainer initialTeam={blueTeam} color="blue" title="Team #2" />
        </div>
      </div>
    </div>
  );
};

export default page;
