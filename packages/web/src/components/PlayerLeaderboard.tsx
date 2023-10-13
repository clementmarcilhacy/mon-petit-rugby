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

export const PlayerLeaderboard = () => {
  const sortedUsers = users.sort((a, b) => b.points - a.points);
  return (
    <Box
      sx={{
        "div:nth-child(-n+3)": {
          color: "#F97068",
        },
        maxHeight: "80%",
        color: "#D1D646",
        border: "1px solid",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      {sortedUsers.map((user, index) => (
        <Box key={index} sx={{ color: "#212738" }}>
          <p>
            {index + 1}. {user.name} - {user.points} points
          </p>
        </Box>
      ))}
    </Box>
  );
};
