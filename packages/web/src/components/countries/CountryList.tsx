import Box from "@mui/material/Box";
import { Country as CountryComponent } from "./Country";
import { Typography } from "@mui/material";
import { type Country } from "../Rankings";

export const CountryList = ({
  countryRanking,
  setCountryRanking,
}: {
  countryRanking: Country[];
  setCountryRanking: React.Dispatch<React.SetStateAction<Country[]>>;
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography> Ton classement :</Typography>
      {countryRanking.map(({ name, flag }, index) => (
        <CountryComponent
          name={name}
          key={name}
          flag={flag}
          ranking={index}
          countries={countryRanking}
          setCountryRanking={setCountryRanking}
        />
      ))}
    </Box>
  );
};
