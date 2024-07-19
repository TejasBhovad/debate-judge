import React from "react";
import { setDebateScoreUser } from "@/app/data";
import { updateDebateScore } from "@/app/queries";
import { updatePlatformScore } from "@/app/queries";
import Star from "@/components/logos/Star";
import StarHalf from "@/components/logos/StarHalf";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "./ui/button";
const ScoreCard = ({
  fetchTeamData,
  id,
  debateScoreInit,
  platformScoreInit,
}) => {
  const [debateScore, setDebateScore] = useState(debateScoreInit);
  const [debateSlider, setDebateSlider] = useState([0]);
  const [platformScore, setPlatformScore] = useState(platformScoreInit);
  const [platformSlider, setPlatformSlider] = useState([0]);

  const handleSubmit = async () => {
    if (debateScore / 2 !== debateScoreInit) {
      await updateDebateScore(id, debateScore / 2);
      console.log("Debate score submitted", debateScore);
      setDebateSlider([0]);
      setDebateScore(0);
      fetchTeamData();
    }
    if (platformScore / 2 !== platformScoreInit) {
      await updatePlatformScore(id, platformScore / 2);
      console.log("Debate score submitted", platformScore);
      setPlatformSlider([0]);
      setPlatformScore(0);
      fetchTeamData();
    }
  };

  useEffect(() => {
    console.log("Debate score changed to", debateSlider);
    const snapValue = Math.round(debateSlider / 12.5) * 12.5;
    setDebateScore(snapValue / 12.5);
    console.log("Debate score snapped to", snapValue);
  }, [debateSlider]);
  useEffect(() => {
    console.log("Debate score changed to", platformSlider);
    const snapValue = Math.round(platformSlider / 12.5) * 12.5;
    setPlatformScore(snapValue / 12.5);
    console.log("Debate score snapped to", snapValue);
  }, [platformSlider]);

  useEffect(() => {
    if (debateScoreInit === -1) {
      setDebateScore(0);
      return;
    }
    setDebateScore(debateScoreInit * 2);
    console.log("Debate score initialized to", debateScoreInit);
  }, [debateScoreInit]);

  useEffect(() => {
    if (platformScoreInit === -1) {
      setPlatformScore(0);
      return;
    }
    setPlatformScore(platformScoreInit * 2);
    console.log("Debate score initialized to", platformScoreInit);
  }, [platformScoreInit]);

  return (
    <div className="flex h-auto w-full flex-col gap-4">
      <div className="flex h-full w-full flex-col gap-2">
        <span className="px-3 font-medium">Debate Score</span>
        <div className="flex h-1/2 w-full items-center">
          <div className="relative flex h-full w-1/2 text-black/25">
            <Slider
              value={debateSlider}
              onValueChange={(value) => setDebateSlider(value)}
              min={0}
              max={125}
              step={1}
              aria-labelledby="platform-score"
              className="z-10 h-5 w-full cursor-pointer opacity-0"
            />
            <div className="absolute top-0 m-0 flex h-full w-1/5 items-center justify-center p-0">
              <Star />
              <div className="absolute">
                {debateScore == 1 && <StarHalf filled />}
                {debateScore > 1 && <Star filled />}
              </div>
            </div>
            <div
              className="absolute top-0 flex h-full w-1/5 items-center justify-center"
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
          <div className="text-md flex h-full w-1/2 items-center justify-end px-2 font-medium">
            <span className="flex w-20 items-center justify-center rounded-md border border-[1.5px] border-black/10 px-1 py-1 text-center text-sm">
              {(debateScore / 2).toFixed(1)}/5
            </span>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col gap-2">
        <span className="px-3 font-medium">Platform Score</span>
        <div className="flex h-1/2 w-full items-center">
          <div className="relative flex h-full w-1/2 text-base/25">
            <Slider
              value={platformSlider}
              onValueChange={(value) => setPlatformSlider(value)}
              min={0}
              max={125}
              step={1}
              aria-labelledby="platform-score"
              className="z-10 h-5 w-full cursor-pointer opacity-0"
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
          <div className="text-md flex h-full w-1/2 items-center justify-end px-2 font-medium">
            <span className="flex w-20 items-center justify-center rounded-md border border-[1.5px] border-black/10 px-1 py-1 text-center text-sm">
              {(platformScore / 2).toFixed(1)}/5
            </span>
          </div>
        </div>
      </div>
      <div className="h-auto w-full p-2">
        <Button
          className="h-full w-full bg-black text-white"
          onClick={handleSubmit}
          disabled={
            platformScore / 2 === platformScoreInit &&
            debateScore / 2 === debateScoreInit
          }
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ScoreCard;
