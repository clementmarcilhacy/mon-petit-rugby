import { Match } from "@mon-petit-rugby/core/entities/matchEntity";

export async function main() {
  const result = await Match.scan.go();

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
}
