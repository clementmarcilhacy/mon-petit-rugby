import { TextField, Box, Typography, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";

export const Username = () => {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [curentUsername, setCurrentUsername] = useState<string | undefined>(
    undefined
  );

  return (
    <Box
      sx={{
        alignItems: "baseline",
        display: "flex",
        gap: "10px",
        textAlign: "baseline",
      }}
    >
      {username === undefined ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignSelf: "center",
            width: "100%",
            margin: "auto",
          }}
        >
          <Typography>Salut {username} 😊 quel est ton nom ? </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "10px",
            }}
          >
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="username-input"
              placeholder="Ton nom"
              variant="standard"
              onChange={(event) => {
                setCurrentUsername(event.target.value);
              }}
            />
            <Button
              sx={{
                color: "#D1D646",
                backgroundColor: "#EDF2EF",
                borderColor: "#EDF2EF",
                border: "1px solid",
                borderRadius: "10px",
                height: "30px",
                marginLeft: "10px",
                "&:hover": {
                  borderColor: "#f97068",
                },
              }}
              onClick={() => setUsername(curentUsername)}
            >
              Valider
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography>Salut {username} 😊</Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ marginBottom: "20px" }}
          >
            Choisis le classement de tes équipes préférées !
          </Typography>
        </Box>
      )}
    </Box>
  );
};
