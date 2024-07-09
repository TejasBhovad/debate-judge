"use client";
import CardContainer from "@/components/CardContainer";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Score from "@/components/logos/Score";
import { useRouter } from "next/navigation";
import { getTeamData } from "../data";
import { useEffect, useState } from "react";
import { checkData } from "../data";
const page = () => {
  const { toast } = useToast();
  const router = useRouter();
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

  // make async function to check if all users have feedback, platformScore and debateScore set
  const checkDataValid = async () => {
    const res = await checkData();
    if (!res) {
      toast({
        title: "Error",
        description:
          "Please make sure all users have feedback, platformScore and debateScore set",
      });
    }
    if (res) {
      router.push("/thanks");
    }
  };
  return (
    <div className="flex h-full w-full justify-center text-base">
      <div className="bg-red flex h-full w-full max-w-5xl flex-col gap-6 px-8 py-4">
        <Header title="Ranking Teams" icon={<Score />} />
        <div className="flex w-full flex-col gap-2">
          <CardContainer
            initialTeam={redTeam}
            color="red"
            title="Team #1"
            fetchTeamData={fetchTeamData}
          />
          <CardContainer
            initialTeam={blueTeam}
            color="blue"
            title="Team #2"
            fetchTeamData={fetchTeamData}
          />
        </div>
        <Button
          className="h-12 w-full bg-primary text-white"
          onClick={checkDataValid}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default page;
