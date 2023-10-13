import { User } from "@mon-petit-rugby/core/entities/userEntity";

export async function main() {
  const result = await User.scan.go();
  const usersScores = result.data.map((user) => ({
    name: user.name,
    points: user.points,
  }));

  return {
    statusCode: 200,
    body: JSON.stringify(usersScores),
  };
}
