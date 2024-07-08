"use server";
import exp from "constants";
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
export const setDebateScore = async (id, score) => {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);
  data.forEach((team) => {
    team.members.forEach((member) => {
      if (member.id === id) {
        member.score = score;
      }
    });
  });
  await fs.writeFile(
    process.cwd() + "/app/data.json",
    JSON.stringify(data, null, 2),
  );
};
