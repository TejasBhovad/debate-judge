const getMembers = async () => {
  try {
    console.log("getting members data");

    const response = await fetch(`/api/member/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const members = await response.json();
    // console.log(members);
    return members;
  } catch (error) {
    console.error("Failed to fetch members data", error);
  }
};

const updateMembers = async (color, newTeam) => {
  try {
    // console.log("Updating members data", newTeam);

    const updatedMembers = await Promise.all(
      newTeam.map(async (member) => {
        console.log("updating member", member.id);
        const response = await fetch(`/api/member/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            color,
            memberId: member.id,
            properties: {
              ranking: member.ranking,
              debateScore: member.debateScore,
              platformScore: member.platformScore,
              feedback: member.feedback,
            },
          }),
        });

        if (!response.ok) {
          console.log("error", response);
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        console.log(data);
        return data;
      }),
    );

    return updatedMembers;
  } catch (error) {
    console.error("Failed to update members data", error);
    console.log("error", error);
  }
};

const updateDebateScore = async (memberId, debateScore) => {
  try {
    console.log("Updating debate score for member", memberId);

    const response = await fetch(`/api/member/debate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberId,
        debateScore,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to update debate score", error);
  }
};

const updatePlatformScore = async (memberId, platformScore) => {
  try {
    console.log("Updating platform score for member", memberId);

    const response = await fetch(`/api/member/platform`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberId,
        platformScore,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to update platform score", error);
  }
};

const updateFeedback = async (memberId, feedback) => {
  try {
    console.log("Updating feedback for member", memberId);

    const response = await fetch(`/api/member/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberId,
        feedback,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to update feedback", error);
  }
};
// fetch allmemebers check if there are memebers with platformscore,debatescore as -1 or feedback as ""
const checkMembers = async () => {
  try {
    const response = await fetch(`/api/member/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const members = await response.json();

    const hasInvalidMembers = members.some(
      (member) =>
        member.platformScore === -1 ||
        member.debateScore === -1 ||
        member.feedback === "",
    );

    if (hasInvalidMembers) {
      console.log("Members with invalid data found");
      return false;
    } else {
      console.log("All members have valid data");
      return true;
    }
  } catch (error) {
    console.error("Failed to fetch members data", error);
    return false;
  }
};

// fetch all memebers and set their platformscore, debatescore to -1 and feedback to ""
const resetMembers = async () => {
  try {
    const members = await getMembers();

    const updatedMembers = await Promise.all(
      members.map(async (member) => {
        console.log("resetting member", member.id);
        const response = await fetch(`/api/member/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            memberId: member.id,
            properties: {
              platformScore: -1,
              debateScore: -1,
              feedback: "",
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        console.log(data);
        return data;
      }),
    );

    return updatedMembers;
  } catch (error) {
    console.error("Failed to reset members data", error);
  }
};

// dummy value for all members
const dummyValues = async () => {
  try {
    const members = await getMembers();

    const updatedMembers = await Promise.all(
      members.map(async (member) => {
        console.log("resetting member", member.id);
        const response = await fetch(`/api/member/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            memberId: member.id,
            properties: {
              platformScore: 2,
              debateScore: 3,
              feedback: "dummy",
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        console.log(data);
        return data;
      }),
    );

    return updatedMembers;
  } catch (error) {
    console.error("Failed to reset members data", error);
  }
};

export {
  updateDebateScore,
  updatePlatformScore,
  updateFeedback,
  getMembers,
  updateMembers,
  checkMembers,
  resetMembers,
  dummyValues,
};
