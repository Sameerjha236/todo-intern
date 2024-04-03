import React from "react";
import { Input, TaskList, Navbar } from "./components";
import { Stack, Box } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(https://hbr.org/resources/images/article_assets/2020/08/Aug20_06_84753778.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Stack direction="column" alignItems="center" gap="3rem">
        <Navbar />
        <Input />
        <TaskList />
      </Stack>
    </Box>
  );
};

export default App;
