import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  setDebateScoreUser,
  setPlatformScoreUser,
  getUserFromId,
} from "@/app/data";
import { Button } from "./ui/button";
import Star from "@/components/logos/Star";
import StarHalf from "@/components/logos/StarHalf";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useEffect } from "react";
const DebateDialog = ({
  fetchTeamData,
  id,
  name,
  text,
  debateScoreInit,
  platformScoreInit,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [debateScore, setDebateScore] = useState(debateScoreInit);
  const [sliderValue, setSliderValue] = useState([0]);

  useEffect(() => {
    console.log("Debate score changed to", sliderValue);

    // Calculate the snap value with more frequent milestones (every 12.5 units)
    const snapValue = Math.round(sliderValue / 12.5) * 12.5;

    setDebateScore(snapValue / 12.5);

    console.log("Debate score snapped to", snapValue);
  }, [sliderValue]);

  const [platformScore, setPlatformScore] = useState(platformScoreInit);
  const [platformSliderValue, setPlatformSliderValue] = useState([0]);
  useEffect(() => {
    console.log("Platform score changed to", platformSliderValue);

    // Calculate the snap value with more frequent milestones (every 12.5 units)
    const snapValue = Math.round(platformSliderValue / 12.5) * 12.5;

    setPlatformScore(snapValue / 12.5);

    console.log("Platform score snapped to", snapValue);
  }, [platformSliderValue]);

  const handleCancel = () => {
    setIsDialogOpen(false);
    setSliderValue([0]);
    setDebateScore(0);
    setPlatformSliderValue([0]);
    setPlatformScore(0);
  };

  const handleSubmit = async () => {
    await setDebateScoreUser(id, debateScore / 2);
    await setPlatformScoreUser(id, platformScore / 2);
    setIsDialogOpen(false);
    setSliderValue([0]);
    setDebateScore(0);
    setPlatformSliderValue([0]);
    setPlatformScore(0);
    fetchTeamData();
  };

  useEffect(() => {
    setDebateScore(debateScoreInit);
    setPlatformScore(platformScoreInit);
  }, [debateScoreInit, platformScoreInit]);
  return (
    <Dialog
      isOpen={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      aria-label={`Scoring Player ${name}`}
    >
      <DialogTrigger className="flex h-5 w-1/2 items-center justify-center rounded-sm border-[1px] border-secondaryColor/50 bg-secondaryColor/25 text-sm transition-all hover:bg-secondaryColor/50 sm:h-6">
        {text}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Scoring Player {name}</DialogTitle>
          <DialogDescription>
            Give the player a debate score and platform score
          </DialogDescription>
        </DialogHeader>
        <div className="flex h-auto w-full flex-col gap-2 rounded-md border-[1px] border-utility px-4 py-3 pb-5">
          <span className="text-lg font-semibold">Debate Score</span>
          <div className="flex h-auto w-full">
            <div className="relative flex h-auto w-2/3 text-base/50">
              <Slider
                value={sliderValue}
                onValueChange={(value) => setSliderValue(value)}
                min={0}
                max={125}
                step={1}
                aria-labelledby="debate-score"
                className="z-10 h-12 w-full cursor-pointer opacity-0"
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
            <div className="text-md flex h-full w-1/3 items-center justify-center font-medium">
              <span className="flex w-20 items-center justify-center rounded-md bg-utility px-2 py-1 text-center">
                {(debateScore / 2).toFixed(1)}/5
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-auto w-full flex-col gap-2 rounded-md border-[1px] border-utility px-4 py-3 pb-5">
          <span className="text-lg font-semibold">Platform Score</span>
          <div className="flex h-auto w-full">
            <div className="relative flex h-auto w-2/3 text-base/50">
              <Slider
                value={platformSliderValue}
                onValueChange={(value) => setPlatformSliderValue(value)}
                min={0}
                max={125}
                step={1}
                aria-labelledby="platform-score"
                className="z-10 h-12 w-full cursor-pointer opacity-0"
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
            <div className="text-md flex h-full w-1/3 items-center justify-center font-medium">
              <span className="flex w-20 items-center justify-center rounded-md bg-utility px-2 py-1 text-center">
                {(platformScore / 2).toFixed(1)}/5
              </span>
            </div>
          </div>
        </div>
        {/* {debateScore}
        {platformScore} */}
        <DialogFooter className="flex gap-4">
          <DialogClose asChild>
            <Button
              className="rounded-sm bg-utility hover:bg-utility/75 sm:w-1/2"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="rounded-sm bg-primary sm:w-1/2"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DebateDialog;
