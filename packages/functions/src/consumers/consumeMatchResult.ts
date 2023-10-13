import { unmarshall } from "@aws-sdk/util-dynamodb";
import {
  MatchRecord,
  STAGES,
} from "@mon-petit-rugby/core/entities/matchEntity";
import {
  STATUSES,
  Status,
  Team,
} from "@mon-petit-rugby/core/entities/teamEntity";
import { User } from "@mon-petit-rugby/core/entities/userEntity";

const getPoints = (status: Status, ranking: number): number => {
  if (status === "quarterFinalist" && ranking >= 5) {
    return 1;
  }
  if (status === "semiFinalist" && ranking >= 3) {
    return 2;
  }
  if (status === "finalist" && ranking === 2) {
    return 3;
  }
  if (status === "worldChampion" && ranking === 1) {
    return 4;
  }
  return 0;
};

export const main = async ({ Records }: { Records: any[] }): Promise<void> => {
  // get users

  const { data: users } = await User.query.name({}).go();

  console.log(JSON.stringify(Records, null, 2));
  Records.forEach(async (record) => {
    if (record.eventName !== "INSERT") {
      return;
    }

    const newRecord = unmarshall(record.dynamodb.NewImage) as MatchRecord;
    console.log(newRecord);

    const { team1, team2, winner, stage } = newRecord;

    const winnerId = newRecord[winner];
    const loserId = winner === "team1" ? team2 : team1;

    const stageIndex = STAGES.indexOf(stage);

    // update teams
    await Team.upsert({
      id: winnerId,
      name: winnerId,
      status: STATUSES[stageIndex + 1],
    }).go();
    await Team.upsert({
      id: loserId,
      name: loserId,
      status: STATUSES[stageIndex],
    }).go();

    // update user points

    users.forEach(async (user) => {
      const { teamsRanking } = user;
      if (teamsRanking === undefined) {
        return;
      }

      const loserTeam = teamsRanking.find((team) => team.team === loserId);

      if (loserTeam === undefined) {
        return;
      }

      const { ranking: expectedRanking } = loserTeam;
    });
  });
};
