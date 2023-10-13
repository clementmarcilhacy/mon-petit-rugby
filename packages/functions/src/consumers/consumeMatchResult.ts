import { unmarshall } from "@aws-sdk/util-dynamodb";
import {
  MatchRecord,
  STAGES,
} from "@mon-petit-rugby/core/entities/matchEntity";
import { STATUSES, Team } from "@mon-petit-rugby/core/entities/teamEntity";

export const main = async ({ Records }: { Records: any[] }): Promise<void> => {
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
  });
};
