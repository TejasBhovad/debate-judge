import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DebateScore from "./ScoreCard";
import FeedbackText from "./FeedbackText";
import React from "react";
import { motion } from "framer-motion";
const TabsContainer = ({
  id,
  fetchTeamData,
  debateScoreInit,
  isExpanded,
  platformScoreInit,
  feedbackInit,
}) => {
  return (
    <Tabs defaultValue="star" className="h-full w-full">
      <TabsList className="w-full rounded-none bg-white px-1 text-xs">
        <TabsTrigger value="star" className="w-1/2 text-sm">
          Score
        </TabsTrigger>
        <TabsTrigger className="w-1/2 text-sm" value="feedback">
          Feedback
        </TabsTrigger>
      </TabsList>
      <TabsContent value="star">
        <motion.div
          initial={{ x: -20, opacity: 0, filter: "blur(5px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-2"
        >
          <DebateScore
            fetchTeamData={fetchTeamData}
            debateScoreInit={debateScoreInit}
            platformScoreInit={platformScoreInit}
            isExpanded={isExpanded}
            id={id}
          />
        </motion.div>
      </TabsContent>
      <TabsContent value="feedback">
        <motion.div
          initial={{ x: -20, opacity: 0, filter: "blur(5px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.25 }}
        >
          <FeedbackText
            fetchTeamData={fetchTeamData}
            feedbackInit={feedbackInit}
            id={id}
          />
        </motion.div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsContainer;
