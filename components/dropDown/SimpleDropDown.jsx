import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Dropdown = (props) => {
  //   const [value, setValue] = useState("");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  return (
    <FormControl className="min-w-[200px]">
      <InputLabel id="dropdown-label" className="w-full">
        {props.label ?? "Select an option"}
      </InputLabel>
      <Select
        sx={{ width: 300 }}
        {...props}
        labelId="dropdown-label"
        size="small"
        id="dropdown"
        className={`w-full ${props.classStyle}`}
        variant="filled"
        value={props.value ?? ""}
        label={props.label ?? "Select an option"}
        onChange={() => props.handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.data.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
