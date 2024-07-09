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
import { setFeedbackUser } from "@/app/data";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useEffect } from "react";
const FeedbackDialog = ({ fetchTeamData, id, name, text, feedbackInit }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [feedback, setFeedback] = useState(feedbackInit);

  const handleCancel = () => {
    setIsDialogOpen(false);
    setFeedback(feedbackInit);
  };

  const handleSubmit = async () => {
    await setFeedbackUser(id, feedback);
    setIsDialogOpen(false);
    fetchTeamData();
  };

  useEffect(() => {
    setFeedback(feedbackInit);
  }, [feedbackInit]);
  return (
    <Dialog
      isOpen={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      aria-label={`Feedback for Player ${name}`}
    >
      <DialogTrigger className="flex h-5 w-1/2 items-center justify-center rounded-sm border-[1px] border-secondaryColor/50 bg-secondaryColor/25 text-sm transition-all hover:bg-secondaryColor/50 sm:h-6">
        {text}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Feedback for Player {name}</DialogTitle>
          <DialogDescription>
            Give the player feedback on their performance
          </DialogDescription>
        </DialogHeader>
        <div className="flex h-auto w-full flex-col gap-2 rounded-md border-[1px] border-utility px-4 py-3 pb-5">
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="h-32 w-full"
            placeholder="Enter feedback here"
          />
        </div>

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

export default FeedbackDialog;
