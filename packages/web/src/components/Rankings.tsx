import { UserEntity } from "@mon-petit-rugby/core/entities/userEntity";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { CountryList } from "./countries/CountryList";
import { Box, Button, TextField } from "@mui/material";
import { useMutation } from "react-query";

const countries = [
  {
    name: "France" as const,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
    ranking: 1,
  },
  {
    name: "England" as const,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png",
    ranking: 2,
  },
  {
    name: "Ireland" as const,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1200px-Flag_of_Ireland.svg.png",
    ranking: 3,
  },
  {
    name: "Wales" as const,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/langfr-450px-Flag_of_Wales.svg.png",
    ranking: 4,
  },
  {
    name: "Argentina" as const,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/510px-Flag_of_Argentina.svg.png",
    ranking: 5,
  },
  {
    name: "South Africa" as const,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/510px-Flag_of_South_Africa.svg.png",
    ranking: 6,
  },
  {
    name: "New Zealand" as const,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/510px-Flag_of_New_Zealand.svg.png",
    ranking: 7,
  },
  {
    name: "Fiji" as const,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/510px-Flag_of_Fiji.svg.png",
    ranking: 8,
  },
];

export type Country = (typeof countries)[number];

const addUserRankings = async (user: UserEntity) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/add-user-rankings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  return response;
};

export const Rankings = () => {
  const [name, setName] = useState("");
  const [countryRanking, setCountryRanking] = useState(countries);

  const mutation = useMutation(addUserRankings, {
    onSuccess: () => {
      console.log("success");
    },
  });

  const minWidth = "300px";

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CountryList
          countryRanking={countryRanking}
          setCountryRanking={setCountryRanking}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            margin: "auto",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              alignSelf: "center",
              marginBottom: "10px",
            }}
          >
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Ton nom"
              variant="standard"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Box>
          <Button
            sx={{
              color: "#82861D",
              backgroundColor: "#EDF2EF",
              borderColor: "#EDF2EF",
              border: "1px solid",
              borderRadius: "10px",
              height: "50px",
              marginX: "50px",
              minWidth,
              "&:hover": {
                borderColor: "#f97068",
              },
            }}
            onClick={() =>
              mutation.mutate({
                name,
                teamsRanking: countryRanking.map((ranking) => ({
                  team: ranking.name,
                  ranking: ranking.ranking,
                })),
                points: 0,
              })
            }
            disabled={name === "" || mutation.isLoading}
          >
            Valider mon classement
          </Button>
          <Button
            sx={{
              color: "#82861D",
              backgroundColor: "#EDF2EF",
              borderColor: "#EDF2EF",
              border: "1px solid",
              borderRadius: "10px",
              height: "50px",
              marginX: "50px",
              minWidth,
              "&:hover": {
                borderColor: "#f97068",
              },
            }}
          >
            Voir les résultats
          </Button>
        </Box>
      </Box>
    </>
  );
};
