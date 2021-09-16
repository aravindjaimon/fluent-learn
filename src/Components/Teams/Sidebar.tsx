import { ActionButton, IButtonStyles, Stack } from "@fluentui/react";
import React from "react";

const Sidebar = () => {
  const buttonStyle: IButtonStyles = {
    icon: { color: "white", fontSize: 20 },
    textContainer: { width: "100%", color: "white" },
  };
  const actions = [
    { iconName: "ActivityFeed", name: "Activity" },
    { iconName: "OfficeChat", name: "Chat" },
    { iconName: "TeamsLogo", name: "Team" },
    { iconName: "Calendar", name: "Meetings" },
    { iconName: "Phone", name: "Calls" },
    { iconName: "More" },
  ];
  return (
    <Stack
      tokens={{ childrenGap: 20 }}
      horizontalAlign="center"
      verticalAlign="start"
      styles={{
        root: {
          paddingTop: 10,
          backgroundColor: "#33344A",
          width: 75,
          minHeight: "96.3vh",
          color: "White",
          fontSize: "0.5rem",
        },
      }}
    >
      {actions.map((action, index) => (
        <Stack.Item key={index}>
          <Stack horizontalAlign="center" verticalAlign="center">
            <Stack.Item>
              <ActionButton
                styles={buttonStyle}
                iconProps={{ iconName: action.iconName }}
              />
            </Stack.Item>
            <Stack.Item>{action.name}</Stack.Item>
          </Stack>
        </Stack.Item>
      ))}
    </Stack>
  );
};

export default Sidebar;
