import Member from "@/models/member";
import { connectToDB } from "@/utils/db";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const { memberId, debateScore } = await req.json();

    if (!memberId) {
      console.log("Invalid member ID");
      return new Response("Invalid member ID", { status: 400 });
    }

    const member = await Member.findOne({ id: memberId });

    if (!member) {
      console.log("Member not found");
      return new Response("Member not found", { status: 404 });
    }
    member.debateScore = debateScore;
    const updatedMember = await member.save();

    return new Response(JSON.stringify(updatedMember), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response("Failed to update member", { status: 500 });
  }
};
