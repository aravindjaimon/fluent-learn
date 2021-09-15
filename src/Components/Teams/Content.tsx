import { SearchBox, Stack, Text } from "@fluentui/react";
import React from "react";

const Content = () => {
  return (
    <Stack
      styles={{ root: { padding: 50, background: "#F3F2F1" } }}
      verticalFill
    >
      <Stack.Item styles={{ root: { width: 300 } }}>
        <Stack tokens={{ childrenGap: 30 }}>
          <Stack.Item>
            <Text variant="xxLargePlus">Store</Text>
          </Stack.Item>
          <Stack.Item>
            <SearchBox placeholder="Search All" />
          </Stack.Item>
          <Stack.Item></Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default Content;
