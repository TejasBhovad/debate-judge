import React from "react";
import { setDebateScoreUser } from "@/app/data";
import { updateDebateScore } from "@/app/queries";
import Star from "@/components/logos/Star";
import StarHalf from "@/components/logos/StarHalf";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "./ui/button";
const DebateScore = ({ fetchTeamData, id, debateScoreInit }) => {
  const [debateScore, setDebateScore] = useState(debateScoreInit);
  const [sliderValue, setSliderValue] = useState([0]);

  const handleSubmit = async () => {
    // await setDebateScoreUser(id, debateScore / 2);
    await updateDebateScore(id, debateScore / 2);
    console.log("Debate score submitted", debateScore);
    setSliderValue([0]);
    setDebateScore(0);
    fetchTeamData();
  };

  useEffect(() => {
    console.log("Debate score changed to", sliderValue);
    const snapValue = Math.round(sliderValue / 12.5) * 12.5;
    setDebateScore(snapValue / 12.5);
    console.log("Debate score snapped to", snapValue);
    // handleSubmit();
  }, [sliderValue]);

  useEffect(() => {
    if (debateScoreInit === -1) {
      setDebateScore(0);
      return;
    }
    setDebateScore(debateScoreInit * 2);
    console.log("Debate score initialized to", debateScoreInit);
  }, [debateScoreInit]);
  return (
    <div className="flex h-full w-full flex-col gap-2">
      <div className="flex h-1/2 w-full items-center">
        <div className="relative flex h-full w-2/3 text-base/50">
          <Slider
            value={sliderValue}
            onValueChange={(value) => setSliderValue(value)}
            min={0}
            max={125}
            step={1}
            aria-labelledby="platform-score"
            className="z-10 h-4 w-full cursor-pointer opacity-0"
          />
          <div className="absolute top-0 m-0 flex h-full w-1/5 items-center justify-center p-0">
            <Star />
            <div className="absolute">
              {debateScore == 1 && <StarHalf filled />}
              {debateScore > 1 && <Star filled />}
            </div>
          </div>
          <div
            className="/10 absolute top-0 flex h-full w-1/5 items-center justify-center"
            style={{
              left: `${20}%`,
            }}
          >
            <Star />
            <div className="absolute">
              {debateScore == 3 && <StarHalf filled />}
              {debateScore > 3 && <Star filled />}
            </div>
          </div>
          <div
            className="absolute top-0 flex h-full w-1/5 items-center justify-center"
            style={{
              left: `${40}%`,
            }}
          >
            <Star />
            <div className="absolute">
              {debateScore == 5 && <StarHalf filled />}
              {debateScore > 5 && <Star filled />}
            </div>
          </div>
          <div
            className="/10 absolute top-0 flex h-full w-1/5 items-center justify-center"
            style={{
              left: `${60}%`,
            }}
          >
            <Star />
            <div className="absolute">
              {debateScore == 7 && <StarHalf filled />}
              {debateScore > 7 && <Star filled />}
            </div>
          </div>
          <div
            className="/10 absolute top-0 flex h-full w-1/5 items-center justify-center"
            style={{
              left: `${80}%`,
            }}
          >
            <Star />
            <div className="absolute">
              {debateScore == 9 && <StarHalf filled />}
              {debateScore > 9 && <Star filled />}
            </div>
          </div>
        </div>
        <div className="text-md flex h-full w-1/3 items-center justify-center px-2 font-medium">
          <span className="flex w-20 items-center justify-center rounded-md bg-utility px-1 py-1 text-center text-sm">
            {(debateScore / 2).toFixed(1)}/5
          </span>
        </div>
      </div>
      <div className="h-1/2 w-full">
        <Button
          className="h-6 w-full bg-primary text-white"
          onClick={handleSubmit}
          disabled={debateScoreInit === debateScore / 2}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default DebateScore;
