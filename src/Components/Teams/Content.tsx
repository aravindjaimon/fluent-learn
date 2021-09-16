import {
  DocumentCard,
  DocumentCardLogo,
  DocumentCardTitle,
  INavLinkGroup,
  Nav,
  SearchBox,
  Stack,
  Text,
} from "@fluentui/react";
import React from "react";

const Content = () => {
  const navGroups: INavLinkGroup[] = [
    {
      links: [
        { name: "All", url: "" },
        {
          name: "Apps",
          key: "apps",
          url: "",
          links: [
            { name: "App1", url: "" },
            { name: "App2", url: "" },
          ],
        },
        {
          name: "Bots",
          url: "",
        },
        { name: "Tabs", url: "" },
        { name: "Connectors", url: "" },
        { name: "Messaging", url: "" },
        {
          name: "chatbox4teams",
          url: "",
        },
        { name: "Top picks", url: "" },
        { name: "Analytics and BI", url: "" },
        { name: "Development and IT", url: "" },
        { name: "Education", url: "" },
        { name: "Human resources", url: "" },
        { name: "Productivity", url: "" },
        { name: "Project management", url: "" },
        { name: "Sales and support", url: "" },
        { name: "Social and fun", url: "" },
        { name: "Upload a custom app", url: "" },
      ],
    },
  ];

  const cardContent = [
    {
      heading: "Adobe Creative Cloud",
      subheading: "Productivity",
      content:
        "Content  creators and collaborators can now find, view, and share Adobe Creative Cloud assets within Microsoft Teams.",
    },
    {
      heading: "Adobe Sign",
      subheading: "Workflow + business management",
      content:
        "Keep document-signing workflows moving fast when you and Adobe Sign to Teams. Now,right in Teams, you can sign...",
    },
    {
      heading: "Bitbucket",
      subheading: "Developer tools",
      content:
        "Bitbucket Cloud is the Git solution for professional teams, Distributed version control system that makes it easy for you to...",
    },
    {
      heading: "Flow",
      subheading: "Workflow + business management",
      content:
        "Automate time-consuming and repetitive tasks by integrating your favourite apps and services with Microsoft Flow.",
    },
  ];

  return (
    <Stack
      styles={{ root: { padding: 50, background: "#F3F2F1" } }}
      verticalFill
      horizontal
    >
      <Stack.Item styles={{ root: { width: 300 } }}>
        <Stack tokens={{ childrenGap: 30 }}>
          <Stack.Item>
            <Text variant="xxLargePlus">Store</Text>
          </Stack.Item>
          <Stack.Item>
            <SearchBox placeholder="Search All" />
          </Stack.Item>
          <Stack.Item>
            <Nav isOnTop initialSelectedKey="apps" groups={navGroups} />
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item styles={{ root: { padding: 50 } }} grow>
        <Stack>
          <Stack.Item styles={{ root: { width: 360 } }}>
            <Stack tokens={{ childrenGap: 30 }}>
              <Stack.Item>
                <Text variant="xxLarge">
                  See everything your're doing in different teams
                </Text>
              </Stack.Item>
              <Stack.Item>
                <Text variant="large" styles={{ root: { fontWeight: 300 } }}>
                  Check your personal app to get a bird's-eye view of all your
                  work.
                </Text>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack
              grow
              horizontal
              verticalFill
              wrap
              tokens={{ childrenGap: 10 }}
              styles={{ root: { margin: "50px 0" } }}
            >
              {cardContent.map((item) => (
                <Stack.Item styles={{ root: { width: 350 } }}>
                  <DocumentCard styles={{ root: { padding: 20 } }}>
                    <Stack horizontal verticalAlign="center">
                      <Stack.Item>
                        <DocumentCardLogo logoIcon="Favicon" />
                      </Stack.Item>
                      <Stack.Item>
                        <DocumentCardTitle
                          styles={{
                            root: {
                              fontWeight: 600,
                              height: "min-content",
                              margin: 0,
                              padding: 0,
                            },
                          }}
                          title={item.heading}
                        />
                        <DocumentCardTitle
                          styles={{
                            root: {
                              fontWeight: 100,
                              height: "min-content",
                              margin: 0,
                              padding: 0,
                            },
                          }}
                          title={item.subheading}
                          showAsSecondaryTitle
                        />
                      </Stack.Item>
                    </Stack>
                    {item.content}
                  </DocumentCard>
                </Stack.Item>
              ))}
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default Content;
