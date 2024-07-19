"use client";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "./logos/Dropdown";
import TabsContainer from "./TabsContainer";
import Image from "next/image";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Star } from "lucide-react";
const CollapsibleCard = ({
  name,
  picture,
  id,
  isDragging,
  debateScoreInit,
  fetchTeamData,
  platformScoreInit,
  feedbackInit,
  setStopDragging,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setStopDragging(false);
    } else {
      setStopDragging(true);
    }
  };

  return (
    <div className="flex h-full w-full flex-col gap-1">
      <AnimatePresence>
        <motion.div
          className={`flex h-24 max-h-24 w-full overflow-hidden rounded-md p-3`}
          initial={{ aspectRatio: "auto" }}
          transition={{ duration: 0.1 }}
        >
          <div className={`relative aspect-square h-full overflow-auto`}>
            <div className={`relative ${isExpanded ? "" : ""}`}>
              <Image
                src={picture}
                alt={name}
                className="h-full w-full rounded-md object-cover"
                width={200}
                height={280}
                draggable={false}
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col px-2">
            <span className="text-lg font-semibold">{name}</span>

            <span className="flex items-center gap-2 text-sm font-medium">
              <div className="w-14"> Debate</div>

              <div className="flex items-center gap-[1px]">
                {debateScoreInit}
                <Star width={16} fill="black" stroke="black" />
              </div>
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <div className="w-14"> Platform</div>
              <div className="flex items-center gap-[1px]">
                {platformScoreInit}
                <Star width={16} fill="black" stroke="black" />
              </div>
            </span>
          </div>

          <div
            className={`flex aspect-square h-8 cursor-pointer items-center justify-center rounded-sm bg-black/5 hover:bg-black/10 ${isExpanded ? "rotate-0" : "rotate-0"} ${isDragging ? "hidden" : "flex"} transition-all duration-300 ease-in-out`}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ y: -30, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -30, opacity: 0, filter: "blur(10px)" }} // This will control the exit animation
            transition={{ duration: 0.15 }}
            className="h-auto w-full cursor-default rounded-md bg-white p-2"
          >
            <TabsContainer
              id={id}
              fetchTeamData={fetchTeamData}
              debateScoreInit={debateScoreInit}
              isExpanded={isExpanded}
              platformScoreInit={platformScoreInit}
              feedbackInit={feedbackInit}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleCard;
