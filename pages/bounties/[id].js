import { useMemo, useEffect } from "react";
import {
  Badge,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Space,
  Text,
  Title,
} from "@mantine/core";
import hljs from "highlight.js";
import NextRichTextEditor from "@util/rte";
import { UserAndAvatar } from "layout/RenderUserAndAvatar";
import { Calendar } from "tabler-icons-react";
import { CommentSection } from "layout/CommentSection";

const QuestionTitle = () => {
  return <Title order={1}>I need help with this thing</Title>;
};

const QuestionAsked = () => {
  return (
    <Group spacing={"xs"}>
      <Calendar />
      Asked 2 days ago
    </Group>
  );
};

const QuestionContent = () => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  const testPost = `
  <p>I need some help figuring out some stuff about my code: </p>
  <pre class="ql-syntax" spellcheck="false">
const a = 10;
const b = p =&gt; p + 10;
const c = b(a);
console.log(c);</pre>
<br>
<p>Can <strong>anyone</strong> give me a hand?</p>
  `;

  const modules = useMemo(
    () => ({
      history: { delay: 2500, userOnly: true },
      syntax: {
        highlight: (text) =>
          hljs.highlightAuto(text, ["javascript", "python"]).value,
      },
    }),
    []
  );
  return (
    <>
      <NextRichTextEditor readOnly modules={modules} value={testPost} />
    </>
  );
};

const BountyPage = () => {
  return (
    <Container>
      <Group position="apart">
        <div>
          <Space h={"xl"} />
          <UserAndAvatar />
          <Space h={"xl"} />
          <QuestionTitle />
          <Space h={"lg"} />
          <QuestionAsked />
          <Space h={"lg"} />
        </div>
        <Group direction="column" position="center" spacing={"xs"} mt={"xl"}>
          <Badge variant="outline" p={10} py={30} radius={"sm"}>
            <Title order={1} p={0} m={0}>
              10
            </Title>
          </Badge>
          <Text weight={"bold"} component="div">
            Gratz
          </Text>
        </Group>
      </Group>
      <Divider />
      <Space h={"xl"} />
      <QuestionContent />
      <CommentSection />
    </Container>
  );
};

export default BountyPage;
