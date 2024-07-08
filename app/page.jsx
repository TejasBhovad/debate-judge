"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Medal from "@/components/logos/Medal";
import TeamContainer from "@/components/TeamContainer";
import { getTeamData } from "./data";
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
  const router = useRouter();
  const handleProceed = () => {
    router.push("/score");
  };

  return (
    <div className="flex h-full w-full justify-center text-base">
      <div className="flex h-full w-full max-w-7xl flex-col gap-6 px-8 py-4">
        <div className="flex h-auto w-full flex-col gap-4">
          <Header title="Ranking Teams" icon={<Medal />} />
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <TeamContainer initialTeam={redTeam} color="red" title="Team #1" />
            <TeamContainer
              initialTeam={blueTeam}
              color="blue"
              title="Team #2"
            />
          </div>
        </div>

        <Button className="" onClick={handleProceed}>
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default page;
