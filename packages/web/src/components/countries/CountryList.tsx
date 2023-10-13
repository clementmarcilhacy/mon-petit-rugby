import Box from "@mui/material/Box";
import { Country } from "./Country";
import { Typography } from "@mui/material";

import { useState } from "react";

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

export const CountryList = () => {
  const [countryRanking, setCountryRanking] = useState(countries);

  return (
    <>
      <Box>
        <Typography> Votre classement</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {countryRanking.map(({ name, flag }, index) => (
          <Country
            name={name}
            key={name}
            flag={flag}
            ranking={index}
            countries={countryRanking}
            setCountryRanking={setCountryRanking}
          />
        ))}
      </Box>
    </>
  );
};
