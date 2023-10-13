import { UserEntity } from "@mon-petit-rugby/core/entities/userEntity";
import { Box } from "@mui/material";
import { useQuery } from "react-query";

const getUsersScores = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/get-users-scores`
  );

  return response.json();
};

export const PlayerLeaderboard = () => {
  const { data, status } = useQuery<UserEntity[]>(
    "usersScores",
    getUsersScores
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const sortedUsers = data?.sort((a, b) => b.points - a.points);

  return (
    <Box
      sx={{
        "div:nth-of-type(-n+3)": {
          color: "#F97068",
        },
        maxHeight: "70vh",
        overflowY: "scroll",
        color: "#D1D646",
        border: "1px solid",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      {sortedUsers?.map((user, index) => (
        <Box key={index} sx={{ color: "#212738" }}>
          <p>
            {index + 1}. {user.name} - {user.points} points
          </p>
        </Box>
      ))}
    </Box>
  );
};
