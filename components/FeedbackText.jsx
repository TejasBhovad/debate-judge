import React from "react";
import { setFeedbackUser } from "@/app/data";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useEffect } from "react";
import { updateFeedback } from "@/app/queries";
const FeedbackText = ({ fetchTeamData, id, name, text, feedbackInit }) => {
  const [feedback, setFeedback] = useState(feedbackInit);

  const handleCancel = () => {
    setFeedback(feedbackInit);
  };

  const handleSubmit = async () => {
    // await setFeedbackUser(id, feedback);
    await updateFeedback(id, feedback);
    fetchTeamData();
  };

  useEffect(() => {
    setFeedback(feedbackInit);
  }, [feedbackInit]);
  return (
    <div className="flex h-fit w-full flex-col gap-2">
      <div className="flex h-1/2 w-full items-center">
        <Textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="h-7 min-h-0 w-full"
          placeholder="Enter feedback here"
        />
      </div>
      <div className="h-1/2 w-full">
        <Button
          className="h-5 w-full bg-primary text-white"
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
