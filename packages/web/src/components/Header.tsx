import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar
      component="nav"
      sx={{ backgroundColor: "#F97068", color: "#EDF2EF" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          MON PETIT RUGBY
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button sx={{ fontWeight: 700 }}>
            <Link style={{ color: "#D1D646" }} to="/ranking">
              Ranking
            </Link>
          </Button>
          <Button>
            <Link style={{ color: "#D1D646" }} to="/leaderboard">
              Leaderboard
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
