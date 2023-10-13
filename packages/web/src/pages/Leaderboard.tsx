import { Box } from "@mui/material";

const users = [
  {
    name: "Clément",
    points: 500,
  },
  {
    name: "Nicolas",
    points: 330,
  },
  {
    name: "John Doe",
    points: 100,
  },
  {
    name: "Jane Doe",
    points: 200,
  },
  {
    name: "Anais",
    points: 250,
  },
  {
    name: "Quentin",
    points: 50,
  },
];

export const Leaderboard = () => {
  const sortedUsers = users.sort((a, b) => b.points - a.points);
  return (
    <Box sx={{ marginTop: "50px" }}>
      <h1>Leaderboard</h1>
      <Box
        sx={{
          "div:nth-child(-n+3)": {
            color: "#F97068",
          },
          color: "#212738",
        }}
      >
        {sortedUsers.map((user, index) => (
          <div key={index}>
            <p>
              {index + 1}. {user.name} - {user.points} points
            </p>
          </div>
        ))}
      </Box>
    </Box>
  );
};
