import {
  ActionIcon,
  Anchor,
  AppShell,
  Container,
  Footer,
  Group,
  Header,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { Bulb, BulbOff, Settings, ArrowUpCircle } from "tabler-icons-react";

const HeaderIcon = () => {
  return (
    <ThemeIcon size={"lg"}>
      <ArrowUpCircle />
    </ThemeIcon>
  );
};

const HeaderTitle = () => {
  return (
    <Title order={2} component="span">
      <Text
        inherit
        variant="gradient"
        weight={700}
        gradient={{ from: "purple", to: "orange", deg: 45 }}
        component="span"
        style={{ letterSpacing: "-1px", top: "-1px", position: "relative" }}
      >
        GratzOverflow
      </Text>
    </Title>
  );
};

const HeaderLeft = () => {
  return (
    <Group spacing={"xs"}>
      <HeaderIcon />
      <HeaderTitle />
    </Group>
  );
};

const MockIconInteraction = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  return (
    <Group mr={15} spacing={0}>
      <ActionIcon size={"xl"}>
        <Settings />
      </ActionIcon>
      <ActionIcon size={"xl"} onClick={() => toggleColorScheme()}>
        {colorScheme === "dark" ? <Bulb /> : <BulbOff />}
      </ActionIcon>
    </Group>
  );
};

export const MainAppShell = ({ children }) => {
  return (
    <AppShell
      header={
        <Header height={60} pl={15}>
          <Container fluid>
            <Group position="apart" pt={8}>
              <Anchor underline={false} href="/">
                <HeaderLeft />
              </Anchor>
              <MockIconInteraction />
            </Group>
          </Container>
        </Header>
      }
      footer={
        <Footer fixed px={30} pt={10}>
          Made with ❤ by{" "}
          <Anchor target="_blank" href="https://ae.studio">
            AE.studio
          </Anchor>
        </Footer>
      }
    >
      {children}
    </AppShell>
  );
};
