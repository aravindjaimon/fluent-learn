import {
  ActionButton,
  FontIcon,
  mergeStyles,
  Persona,
  PersonaPresence,
  PersonaSize,
  SearchBox,
  Stack,
} from "@fluentui/react";
import React from "react";

const Header = () => {
  const iconClass = mergeStyles({
    fontSize: 15,
    color: "white",
    margin: "0 5px",
  });

  return (
    <Stack
      horizontal
      verticalFill
      horizontalAlign="space-between"
      verticalAlign="center"
      tokens={{ childrenGap: 10 }}
      styles={{ root: { backgroundColor: "#464775", height: 50 } }}
    >
      <Stack.Item>
        <ActionButton>
          <FontIcon
            aria-label="ChevronLeft"
            iconName="ChevronLeft"
            className={iconClass}
          />
        </ActionButton>
        <ActionButton>
          <FontIcon
            aria-label="ChevronRight"
            iconName="ChevronRight"
            className={iconClass}
          />
        </ActionButton>
      </Stack.Item>
      <Stack.Item>
        <Stack
          styles={{ root: { width: 1000 } }}
          horizontal
          tokens={{ childrenGap: 20 }}
          verticalAlign="center"
          horizontalAlign="center"
        >
          <Stack.Item>
            <ActionButton>
              <FontIcon
                aria-label="Handwriting"
                iconName="Handwriting"
                className={iconClass}
              />
            </ActionButton>
          </Stack.Item>
          <Stack.Item grow>
            <SearchBox
              styles={{ root: { borderRadius: "0.2rem" } }}
              placeholder="Search or type a command"
              onSearch={(newValue) => console.log("value is " + newValue)}
            />
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal verticalAlign="center">
          <Stack.Item>
            <Persona
              size={PersonaSize.size32}
              imageInitials="AJ"
              presence={PersonaPresence.online}
            />
          </Stack.Item>
          <Stack.Item>
            <ActionButton>
              <FontIcon
                aria-label="Remove"
                iconName="Remove"
                className={iconClass}
              />
            </ActionButton>
            <ActionButton>
              <FontIcon
                aria-label="Stop"
                iconName="Stop"
                className={iconClass}
              />
            </ActionButton>
            <ActionButton>
              <FontIcon
                aria-label="Cancel"
                iconName="Cancel"
                className={iconClass}
              />
            </ActionButton>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default Header;
