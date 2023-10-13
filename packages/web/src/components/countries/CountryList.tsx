import Box from "@mui/material/Box";
import { Country } from "./Country";
import { Typography } from "@mui/material";

export const CountryList = ({
  countryRanking,
  setCountryRanking,
}: {
  countryRanking: Country[];
  setCountryRanking: React.Dispatch<React.SetStateAction<Country[]>>;
}) => {
  return (
    <>
      <Box>
        <Typography> Ton classement :</Typography>
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
