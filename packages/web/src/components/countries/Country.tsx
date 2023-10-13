import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Country as CountryType } from "../Rankings";

export const Country = ({
  name,
  ranking,
  flag,
  countries,
  setCountryRanking,
}: CountryType & {
  countries: CountryType[];
  setCountryRanking: (country: CountryType[]) => void;
}) => {
  const selectedIndex = ranking - 1;

  const handleMoveUp = () => {
    const updatedList = [...countries];
    const [firstItem, secondItem] = updatedList.splice(selectedIndex, 2);
    const newSecondItem = { ...firstItem, ranking: firstItem.ranking + 1 };
    const newFirstItem = { ...secondItem, ranking: secondItem.ranking - 1 };
    updatedList.splice(selectedIndex, 0, newFirstItem, newSecondItem);
    setCountryRanking(updatedList);
  };

  const handleMoveDown = () => {
    const updatedList = [...countries];
    const [firstItem, secondItem] = updatedList.splice(selectedIndex + 1, 2);
    const newSecondItem = { ...firstItem, ranking: firstItem.ranking + 1 };
    const newFirstItem = { ...secondItem, ranking: secondItem.ranking - 1 };
    updatedList.splice(selectedIndex + 1, 0, newFirstItem, newSecondItem);
    setCountryRanking(updatedList);
  };

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "4px",
          gap: "2px",
        }}
      >
        <button disabled={ranking === 0} onClick={handleMoveUp}>
          <ArrowUpwardIcon />
        </button>
        <button
          onClick={handleMoveDown}
          disabled={ranking === countries.length - 1}
        >
          <ArrowDownwardIcon />
        </button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flex: "1 0 auto",
            textAlign: "left",
            flexDirection: "column",
          }}
        >
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Rank: {ranking + 1}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 130 }}
        image={flag}
        alt={`${name}-flag`}
        style={{ padding: "4px" }}
      />
    </Card>
  );
};
