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
    return 10;
  }
  if (status === "semiFinalist" && ranking >= 3) {
    return 20;
  }
  if (status === "finalist" && ranking === 2) {
    return 50;
  }
  if (status === "worldChampion" && ranking === 1) {
    return 100;
  }
  return 0;
};

export const main = async ({ Records }: { Records: any[] }): Promise<void> => {
  // get users

  const { data: users } = await User.query.name({}).go();

  const newUsers = [...users];

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

    const newUsersUpdated = newUsers.map((user) => {
      const { teamsRanking } = user;
      if (teamsRanking === undefined) {
        return user;
      }

      const loserTeam = teamsRanking.find((team) => team.team === loserId);

      if (loserTeam === undefined) {
        return user;
      }

      const { ranking: expectedRanking } = loserTeam;

      user.points =
        (user.points ?? 0) +
        getPoints(STATUSES[stageIndex], expectedRanking ?? 10);
      console.log(`${user.name} has ${user.points} points`);

      return user;
    });

    await User.put(newUsersUpdated).go();
  });
};
