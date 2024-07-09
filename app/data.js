"use server";
import { promises as fs } from "fs";
export const getTeamData = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);
  // console.log("Data:", data);
  return data;
};

export const updateTeam = async (color, updatedTeam) => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);
  // console.log("Data:", data);
  const teamIndex = data.findIndex((team) => team.team === color);
  if (teamIndex !== -1) {
    data[teamIndex].members = updatedTeam;
    await fs.writeFile(
      process.cwd() + "/app/data.json",
      JSON.stringify(data, null, 2),
    );
  }
};

// set score for data where team.member.id === id
export const setDebateScoreUser = async (id, score) => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);
  data.forEach((team) => {
    team.members.forEach((member) => {
      if (member.id === id) {
        console.log("Setting score for", member);
        member.debateScore = score;
      }
    });
  });
  await fs.writeFile(
    process.cwd() + "/app/data.json",
    JSON.stringify(data, null, 2),
  );
};

export const setPlatformScoreUser = async (id, score) => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);
  data.forEach((team) => {
    team.members.forEach((member) => {
      if (member.id === id) {
        console.log("Setting score for", member);
        member.platformScore = score;
      }
    });
  });
  await fs.writeFile(
    process.cwd() + "/app/data.json",
    JSON.stringify(data, null, 2),
  );
};

export const setFeedbackUser = async (id, feedback) => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);
  data.forEach((team) => {
    team.members.forEach((member) => {
      if (member.id === id) {
        console.log("Setting feedback for", member);
        member.feedback = feedback;
      }
    });
  });
  await fs.writeFile(
    process.cwd() + "/app/data.json",
    JSON.stringify(data, null, 2),
  );
};

export const getUserFromId = async (id) => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);
  let user;
  data.forEach((team) => {
    team.members.forEach((member) => {
      if (member.id === id) {
        user = member;
      }
    });
  });
  return user;
};

//  make reset function to set feeback fo each user to "" and platformScore and debateScore to -1
export const resetData = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);
  data.forEach((team) => {
    team.members.forEach((member) => {
      member.feedback = "";
      member.platformScore = -1;
      member.debateScore = -1;
    });
  });
  await fs.writeFile(
    process.cwd() + "/app/data.json",
    JSON.stringify(data, null, 2),
  );
};

// make function to check if all users have feedback, platformScore and debateScore set
export const checkData = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);
  let allSet = true;
  data.forEach((team) => {
    team.members.forEach((member) => {
      if (
        member.feedback === "" ||
        member.platformScore === -1 ||
        member.debateScore === -1
      ) {
        allSet = false;
      }
    });
  });
  return allSet;
};

// make function to randomly set feedback and also set score from 0-5(in increemnets of 0.5)
export const randomizeData = async () => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);
  data.forEach((team) => {
    team.members.forEach((member) => {
      member.feedback = "Random feedback";
      member.platformScore = Math.floor(Math.random() * 11) / 2;
      member.debateScore = Math.floor(Math.random() * 11) / 2;
    });
  });
  await fs.writeFile(
    process.cwd() + "/app/data.json",
    JSON.stringify(data, null, 2),
  );
};
