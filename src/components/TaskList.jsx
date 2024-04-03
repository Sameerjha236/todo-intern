import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, markTaskComplete } from "../features/task";
import { Stack, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";

const TaskList = () => {
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();

  return (
    <Box>
      <Stack
        direction="column"
        flexWrap="wrap"
        justifyContent="center"
        gap="2rem"
      >
        {tasks.map((task) => {
          const { done, id } = task;
          return (
            <Box
              key={id}
              sx={{
                width: { md: "25rem", sx: "15rem" },
                height: "5rem",
                borderRadius: 25,
                p: "2",
              }}
            >
              <Stack direction="row" gap={2} justifyContent="space-around">
                <Typography
                  variant="body1"
                  style={{
                    textDecoration: done ? "line-through" : "none",
                  }}
                >
                  {task.name}
                </Typography>
                {done ? (
                  <Button variant="contained" color="success">
                    Completed
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(markTaskComplete(task.id))}
                    sx={{ backgroundColor: "#00c04b", color: "#fff" }}
                  >
                    Complete
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={() => dispatch(deleteTask(task.id))}
                  color="error"
                >
                  Delete
                </Button>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default TaskList;
