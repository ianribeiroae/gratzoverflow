import { ActionIcon, Divider, Group, Space, Text } from "@mantine/core";
import { ThumbUp } from "tabler-icons-react";
import { UserAndAvatar } from "./RenderUserAndAvatar";

const SingleComment = () => {
  return (
    <Group>
      <Group direction="column" position="center" spacing={"xs"} mt={"xl"}>
        <ActionIcon>
          <ThumbUp />
        </ActionIcon>
        30
      </Group>
      <Group>
        <Group>
          <UserAndAvatar />2 days ago
        </Group>
        <Text>I think you should delete your project.</Text>
      </Group>
    </Group>
  );
};

export const CommentSection = () => {
  return (
    <div>
      <Space h={"xl"} />
      <Divider />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  );
};
