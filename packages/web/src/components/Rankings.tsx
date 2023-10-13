import { UserEntity } from "@mon-petit-rugby/core/entities/userEntity";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { CountryList } from "./countries/CountryList";
import { Box, Button, TextField } from "@mui/material";
import { useMutation } from "react-query";

const countries = [
  {
    name: "France",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
    ranking: 1,
  },
  {
    name: "Angleterre",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png",
    ranking: 2,
  },
  {
    name: "Irlande",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1200px-Flag_of_Ireland.svg.png",
    ranking: 3,
  },
  {
    name: "Pays de Galles",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/langfr-450px-Flag_of_Wales.svg.png",
    ranking: 4,
  },
  {
    name: "Ecosse",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png",
    ranking: 5,
  },
  {
    name: "South Africa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/510px-Flag_of_South_Africa.svg.png",
    ranking: 6,
  },
  {
    name: "New Zealand",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/510px-Flag_of_New_Zealand.svg.png",
    ranking: 7,
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

  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", marginBottom: "10px" }}
      >
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Your name"
          variant="standard"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CountryList
          countryRanking={countryRanking}
          setCountryRanking={setCountryRanking}
        />
        <Box sx={{ width: "400px", margin: "auto" }}>
          <Button
            sx={{
              color: "#82861D",
              backgroundColor: "#EDF2EF",
              borderColor: "#EDF2EF",
              border: "1px solid",
              borderRadius: "10px",
              height: "50px",
              marginX: "50px",
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
              })
            }
            disabled={name === "" || mutation.isLoading}
          >
            Valider mon classement
          </Button>
        </Box>
      </Box>
    </>
  );
};
