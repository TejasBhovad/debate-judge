"use client";
import { motion } from "framer-motion";
import Dropdown from "./logos/Dropdown";
import { Button } from "./ui/button";
import TabsContainer from "./TabsContainer";
import Image from "next/image";
import { useState } from "react";

const CollapsibleCard = ({
  name,
  picture,
  id,
  isDragging,
  debateScoreInit,
  fetchTeamData,
  platformScoreInit,
  feedbackInit,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className={`flex ${isExpanded ? "flex-row" : "flex-col"} w-full overflow-hidden rounded-md border-[1px] border-utility bg-secondary p-3`}
      initial={{ aspectRatio: "auto" }}
      animate={{
        aspectRatio: isExpanded ? "4/1" : "5 / 7",
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`${isExpanded ? "aspect-square h-full" : "aspect-auto w-full overflow-hidden"} relative overflow-auto`}
      >
        <div className={`relative ${isExpanded ? "" : ""}`}>
          <Image
            src={picture}
            alt={name}
            className="h-full w-full rounded-md object-cover"
            width={200}
            height={280}
            draggable={false}
          />
          {!isExpanded && <div className="overlay-gradient"></div>}
          {!isExpanded && (
            <div className="absolute bottom-4">
              <span className="p-5 text-3xl text-base font-semibold">
                {name}
              </span>
            </div>
          )}
        </div>
      </div>
      {!isExpanded && (
        <div className="h-fit w-full flex-grow">
          <TabsContainer
            id={id}
            fetchTeamData={fetchTeamData}
            debateScoreInit={debateScoreInit}
            isExpanded={isExpanded}
            platformScoreInit={platformScoreInit}
            feedbackInit={feedbackInit}
          />
        </div>
      )}

      {isExpanded && (
        <div className="flex flex-1 flex-col px-2">
          <span className="text-lg font-semibold">{name}</span>
        </div>
      )}
      <div
        className={`\ absolute right-4 aspect-square h-6 cursor-pointer rounded-sm bg-utility hover:bg-muted ${isExpanded ? "rotate-0" : "rotate-180"} ${isDragging ? "hidden" : "flex"} transition-all duration-300 ease-in-out`}
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
      >
        <Dropdown />
      </div>
    </motion.div>
  );
};

export default CollapsibleCard;
