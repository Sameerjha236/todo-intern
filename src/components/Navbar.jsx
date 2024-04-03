import React from "react";
import { Stack, Box, IconButton, Typography } from "@mui/material";
import { GitHub, Language } from "@mui/icons-material";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      width: "100%",
    }}
  >
    <Typography variant="h3" sx={{ fontWeight: "bold", color: "#fff", ml: 1 }}>
      ToDo
    </Typography>
    <Box>
      <IconButton
        component="a"
        href="https://github.com/Sameerjha236"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        sx={{ mr: "1rem" }}
      >
        <GitHub
          sx={{
            color: "#fff",
            fontSize: "2rem",
            transition: "background-color 0.3s",
            "&:hover": {
              color: "gray",
            },
          }}
        />
      </IconButton>

      <IconButton
        component="a"
        href="https://sameerjha.netlify.app/"
        target="_blank"
        rel="noopener noreferrer" // Add rel attribute for security
        aria-label="Website"
      >
        <Language
          sx={{
            color: "#fff",
            fontSize: "2rem",
            transition: "background-color 0.3s",
            "&:hover": {
              color: "gray",
            },
          }}
        />
      </IconButton>
    </Box>
  </Stack>
);

export default Navbar;
