import { Stack } from "@fluentui/react";
import React from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Teams = () => {
  return (
    <Stack verticalFill>
      <Stack.Item>
        <Header />
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal>
          <Stack.Item>
            <Sidebar />
          </Stack.Item>
          <Stack.Item grow>
            <Content />
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default Teams;
