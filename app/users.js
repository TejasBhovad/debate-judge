import { teamBlue, teamRed } from "./data";

export function getTeam(team) {
  return team === "teamRed" ? teamRed : teamBlue;
}
