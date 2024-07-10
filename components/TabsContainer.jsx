import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DebateScore from "./DebateScore";
import PlatformScore from "./PlatformScore";
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
    <Tabs defaultValue="debate" className="h-full w-full">
      <TabsList className="w-full rounded-none bg-secondary px-1 text-xs">
        <TabsTrigger value="debate" className="px-3 text-xs">
          Debate
        </TabsTrigger>
        <TabsTrigger className="px-3 text-xs" value="platform">
          Platform
        </TabsTrigger>
        <TabsTrigger className="px-3 text-xs" value="feedback">
          Feedback
        </TabsTrigger>
      </TabsList>
      <TabsContent value="debate">
        <motion.div
          initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.25 }}
        >
          <DebateScore
            fetchTeamData={fetchTeamData}
            debateScoreInit={debateScoreInit}
            isExpanded={isExpanded}
            id={id}
          />
        </motion.div>
      </TabsContent>
      <TabsContent value="platform">
        <motion.div
          initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.25 }}
        >
          <PlatformScore
            fetchTeamData={fetchTeamData}
            platformScoreInit={platformScoreInit}
            isExpanded={isExpanded}
            id={id}
          />
        </motion.div>
      </TabsContent>
      <TabsContent value="feedback">
        <motion.div
          initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
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
