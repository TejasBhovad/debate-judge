import React from "react";
import Image from "next/image";

import DebateDialog from "./DebateDialog";
import FeedbackDialog from "./FeedbackDialog";
const UserCard = ({
  picture,
  name,
  feedback,
  id,
  hide = false,
  ranking,
  debateScore,
  platformScore,
  fetchTeamData,
}) => {
  return (
    <div
      className={`w-1/2 rounded-sm border-[1px] border-utility bg-secondary sm:w-1/3 md:rounded-md lg:rounded-lg ${hide ? "hidden sm:block" : ""}`}
      style={{
        aspectRatio: "5/7",
        minWidth: "208px",
      }}
    >
      <div className="absolute m-2 flex aspect-square w-8 items-center justify-center rounded-md border-[1.5px] border-primary/30 bg-secondaryColor font-semibold">
        #{ranking}
      </div>
      <div className="flex items-center justify-center pt-4 sm:pt-6 md:pt-4">
        <div className="aspect-square w-4/5 sm:w-3/5 md:w-4/5">
          <Image
            src={picture}
            alt={name}
            className="h-full w-full rounded-md"
            width={200}
            height={280}
            draggable={false}
          />
        </div>
      </div>
      <span className="w-full px-4 font-semibold sm:text-lg">{name}</span>
      <div className="mt-1 flex h-auto flex-col gap-0 sm:gap-1 md:gap-2">
        <div className="flex w-full items-center gap-1 px-4 py-0">
          <span className="flex h-full w-1/2 items-center">debate:</span>

          {debateScore === -1 ? (
            <DebateDialog
              fetchTeamData={fetchTeamData}
              id={id}
              name={name}
              text="not added"
              debateScoreInit={debateScore}
              platformScoreInit={platformScore}
            />
          ) : (
            <DebateDialog
              id={id}
              name={name}
              text={debateScore}
              debateScoreInit={debateScore}
              platformScoreInit={platformScore}
            />
          )}
        </div>
        <div className="flex w-full items-center gap-0 px-4 py-0 sm:gap-1">
          <span className="flex h-full w-1/2 items-center">platform:</span>
          {platformScore === -1 ? (
            <DebateDialog
              id={id}
              name={name}
              text="not added"
              debateScoreInit={debateScore}
              platformScoreInit={platformScore}
            />
          ) : (
            <DebateDialog
              id={id}
              name={name}
              text={platformScore}
              debateScoreInit={debateScore}
              platformScoreInit={platformScore}
            />
          )}
        </div>
        <div className="flex w-full items-center gap-1 px-4 py-0">
          <span className="flex h-full w-1/2 items-center">review:</span>
          {feedback === "" ? (
            <FeedbackDialog
              fetchTeamData={fetchTeamData}
              id={id}
              name={name}
              text="not added"
              feedbackInit={feedback}
            />
          ) : (
            <FeedbackDialog
              id={id}
              name={name}
              text="view"
              feedbackInit={feedback}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
