"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Medal from "@/components/logos/Medal";
import TeamContainer from "@/components/TeamContainer";

import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { checkMembers } from "./queries";
import { getMembers } from "./queries";
const page = () => {
  const [redTeam, setRedTeam] = useState([]);

  const [blueTeam, setBlueTeam] = useState([]);
  const fetchTeamData = async () => {
    const data = await getMembers(); // Assuming this fetches the array of members

    // Create separate arrays for red and blue teams
    const redTeam = [];
    const blueTeam = [];

    // Iterate through the data and split members into their respective teams
    for (const member of data) {
      if (member.team === "red") {
        redTeam.push(member);
      } else if (member.team === "blue") {
        blueTeam.push(member);
      }
    }

    // Sort the teams based on ranking
    redTeam.sort((a, b) => a.ranking - b.ranking);
    blueTeam.sort((a, b) => a.ranking - b.ranking);

    // Set the state with the sorted teams
    setRedTeam(redTeam);
    setBlueTeam(blueTeam);
  };
  useEffect(() => {
    fetchTeamData();
  }, []);
  const { toast } = useToast();
  const router = useRouter();
  const handleProceed = () => {
    router.push("/score");
  };
  // make async function to check if all users have feedback, platformScore and debateScore set
  const checkDataValid = async () => {
    const res = await checkMembers();
    console.log(res);
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
      <div className="flex h-full w-full max-w-7xl flex-col gap-6 px-8 py-4">
        <div className="flex h-auto w-full flex-col gap-4">
          <Header title="Ranking Teams" icon={<Medal />} />
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <TeamContainer
              initialTeam={redTeam}
              color="red"
              title="Team #1"
              fetchTeamData={fetchTeamData}
            />
            <TeamContainer
              initialTeam={blueTeam}
              color="blue"
              title="Team #2"
              fetchTeamData={fetchTeamData}
            />
          </div>
        </div>

        <Button
          className="h-full w-full bg-black text-white hover:bg-black/80"
          onClick={checkDataValid}
        >
          Submit
        </Button>
        {/* <CollapsibleCard name="John Doe" picture="/john-doe.jpg" id="1234" /> */}
      </div>
    </div>
  );
};

export default page;
