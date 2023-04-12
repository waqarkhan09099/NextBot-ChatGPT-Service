import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField, InputAdornment } from "@mui/material";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const DynamicTextInput = ({ type, label, icon }) => {
  const classes = useStyles();
  return (
    <TextField
      type={type}
      label={label}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon ?? <EmailOutlined />}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default DynamicTextInput;
