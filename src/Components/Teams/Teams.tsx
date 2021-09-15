import { Stack } from "@fluentui/react";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Teams = () => {
  return (
    <Stack>
      <Stack.Item>
        <Header />
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal>
          <Stack.Item>
            <Sidebar />
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default Teams;
