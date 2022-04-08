import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  aeGradient: { from: "orange", to: theme.colors.ae, deg: 180 },
}));

export const otherProperties = {
  aeGradient: { from: "orange", to: "yellow", deg: 180 },
};
