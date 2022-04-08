import {
  Card,
  Grid,
  Group,
  Text,
  Title,
  Space,
  Divider,
  Button,
  Badge,
  ActionIcon,
} from "@mantine/core";
import { otherProperties } from "@styles/colors";
import { ThumbUp } from "tabler-icons-react";
import { UserAndAvatar } from "./RenderUserAndAvatar";

const BountyCard = () => {
  return (
    <Card shadow="sm" p="lg">
      <Title order={3} style={{ letterSpacing: "-1px" }}>
        <Text inherit variant="gradient" gradient={otherProperties.aeGradient}>
          I need some help!
        </Text>
      </Title>
      <Space h="md" />
      <Group position="apart">
        <UserAndAvatar />
        <Text weight={"lighter"} size="sm">
          2 days ago
        </Text>
      </Group>
      <Space h={15} />
      <Divider />
      <Space h={15} />
      <Group position="apart">
        <Button component="a" href="/bounties/20" compact variant="light">
          Open
        </Button>
        <Group spacing={2}>
          <ActionIcon component="span" size={"md"}>
            <ThumbUp />
          </ActionIcon>
          <Badge variant="outline" radius={"sm"} color="gray" px={7} py={12}>
            {10}
          </Badge>
        </Group>
        <div>
          <Badge radius={"md"} variant="outline" py={15} color="grape">
            10
          </Badge>{" "}
          <Text ml={5} component="span" weight={"bold"}>
            Gratz
          </Text>
        </div>
      </Group>
    </Card>
  );
};

export const RenderBountyCardList = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <BountyCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <BountyCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <BountyCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <BountyCard />
      </Grid.Col>
    </Grid>
  );
};
