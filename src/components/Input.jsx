import React, { useState } from "react";
import { addTask } from "../features/task";
import { useDispatch } from "react-redux";
import { Paper, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Input = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(addTask({ id: Date.now(), name: value, done: false }));
      setValue("");
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 5,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={value}
        className="search-bar"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Task"
      />
      <IconButton type="submit" sx={{ p: "0.8rem", color: "blue" }}>
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

export default Input;
