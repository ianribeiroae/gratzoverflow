const { Group, Avatar, Text } = require("@mantine/core");

export const UserAndAvatar = () => {
  return (
    <Group spacing={"xs"}>
      <Avatar size={"sm"} radius="xl">
        IR
      </Avatar>
      <Text variant="text">Ian Ribeiro</Text>
    </Group>
  );
};
