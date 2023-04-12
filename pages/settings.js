import React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import CustomSnakeButton from "../components/SnakeBorderButton";
import TextFild from "../components/TextField";

const Settings = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center  ">
      <div className=" w-1/2 h-[85%] rounded-2xl p-6  shadow-2xl bg-white justify-between text-center">
        <div className="flex-col w-full h-full justify-between  text-center">
          <div className="w-full flex justify-center">
            {" "}
            <img
              src="/SettingsIcon.png"
              className={"w-[100px] animate-pulse "}
            />
          </div>
          <div className="w-full flex flex-wrap">
            <TextField type="text" label="Temperature" />
          </div>
          {/* <button className="w-1/2 px-10 py-2 bg-slate-500 text-white font-extrabold rounded-3xl justify-items-end text-2xl tracking-widest self-end">
            Save
          </button> */}
          <CustomSnakeButton title="Save" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
