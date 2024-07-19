import React from "react";
import { setFeedbackUser } from "@/app/data";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useEffect } from "react";
import { updateFeedback } from "@/app/queries";
const FeedbackText = ({ fetchTeamData, id, feedbackInit }) => {
  const [feedback, setFeedback] = useState(feedbackInit);

  const handleSubmit = async () => {
    await updateFeedback(id, feedback);
    fetchTeamData();
  };

  useEffect(() => {
    setFeedback(feedbackInit);
  }, [feedbackInit]);
  return (
    <div className="flex h-fit w-full flex-col gap-2 p-2">
      <div className="flex h-1/2 w-full items-center">
        <Textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="h-8 min-h-8 w-full bg-white"
          placeholder="Enter feedback here"
        />
      </div>
      <div className="h-1/2 w-full">
        <Button
          className="h-full w-full bg-black text-white"
          onClick={handleSubmit}
          disabled={feedback === feedbackInit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FeedbackText;
