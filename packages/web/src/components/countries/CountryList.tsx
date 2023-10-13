import Box from "@mui/material/Box";
import { Country } from "./Country";

//   "France",
//   "Angleterre",
//   "Irlande",
//   "Pays de Galles",
//   "Ecosse",
//   "Italie",

const countries = [
  {
    name: "France",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
  },
  {
    name: "Angleterre",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png",
  },
  {
    name: "Irlande",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1200px-Flag_of_Ireland.svg.png",
  },
  {
    name: "Pays de Galles",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/langfr-450px-Flag_of_Wales.svg.png",
  },
  {
    name: "Ecosse",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png",
  },
  {
    name: "South Africa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/510px-Flag_of_South_Africa.svg.png",
  },
  {
    name: "New Zealand",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/510px-Flag_of_New_Zealand.svg.png",
  },
];

export const CountryList = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {countries.map(({ name, flag }, index) => (
        <Country name={name} key={name} flag={flag} ranking={index} />
      ))}
    </Box>
  );
};
