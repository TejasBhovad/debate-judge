import React from "react";
import { setPlatformScoreUser } from "@/app/data";
import { updatePlatformScore } from "@/app/queries";
import Star from "@/components/logos/Star";
import StarHalf from "@/components/logos/StarHalf";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "./ui/button";
const PlatformScore = ({ fetchTeamData, id, platformScoreInit }) => {
  const [platformScore, setPlatformScore] = useState(platformScoreInit);
  const [sliderValue, setSliderValue] = useState([0]);

  const handleSubmit = async () => {
    // await setPlatformScoreUser(id, platformScore / 2);
    await updatePlatformScore(id, platformScore / 2);
    console.log("Debate score submitted", platformScore);
    setSliderValue([0]);
    setPlatformScore(0);
    fetchTeamData();
  };

  useEffect(() => {
    console.log("Debate score changed to", sliderValue);
    const snapValue = Math.round(sliderValue / 12.5) * 12.5;
    setPlatformScore(snapValue / 12.5);
    console.log("Debate score snapped to", snapValue);
    // handleSubmit();
  }, [sliderValue]);

  useEffect(() => {
    if (platformScoreInit === -1) {
      setPlatformScore(0);
      return;
    }
    setPlatformScore(platformScoreInit * 2);
    console.log("Debate score initialized to", platformScoreInit);
  }, [platformScoreInit]);
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
              {platformScore == 1 && <StarHalf filled />}
              {platformScore > 1 && <Star filled />}
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
              {platformScore == 3 && <StarHalf filled />}
              {platformScore > 3 && <Star filled />}
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
              {platformScore == 5 && <StarHalf filled />}
              {platformScore > 5 && <Star filled />}
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
              {platformScore == 7 && <StarHalf filled />}
              {platformScore > 7 && <Star filled />}
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
              {platformScore == 9 && <StarHalf filled />}
              {platformScore > 9 && <Star filled />}
            </div>
          </div>
        </div>
        <div className="text-md flex h-full w-1/3 items-center justify-center px-2 font-medium">
          <span className="flex w-20 items-center justify-center rounded-md bg-utility px-1 py-1 text-center text-sm">
            {(platformScore / 2).toFixed(1)}/5
          </span>
        </div>
      </div>
      <div className="h-1/2 w-full">
        <Button
          className="h-6 w-full bg-primary text-white"
          onClick={handleSubmit}
          disabled={platformScore / 2 === platformScoreInit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PlatformScore;
