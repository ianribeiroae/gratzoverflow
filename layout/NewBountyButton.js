import { Button } from "@mantine/core";
import { Plus } from "tabler-icons-react";

export const NewBountyButton = () => {
  return (
    <Button pl={8} leftIcon={<Plus />} variant="outline">
      Post new Bounty
    </Button>
  );
};
