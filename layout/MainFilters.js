import {
  Button,
  Group,
  Input,
  InputWrapper,
  MultiSelect,
  SegmentedControl,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { ArrowUp, ArrowDown } from "tabler-icons-react";

const TagsFilter = () => {
  const tagsList = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "riot", label: "Riot" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
  ];
  return <MultiSelect data={tagsList} label={"Filter by Tags"} />;
};

const TitleFilter = () => {
  return (
    <InputWrapper label="Filter by Title" size="sm">
      <Input />
    </InputWrapper>
  );
};

const SortContentBy = () => {
  const orderByData = [
    { label: "Date", value: "date" },
    { label: "Reward", value: "reward" },
    { label: "Votes", value: "votes" },
  ];

  return (
    <Stack>
      <Text
        component="label"
        weight={500}
        size="sm"
        style={{ position: "relative", top: "8px" }}
      >
        Sort by
      </Text>
      <SegmentedControl
        style={{ position: "relative", top: "-4px" }}
        data={orderByData}
      ></SegmentedControl>
    </Stack>
  );
};

const OrderBy = () => {
  const [order, setOrder] = useState("ASC");

  const flipOrder = () => {
    setOrder(order === "ASC" ? "DESC" : "ASC");
  };

  return (
    <Button
      leftIcon={order === "ASC" ? <ArrowUp /> : <ArrowDown />}
      onClick={flipOrder}
      style={{ position: "relative", top: "15px" }}
      variant={"outline"}
    >
      {order === "ASC" ? "Ascending" : "Descending"}
    </Button>
  );
};

export const MainFilters = () => {
  return (
    <Group>
      <TagsFilter />
      <TitleFilter />
      <SortContentBy />
      <OrderBy />
    </Group>
  );
};
