import { Schema, model, models } from "mongoose";

let Member;

try {
  Member = model("Member");
} catch (error) {
  Member = model(
    "Member",
    new Schema({
      name: String,
      team: String,
      picture: String,
      id: Number,
      ranking: Number,
      feedback: String,
      debateScore: Number,
      platformScore: Number,
    }),
  );
}

export default Member;
