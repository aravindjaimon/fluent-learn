import { initializeIcons } from "@fluentui/react";
import React, { FC } from "react";
import "./App.css";
import Teams from "./Components/Teams/Teams";

initializeIcons();

export const App: FC = () => {
  return (
    <div className="App">
      <Teams />
    </div>
  );
};
